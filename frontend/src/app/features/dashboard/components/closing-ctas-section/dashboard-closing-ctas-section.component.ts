import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClosingCtasContent } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-closing-ctas-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-closing-ctas-section.component.html',
  styleUrls: ['./dashboard-closing-ctas-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardClosingCtasSectionComponent {
  @Input({ required: true }) closingCtas!: ClosingCtasContent;
}
