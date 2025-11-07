import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StatItem, TrustContent } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-trust-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-trust-section.component.html',
  styleUrls: ['./dashboard-trust-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardTrustSectionComponent {
  @Input({ required: true }) trust!: TrustContent;

  protected addCompany(): void {
    this.trust.companies.push('');
  }

  protected removeCompany(index: number): void {
    this.trust.companies.splice(index, 1);
  }

  protected addStat(): void {
    this.trust.stats.push(this.createStat());
  }

  protected removeStat(index: number): void {
    this.trust.stats.splice(index, 1);
  }

  private createStat(): StatItem {
    return { label: '', value: 0, suffix: '' };
  }
}
