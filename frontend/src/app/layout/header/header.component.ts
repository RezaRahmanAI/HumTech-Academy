import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PageContentService } from '../../core/services/page-content.service';

interface NavLink {
  label: string;
  path: string;
}

interface NavigationContent {
  links: NavLink[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private readonly pageContent = inject(PageContentService);

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  private readonly navigation = this.pageContent.getPageSignal<NavigationContent>('navigation');
  protected readonly navLinks = computed(() => this.navigation()?.links ?? []);

  constructor() {
    this.pageContent.loadPage<NavigationContent>('navigation').subscribe();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const offset = typeof window !== 'undefined' ? window.scrollY : 0;
    this.scrolled.set(offset > 10);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
