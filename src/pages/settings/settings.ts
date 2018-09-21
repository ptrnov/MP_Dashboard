import {Component} from "@angular/core";
import {Platform,NavController,AlertController} from "ionic-angular";
import {LoginPage} from "../login/login";
import { DashboardAllProvider } from "../../providers/dashboard-all/dashboard-all";
import { DatabaseProvider } from '../../providers/database/database';
// import { timeout } from "rxjs/operator/timeout";
// import { resolveDefinition } from "@angular/core/src/view/util";
import { SelectSearchableComponent  } from 'ionic-select-searchable';
// export interface aryFilterYearMonth {
//   SORT:string,
//   GRP:string,
//   NAME:string,
//   NILAI:string,
//   STT_ACTIVE:string
// }
// var valAryFilterYearMonth=[];
class Port {
  public id: number;
  public name: string;
}
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  public valAryFilterYearMonth:{};
  ports: Port[];
  port: Port;

  constructor(
    private platform: Platform,
    public nav: NavController,
    private dashboarAll: DashboardAllProvider,
    private database: DatabaseProvider,
    public alertCtrl: AlertController
  ){
    this.valAryFilterYearMonth=this.database.getPageSetting_FilterManthYear;
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' }
    ];
    // platform.ready().then(() => {
      // var querySql ="SELECT SORT,GRP,NAME,NILAI,STT_ACTIVE FROM APPSETTING"
      // +" ORDER BY GRP,SORT ASC";

      // this.database.selectData(querySql).then(data=>{
      //   setTimeout(()=>{
      //     console.log(data);
      //     this.valAryFilterYearMonth=data;
      //   },500);
      // });
      // console.log(getDataQry);
      // var getDataQry=this.database.selectData1(querySql);
      // getDataQry.then(data=>{
      //   setTimeout(()=>{
      //     var aryRslt=[];
      //     aryRslt.push(data);
      //     this.valAryFilterYearMonth=data;
      //     console.log(this.valAryFilterYearMonth);
      //   },500);
      // });
    // });
  }

  portChange(event: {
    component: SelectSearchableComponent,
    value: any
  }) {
      console.log('port:', event.value);
  }

  alertInfo(){
    let alert1= this.alertCtrl.create({
      title: '<p><i class="fa fa-info-circle fa-1x"> Warning</i><p>',
      //subTitle:'subtitle',
      message: "<p>Automatic update every 1 minute</p>",
      cssClass:'alertModal',
    });
    alert1.present();
  }
  // ionViewLoaded() {

  // }

  // ionViewDidLoad(){

  //   //     console.log("Adsadas");
  //   // console.log(valAryFilterYearMonth);
  // }

  // logout
  logout() {
    this.nav.setRoot(LoginPage);
  }
}
