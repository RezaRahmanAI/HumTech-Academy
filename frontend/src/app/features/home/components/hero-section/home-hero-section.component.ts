import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HomeHeroService } from '../../../../core/services/home/home-hero.service';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-hero-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, RouterLink],
  templateUrl: './home-hero-section.component.html',
  styleUrls: ['./home-hero-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHeroSectionComponent {
  private readonly heroService = inject(HomeHeroService);

  protected readonly hero = this.heroService.hero;
  protected readonly videoSrc = computed(() => this.normalizeMediaUrl(this.hero().video.src));
  protected readonly videoPoster = computed(() => this.normalizeMediaUrl(this.hero().video.poster));

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
