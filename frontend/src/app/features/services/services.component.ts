import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface ServiceDetail {
  name: string;
  description: string;
  deliverables: string[];
  outcomes: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
  protected readonly categories: ServiceDetail[] = [
    {
      name: 'Digital Marketing & Growth',
      description:
        'Integrated performance marketing, organic growth, and brand storytelling executed across markets and languages.',
      deliverables: [
        'Global SEO and content operations',
        'Paid media management (Google, Meta, LinkedIn, TikTok)',
        'Marketing automation & CRM integration',
        'Brand strategy, messaging, and creative production'
      ],
      outcomes: [
        '3x average uplift in qualified leads',
        '40% improvement in multi-touch attribution accuracy',
        'Consistent brand voice across all regions'
      ]
    },
    {
      name: 'Software & Product Engineering',
      description:
        'Modern engineering teams delivering resilient products across cloud, mobile, and enterprise ecosystems.',
      deliverables: [
        'Product discovery, UX research, and service design',
        'Full-stack development with Angular, React, Node.js, Python, Go',
        'Mobile apps (Flutter, Swift, Kotlin, React Native)',
        'DevOps, CI/CD, observability, and managed cloud'
      ],
      outcomes: [
        'Accelerated launches with agile delivery and automation',
        'Battle-tested architecture prepared for scale and compliance',
        'Knowledge transfer to internal teams via Hum Academy enablement'
      ]
    },
    {
      name: 'Experience Design & Websites',
      description:
        'Strategic design systems, conversion-first experiences, and high-performing websites for global audiences.',
      deliverables: [
        'Customer journey mapping and UX/UI design systems',
        'Corporate websites, landing pages, and e-commerce experiences',
        'Headless CMS and Jamstack implementations',
        'Accessibility, localization, and performance optimization'
      ],
      outcomes: [
        'Higher conversion rates with optimized user flows',
        'Design systems that scale across products and regions',
        'A/B testing frameworks and analytics dashboards'
      ]
    }
  ];
}
