import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { HomeAcademySectionComponent } from './components/academy-section/home-academy-section.component';
import { HomeClosingCtasSectionComponent } from './components/closing-ctas-section/home-closing-ctas-section.component';
import { HomeContactSectionComponent } from './components/contact-section/home-contact-section.component';
import { HomeDifferentiatorsSectionComponent } from './components/differentiators-section/home-differentiators-section.component';
import { HomeGlobalPresenceSectionComponent } from './components/global-presence-section/home-global-presence-section.component';
import { HomeHeroSectionComponent } from './components/hero-section/home-hero-section.component';
import { HomeImpactSectionComponent } from './components/impact-section/home-impact-section.component';
import { HomeMethodologySectionComponent } from './components/methodology-section/home-methodology-section.component';
import { HomeServicesSectionComponent } from './components/services-section/home-services-section.component';
import { HomeTestimonialsSectionComponent } from './components/testimonials-section/home-testimonials-section.component';
import { HomeTrustSectionComponent } from './components/trust-section/home-trust-section.component';

const HOME_IMPORTS = [
  CommonModule,
  HomeHeroSectionComponent,
  HomeTrustSectionComponent,
  HomeServicesSectionComponent,
  HomeDifferentiatorsSectionComponent,
  HomeMethodologySectionComponent,
  HomeAcademySectionComponent,
  HomeGlobalPresenceSectionComponent,
  HomeTestimonialsSectionComponent,
  HomeImpactSectionComponent,
  HomeClosingCtasSectionComponent,
  HomeContactSectionComponent
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: HOME_IMPORTS,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Hum Tech & Academy | Digital Marketing, Software Development & Tech Courses in Bangladesh',
      description:
        'Premium multinational technology company delivering digital marketing, software development, website building, and live tech education for Bangladesh and global markets.',
      keywords:
        'hum tech academy, digital marketing Bangladesh, software development Dhaka, web development, tech courses, lenis gsap',
      canonical: 'https://www.humtech.academy'
    });
  }

}
