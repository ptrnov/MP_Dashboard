import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
/**
 * Generated class for the Dsh1SecondAfterrfiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dsh1-second-afterrfi',
  templateUrl: 'dsh1-second-afterrfi.html',
})
export class Dsh1SecondAfterrfiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dsh1SecondAfterrfiPage');
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }
}
