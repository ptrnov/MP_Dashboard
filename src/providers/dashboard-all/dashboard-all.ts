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

@Injectable()
export class DashboardAllProvider {
  // private url: string ="http://mproject.mitratel.int/";
  // private url: string ="http://192.168.100.5/";
  private url: string ="http://192.168.1.7/";
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

  private catchError(error:Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "server error.");
  }

  private logResponse(res:Response | any){
    console.log(res);
  }

  getDataAll(){
    return this.http.get(this.url + "mobile_dashboard/user_login/field_eng1@mitratel.co.id/password")
    .do(res => console.log(res));
  }

   /* Testing Function
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
  getCobaData(){
    // var x=this.http.get(this.url + "mobile_dashboard/coba").map(res => { return res.json();});
    let x=this.http.get(this.url + "mobile_dashboard/coba");
        x.map(res => res.json()).subscribe(data => {
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
        x.do(this.logResponse);
        x.catch(this.catchError);
  }

  /* All Project
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getAllPrj():void{
    var x1=this.http.get(this.url + "mobile_dashboard/coba2").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO ALL_PRJ (URUTAN,SEQ,GRP,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4) VALUES (?,?,?,?,?,?,?,?,?)";

          data.dsh1.forEach(element => {
            this.database.insertData(qry,[
              element.URUTAN,
              element.SEQ,
              element.GRP,
              element.NILAI,
              element.PERSEN,
              element.AREA1,
              element.AREA2,
              element.AREA3,
              element.AREA4,
            ]);
          });
          console.log("success load Api - All Project");
      });
  }
}
