import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchantLandingPage } from './merchant-landing';

@NgModule({
  declarations: [
    MerchantLandingPage,
  ],
  imports: [
    IonicPageModule.forChild(MerchantLandingPage),
  ],
})
export class MerchantLandingPageModule {}
