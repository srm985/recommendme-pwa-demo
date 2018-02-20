import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { MePage } from '../me/me';
import { AddPage } from '../add/add';
import { FeedPage } from '../feed/feed';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private tab1Root;
  private tab2Root;
  private tab3Root;
  private tab4Root;
  private tab5Root;

  constructor(
  ) {
    this.tab1Root = SearchPage;
    this.tab2Root = MePage;
    this.tab3Root = AddPage;
    this.tab4Root = FeedPage;
    this.tab5Root = NotificationsPage;
  }
}
