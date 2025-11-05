import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { ContentApiService } from './content-api.service';

@Injectable({ providedIn: 'root' })
export class PageContentService {
  private readonly api = inject(ContentApiService);
  private readonly cache = new Map<string, WritableSignal<unknown | null>>();

  getPageSignal<T>(key: string): WritableSignal<T | null> {
    const normalized = this.normalize(key);
    if (!this.cache.has(normalized)) {
      this.cache.set(normalized, signal<T | null>(null));
    }
    return this.cache.get(normalized)! as WritableSignal<T | null>;
  }

  loadPage<T>(key: string): Observable<T> {
    const normalized = this.normalize(key);
    return this.api.getPageContent<T>(normalized).pipe(
      tap((content) => {
        this.getPageSignal<T>(normalized).set(content);
      }),
      catchError((error) => {
        console.error(`Failed to load page content for ${normalized}`, error);
        return of(this.getPageSignal<T>(normalized)() as T);
      })
    );
  }

  savePage<T>(key: string, content: T): Observable<T> {
    const normalized = this.normalize(key);
    return this.api.savePageContent<T>(normalized, content).pipe(
      tap((saved) => {
        this.getPageSignal<T>(normalized).set(saved);
      })
    );
  }

  private normalize(key: string): string {
    return key.trim().toLowerCase();
  }
}
