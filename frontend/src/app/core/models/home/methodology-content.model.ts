import { SectionHeaderContent } from './section-header.model';

export interface MethodologyStep {
  step: string;
  detail: string;
}

export interface MethodologyContent {
  header: SectionHeaderContent;
  steps: MethodologyStep[];
}
