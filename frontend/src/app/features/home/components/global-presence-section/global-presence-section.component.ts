import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { GlobalPresenceContent } from '../../../../core/models/home';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-global-presence-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './global-presence-section.component.html',
  styleUrls: ['./global-presence-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalPresenceSectionComponent {
  @Input({ required: true }) globalPresence!: GlobalPresenceContent;
}
