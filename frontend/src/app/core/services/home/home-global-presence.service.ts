import { computed, inject, Injectable } from '@angular/core';

import { GlobalPresenceContent } from '../../models/home';
import { ContentService } from '../content.service';

@Injectable({ providedIn: 'root' })
export class HomeGlobalPresenceService {
  private readonly content = inject(ContentService);

  readonly globalPresence = computed(() => this.content.homeContent().globalPresence);

  updateGlobalPresence(
    updater: (globalPresence: GlobalPresenceContent) => GlobalPresenceContent
  ): void {
    this.content.updateHomeSection('globalPresence', updater);
  }

  setGlobalPresence(globalPresence: GlobalPresenceContent): void {
    this.content.setHomeSection('globalPresence', globalPresence);
  }
}
