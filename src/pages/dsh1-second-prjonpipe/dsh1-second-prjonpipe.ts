import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the Dsh1SecondPrjonpipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dsh1-second-prjonpipe',
  templateUrl: 'dsh1-second-prjonpipe.html',
})
// export interface dataList{
//   persen: string;
//   nilai: any;
// }


export class Dsh1SecondPrjonpipePage {

  dataArys : any;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl : ViewController,
  ) {
    this.dataArys=[
      {persen:'0 - 20 %', nilai:'1137'},
      {persen:'> 20 % - 50 %', nilai:'65'},
      {persen:'> 50 % - 100 %', nilai:'274'},
      {persen:'No Activity', nilai:'604'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dsh1SecondPrjonpipePage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
}
