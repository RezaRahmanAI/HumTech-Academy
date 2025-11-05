import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PageContentService } from '../../core/services/page-content.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  private readonly pageContent = inject(PageContentService);
  protected readonly contactContent = this.pageContent.getPageSignal<{
    header: { eyebrow: string; title: string; subtitle: string };
    consultationOptions: string;
    regionalSupport: string;
    emails: string[];
    formOptions: string[];
    ndaLabel: string;
    responseTime: string;
  }>('contact');

  protected readonly header = computed(() => this.contactContent()?.header);
  protected readonly emails = computed(() => this.contactContent()?.emails ?? []);
  protected readonly formOptions = computed(() => this.contactContent()?.formOptions ?? []);

  constructor() {
    this.pageContent
      .loadPage<{
        header: { eyebrow: string; title: string; subtitle: string };
        consultationOptions: string;
        regionalSupport: string;
        emails: string[];
        formOptions: string[];
        ndaLabel: string;
        responseTime: string;
      }>('contact')
      .subscribe();
  }
}
