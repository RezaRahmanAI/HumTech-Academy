import { AcademyContent } from './academy-content.model';
import { CaseStudiesContent } from './case-studies-content.model';
import { ClosingCtasContent } from './closing-ctas-content.model';
import { ContactContent } from './contact-content.model';
import { DifferentiatorsContent } from './differentiators-content.model';
import { GlobalPresenceContent } from './global-presence-content.model';
import { HeroContent } from './hero-content.model';
import { ImpactContent } from './impact-content.model';
import { InsightsContent } from './insights-content.model';
import { MethodologyContent } from './methodology-content.model';
import { ServicesContent } from './services-content.model';
import { TestimonialsContent } from './testimonials-content.model';
import { TrustContent } from './trust-content.model';

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
  insights: InsightsContent;
  closingCtas: ClosingCtasContent;
  contact: ContactContent;
}
