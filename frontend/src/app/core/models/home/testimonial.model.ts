export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  location: string;
  rating: number;
  type: 'client' | 'student';
}
