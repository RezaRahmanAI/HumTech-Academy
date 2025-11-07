import { computed, inject, Injectable } from '@angular/core';

import { ImpactContent } from '../../models/home';
import { ContentService } from '../content.service';

@Injectable({ providedIn: 'root' })
export class HomeImpactService {
  private readonly content = inject(ContentService);

  readonly impact = computed(() => this.content.homeContent().impact);

  updateImpact(updater: (impact: ImpactContent) => ImpactContent): void {
    this.content.updateHomeSection('impact', updater);
  }

  setImpact(impact: ImpactContent): void {
    this.content.setHomeSection('impact', impact);
  }
}
