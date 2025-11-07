import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { HomeTestimonialsService } from '../../../../core/services/home/home-testimonials.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-testimonials-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './home-testimonials-section.component.html',
  styleUrls: ['./home-testimonials-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTestimonialsSectionComponent {
  private readonly testimonialsService = inject(HomeTestimonialsService);

  protected readonly testimonials = this.testimonialsService.testimonials;
  protected readonly view = signal<'client' | 'student'>('client');
  protected readonly filteredTestimonials = computed(() =>
    this.testimonials().items.filter((testimonial) => testimonial.type === this.view())
  );

  protected setView(view: 'client' | 'student'): void {
    this.view.set(view);
  }
}
