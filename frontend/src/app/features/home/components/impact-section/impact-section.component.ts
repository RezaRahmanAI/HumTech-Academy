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

import { ImpactContent } from '../../../../core/models/home';
import { AnimationService } from '../../../../core/services/animation.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-impact-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './impact-section.component.html',
  styleUrls: ['./impact-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImpactSectionComponent implements AfterViewInit {
  @Input({ required: true }) impact!: ImpactContent;

  @ViewChildren('counter', { read: ElementRef })
  private readonly counters?: QueryList<ElementRef<HTMLElement>>;

  constructor(private readonly animation: AnimationService) {}

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      this.counters?.forEach((counter, index) => {
        const stat = this.impact.stats[index];
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
