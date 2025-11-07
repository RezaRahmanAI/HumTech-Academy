import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MethodologyContent, MethodologyStep } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-methodology-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-methodology-section.component.html',
  styleUrls: ['./dashboard-methodology-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardMethodologySectionComponent {
  @Input({ required: true }) methodology!: MethodologyContent;

  protected addStep(): void {
    this.methodology.steps.push(this.createStep());
  }

  protected removeStep(index: number): void {
    this.methodology.steps.splice(index, 1);
  }

  private createStep(): MethodologyStep {
    return { step: '', detail: '' };
  }
}
