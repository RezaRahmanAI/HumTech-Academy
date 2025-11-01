import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface InsightEntry {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
}

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsightsComponent {
  protected readonly entries: InsightEntry[] = [
    {
      title: 'Building Global Platforms from Bangladesh',
      category: 'Thought Leadership',
      excerpt: 'How distributed squads, lean experimentation, and academy enablement power our multinational partnerships.',
      readTime: '8 min read'
    },
    {
      title: 'Designing Inclusive Digital Services',
      category: 'Experience Design',
      excerpt: 'Practical accessibility, localization, and performance strategies for public sector portals and citizen services.',
      readTime: '6 min read'
    },
    {
      title: 'Upskilling Product Teams with Hum Academy',
      category: 'Learning',
      excerpt: 'Playbooks for aligning training roadmaps with product delivery to reduce onboarding time and talent gaps.',
      readTime: '5 min read'
    }
  ];
}
