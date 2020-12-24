export interface Tweet {
  i: number;
  account: Account;
  date: Date;
  hashtags: string[];
  likes: number;
  replies: number;
  retweets: number;
  text: string;
}
interface Account {
  fullname: string;
  href: string;
  id: number;
}
