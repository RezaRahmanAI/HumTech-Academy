import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MethodologyContent } from '../../../../core/models/home';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-methodology-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './methodology-section.component.html',
  styleUrls: ['./methodology-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MethodologySectionComponent {
  @Input({ required: true }) methodology!: MethodologyContent;
}
