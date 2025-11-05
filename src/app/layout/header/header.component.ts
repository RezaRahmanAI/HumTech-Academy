import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
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
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly navLinks: NavLink[] = [
    { label: 'Services', path: '/services' },
    { label: 'Academy', path: '/academy' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Dashboard', path: '/dashboard' }
  ];

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
