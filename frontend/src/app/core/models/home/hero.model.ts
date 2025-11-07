import { CtaLink } from './cta-link.model';

export interface HeroMedia {
  src: string;
  poster: string;
}

export interface HeroMetric {
  label: string;
  value: string;
  theme: 'accent' | 'emerald';
}

export interface HeroFeaturePanel {
  eyebrow: string;
  title: string;
  description: string;
  metrics: HeroMetric[];
  partner: {
    label: string;
    description: string;
  };
}

export interface HeroContent {
  badge: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  highlightCard: {
    title: string;
    description: string;
  };
  highlightList: string[];
  video: HeroMedia;
  featurePanel: HeroFeaturePanel;
}
