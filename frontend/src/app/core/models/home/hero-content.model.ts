import { CtaLink } from './cta-link.model';

type MetricTheme = 'accent' | 'emerald';

export interface HeroMetric {
  label: string;
  value: string;
  theme: MetricTheme;
}

export interface HeroFeaturePartner {
  label: string;
  description: string;
}

export interface HeroFeaturePanel {
  eyebrow: string;
  title: string;
  description: string;
  metrics: HeroMetric[];
  partner: HeroFeaturePartner;
}

export interface HeroMedia {
  src: string;
  poster: string;
}

export interface HeroHighlightCard {
  title: string;
  description: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  highlightCard: HeroHighlightCard;
  highlightList: string[];
  video: HeroMedia;
  featurePanel: HeroFeaturePanel;
}
