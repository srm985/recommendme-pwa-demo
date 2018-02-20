import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { MerchantLandingPage } from '../merchant-landing/merchant-landing';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  merchantList: any;            // List containing returned merchants.
  favoriteSegment: string;      // Contains which segment is current displayed.

  constructor(
    private navCtrl: NavController
  ) {
    this.merchantList = [
      {
        name: 'Beatrix',
        description: 'New American Restaurant',
        address: '519 N Clark St',
        distance: '0.4',
        likedCount: 52
      }, {
        name: 'Beatrix',
        description: 'New American Restaurant',
        address: '519 N Clark St',
        distance: '0.4',
        likedCount: 999
      }, {
        name: 'Beatrix',
        description: 'New American Restaurant',
        address: '519 N Clark St',
        distance: '0.4',
        likedCount: 99
      }, {
        name: 'Beatrix',
        description: 'New American Restaurant',
        address: '519 N Clark St',
        distance: '0.4',
        likedCount: 0
      }, {
        name: 'Beatrix',
        description: 'New American Restaurant',
        address: '519 N Clark St',
        distance: '0.4',
        likedCount: 999
      }, {
        name: 'Beatrix',
        description: 'New American Restaurant',
        address: '519 N Clark St',
        distance: '0.4',
        likedCount: 999
      }, {
        name: 'Beatrix',
        description: 'New American Restaurant',
        address: '519 N Clark St',
        distance: '0.4',
        likedCount: 999
      }, {
        name: 'Beatrix',
        description: 'New American Restaurant',
        address: '519 N Clark St',
        distance: '0.4',
        likedCount: 999
      }, {
        name: 'Beatrix',
        description: 'New American Restaurant',
        address: '519 N Clark St',
        distance: '0.4',
        likedCount: 999
      }, {
        name: 'Beatrix',
        description: 'New American Restaurant',
        address: '519 N Clark St',
        distance: '0.4',
        likedCount: 999
      }
    ];
    this.favoriteSegment = 'friend';
  }

  viewMerchant(): void {
    console.log('viewing merchant page...');
    this.navCtrl.push(MerchantLandingPage);
  }
}
