import { Injectable, computed, inject } from '@angular/core';

import { MethodologyContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeMethodologyService {
  private readonly store = inject(HomeContentStore);

  readonly methodology = computed(() => this.store.homeContent().methodology);

  update(methodology: MethodologyContent): void {
    this.store.updateSection('methodology', methodology);
  }
}
