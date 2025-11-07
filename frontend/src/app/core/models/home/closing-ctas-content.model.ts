import { CtaLink } from './cta-link.model';

export interface ClosingCta {
  title: string;
  description: string;
  cta: CtaLink;
}

export interface ClosingCtasContent {
  business: ClosingCta;
  academy: ClosingCta;
}
