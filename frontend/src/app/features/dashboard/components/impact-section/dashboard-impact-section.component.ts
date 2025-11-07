import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ImpactContent, StatItem } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-impact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-impact-section.component.html',
  styleUrls: ['./dashboard-impact-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardImpactSectionComponent {
  @Input({ required: true }) impact!: ImpactContent;

  protected addStat(): void {
    this.impact.stats.push(this.createStat());
  }

  protected removeStat(index: number): void {
    this.impact.stats.splice(index, 1);
  }

  private createStat(): StatItem {
    return { label: '', value: 0, suffix: '' };
  }
}
