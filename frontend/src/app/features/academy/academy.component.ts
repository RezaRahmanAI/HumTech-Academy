import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PageContentService } from '../../core/services/page-content.service';

interface AcademyTrack {
  title: string;
  description: string;
  modules: string[];
  outcomes: string[];
}

interface AcademyPageContent {
  header: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  tracks: AcademyTrack[];
}

@Component({
  selector: 'app-academy',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './academy.component.html',
  styleUrl: './academy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcademyComponent {
  private readonly pageContent = inject(PageContentService);
  protected readonly academyContent = this.pageContent.getPageSignal<AcademyPageContent>('academy');
  protected readonly header = computed(() => this.academyContent()?.header);
  protected readonly tracks = computed(() => this.academyContent()?.tracks ?? []);

  constructor() {
    this.pageContent.loadPage<AcademyPageContent>('academy').subscribe();
  }
}
