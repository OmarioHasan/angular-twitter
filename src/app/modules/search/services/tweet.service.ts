import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  getTweets: Subject<{ searchTerm: string; pageName: string }> = new Subject();
  constructor() {}
}
