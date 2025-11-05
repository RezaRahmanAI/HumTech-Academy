import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageContentService } from '../../core/services/page-content.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  private readonly pageContent = inject(PageContentService);
  protected readonly currentYear = new Date().getFullYear();
  private readonly footerContent = this.pageContent.getPageSignal<{ socialLinks: { label: string; url: string }[] }>('footer');
  protected readonly socialLinks = computed(() => this.footerContent()?.socialLinks ?? []);

  constructor() {
    this.pageContent.loadPage<{ socialLinks: { label: string; url: string }[] }>('footer').subscribe();
  }
}
