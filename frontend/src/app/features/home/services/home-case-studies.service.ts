import { Injectable, computed, inject } from '@angular/core';

import { CaseStudiesContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeCaseStudiesService {
  private readonly store = inject(HomeContentStore);

  readonly caseStudies = computed(() => this.store.homeContent().caseStudies);

  update(caseStudies: CaseStudiesContent): void {
    this.store.updateSection('caseStudies', caseStudies);
  }
}
