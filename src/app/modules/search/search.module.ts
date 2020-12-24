import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { UserComponent } from './pages/user/user.component';
import { HashtagComponent } from './pages/hashtag/hashtag.component';
import { TableComponent } from './components/table/table.component';
import { SearchComponent } from './components/search/search.component';
import { ProgressBarComponent } from '@shared/components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    UserComponent,
    HashtagComponent,
    TableComponent,
    SearchComponent,
    ProgressBarComponent,
  ],
  imports: [CommonModule, SearchRoutingModule],
})
export class SearchModule {}
