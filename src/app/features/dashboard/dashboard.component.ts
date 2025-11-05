import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContentService } from '../../core/services/content.service';
import {
  HomeContent,
  InsightItem,
  ServiceCard,
  StatItem,
  Testimonial
} from '../../core/models/home-content.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
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
    { id: 'contact', label: 'Contact' }
  ];

  constructor(private readonly content: ContentService) {
    this.draft = this.clone(this.content.homeContent());
    effect(() => {
      this.draft = this.clone(this.content.homeContent());
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

  protected addHeroHighlight(): void {
    this.draft.hero.highlightList.push('');
  }

  protected removeHeroHighlight(index: number): void {
    this.draft.hero.highlightList.splice(index, 1);
  }

  protected addHeroMetric(): void {
    this.draft.hero.featurePanel.metrics.push({ label: '', value: '', theme: 'accent' });
  }

  protected removeHeroMetric(index: number): void {
    this.draft.hero.featurePanel.metrics.splice(index, 1);
  }

  protected addTrustCompany(): void {
    this.draft.trust.companies.push('');
  }

  protected removeTrustCompany(index: number): void {
    this.draft.trust.companies.splice(index, 1);
  }

  protected addTrustStat(): void {
    this.draft.trust.stats.push(this.createStat());
  }

  protected removeTrustStat(index: number): void {
    this.draft.trust.stats.splice(index, 1);
  }

  protected addService(): void {
    this.draft.services.items.push(this.createService());
  }

  protected removeService(index: number): void {
    this.draft.services.items.splice(index, 1);
  }

  protected addServiceHighlight(service: ServiceCard): void {
    service.highlights.push('');
  }

  protected removeServiceHighlight(service: ServiceCard, index: number): void {
    service.highlights.splice(index, 1);
  }

  protected addDifferentiator(): void {
    this.draft.differentiators.items.push({ title: '', description: '' });
  }

  protected removeDifferentiator(index: number): void {
    this.draft.differentiators.items.splice(index, 1);
  }

  protected addPartnershipHighlight(): void {
    this.draft.differentiators.partnershipPanel.highlights.push({ label: '', value: '' });
  }

  protected removePartnershipHighlight(index: number): void {
    this.draft.differentiators.partnershipPanel.highlights.splice(index, 1);
  }

  protected addMethodStep(): void {
    this.draft.methodology.steps.push({ step: '', detail: '' });
  }

  protected removeMethodStep(index: number): void {
    this.draft.methodology.steps.splice(index, 1);
  }

  protected addCaseStudy(): void {
    this.draft.caseStudies.items.push({ client: '', industry: '', challenge: '', solution: '', result: '' });
  }

  protected removeCaseStudy(index: number): void {
    this.draft.caseStudies.items.splice(index, 1);
  }

  protected addAcademyCategory(): void {
    this.draft.academy.categories.push('');
  }

  protected removeAcademyCategory(index: number): void {
    this.draft.academy.categories.splice(index, 1);
  }

  protected addAcademyStat(): void {
    this.draft.academy.stats.push(this.createStat());
  }

  protected removeAcademyStat(index: number): void {
    this.draft.academy.stats.splice(index, 1);
  }

  protected addFeaturedCourse(): void {
    this.draft.academy.featuredCourses.push({ title: '', instructor: '', duration: '', rating: '', price: '' });
  }

  protected removeFeaturedCourse(index: number): void {
    this.draft.academy.featuredCourses.splice(index, 1);
  }

  protected addAcademyBenefit(): void {
    this.draft.academy.benefits.push('');
  }

  protected removeAcademyBenefit(index: number): void {
    this.draft.academy.benefits.splice(index, 1);
  }

  protected addTestimonial(): void {
    this.draft.testimonials.items.push(this.createTestimonial());
  }

  protected removeTestimonial(index: number): void {
    this.draft.testimonials.items.splice(index, 1);
  }

  protected addImpactStat(): void {
    this.draft.impact.stats.push(this.createStat());
  }

  protected removeImpactStat(index: number): void {
    this.draft.impact.stats.splice(index, 1);
  }

  protected addInsight(): void {
    this.draft.insights.items.push(this.createInsight());
  }

  protected removeInsight(index: number): void {
    this.draft.insights.items.splice(index, 1);
  }

  protected addContactPhone(): void {
    this.draft.contact.phones.push('');
  }

  protected removeContactPhone(index: number): void {
    this.draft.contact.phones.splice(index, 1);
  }

  protected addContactEmail(): void {
    this.draft.contact.emails.push({ label: '', value: '' });
  }

  protected removeContactEmail(index: number): void {
    this.draft.contact.emails.splice(index, 1);
  }

  protected addBusinessHour(): void {
    this.draft.contact.businessHours.push('');
  }

  protected removeBusinessHour(index: number): void {
    this.draft.contact.businessHours.splice(index, 1);
  }

  protected addSocialLink(): void {
    this.draft.contact.socials.push({ label: '', url: '' });
  }

  protected removeSocialLink(index: number): void {
    this.draft.contact.socials.splice(index, 1);
  }

  private createStat(): StatItem {
    return { label: '', value: 0, suffix: '' };
  }

  private createService(): ServiceCard {
    return {
      title: '',
      icon: '✨',
      description: '',
      highlights: [''],
      tagline: ''
    };
  }

  private createTestimonial(): Testimonial {
    return {
      quote: '',
      name: '',
      title: '',
      location: '',
      rating: 5,
      type: 'client'
    };
  }

  private createInsight(): InsightItem {
    return {
      title: '',
      category: '',
      summary: '',
      readTime: ''
    };
  }

  private clone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value)) as T;
  }
}
