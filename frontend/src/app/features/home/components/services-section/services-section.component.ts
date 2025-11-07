import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ServicesContent } from '../../../../core/models/home';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-services-section',
  standalone: true,
  imports: [CommonModule, NgClass, RouterLink, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  @Input({ required: true }) services!: ServicesContent;
}
