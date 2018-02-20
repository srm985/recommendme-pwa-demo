import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-merchant-landing',
  templateUrl: 'merchant-landing.html',
})
export class MerchantLandingPage {

  segmentSelect: string;        // Contains which segment has been selected.

  constructor(
  ) {
    this.segmentSelect = 'friends';
  }

  recommendMerchant(): void {
    console.log('recommend...');
  }

  saveMerchant(): void {
    console.log('save...');
  }
}
