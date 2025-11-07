import { Injectable, computed, inject } from '@angular/core';

import { HeroContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeHeroService {
  private readonly store = inject(HomeContentStore);

  readonly hero = computed(() => this.store.homeContent().hero);

  update(hero: HeroContent): void {
    this.store.updateSection('hero', hero);
  }
}
