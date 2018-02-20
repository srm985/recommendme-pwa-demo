import { Component, Input } from '@angular/core';

@Component({
  selector: 'merchant-list-item',
  templateUrl: 'merchant-list-item.html'
})
export class MerchantListItemComponent {
  @Input() merchantInfo: any;

  itemLiked: boolean;           // Returns true if item is liked.
  itemBookmarked: boolean;      // Returns true if item is bookmarked.

  constructor() {
    this.itemLiked = false;
    this.itemBookmarked = false;
  }

  likeItem(event): void {
    event.stopPropagation();
    this.itemLiked = !this.itemLiked;
  }

  bookmarkItem(event): void {
    event.stopPropagation();
    this.itemBookmarked = !this.itemBookmarked;
  }

}
