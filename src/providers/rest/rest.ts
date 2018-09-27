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
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  private url: string ="http://180.250.19.206/";

  constructor(
    public httpClient: HttpClient,
    private http: Http,
  ){
    console.log('Hello RestProvider Provider');
  }
  private catchError(error:Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "server error.");
  }
  private logResponse(res:Response | any){
    console.log(res);
  }

  // public apiAllPrj_first(){
  //   return this.http.get(this.url + "Mobile_Dashboard/coba")
  //       .map(res => res.json())
  //       .do(this.logResponse)
  //       .catch(this.catchError);
  // }

}
