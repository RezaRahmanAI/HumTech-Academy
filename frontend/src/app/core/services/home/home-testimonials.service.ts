import { computed, inject, Injectable } from '@angular/core';

import { TestimonialsContent } from '../../models/home';
import { ContentService } from '../content.service';

@Injectable({ providedIn: 'root' })
export class HomeTestimonialsService {
  private readonly content = inject(ContentService);

  readonly testimonials = computed(() => this.content.homeContent().testimonials);

  updateTestimonials(
    updater: (testimonials: TestimonialsContent) => TestimonialsContent
  ): void {
    this.content.updateHomeSection('testimonials', updater);
  }

  setTestimonials(testimonials: TestimonialsContent): void {
    this.content.setHomeSection('testimonials', testimonials);
  }
}
