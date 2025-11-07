import { SectionHeaderContent } from './section-header.model';
import { ServiceCard } from './service-card.model';

export interface ServicesContent {
  header: SectionHeaderContent;
  items: ServiceCard[];
}
