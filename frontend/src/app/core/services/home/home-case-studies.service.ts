import { computed, inject, Injectable } from '@angular/core';

import { CaseStudiesContent } from '../../models/home';
import { ContentService } from '../content.service';

@Injectable({ providedIn: 'root' })
export class HomeCaseStudiesService {
  private readonly content = inject(ContentService);

  readonly caseStudies = computed(() => this.content.homeContent().caseStudies);

  updateCaseStudies(updater: (caseStudies: CaseStudiesContent) => CaseStudiesContent): void {
    this.content.updateHomeSection('caseStudies', updater);
  }

  setCaseStudies(caseStudies: CaseStudiesContent): void {
    this.content.setHomeSection('caseStudies', caseStudies);
  }
}
