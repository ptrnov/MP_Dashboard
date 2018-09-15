import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
/**
 * Generated class for the Dsh6HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dsh6-home',
  templateUrl: 'dsh6-home.html',
})
export class Dsh6HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dsh6HomePage');
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }
}
