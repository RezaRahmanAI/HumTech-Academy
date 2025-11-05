import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContentApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api';

  getPageContent<T>(pageKey: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/content/${pageKey}`);
  }

  savePageContent<T>(pageKey: string, content: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/content/${pageKey}`, content);
  }
}
