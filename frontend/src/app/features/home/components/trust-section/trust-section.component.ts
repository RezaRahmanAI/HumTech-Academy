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

import { TrustContent } from '../../../../core/models/home';
import { AnimationService } from '../../../../core/services/animation.service';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-trust-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './trust-section.component.html',
  styleUrls: ['./trust-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrustSectionComponent implements AfterViewInit {
  @Input({ required: true }) trust!: TrustContent;

  @ViewChildren('counter', { read: ElementRef })
  private readonly counters?: QueryList<ElementRef<HTMLElement>>;

  constructor(private readonly animation: AnimationService) {}

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      this.counters?.forEach((counter, index) => {
        const stat = this.trust.stats[index];
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
