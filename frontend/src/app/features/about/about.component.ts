import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PageContentService } from '../../core/services/page-content.service';

interface AboutPageContent {
  header: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  intro: string;
  values: { title: string; description: string }[];
  leadership: {
    title: string;
    description: string;
    highlights: string[];
    cta: {
      label: string;
      routerLink: string;
      fragment?: string;
    };
  };
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  private readonly pageContent = inject(PageContentService);
  protected readonly aboutContent = this.pageContent.getPageSignal<AboutPageContent>('about');
  protected readonly header = computed(() => this.aboutContent()?.header);
  protected readonly intro = computed(() => this.aboutContent()?.intro ?? '');
  protected readonly values = computed(() => this.aboutContent()?.values ?? []);
  protected readonly leadership = computed(() => this.aboutContent()?.leadership);

  constructor() {
    this.pageContent.loadPage<AboutPageContent>('about').subscribe();
  }
}
