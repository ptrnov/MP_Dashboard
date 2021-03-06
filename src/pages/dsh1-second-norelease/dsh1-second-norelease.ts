import { Component,NgZone} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform,IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
// import { DashboardAllProvider } from "../../providers/database/dashboard-all";
import { DatabaseProvider } from '../../providers/database/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';

export interface Config {
	technologies: string;
}

export interface rsltData {
   prop: 'COMPANY';
   name: 'NAME';
   name1: 'COMPANY';
}
// var rsltData: any;
var promises = [];

@IonicPage()
@Component({
  selector: 'page-dsh1-second-norelease',
  templateUrl: 'dsh1-second-norelease.html',
})
export class Dsh1SecondNoreleasePage {

  public columns : any;
  public sorts : any;
  public ambilDataRrows : any;
  public rows : any;
  public config : Config;
  public aryRslt: any;
  private rsltData:any;//:{};// rsltData;
  private subscription1;
  private subscription2;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      // private _HTTP   	: HttpClient,
      // private dashboarAll: DashboardAllProvider,
      private dp: DatabaseProvider,
      // private zone: NgZone,
      public platform: Platform
  ) {
        this.columns = [
          { prop: 'NAME' },
          { prop: 'SUMMARY' },
          { prop: 'COMPANY' }
        ];

    // this.sorts=[
    //   {
    //     prop: 'NAME',
    //     dir: 'desc'
    //   },
    //   {
    //     prop: 'SUMMARY',
    //     dir: 'asc'
    //   }
    // ];
    platform.ready().then(() => {

     });
  }
   ngOnInit() {
    this.subscription1 = Observable.timer(10000,10000).subscribe(x => {
      console.log('run-Disply');
      // this.dashboarAll.getCobaData();
    });

    // this.dashboarAll.getCobaData().subscribe(data=>{
    //   // console.log(data);
    //   // this.ambilDataRrows = data;
    //   //this.rows=data.technologies;
    //     data.technologies.forEach(element => {
    //       // console.log(element);
    //       // console.log('"'+element.name+'"','"'+element.summary+'"','"'+element.company+'"');
    //       // this.masukinDatabaru('"'+element.name+'"','"'+element.summary+'"','"'+element.company+'"');
    //       this.masukinDatabaru(element.uniq_id,element.name,element.summary,element.company);
    //    });
    //  });
    // // this.masukinDatabaru("Piter","Zakirnaik","Dedat");
   }

  ionViewDidLoad(){
      /**
       * Load Sqlite data periodik.
       */
      this.subscription2 = Observable.timer(3000, 3000).subscribe(x => {
        console.log('run-Disply');
        // this.ambilDataBaru();
      });
      // console.log('ionViewDidLoad Dsh1SecondNoreleasePage');
      // this._HTTP
      //   .get<Config>('../../assets/data/technologies.json')
      //   .subscribe((data) =>
      //   {
      //         // this.rows = data.technologies;
      //     //  alert(data);
      //     //   this.rows = this.ambilDataBaru();
      //     //  alert(data);
      //       console.log(data.technologies);
      //   });
      // this.ambilDataBaru();
  }

  /**
   * Event Back / close Page
   */
  ionViewWillLeave() {
    console.log("Previus page")
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
   }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }

  // masukinDatabaru(uniqId:any,name:any,summary:any,company:any){
  //   // console.log('data=' + name);
  //   // let qry="INSERT INTO piter (UNIQ_ID,NAME,SUMMARY,COMPANY) VALUES (?,?,?,?)";
  //   let qry="INSERT OR REPLACE INTO piter (UNIQ_ID,NAME,SUMMARY,COMPANY) VALUES (?,?,?,?)";
  //   this.dp.insertData(qry,[uniqId,name,summary,company]);
  // }

  // ambilDataBaru(){
  //     var querySql ="SELECT NAME,SUMMARY,COMPANY FROM piter ORDER BY NAME DESC";
  //     let getDataQry=this.dp.selectData(querySql);
  //         getDataQry.then(data=>{
  //           setTimeout(()=> {
  //             // console.log(this.rsltData);
  //             // console.log(data);
  //             this.rows =data;
  //             // console.log(data);
  //           },500);
  //         });
  // }

  // ambilDataRslt(){
    // console.log(this.rsltData);
    // var data = [];
    // var data = {};
    // data=this.rsltData;
    // return this.rsltData;

    // this.rsltData.forEach(function(element) {
    //   console.log(element);
    //   return element;
    // });
  // }

}
