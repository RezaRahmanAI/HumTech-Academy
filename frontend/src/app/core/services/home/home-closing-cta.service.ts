import { computed, inject, Injectable } from '@angular/core';

import { ClosingCtaContent } from '../../models/home';
import { ContentService } from '../content.service';

@Injectable({ providedIn: 'root' })
export class HomeClosingCtaService {
  private readonly content = inject(ContentService);

  readonly closingCtas = computed(() => this.content.homeContent().closingCtas);

  updateClosingCtas(updater: (closingCtas: ClosingCtaContent) => ClosingCtaContent): void {
    this.content.updateHomeSection('closingCtas', updater);
  }

  setClosingCtas(closingCtas: ClosingCtaContent): void {
    this.content.setHomeSection('closingCtas', closingCtas);
  }
}
