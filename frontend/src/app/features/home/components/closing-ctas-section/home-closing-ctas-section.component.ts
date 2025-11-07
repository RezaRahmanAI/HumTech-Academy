import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HomeClosingCtaService } from '../../../../core/services/home/home-closing-cta.service';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-closing-ctas-section',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './home-closing-ctas-section.component.html',
  styleUrls: ['./home-closing-ctas-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeClosingCtasSectionComponent {
  private readonly closingCtasService = inject(HomeClosingCtaService);

  protected readonly closingCtas = this.closingCtasService.closingCtas;
}
