import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
/**
 * Generated class for the Dsh2HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dsh2-home',
  templateUrl: 'dsh2-home.html',
})
export class Dsh2HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dsh2HomePage');
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }
}
