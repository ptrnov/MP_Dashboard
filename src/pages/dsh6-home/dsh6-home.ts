import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import { SelectSearchableComponent  } from 'ionic-select-searchable';


class Port {
  public id: number;
  public name: string;
}
@IonicPage()
@Component({
  selector: 'page-dsh6-home',
  templateUrl: 'dsh6-home.html',
})
export class Dsh6HomePage {
  ports: Port[];
  port: Port;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' }
    ];
  }

  portChange(event: {
    component: SelectSearchableComponent,
    value: any
  }) {
      console.log('port:', event.value);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Dsh6HomePage');
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }
}
