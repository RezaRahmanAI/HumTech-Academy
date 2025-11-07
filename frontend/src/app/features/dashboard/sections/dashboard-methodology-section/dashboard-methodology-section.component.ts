import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MethodologyContent } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-methodology-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-methodology-section.component.html',
  styleUrls: ['./dashboard-methodology-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardMethodologySectionComponent {
  @Input({ required: true }) methodology!: MethodologyContent;
  @Input() sectionId = 'methodology';

  protected addStep(): void {
    this.methodology.steps.push({ step: '', detail: '' });
  }

  protected removeStep(index: number): void {
    this.methodology.steps.splice(index, 1);
  }
}
