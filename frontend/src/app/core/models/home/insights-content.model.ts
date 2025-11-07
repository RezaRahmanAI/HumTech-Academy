import { SectionHeaderContent } from './section-header.model';
import { InsightItem } from './insight-item.model';

export interface InsightsContent {
  header: SectionHeaderContent;
  items: InsightItem[];
}
