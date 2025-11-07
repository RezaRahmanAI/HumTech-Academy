import { Injectable, computed, inject } from '@angular/core';

import { TrustContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeTrustService {
  private readonly store = inject(HomeContentStore);

  readonly trust = computed(() => this.store.homeContent().trust);

  update(trust: TrustContent): void {
    this.store.updateSection('trust', trust);
  }
}
