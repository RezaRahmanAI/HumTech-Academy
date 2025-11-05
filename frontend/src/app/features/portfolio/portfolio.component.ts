import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface PortfolioItem {
  title: string;
  client: string;
  region: string;
  summary: string;
  tags: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
  protected readonly work: PortfolioItem[] = [
    {
      title: 'Retail Reimagined with Aarong Global',
      client: 'Aarong Global',
      region: 'Dhaka · Dubai',
      summary:
        'Unified e-commerce platform, localized content operations, and omnichannel analytics delivering 250% revenue growth.',
      tags: ['E-commerce', 'UX/UI', 'SEO', 'Marketing Automation']
    },
    {
      title: 'Velocity Fintech Developer Platform',
      client: 'Velocity Fintech',
      region: 'Singapore · London',
      summary:
        'API marketplace, developer portal, and compliance automation enabling expansion into five new markets in under 12 months.',
      tags: ['Fintech', 'APIs', 'Microservices', 'DevOps']
    },
    {
      title: 'Healthtech Telemedicine Experience',
      client: 'NovaCare Health',
      region: 'Sydney · Kuala Lumpur',
      summary:
        'HIPAA-compliant telehealth apps with AI triage, improving patient satisfaction to 4.9/5 and reducing support tickets by 63%.',
      tags: ['Healthcare', 'Mobile Apps', 'AI Assistant', 'Compliance']
    },
    {
      title: 'Government Digital Services in Bangladesh',
      client: 'GovTech Bangladesh',
      region: 'Dhaka',
      summary:
        'Citizen-first portal with multilingual support, accessibility, and data dashboards serving 12M monthly visits.',
      tags: ['Public Sector', 'Accessibility', 'Localization', 'Data Visualization']
    }
  ];
}
