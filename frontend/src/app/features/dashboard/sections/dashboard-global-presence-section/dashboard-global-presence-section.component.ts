import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GlobalPresenceContent } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-global-presence-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-global-presence-section.component.html',
  styleUrls: ['./dashboard-global-presence-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardGlobalPresenceSectionComponent {
  @Input({ required: true }) globalPresence!: GlobalPresenceContent;
  @Input() sectionId = 'global-presence';
}
