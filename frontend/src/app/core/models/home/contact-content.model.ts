import { CtaLink } from './cta-link.model';
import { SectionHeaderContent } from './section-header.model';

export interface ContactEmail {
  label: string;
  value: string;
}

export interface ContactSocial {
  label: string;
  url: string;
}

export interface ContactProfileDownload {
  label: string;
  url: string;
}

export interface ContactContent {
  header: SectionHeaderContent;
  headquarters: string;
  phones: string[];
  emails: ContactEmail[];
  businessHours: string[];
  socials: ContactSocial[];
  consultation: CtaLink;
  profileDownload: ContactProfileDownload;
}
