import { CtaLink } from './cta-link.model';

export interface ClosingCtaContent {
  business: {
    title: string;
    description: string;
    cta: CtaLink;
  };
  academy: {
    title: string;
    description: string;
    cta: CtaLink;
  };
}
