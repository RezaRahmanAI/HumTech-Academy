import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sitemap.component.html',
  styleUrl: './sitemap.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SitemapComponent {
  protected readonly links = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Academy', url: '/academy' },
    { label: 'Portfolio', url: '/portfolio' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
    { label: 'Insights', url: '/insights' },
    { label: 'Privacy Policy', url: '/legal/privacy' },
    { label: 'Terms of Service', url: '/legal/terms' },
    { label: 'Refund Policy', url: '/legal/refund' }
  ];
}
