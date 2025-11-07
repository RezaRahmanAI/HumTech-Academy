import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  DifferentiatorsContent,
  PartnershipHighlight,
} from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-differentiators-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-differentiators-section.component.html',
  styleUrls: ['./dashboard-differentiators-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardDifferentiatorsSectionComponent {
  @Input({ required: true }) differentiators!: DifferentiatorsContent;

  protected addDifferentiator(): void {
    this.differentiators.items.push({ title: '', description: '' });
  }

  protected removeDifferentiator(index: number): void {
    this.differentiators.items.splice(index, 1);
  }

  protected addHighlight(): void {
    this.differentiators.partnershipPanel.highlights.push(this.createHighlight());
  }

  protected removeHighlight(index: number): void {
    this.differentiators.partnershipPanel.highlights.splice(index, 1);
  }

  private createHighlight(): PartnershipHighlight {
    return { label: '', value: '' };
  }
}
