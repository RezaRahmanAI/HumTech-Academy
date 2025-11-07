import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface AcademyTrack {
  title: string;
  description: string;
  modules: string[];
  outcomes: string[];
}

@Component({
  selector: 'app-academy',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './academy.component.html',
  styleUrl: './academy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcademyComponent {
  protected readonly tracks: AcademyTrack[] = [
    {
      title: 'Engineering & Cloud',
      description: 'Live cohort-based programs for frontend, backend, DevOps, and cloud-native architecture.',
      modules: [
        'Angular, React, and Next.js production bootcamps',
        'Microservices with Node.js, NestJS, and Python',
        'DevOps pipelines with GitHub Actions, Docker, Kubernetes',
        'AWS, Azure, and GCP certification readiness'
      ],
      outcomes: ['Portfolio-ready projects', 'Certification support', '1:1 mentorship and code reviews']
    },
    {
      title: 'Digital Marketing & Product Growth',
      description: 'Performance-driven programs that blend storytelling with analytics and automation.',
      modules: [
        'Growth marketing strategy and experimentation',
        'SEO, content operations, and localization',
        'Paid media mastery with real campaign labs',
        'Analytics, attribution, and CRO frameworks'
      ],
      outcomes: ['Campaign playbooks', 'Live client simulations', 'Career coaching & placement support']
    },
    {
      title: 'Design & Product Leadership',
      description: 'Human-centered design programs for product designers, researchers, and product managers.',
      modules: [
        'Design thinking and research practices',
        'Design systems and component libraries',
        'Product strategy, roadmapping, and OKRs',
        'Leadership communication and stakeholder management'
      ],
      outcomes: ['Industry portfolio critiques', 'Executive mentorship circles', 'Access to job network partners']
    }
  ];
}
