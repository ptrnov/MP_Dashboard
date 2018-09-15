import { Component, ViewChild, } from "@angular/core";
import { Platform, Nav } from "ionic-angular";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { DatabaseProvider } from '../providers/database/database';
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
// import { timer } from 'rxjs/observable/timer';
import { Dsh2HomePage} from '../pages/dsh2-home/dsh2-home';
import { Dsh3HomePage} from '../pages/dsh3-home/dsh3-home';
import { Dsh4HomePage} from '../pages/dsh4-home/dsh4-home';
import { Dsh5HomePage} from '../pages/dsh5-home/dsh5-home';
import { Dsh6HomePage} from '../pages/dsh6-home/dsh6-home';
import { Dsh7HomePage} from '../pages/dsh7-home/dsh7-home';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  showSplash = true;
  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;
 
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    private database: DatabaseProvider
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'All Mitratel Project', component: HomePage, icon: 'ios-list'},
      {title: 'Build To Suit', component: Dsh2HomePage, icon: 'ios-checkmark-circle-outline'},
      {title: 'Colaction & Reseller ', component: Dsh3HomePage, icon: 'ios-checkmark-circle-outline'},
      {title: 'Microcell ', component: Dsh4HomePage, icon: 'ios-checkmark-circle-outline'},
      {title: 'Special Project ', component: Dsh5HomePage, icon: 'ios-checkmark-circle-outline'},
      {title: 'Mitra ', component: Dsh6HomePage, icon: 'ios-checkmark-circle-outline'},
      {title: 'Summary ', component: Dsh7HomePage, icon: 'ios-checkmark-circle-outline'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Splash Screen
      // this.splashScreen.show();
       this.splashScreen.hide();
    //   timer(3000).subscribe(() => this.showSplash = false);

      //*** Control Keyboard
        // this.keyboard.hideKeyboardAccessoryBar(false);
      this.keyboard.disableScroll(true);

        // //***  CREATE TABLE IS NOT EXIST
        // console.log('ionViewDidLoad WelcomePage setup table');  
        // // let qry="CREATE TABLE IF NOT EXISTS piter (id INTEGER NULL PRIMARY KEY AUTOINCREMENT, name TEXT , Summary TEXT, Company TEXT)"
        // let qry="CREATE TABLE IF NOT EXISTS piter (NAME TEXT,SUMMARY TEXT,COMPANY TEXT)"
        // this.database.createTable(qry,[]);    
    });
  }

  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
