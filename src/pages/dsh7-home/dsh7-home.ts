import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";

/**
 * Generated class for the Dsh7HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dsh7-home',
  templateUrl: 'dsh7-home.html',
})
export class Dsh7HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dsh7HomePage');
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }
}
