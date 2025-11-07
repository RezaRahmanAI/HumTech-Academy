import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ContactContent } from '../../../../core/models/home';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-contact-section',
  standalone: true,
  imports: [CommonModule, NgClass, RouterLink, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  @Input({ required: true }) contact!: ContactContent;
}
