import { computed, inject, Injectable } from '@angular/core';

import { HeroContent } from '../../models/home';
import { ContentService } from '../content.service';

@Injectable({ providedIn: 'root' })
export class HomeHeroService {
  private readonly content = inject(ContentService);

  readonly hero = computed(() => this.content.homeContent().hero);

  updateHero(updater: (hero: HeroContent) => HeroContent): void {
    this.content.updateHomeSection('hero', updater);
  }

  setHero(hero: HeroContent): void {
    this.content.setHomeSection('hero', hero);
  }
}
