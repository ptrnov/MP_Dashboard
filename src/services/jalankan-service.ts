import { DashboardAllProvider } from "../providers/dashboard-all/dashboard-all";
import { DatabaseProvider } from '../providers/database/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { api } from './config';

import { map, catchError } from 'rxjs/operators';

@Injectable()
export class JalankanService {
  apiKey = '1e4a0bdb251c64e4';
  url: string;
  queryNotFound: string;

  constructor(
    public http: HttpClient,
    private dashboarAll: DashboardAllProvider,
    private database: DatabaseProvider,
  ){

  }

  loadPeriodik_coba(){
    // this.dashboarAll.getResUrl_coba().subscribe(data=>{
    //     var qry="INSERT OR REPLACE INTO piter (UNIQ_ID,NAME,SUMMARY,COMPANY) VALUES (?,?,?,?)";
    //     data.technologies.forEach(element => {
    //         this.database.insertData(qry,[
    //           element.uniq_id,
    //           element.name,
    //           element.summary,
    //           element.company
    //         ]);
    //       });
    //     console.log("success load Api");
    // });
  }

}
