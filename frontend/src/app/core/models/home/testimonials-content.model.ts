import { SectionHeaderContent } from './section-header.model';
import { Testimonial } from './testimonial.model';

export interface TestimonialsContent {
  header: SectionHeaderContent;
  items: Testimonial[];
}
