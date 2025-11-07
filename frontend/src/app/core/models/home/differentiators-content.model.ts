import { SectionHeaderContent } from './section-header.model';

export interface DifferentiatorItem {
  title: string;
  description: string;
}

export interface PartnershipHighlight {
  label: string;
  value: string;
}

export interface PartnershipPanel {
  eyebrow: string;
  title: string;
  description: string;
  highlights: PartnershipHighlight[];
}

export interface DifferentiatorsContent {
  header: SectionHeaderContent;
  items: DifferentiatorItem[];
  partnershipPanel: PartnershipPanel;
}
