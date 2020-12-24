import { TweetService } from './../../services/tweet.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() pageName: string;
  searchTerm: Subject<string> = new Subject();
  searchFocus = false;
  constructor(private tweetSercive: TweetService) {}

  ngOnInit(): void {
    this.searchTerm
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((searchTerm: string) => {
        this.tweetSercive.getTweets.next({
          searchTerm,
          pageName: this.pageName,
        });
      });
  }
}
