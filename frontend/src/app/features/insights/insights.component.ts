import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PageContentService } from '../../core/services/page-content.service';

interface InsightEntry {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
}

interface InsightsPageContent {
  header: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  entries: InsightEntry[];
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
  private readonly pageContent = inject(PageContentService);
  protected readonly insightsContent = this.pageContent.getPageSignal<InsightsPageContent>('insights');
  protected readonly header = computed(() => this.insightsContent()?.header);
  protected readonly entries = computed(() => this.insightsContent()?.entries ?? []);

  constructor() {
    this.pageContent.loadPage<InsightsPageContent>('insights').subscribe();
  }
}
