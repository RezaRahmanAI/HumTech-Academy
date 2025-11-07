import { computed, inject, Injectable } from '@angular/core';

import { DifferentiatorsContent } from '../../models/home';
import { ContentService } from '../content.service';

@Injectable({ providedIn: 'root' })
export class HomeDifferentiatorsService {
  private readonly content = inject(ContentService);

  readonly differentiators = computed(() => this.content.homeContent().differentiators);

  updateDifferentiators(
    updater: (differentiators: DifferentiatorsContent) => DifferentiatorsContent
  ): void {
    this.content.updateHomeSection('differentiators', updater);
  }

  setDifferentiators(differentiators: DifferentiatorsContent): void {
    this.content.setHomeSection('differentiators', differentiators);
  }
}
