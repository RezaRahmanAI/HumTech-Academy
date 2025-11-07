import { computed, inject, Injectable } from '@angular/core';

import { InsightItem, SectionHeaderContent } from '../../models/home';
import { ContentService } from '../content.service';

export interface InsightsContent {
  header: SectionHeaderContent;
  items: InsightItem[];
}

@Injectable({ providedIn: 'root' })
export class HomeInsightsService {
  private readonly content = inject(ContentService);

  readonly insights = computed<InsightsContent>(() => this.content.homeContent().insights);

  updateInsights(updater: (insights: InsightsContent) => InsightsContent): void {
    this.content.updateHomeSection('insights', updater);
  }

  setInsights(insights: InsightsContent): void {
    this.content.setHomeSection('insights', insights);
  }
}
