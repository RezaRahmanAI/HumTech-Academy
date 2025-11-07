import { CtaLink } from './cta-link.model';
import { SectionHeaderContent } from './section-header.model';

export interface ContactContent {
  header: SectionHeaderContent;
  headquarters: string;
  phones: string[];
  emails: { label: string; value: string }[];
  businessHours: string[];
  socials: { label: string; url: string }[];
  consultation: CtaLink;
  profileDownload: { label: string; url: string };
}
