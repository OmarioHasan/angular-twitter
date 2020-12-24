import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { HashtagComponent } from './pages/hashtag/hashtag.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hashtag' },
  { path: 'hashtag', component: HashtagComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
