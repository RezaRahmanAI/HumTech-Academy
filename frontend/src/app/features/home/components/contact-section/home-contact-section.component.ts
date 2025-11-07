import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HomeContactService } from '../../../../core/services/home/home-contact.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-contact-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective, RouterLink],
  templateUrl: './home-contact-section.component.html',
  styleUrls: ['./home-contact-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContactSectionComponent {
  private readonly contactService = inject(HomeContactService);

  protected readonly contact = this.contactService.contact;
}
