import { SectionHeaderContent } from './section-header.model';

export interface GlobalPresenceContent {
  header: SectionHeaderContent;
  headquarters: {
    title: string;
    location: string;
    address: string;
  };
  marketsServed: string;
  verticals: string;
  map: {
    title: string;
    description: string;
    badge: string;
  };
}
