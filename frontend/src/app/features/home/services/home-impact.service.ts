import { Injectable, computed, inject } from '@angular/core';

import { ImpactContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeImpactService {
  private readonly store = inject(HomeContentStore);

  readonly impact = computed(() => this.store.homeContent().impact);

  update(impact: ImpactContent): void {
    this.store.updateSection('impact', impact);
  }
}
