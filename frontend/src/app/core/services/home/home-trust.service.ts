import { computed, inject, Injectable } from '@angular/core';

import { TrustContent } from '../../models/home';
import { ContentService } from '../content.service';

@Injectable({ providedIn: 'root' })
export class HomeTrustService {
  private readonly content = inject(ContentService);

  readonly trust = computed(() => this.content.homeContent().trust);

  updateTrust(updater: (trust: TrustContent) => TrustContent): void {
    this.content.updateHomeSection('trust', updater);
  }

  setTrust(trust: TrustContent): void {
    this.content.setHomeSection('trust', trust);
  }
}
