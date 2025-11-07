import { Injectable, computed, inject } from '@angular/core';

import { AcademyContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeAcademyService {
  private readonly store = inject(HomeContentStore);

  readonly academy = computed(() => this.store.homeContent().academy);

  update(academy: AcademyContent): void {
    this.store.updateSection('academy', academy);
  }
}
