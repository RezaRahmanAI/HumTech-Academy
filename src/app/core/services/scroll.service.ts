import { inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);
  private readonly document = inject(DOCUMENT);
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

      this.setupScrollTriggerIntegration();

      const raf = (time: number) => {
        this.lenis?.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    });
  }

  scrollTo(target: HTMLElement | string | number, options?: { offset?: number }): void {
    if (!this.lenis) {
      return;
    }

    this.lenis.scrollTo(target, { offset: options?.offset ?? 0 });
  }

  private setupScrollTriggerIntegration(): void {
    if (!this.lenis) {
      return;
    }

    const root = this.document?.documentElement;

    if (!root) {
      return;
    }

    ScrollTrigger.scrollerProxy(root, {
      scrollTop: (value?: number) => {
        if (!this.lenis) {
          return 0;
        }

        if (typeof value === 'number') {
          this.lenis.scrollTo(value, { immediate: true });
        }

        return this.lenis.scroll;
      },
      getBoundingClientRect: () => ({
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }),
      fixedMarkers: true
    });

    ScrollTrigger.defaults({ scroller: root });

    this.lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.addEventListener('refresh', () => {
      this.lenis?.resize();
    });

    ScrollTrigger.refresh();
  }
}
