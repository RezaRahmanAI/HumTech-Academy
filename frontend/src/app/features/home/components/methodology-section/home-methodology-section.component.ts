import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { HomeMethodologyService } from '../../../../core/services/home/home-methodology.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-methodology-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './home-methodology-section.component.html',
  styleUrls: ['./home-methodology-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMethodologySectionComponent {
  private readonly methodologyService = inject(HomeMethodologyService);

  protected readonly methodology = this.methodologyService.methodology;
}
