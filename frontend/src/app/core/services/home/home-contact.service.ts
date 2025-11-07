import { computed, inject, Injectable } from '@angular/core';

import { ContactContent } from '../../models/home';
import { ContentService } from '../content.service';

@Injectable({ providedIn: 'root' })
export class HomeContactService {
  private readonly content = inject(ContentService);

  readonly contact = computed(() => this.content.homeContent().contact);

  updateContact(updater: (contact: ContactContent) => ContactContent): void {
    this.content.updateHomeSection('contact', updater);
  }

  setContact(contact: ContactContent): void {
    this.content.setHomeSection('contact', contact);
  }
}
