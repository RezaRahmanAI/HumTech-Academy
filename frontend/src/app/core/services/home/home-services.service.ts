import { computed, inject, Injectable } from '@angular/core';

import { ServicesContent } from '../../models/home';
import { ContentService } from '../content.service';

@Injectable({ providedIn: 'root' })
export class HomeServicesService {
  private readonly content = inject(ContentService);

  readonly services = computed(() => this.content.homeContent().services);

  updateServices(updater: (services: ServicesContent) => ServicesContent): void {
    this.content.updateHomeSection('services', updater);
  }

  setServices(services: ServicesContent): void {
    this.content.setHomeSection('services', services);
  }
}
