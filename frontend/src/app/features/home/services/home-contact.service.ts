import { Injectable, computed, inject } from '@angular/core';

import { ContactContent } from '../../../core/models/home';
import { HomeContentStore } from '../../../core/services/home-content.store';

@Injectable({ providedIn: 'root' })
export class HomeContactService {
  private readonly store = inject(HomeContentStore);

  readonly contact = computed(() => this.store.homeContent().contact);

  update(contact: ContactContent): void {
    this.store.updateSection('contact', contact);
  }
}
