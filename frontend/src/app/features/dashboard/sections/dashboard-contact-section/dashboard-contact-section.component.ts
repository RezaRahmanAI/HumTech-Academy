import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactContent } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-contact-section.component.html',
  styleUrls: ['./dashboard-contact-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardContactSectionComponent {
  @Input({ required: true }) contact!: ContactContent;
  @Input() sectionId = 'contact';

  protected addPhone(): void {
    this.contact.phones.push('');
  }

  protected removePhone(index: number): void {
    this.contact.phones.splice(index, 1);
  }

  protected addEmail(): void {
    this.contact.emails.push({ label: '', value: '' });
  }

  protected removeEmail(index: number): void {
    this.contact.emails.splice(index, 1);
  }

  protected addBusinessHour(): void {
    this.contact.businessHours.push('');
  }

  protected removeBusinessHour(index: number): void {
    this.contact.businessHours.splice(index, 1);
  }

  protected addSocial(): void {
    this.contact.socials.push({ label: '', url: '' });
  }

  protected removeSocial(index: number): void {
    this.contact.socials.splice(index, 1);
  }
}
