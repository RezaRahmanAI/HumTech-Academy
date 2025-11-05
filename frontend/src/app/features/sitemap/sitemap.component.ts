import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageContentService } from '../../core/services/page-content.service';

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sitemap.component.html',
  styleUrl: './sitemap.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SitemapComponent {
  private readonly pageContent = inject(PageContentService);
  protected readonly sitemap = this.pageContent.getPageSignal<{ links: { label: string; url: string }[] }>('sitemap');
  protected readonly links = computed(() => this.sitemap()?.links ?? []);

  constructor() {
    this.pageContent.loadPage<{ links: { label: string; url: string }[] }>('sitemap').subscribe();
  }
}
