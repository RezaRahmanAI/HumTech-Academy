import { computed, inject, Injectable } from '@angular/core';

import { AcademyContent } from '../../models/home';
import { ContentService } from '../content.service';

@Injectable({ providedIn: 'root' })
export class HomeAcademyService {
  private readonly content = inject(ContentService);

  readonly academy = computed(() => this.content.homeContent().academy);

  updateAcademy(updater: (academy: AcademyContent) => AcademyContent): void {
    this.content.updateHomeSection('academy', updater);
  }

  setAcademy(academy: AcademyContent): void {
    this.content.setHomeSection('academy', academy);
  }
}
