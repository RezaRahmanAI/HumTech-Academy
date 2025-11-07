import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ClosingCtasContent } from '../../../../core/models/home';

@Component({
  selector: 'app-home-closing-ctas-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './closing-ctas-section.component.html',
  styleUrls: ['./closing-ctas-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClosingCtasSectionComponent {
  @Input({ required: true }) closingCtas!: ClosingCtasContent;
}
