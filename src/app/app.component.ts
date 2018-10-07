import { Component, ViewChild, } from "@angular/core";
import { Platform, Nav, Config,Events } from "ionic-angular";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
// import { DatabaseProvider } from '../providers/database/database';
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
// import { timer } from 'rxjs/observable/timer';
import { Dsh2HomePage} from '../pages/dsh2-home/dsh2-home';
import { Dsh3HomePage} from '../pages/dsh3-home/dsh3-home';
import { Dsh4HomePage} from '../pages/dsh4-home/dsh4-home';
import { Dsh5HomePage} from '../pages/dsh5-home/dsh5-home';
import { Dsh6HomePage} from '../pages/dsh6-home/dsh6-home';

export interface MenuItem {
    id:string;
    title: string;
    component: any;
    icon: string;
    color:any
}
/**
 * Autor : ptr.nov
 * Reff  : https://ampersandacademy.com/tutorials/materialize-css/ionic-2-menu-highlight-current-page
 */
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  showSplash = true;
  rootPage: any = LoginPage;
  profileData:any;//=[{"email": "","password": "","real_name": "Piter Parker","user_group": "","user_id": "","username": ""}];
  appMenuItems: Array<MenuItem>;
  activePage: any;  
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public config:Config,
    public events: Events
  ) {
    
    /** Event Publis From Login Form */
    this.events.subscribe('profileLogin', (data) =>{         
        console.log("profile login=",data['login']); 
        this.profileData=data['login'];
    });
   
    this.initializeApp();
    this.appMenuItems = [
      {id:'side-button[0]', title: 'All Mitratel Project', component: HomePage, icon: 'ios-list', color:'light'},
      {id:'side-button[1]', title: 'Build To Suit', component: Dsh2HomePage, icon: 'ios-checkmark-circle-outline', color:'light'},
      {id:'side-button[2]', title: 'Colocation & Reseller ', component: Dsh3HomePage, icon: 'ios-checkmark-circle-outline', color:'light'},
      {id:'side-button[3]', title: 'Microcell ', component: Dsh4HomePage, icon: 'ios-checkmark-circle-outline', color:'light'},
      {id:'side-button[4]', title: 'Special Project ', component: Dsh5HomePage, icon: 'ios-checkmark-circle-outline', color:'light'},
      {id:'side-button[5]', title: 'Mitra ', component: Dsh6HomePage, icon: 'ios-checkmark-circle-outline', color:'light'},
    //   {title: 'Summary ', component: Dsh7HomePage, icon: 'ios-checkmark-circle-outline'}
    ];
  }

  /**
   * tiga Cara Lempar Variable,
   * mengunakan Config, Storeage, Event.publis
   */
  ngOnInit() {
   
    // const data = JSON.parse(localStorage.getItem('profile'));
    // this.profileData=data.login;

  
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

  
//   ionViewWillLoad(){
//     var objMenu0=<HTMLImageElement>document.getElementById("side-button[1]");
//     objMenu0.addEventListener('click', function () {
//         alert("test");
//     });
    
//     }

  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    // this.activePage = page;
    page.color="light";
    for (let p of this.appMenuItems) {
    
        if(p.title==page.title)
        {
          p.color='danger';
        }
        else
        {
          p.color='lifeColor';
        }
        
        }
  }

  public checkActivePage(page): boolean{
    return page === this.activePage;
  }

  public menuClosed(){
    // var realname=this.config.get('real_name');
    // var usergroup=this.config.get('user_group');
    // this.profileData=[{'real_name':realname,'user_group':usergroup}];
  }

 public menuOpened() {
    //  alert("test");
    // this.events.publish('menu:opened', 'test');
    // this.events.subscribe('menu:opened', () => {
        // var realname=this.config.get('real_name');
        // var usergroup=this.config.get('user_group');
        // this.profileData=[{'real_name':realname,'user_group':usergroup}];
        // console.log("profile",realname);
        //this.nav.setRoot(this.nav.getActive().component);
    // });
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
