import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
/**
 * Generated class for the Dsh1SecondRfiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dsh1-second-rfi',
  templateUrl: 'dsh1-second-rfi.html',
})
export class Dsh1SecondRfiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dsh1SecondRfiPage');
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }

}
