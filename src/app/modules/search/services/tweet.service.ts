import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { SearchTweets } from './../interfaces/search-tweets';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  getTweets: Subject<SearchTweets> = new Subject();
  constructor() {}
}
