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
import { HomeImpactService } from '../../../../core/services/home/home-impact.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-impact-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './home-impact-section.component.html',
  styleUrls: ['./home-impact-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeImpactSectionComponent implements AfterViewInit {
  private readonly impactService = inject(HomeImpactService);
  private readonly animation = inject(AnimationService);

  protected readonly impact = this.impactService.impact;

  @ViewChildren('counter', { read: ElementRef })
  private counters?: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      const stats = this.impact().stats;
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
