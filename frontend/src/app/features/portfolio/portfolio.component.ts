import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PageContentService } from '../../core/services/page-content.service';

interface PortfolioItem {
  title: string;
  client: string;
  region: string;
  summary: string;
  tags: string[];
}

interface PortfolioPageContent {
  header: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  work: PortfolioItem[];
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
  private readonly pageContent = inject(PageContentService);
  protected readonly portfolioContent = this.pageContent.getPageSignal<PortfolioPageContent>('portfolio');
  protected readonly header = computed(() => this.portfolioContent()?.header);
  protected readonly work = computed(() => this.portfolioContent()?.work ?? []);

  constructor() {
    this.pageContent.loadPage<PortfolioPageContent>('portfolio').subscribe();
  }
}
