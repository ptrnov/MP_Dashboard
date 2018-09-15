import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
/**
 * Generated class for the Dsh5HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dsh5-home',
  templateUrl: 'dsh5-home.html',
})
export class Dsh5HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dsh5HomePage');
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }
}
