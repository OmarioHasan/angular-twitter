import { SearchTweets } from './../../interfaces/search-tweets';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListAnimation } from '@shared/animations/list-animation';
import { ApiService } from '@core/http/api.service';
import { TweetService } from './../../services/tweet.service';
import { Tweet } from '../../interfaces/tweet';
import { take, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [ListAnimation],
})
export class TableComponent implements OnInit, OnDestroy {
  tweets: Tweet[] = [];
  activePage = 1;
  isLoading = false;
  notFound = false;
  errMessage = '';
  subscription: Subscription;
  constructor(
    private tweetSercive: TweetService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.subscription = this.tweetSercive.getTweets.subscribe(
      (searchQueries: SearchTweets) => {
        this.getTweets(searchQueries);
      }
    );
  }

  getTweets(searchQueries: SearchTweets): void {
    this.isLoading = true;
    this.notFound = false;
    this.tweets = [];
    this.apiService
      .getTweets(
        `${searchQueries.pageName.concat('s')}/${searchQueries.searchTerm}`
      )
      .subscribe(
        (tweets: Tweet[]) => {
          this.isLoading = false;
          this.tweets = tweets.map((tweet, i) => {
            return { ...tweet, i };
          });
        },
        (err) => {
          console.log(err.error);
          err.error.detail
            ? (this.errMessage = err.error.detail.concat(' Or Empty Search'))
            : (this.errMessage = err.error.message);

          this.notFound = true;
          this.isLoading = false;
        },
        () => {}
      );
    /*
  Mocking data for testing -- Endpoints in the document seems not to be working ^_^
  */
    // setTimeout(() => {
    //   this.tweets = Array(21)
    //     .fill('')
    //     .map((_, i) => {
    //       return {
    //         i,
    //         account: {
    //           fullname: 'Hugo de Vos',
    //           href: '/Ottotos',
    //           id: 1026921204,
    //         },
    //         date: new Date('2019-04-06T10:52:00+07:00'),
    //         hashtags: ['#python', '#AWS', 'Welcome'],
    //         likes: 3,
    //         replies: 2,
    //         retweets: 1,
    //         text:
    //           'I found a funny, unreadable, unpractical but working way to do conditional string formatting in #python ? pic.twitter.com/RjUp4XQC4h',
    //       };
    //     });
    //   this.isLoading = false;
    // }, 1500);
  }

  getPages(tweetsLength: number): unknown[] {
    return Array(Math.ceil(tweetsLength / 10));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
