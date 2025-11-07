import { Injectable, computed, inject } from '@angular/core';

import { ClosingCtasContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeClosingCtasService {
  private readonly store = inject(HomeContentStore);

  readonly closingCtas = computed(() => this.store.homeContent().closingCtas);

  update(closingCtas: ClosingCtasContent): void {
    this.store.updateSection('closingCtas', closingCtas);
  }
}
