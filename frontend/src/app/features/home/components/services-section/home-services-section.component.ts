import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HomeServicesService } from '../../../../core/services/home/home-services.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-services-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective, RouterLink],
  templateUrl: './home-services-section.component.html',
  styleUrls: ['./home-services-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeServicesSectionComponent {
  private readonly servicesService = inject(HomeServicesService);

  protected readonly services = this.servicesService.services;
}
