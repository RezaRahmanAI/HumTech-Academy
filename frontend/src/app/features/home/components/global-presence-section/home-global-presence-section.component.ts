import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { HomeGlobalPresenceService } from '../../../../core/services/home/home-global-presence.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-global-presence-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './home-global-presence-section.component.html',
  styleUrls: ['./home-global-presence-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeGlobalPresenceSectionComponent {
  private readonly globalPresenceService = inject(HomeGlobalPresenceService);

  protected readonly globalPresence = this.globalPresenceService.globalPresence;
}
