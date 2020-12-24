import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from '@modules/search/interfaces/tweet';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });
  constructor(private http: HttpClient) {}
  getTweets(url: string): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(`${environment.baseURL}/${url}?offset=0`, {
      headers: this.headers,
    });
  }
}
