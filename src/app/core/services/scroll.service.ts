import { inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private lenis?: Lenis;

  init(): void {
    if (!this.isBrowser || this.lenis) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      gsap.registerPlugin(ScrollTrigger);
      this.lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });

      const raf = (time: number) => {
        this.lenis?.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      this.lenis.on('scroll', () => {
        ScrollTrigger.update();
      });
    });
  }

  scrollTo(target: HTMLElement | string | number, options?: { offset?: number }): void {
    if (!this.lenis) {
      return;
    }

    this.lenis.scrollTo(target, { offset: options?.offset ?? 0 });
  }
}
