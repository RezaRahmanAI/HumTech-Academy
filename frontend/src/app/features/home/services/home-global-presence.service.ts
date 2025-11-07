import { Injectable, computed, inject } from '@angular/core';

import { GlobalPresenceContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeGlobalPresenceService {
  private readonly store = inject(HomeContentStore);

  readonly globalPresence = computed(() => this.store.homeContent().globalPresence);

  update(globalPresence: GlobalPresenceContent): void {
    this.store.updateSection('globalPresence', globalPresence);
  }
}
