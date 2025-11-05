import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PageContentService } from '../../core/services/page-content.service';

interface ServiceDetail {
  name: string;
  description: string;
  deliverables: string[];
  outcomes: string[];
}

interface ServicesPageContent {
  header: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  categories: ServiceDetail[];
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
  private readonly pageContent = inject(PageContentService);
  protected readonly servicesContent = this.pageContent.getPageSignal<ServicesPageContent>('services');
  protected readonly header = computed(() => this.servicesContent()?.header);
  protected readonly categories = computed(() => this.servicesContent()?.categories ?? []);

  constructor() {
    this.pageContent.loadPage<ServicesPageContent>('services').subscribe();
  }
}
