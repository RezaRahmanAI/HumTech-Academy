import { SectionHeaderContent } from './section-header.model';

export interface HeadquartersInfo {
  title: string;
  location: string;
  address: string;
}

export interface GlobalMapInfo {
  title: string;
  description: string;
  badge: string;
}

export interface GlobalPresenceContent {
  header: SectionHeaderContent;
  headquarters: HeadquartersInfo;
  marketsServed: string;
  verticals: string;
  map: GlobalMapInfo;
}
