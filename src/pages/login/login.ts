import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import { DatabaseProvider } from '../../providers/database/database';
import { DashboardAllProvider } from '../../providers/dashboard-all/dashboard-all';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
      public nav: NavController,
      public forgotCtrl: AlertController,
      public menu: MenuController,
      public toastCtrl: ToastController,
      private database: DatabaseProvider,
      private dashboarAll: DashboardAllProvider,
  ){
    this.menu.swipeEnable(false);
    // this.dashboarAll.initData();
    // .getAllPrj();
  }
  ngOnInit() {
    this.dashboarAll.getAllPrj();
    this.dashboarAll.getB2SPrj();
    this.dashboarAll.getCorePrj();
    this.dashboarAll.getMcpPrj()
    this.dashboarAll.getSpPrj();
    this.dashboarAll.getChartData();
    this.dashboarAll.getSetting();
    this.dashboarAll.getMapData();
    this.dashboarAll.getMapB2s();
    this.dashboarAll.getMapCore();
    this.dashboarAll.getMapMcp();
    this.dashboarAll.getMapSp();
    this.dashboarAll.getUser();
  }
  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    this.nav.setRoot(HomePage);
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
