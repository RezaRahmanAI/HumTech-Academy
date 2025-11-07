import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HeroContent } from '../../../../core/models/home';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-hero-section',
  standalone: true,
  imports: [CommonModule, NgClass, RouterLink, ScrollRevealDirective],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  @Input({ required: true }) hero!: HeroContent;

  protected get videoSrc(): string {
    return this.normalizeMediaUrl(this.hero.video.src);
  }

  protected get videoPoster(): string {
    return this.normalizeMediaUrl(this.hero.video.poster);
  }

  private normalizeMediaUrl(url: string | null | undefined): string {
    if (!url) {
      return '';
    }
    if (/^(https?:)?\/\//.test(url) || url.startsWith('data:')) {
      return url;
    }
    const normalized = url.startsWith('/') ? url : `/${url.replace(/^\/+/, '')}`;
    return normalized.replace(/\/+$/, '');
  }
}
