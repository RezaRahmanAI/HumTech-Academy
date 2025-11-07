import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { HomeDifferentiatorsService } from '../../../../core/services/home/home-differentiators.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-differentiators-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './home-differentiators-section.component.html',
  styleUrls: ['./home-differentiators-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDifferentiatorsSectionComponent {
  private readonly differentiatorsService = inject(HomeDifferentiatorsService);

  protected readonly differentiators = this.differentiatorsService.differentiators;
}
