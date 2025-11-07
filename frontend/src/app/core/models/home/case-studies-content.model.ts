import { SectionHeaderContent } from './section-header.model';

export interface CaseStudyItem {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface CaseStudiesContent {
  header: SectionHeaderContent;
  items: CaseStudyItem[];
}
