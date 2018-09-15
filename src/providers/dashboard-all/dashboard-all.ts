import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
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

  constructor(
      public httpClient: HttpClient,
      private http: Http,
      private database:DatabaseProvider
  ) {
    console.log('Hello DashboardAllProvider Provider');
  }

  getDataAll(){
    return this.http.get(this.url + "mobile_dashboard/user_login/field_eng1@mitratel.co.id/password")
    .do(res => console.log(res));
  }

  getCobaData(){
    return this.http.get(this.url + "mobile_dashboard/coba")
    // .do(res => console.log('coba data=' + res))
    .map(res => { return res.json();});
  }

  //insertToTable(){


    // let qry="INSERT INTO piter (usr,psw)  VALUES (?,?)";
    // this.database.insertData(qry,[data['usr'],data['psw']]).then((msq)=>{
    //   //alert('message' + msq);
    //   //console.log(msq);
    // });
  //}




}
