import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DifferentiatorsContent } from '../../../../core/models/home';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-differentiators-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './differentiators-section.component.html',
  styleUrls: ['./differentiators-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DifferentiatorsSectionComponent {
  @Input({ required: true }) differentiators!: DifferentiatorsContent;
}
