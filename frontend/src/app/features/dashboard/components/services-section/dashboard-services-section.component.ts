import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ServiceCard, ServicesContent } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-services-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-services-section.component.html',
  styleUrls: ['./dashboard-services-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardServicesSectionComponent {
  @Input({ required: true }) services!: ServicesContent;

  protected addService(): void {
    this.services.items.push(this.createService());
  }

  protected removeService(index: number): void {
    this.services.items.splice(index, 1);
  }

  protected addHighlight(service: ServiceCard): void {
    service.highlights.push('');
  }

  protected removeHighlight(service: ServiceCard, index: number): void {
    service.highlights.splice(index, 1);
  }

  private createService(): ServiceCard {
    return {
      title: '',
      icon: '✨',
      description: '',
      highlights: [''],
      tagline: '',
      featured: false,
    };
  }
}
