import { Injectable, computed, inject } from '@angular/core';

import { ServicesContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeServicesService {
  private readonly store = inject(HomeContentStore);

  readonly services = computed(() => this.store.homeContent().services);

  update(services: ServicesContent): void {
    this.store.updateSection('services', services);
  }
}
