import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

import { ContentService } from '../../core/services/content.service';
import { HomeContent } from '../../core/models/home';
import { DashboardAcademySectionComponent } from './sections/dashboard-academy-section/dashboard-academy-section.component';
import { DashboardCaseStudiesSectionComponent } from './sections/dashboard-case-studies-section/dashboard-case-studies-section.component';
import { DashboardClosingCtasSectionComponent } from './sections/dashboard-closing-ctas-section/dashboard-closing-ctas-section.component';
import { DashboardContactSectionComponent } from './sections/dashboard-contact-section/dashboard-contact-section.component';
import { DashboardDifferentiatorsSectionComponent } from './sections/dashboard-differentiators-section/dashboard-differentiators-section.component';
import { DashboardGlobalPresenceSectionComponent } from './sections/dashboard-global-presence-section/dashboard-global-presence-section.component';
import { DashboardHeroSectionComponent } from './sections/dashboard-hero-section/dashboard-hero-section.component';
import { DashboardImpactSectionComponent } from './sections/dashboard-impact-section/dashboard-impact-section.component';
import { DashboardInsightsSectionComponent } from './sections/dashboard-insights-section/dashboard-insights-section.component';
import { DashboardMethodologySectionComponent } from './sections/dashboard-methodology-section/dashboard-methodology-section.component';
import { DashboardServicesSectionComponent } from './sections/dashboard-services-section/dashboard-services-section.component';
import { DashboardTestimonialsSectionComponent } from './sections/dashboard-testimonials-section/dashboard-testimonials-section.component';
import { DashboardTrustSectionComponent } from './sections/dashboard-trust-section/dashboard-trust-section.component';

const DASHBOARD_IMPORTS = [
  CommonModule,
  FormsModule,
  RouterLink,
  DashboardHeroSectionComponent,
  DashboardTrustSectionComponent,
  DashboardServicesSectionComponent,
  DashboardDifferentiatorsSectionComponent,
  DashboardMethodologySectionComponent,
  DashboardCaseStudiesSectionComponent,
  DashboardAcademySectionComponent,
  DashboardGlobalPresenceSectionComponent,
  DashboardTestimonialsSectionComponent,
  DashboardImpactSectionComponent,
  DashboardInsightsSectionComponent,
  DashboardClosingCtasSectionComponent,
  DashboardContactSectionComponent
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: DASHBOARD_IMPORTS,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  protected draft: HomeContent;
  protected readonly sectionNav = [
    { id: 'hero', label: 'Hero Section' },
    { id: 'trust', label: 'Trust & Stats' },
    { id: 'services', label: 'Services' },
    { id: 'differentiators', label: 'Differentiators' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'academy', label: 'Academy' },
    { id: 'global-presence', label: 'Global Presence' },
    { id: 'testimonials', label: 'Testimonials & Impact' },
    { id: 'impact', label: 'Impact Metrics' },
    { id: 'insights', label: 'Insights' },
    { id: 'closing-ctas', label: 'Closing CTAs' },
    { id: 'contact', label: 'Contact' },
  ];

  // constructor(private readonly content: ContentService) {
  //   this.draft = this.clone(this.content.homeContent());
  //   effect(() => {
  //     this.draft = this.clone(this.content.homeContent());
  //   });
  // }

  constructor(private readonly content: ContentService, private readonly router: Router) {
    this.draft = this.clone(this.content.homeContent());

    // Watch for navigation changes and scroll to the section if it's requested
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.includes('#')) {
          this.scrollToSection(event.urlAfterRedirects.split('#')[1]);
        }
      }
    });
  }

  protected saveHomeContent(): void {
    this.content.setHomeContent(this.clone(this.draft));
    this.draft = this.clone(this.content.homeContent());
  }

  protected resetHomeContent(): void {
    this.content.resetHomeContent();
    this.draft = this.clone(this.content.homeContent());
  }

  protected scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private clone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value)) as T;
  }
}
