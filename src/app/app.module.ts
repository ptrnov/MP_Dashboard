import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
// import {TripService} from "../services/trip-service";
// import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import { RestProvider } from '../providers/rest/rest';
import { DashboardAllProvider } from '../providers/dashboard-all/dashboard-all';
import { Dsh1SecondNoreleasePage } from '../pages/dsh1-second-norelease/dsh1-second-norelease';
import { Dsh1SecondPrjonpipePage } from '../pages/dsh1-second-prjonpipe/dsh1-second-prjonpipe';
import { Dsh1SecondRfiPage} from '../pages/dsh1-second-rfi/dsh1-second-rfi';
import {Dsh1SecondAfterrfiPage} from '../pages/dsh1-second-afterrfi/dsh1-second-afterrfi';
import { Dsh2HomePage} from '../pages/dsh2-home/dsh2-home';
import { Dsh3HomePage} from '../pages/dsh3-home/dsh3-home';
import { Dsh4HomePage} from '../pages/dsh4-home/dsh4-home';
import { Dsh5HomePage} from '../pages/dsh5-home/dsh5-home';
import { Dsh6HomePage} from '../pages/dsh6-home/dsh6-home';
import { Dsh7HomePage} from '../pages/dsh7-home/dsh7-home';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatabaseProvider } from '../providers/database/database';
// import { ChartingService } from '../services/charting-service';
// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    Dsh1SecondNoreleasePage,
    Dsh1SecondPrjonpipePage,
    Dsh1SecondRfiPage,
    Dsh1SecondAfterrfiPage,
    Dsh2HomePage,
    Dsh3HomePage,
    Dsh4HomePage,
    Dsh5HomePage,
    Dsh6HomePage,
    Dsh7HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    NgxDatatableModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    // IonicStorageModule.forRoot({
    //   name: '__ionic3_start_theme',
    //     driverOrder: ['indexeddb', 'sqlite', 'websql']
    // })
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    // CheckoutTripPage,
    HomePage,
    LoginPage,
    // LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    // SearchLocationPage,
    // TripDetailPage,
    // TripsPage,
    Dsh1SecondNoreleasePage,
    Dsh1SecondPrjonpipePage,
    Dsh1SecondRfiPage,
    Dsh1SecondAfterrfiPage,
    Dsh2HomePage,
    Dsh3HomePage,
    Dsh4HomePage,
    Dsh5HomePage,
    Dsh6HomePage,
    Dsh7HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    SQLite,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatabaseProvider,
    RestProvider,
    DashboardAllProvider  
    // ChartingService    
  ]
})

export class AppModule {
}
