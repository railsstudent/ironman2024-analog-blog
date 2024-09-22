import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, of, shareReplay } from 'rxjs';
import { SocialMedia } from '../types/social-media.type';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
  http = inject(HttpClient);

  getProfiles() {
    return this.http.get<{ [key: string]: SocialMedia }>('/assets/social-media.json')
      .pipe(
        catchError((err) => { 
          console.error(err);
          return of({} as { [key: string]: SocialMedia } );
        }),
        shareReplay(1),
      );
  }
}
