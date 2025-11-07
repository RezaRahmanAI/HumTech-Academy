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
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  // Signal to manage the state of the menu
  protected readonly menuOpen = signal(false);
  // Signal to manage the scroll state
  protected readonly scrolled = signal(false);
  // Navigation links
  protected readonly navLinks: NavLink[] = [
    { label: 'Home', path: '/home' },
    { label: 'Services', path: '/services' },
    { label: 'Academy', path: '/academy' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    // { label: 'Dashboard', path: '/dashboard' }
  ];

  // Track window scroll position
  @HostListener('window:scroll')
  onScroll(): void {
    const offset = typeof window !== 'undefined' ? window.scrollY : 0;
    this.scrolled.set(offset > 10); // Change this threshold if needed
  }

  // Toggle menu open state
  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  // Close menu when an item is clicked
  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  // Add a class to hide the navbar when scrolling
  protected isAtTop(): boolean {
    return !this.scrolled(); // Returns true if at the top
  }
}
