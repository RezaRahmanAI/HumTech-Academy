import { Injectable, computed, inject } from '@angular/core';

import { TestimonialsContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeTestimonialsService {
  private readonly store = inject(HomeContentStore);

  readonly testimonials = computed(() => this.store.homeContent().testimonials);

  update(testimonials: TestimonialsContent): void {
    this.store.updateSection('testimonials', testimonials);
  }
}
