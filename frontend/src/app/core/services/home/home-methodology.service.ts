import { computed, inject, Injectable } from '@angular/core';

import { MethodologyContent } from '../../models/home';
import { ContentService } from '../content.service';

@Injectable({ providedIn: 'root' })
export class HomeMethodologyService {
  private readonly content = inject(ContentService);

  readonly methodology = computed(() => this.content.homeContent().methodology);

  updateMethodology(updater: (methodology: MethodologyContent) => MethodologyContent): void {
    this.content.updateHomeSection('methodology', updater);
  }

  setMethodology(methodology: MethodologyContent): void {
    this.content.setHomeSection('methodology', methodology);
  }
}
