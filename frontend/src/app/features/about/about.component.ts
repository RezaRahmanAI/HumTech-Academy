import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  protected readonly values = [
    {
      title: 'Human First Innovation',
      description: 'We design technology that augments human potential, embracing accessibility, inclusion, and empathy.'
    },
    {
      title: 'Craftsmanship & Accountability',
      description: 'Every sprint, deliverable, and training cohort is measured against the outcomes we commit to.'
    },
    {
      title: 'Global Mindset, Local Impact',
      description: 'We bring international expertise while nurturing Bangladesh’s tech ecosystem and talent pipeline.'
    }
  ];
}
