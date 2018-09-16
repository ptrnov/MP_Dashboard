import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
// import {map,first,reduce } from 'rxjs/operators';
// import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
// import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import { DatabaseProvider } from '../../providers/database/database';


/*
  Generated class for the DashboardAllProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DashboardAllProvider {
  // private url: string ="http://mproject.mitratel.int/";
  private url: string ="http://192.168.100.5/";
  // private url: string ="http://192.168.1.135/";
  // private url: string ="http://172.20.10.9/";
  // private subscription1;
  // private subscription2;
  private caba:any;

  constructor(
      public httpClient: HttpClient,
      private http: Http,
      private database:DatabaseProvider
  ) {
    console.log('Hello DashboardAllProvider Provider');

  }

  // promiseDelay= function(ms:any):Promise<{}>{
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve('done'), ms);
  //   });
  // };

  getDataAll(){
    return this.http.get(this.url + "mobile_dashboard/user_login/field_eng1@mitratel.co.id/password")
    .do(res => console.log(res));
  }

  // getResUrl_coba(){
  //   return this.http.get(this.url + "mobile_dashboard/coba")
  //   // .do(res => {return res.json();});
  //   // .do(res => console.log('coba data=' + res))
  //   .map(res => { return res.json();});
  // }

  getCobaData():void{
      // this.getResUrl_coba();
       // this.getResUrl_coba().subscribe(x => {
      var x=this.http.get(this.url + "mobile_dashboard/coba").map(res => { return res.json();});
          x.subscribe(data => {
            // var data=res.json();
            var qry="INSERT OR REPLACE INTO piter (UNIQ_ID,NAME,SUMMARY,COMPANY) VALUES (?,?,?,?)";
            data.technologies.forEach(element => {
              this.database.insertData(qry,[
                element.uniq_id,
                element.name,
                element.summary,
                element.company
              ]);
            });
            console.log("success load Api");
          });
      //
    // });
  }



  // runServiceEventLoadView(){
    // var result = Observable.fromPromise(
    //   // fetch(this.url + "mobile_dashboard/coba")
    //   this.getCobaData().subscribe(data=>{

    //   });
    // );
    // result.subscribe(x => console.log(x), e => console.error(e));


    // let qry="INSERT OR REPLACE INTO piter (UNIQ_ID,NAME,SUMMARY,COMPANY) VALUES (?,?,?,?)";
    // var subscription1 = Observable.timer(10000, 10000);
    // subscription1.subscribe(function (result){

    // })

    // .subscribe(x => {
    //   this.getCobaData().subscribe(data=>{
    //     data.technologies.forEach(element => {
    //       this.database.insertData(qry,[
    //         element.uniq_id,
    //         element.name,
    //         element.summary,
    //         element.company
    //       ]);
    //     });
    //   });
    // });
  // }

  //insertToTable(){


    // let qry="INSERT INTO piter (usr,psw)  VALUES (?,?)";
    // this.database.insertData(qry,[data['usr'],data['psw']]).then((msq)=>{
    //   //alert('message' + msq);
    //   //console.log(msq);
    // });
  //}




}
