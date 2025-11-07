import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroContent, HeroMetric } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-hero-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-hero-section.component.html',
  styleUrls: ['./dashboard-hero-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeroSectionComponent {
  @Input({ required: true }) hero!: HeroContent;

  protected addHighlight(): void {
    this.hero.highlightList.push('');
  }

  protected removeHighlight(index: number): void {
    this.hero.highlightList.splice(index, 1);
  }

  protected addMetric(): void {
    this.hero.featurePanel.metrics.push(this.createMetric());
  }

  protected removeMetric(index: number): void {
    this.hero.featurePanel.metrics.splice(index, 1);
  }

  private createMetric(): HeroMetric {
    return { label: '', value: '', theme: 'accent' };
  }
}
