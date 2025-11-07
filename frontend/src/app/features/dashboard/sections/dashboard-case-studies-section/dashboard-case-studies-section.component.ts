import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CaseStudiesContent } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-case-studies-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-case-studies-section.component.html',
  styleUrls: ['./dashboard-case-studies-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardCaseStudiesSectionComponent {
  @Input({ required: true }) caseStudies!: CaseStudiesContent;
  @Input() sectionId = 'case-studies';

  protected addCaseStudy(): void {
    this.caseStudies.items.push({
      client: '',
      industry: '',
      challenge: '',
      solution: '',
      result: ''
    });
  }

  protected removeCaseStudy(index: number): void {
    this.caseStudies.items.splice(index, 1);
  }
}
