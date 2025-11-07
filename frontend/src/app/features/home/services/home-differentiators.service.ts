import { Injectable, computed, inject } from '@angular/core';

import { DifferentiatorsContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeDifferentiatorsService {
  private readonly store = inject(HomeContentStore);

  readonly differentiators = computed(() => this.store.homeContent().differentiators);

  update(differentiators: DifferentiatorsContent): void {
    this.store.updateSection('differentiators', differentiators);
  }
}
