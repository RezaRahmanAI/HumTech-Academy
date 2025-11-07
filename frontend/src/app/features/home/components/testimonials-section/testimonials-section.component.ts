import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';

import { TestimonialsContent } from '../../../../core/models/home';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-testimonials-section',
  standalone: true,
  imports: [CommonModule, NgClass, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsSectionComponent {
  @Input({ required: true }) testimonials!: TestimonialsContent;

  protected readonly view = signal<'client' | 'student'>('client');

  protected readonly filteredTestimonials = computed(() =>
    this.testimonials.items.filter((testimonial) => testimonial.type === this.view())
  );

  protected setView(view: 'client' | 'student'): void {
    this.view.set(view);
  }

  protected trackByIndex(index: number): number {
    return index;
  }

  protected ratingArray(rating: number): number[] {
    return Array.from({ length: rating }, (_, idx) => idx);
  }
}
