import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SeoService } from '../../core/services/seo.service';
import { AcademySectionComponent } from './components/academy-section/academy-section.component';
import { ClosingCtasSectionComponent } from './components/closing-ctas-section/closing-ctas-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { DifferentiatorsSectionComponent } from './components/differentiators-section/differentiators-section.component';
import { GlobalPresenceSectionComponent } from './components/global-presence-section/global-presence-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ImpactSectionComponent } from './components/impact-section/impact-section.component';
import { MethodologySectionComponent } from './components/methodology-section/methodology-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { TrustSectionComponent } from './components/trust-section/trust-section.component';
import { HomeAcademyService } from './services/home-academy.service';
import { HomeClosingCtasService } from './services/home-closing-ctas.service';
import { HomeContactService } from './services/home-contact.service';
import { HomeDifferentiatorsService } from './services/home-differentiators.service';
import { HomeGlobalPresenceService } from './services/home-global-presence.service';
import { HomeHeroService } from './services/home-hero.service';
import { HomeImpactService } from './services/home-impact.service';
import { HomeMethodologyService } from './services/home-methodology.service';
import { HomeServicesService } from './services/home-services.service';
import { HomeTestimonialsService } from './services/home-testimonials.service';
import { HomeTrustService } from './services/home-trust.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    TrustSectionComponent,
    ServicesSectionComponent,
    DifferentiatorsSectionComponent,
    MethodologySectionComponent,
    AcademySectionComponent,
    GlobalPresenceSectionComponent,
    TestimonialsSectionComponent,
    ImpactSectionComponent,
    ClosingCtasSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly seo = inject(SeoService);
  private readonly heroService = inject(HomeHeroService);
  private readonly trustService = inject(HomeTrustService);
  private readonly servicesService = inject(HomeServicesService);
  private readonly differentiatorsService = inject(HomeDifferentiatorsService);
  private readonly methodologyService = inject(HomeMethodologyService);
  private readonly academyService = inject(HomeAcademyService);
  private readonly globalPresenceService = inject(HomeGlobalPresenceService);
  private readonly testimonialsService = inject(HomeTestimonialsService);
  private readonly impactService = inject(HomeImpactService);
  private readonly closingCtasService = inject(HomeClosingCtasService);
  private readonly contactService = inject(HomeContactService);

  protected readonly hero = this.heroService.hero;
  protected readonly trust = this.trustService.trust;
  protected readonly services = this.servicesService.services;
  protected readonly differentiators = this.differentiatorsService.differentiators;
  protected readonly methodology = this.methodologyService.methodology;
  protected readonly academy = this.academyService.academy;
  protected readonly globalPresence = this.globalPresenceService.globalPresence;
  protected readonly testimonials = this.testimonialsService.testimonials;
  protected readonly impact = this.impactService.impact;
  protected readonly closingCtas = this.closingCtasService.closingCtas;
  protected readonly contact = this.contactService.contact;

  constructor() {
    this.seo.update({
      title: 'Hum Tech & Academy | Digital Marketing, Software Development & Tech Courses in Bangladesh',
      description:
        'Premium multinational technology company delivering digital marketing, software development, website building, and live tech education for Bangladesh and global markets.',
      keywords:
        'hum tech academy, digital marketing Bangladesh, software development Dhaka, web development, tech courses, lenis gsap',
      canonical: 'https://www.humtech.academy',
    });
  }
}
