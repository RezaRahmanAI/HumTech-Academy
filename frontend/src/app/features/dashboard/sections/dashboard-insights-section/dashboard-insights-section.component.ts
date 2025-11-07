import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeContent, InsightItem } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-insights-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-insights-section.component.html',
  styleUrls: ['./dashboard-insights-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardInsightsSectionComponent {
  @Input({ required: true }) insights!: HomeContent['insights'];
  @Input() sectionId = 'insights';

  protected addInsight(): void {
    this.insights.items.push(this.createInsight());
  }

  protected removeInsight(index: number): void {
    this.insights.items.splice(index, 1);
  }

  private createInsight(): InsightItem {
    return { title: '', category: '', summary: '', readTime: '' };
  }
}
