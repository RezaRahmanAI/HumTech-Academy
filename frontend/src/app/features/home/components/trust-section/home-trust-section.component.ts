import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject
} from '@angular/core';

import { AnimationService } from '../../../../core/services/animation.service';
import { HomeTrustService } from '../../../../core/services/home/home-trust.service';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-trust-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './home-trust-section.component.html',
  styleUrls: ['./home-trust-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTrustSectionComponent implements AfterViewInit {
  private readonly trustService = inject(HomeTrustService);
  private readonly animation = inject(AnimationService);

  protected readonly trust = this.trustService.trust;

  @ViewChildren('counter', { read: ElementRef })
  private counters?: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      const stats = this.trust().stats;
      this.counters?.forEach((counter, index) => {
        const stat = stats[index];
        if (!stat) {
          return;
        }
        counter.nativeElement.setAttribute('data-suffix', stat.suffix ?? '');
        if (stat.decimals != null) {
          counter.nativeElement.setAttribute('data-decimals', String(stat.decimals));
        }
        this.animation.animateCounter(counter.nativeElement, stat.value);
      });
    });
  }
}
