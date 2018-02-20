import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { MePage } from '../pages/me/me';
import { AddPage } from '../pages/add/add';
import { FeedPage } from '../pages/feed/feed';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MerchantLandingPage } from '../pages/merchant-landing/merchant-landing';

import { MerchantListItemComponent } from '../components/merchant-list-item/merchant-list-item';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    MePage,
    AddPage,
    FeedPage,
    NotificationsPage,
    MerchantLandingPage,
    MerchantListItemComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    MePage,
    AddPage,
    FeedPage,
    NotificationsPage,
    MerchantLandingPage,
    MerchantListItemComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    ApiProvider
  ]
})
export class AppModule { }
