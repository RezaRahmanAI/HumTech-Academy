import { AcademyContent } from './academy.model';
import { CaseStudiesContent } from './case-study.model';
import { ClosingCtaContent } from './closing-cta.model';
import { ContactContent } from './contact.model';
import { DifferentiatorsContent } from './differentiators.model';
import { GlobalPresenceContent } from './global-presence.model';
import { HeroContent } from './hero.model';
import { ImpactContent } from './impact.model';
import { InsightItem } from './insight.model';
import { MethodologyContent } from './methodology.model';
import { ServicesContent } from './services.model';
import { TrustContent } from './trust.model';
import { TestimonialsContent } from './testimonials.model';

export interface HomeContent {
  hero: HeroContent;
  trust: TrustContent;
  services: ServicesContent;
  differentiators: DifferentiatorsContent;
  methodology: MethodologyContent;
  caseStudies: CaseStudiesContent;
  academy: AcademyContent;
  globalPresence: GlobalPresenceContent;
  testimonials: TestimonialsContent;
  impact: ImpactContent;
  insights: {
    header: import('./section-header.model').SectionHeaderContent;
    items: InsightItem[];
  };
  closingCtas: ClosingCtaContent;
  contact: ContactContent;
}
