import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AcademyContent, AcademyCourse, StatItem } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-academy-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-academy-section.component.html',
  styleUrls: ['./dashboard-academy-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardAcademySectionComponent {
  @Input({ required: true }) academy!: AcademyContent;

  protected addCategory(): void {
    this.academy.categories.push('');
  }

  protected removeCategory(index: number): void {
    this.academy.categories.splice(index, 1);
  }

  protected addStat(): void {
    this.academy.stats.push(this.createStat());
  }

  protected removeStat(index: number): void {
    this.academy.stats.splice(index, 1);
  }

  protected addCourse(): void {
    this.academy.featuredCourses.push(this.createCourse());
  }

  protected removeCourse(index: number): void {
    this.academy.featuredCourses.splice(index, 1);
  }

  protected addBenefit(): void {
    this.academy.benefits.push('');
  }

  protected removeBenefit(index: number): void {
    this.academy.benefits.splice(index, 1);
  }

  private createStat(): StatItem {
    return { label: '', value: 0, suffix: '' };
  }

  private createCourse(): AcademyCourse {
    return {
      title: '',
      instructor: '',
      duration: '',
      rating: '',
      price: '',
    };
  }
}
