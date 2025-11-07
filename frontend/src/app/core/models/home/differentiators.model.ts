import { SectionHeaderContent } from './section-header.model';

export interface DifferentiatorHighlight {
  label: string;
  value: string;
}

export interface DifferentiatorItem {
  title: string;
  description: string;
}

export interface DifferentiatorsContent {
  header: SectionHeaderContent;
  items: DifferentiatorItem[];
  partnershipPanel: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: DifferentiatorHighlight[];
  };
}
