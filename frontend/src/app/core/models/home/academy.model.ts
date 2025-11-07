import { SectionHeaderContent } from './section-header.model';
import { StatItem } from './stat.model';

export interface AcademyCourse {
  title: string;
  instructor: string;
  duration: string;
  rating: string;
  price: string;
}

export interface AcademyContent {
  header: SectionHeaderContent;
  categories: string[];
  stats: StatItem[];
  featuredCourses: AcademyCourse[];
  benefits: string[];
}
