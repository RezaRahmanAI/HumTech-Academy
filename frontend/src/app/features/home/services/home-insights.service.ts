import { Injectable, computed, inject } from '@angular/core';

import { InsightsContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeInsightsService {
  private readonly store = inject(HomeContentStore);

  readonly insights = computed(() => this.store.homeContent().insights);

  update(insights: InsightsContent): void {
    this.store.updateSection('insights', insights);
  }
}
