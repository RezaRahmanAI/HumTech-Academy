import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Testimonial, TestimonialsContent } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-testimonials-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-testimonials-section.component.html',
  styleUrls: ['./dashboard-testimonials-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTestimonialsSectionComponent {
  @Input({ required: true }) testimonials!: TestimonialsContent;
  @Input() sectionId = 'testimonials';

  protected addTestimonial(): void {
    this.testimonials.items.push(this.createTestimonial());
  }

  protected removeTestimonial(index: number): void {
    this.testimonials.items.splice(index, 1);
  }

  private createTestimonial(): Testimonial {
    return {
      quote: '',
      name: '',
      title: '',
      location: '',
      rating: 5,
      type: 'client'
    };
  }
}
