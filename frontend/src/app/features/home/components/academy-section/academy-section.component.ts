import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { AcademyContent } from '../../../../core/models/home';
import { AnimationService } from '../../../../core/services/animation.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-academy-section',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './academy-section.component.html',
  styleUrls: ['./academy-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcademySectionComponent implements AfterViewInit {
  @Input({ required: true }) academy!: AcademyContent;

  @ViewChildren('counter', { read: ElementRef })
  private readonly counters?: QueryList<ElementRef<HTMLElement>>;

  constructor(private readonly animation: AnimationService) {}

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      this.counters?.forEach((counter, index) => {
        const stat = this.academy.stats[index];
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
