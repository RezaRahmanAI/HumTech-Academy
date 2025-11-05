import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeContent } from '../models/home-content.model';

@Injectable({ providedIn: 'root' })
export class ContentApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api';

  getHomeContent(): Observable<HomeContent> {
    return this.http.get<HomeContent>(`${this.baseUrl}/home-content`);
  }

  updateHomeContent(content: HomeContent): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/home-content`, content);
  }
}
