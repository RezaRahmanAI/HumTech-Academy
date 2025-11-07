export interface CtaLink {
  label: string;
  routerLink?: string | any[];
  fragment?: string;
  externalUrl?: string;
  style?: 'primary' | 'secondary' | 'outline';
}
