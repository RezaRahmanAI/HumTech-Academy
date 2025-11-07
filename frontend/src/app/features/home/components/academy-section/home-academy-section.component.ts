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
import { RouterLink } from '@angular/router';

import { AnimationService } from '../../../../core/services/animation.service';
import { HomeAcademyService } from '../../../../core/services/home/home-academy.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-academy-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective, RouterLink],
  templateUrl: './home-academy-section.component.html',
  styleUrls: ['./home-academy-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAcademySectionComponent implements AfterViewInit {
  private readonly academyService = inject(HomeAcademyService);
  private readonly animation = inject(AnimationService);

  protected readonly academy = this.academyService.academy;

  @ViewChildren('counter', { read: ElementRef })
  private counters?: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      const stats = this.academy().stats;
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
