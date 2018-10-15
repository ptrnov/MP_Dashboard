import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http, Headers } from "@angular/http";
// import { Platform } from 'ionic-angular';
// import {map,first,reduce } from 'rxjs/operators';
// import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
// import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import { DatabaseProvider } from '../../providers/database/database';
// import { defaultDataSetting } from '../../providers/database/setting';
// import { defaultDataCardAll } from '../../providers/database/cardAll';
interface aryPageSetting{
  SORT:string,
  GRP:string,
  NAME:string,
  NILAI:string,
  STT_ACTIVE:string
};

@Injectable()
export class DashboardAllProvider {
  private url: string ="http://180.250.19.206/";
  // private url: string ="http://mproject.mitratel.int/";
  // private url: string ="http://127.0.0.1/";
  // private url: string ="http://192.168.1.7/";
  // private url: string ="http://172.20.10.9/";
  // private subscription1;
  // private subscription2;
  private caba:any;
  // public getPageSetting_FilterManthYear:{}=defaultDataSetting.filter;
  // public getAllProject_first:{}=defaultDataCardAll.dsh1;
  constructor(
      // public httpClient: HttpClient,
      private http: Http,
      // private platform: Platform,
      private database: DatabaseProvider
  ) {
    console.log('Hello DashboardAllProvider Provider');
    // this.platform.ready().then(() => {
    //   console.log('Hello DashboardAllProvider Provider');
      // this.getPageSetting_FilterManthYear=defaultDataSetting.filter;
      // this.getAllProject_first=defaultDataCardAll.dsh1;
    //   if (this.platform._platforms[0] == 'cordova') {
        // this.getAllPrj();
        // this.getSetting();
    //   }else{
    //     this.getAllPrj();
    //     this.getSetting();
    //   }
    // });
  }

  // public initData(){
  //   return "Init First Data";
  // }

  private catchError(error:Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "server error.");
  }

  private logResponse(res:Response | any){
    console.log(res);
  }

  getDataAll(){
    return this.http.get(this.url + "Mobile_Dashboard/user_login/field_eng1@mitratel.co.id/password")
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
    let x=this.http.get(this.url + "Mobile_Dashboard/coba");
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
   getAllPrj():void {
    // var x1=this.http.get(this.url + "Mobile_Dashboard/allproject").map(res => res.json());
    var x1=this.http.get(this.url + "Mobile_Dashboard/dshAll/10/2018").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO ALL_PRJ (URUTAN,SEQ,GRP,BULAN,TAHUN,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

          data.dsh1.forEach(element => {
            this.database.insertData(qry,[
              element.URUTAN,
              element.SEQ,
              element.GRP,
              element.BULAN,
              element.TAHUN,
              element.NILAI,
              element.PERSEN,
              element.AREA1,
              element.AREA2,
              element.AREA3,
              element.AREA4
            ]);
          });
          console.log("success load Api - All Project");

        });
    }

    /* B2S Project
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getB2SPrj():void {
    var x1=this.http.get(this.url + "Mobile_Dashboard/b2sproject").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO B2S_PRJ (URUTAN,SEQ,GRP,BULAN,TAHUN,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4,SIS,SITAC1,SITAC2,CME,RFC,RFI,ARFI_NILAI2) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

          data.dsh1.forEach(element => {
            this.database.insertData(qry,[
              element.URUTAN,
              element.SEQ,
              element.GRP,
              element.BULAN,
              element.TAHUN,
              element.NILAI,
              element.PERSEN,
              element.AREA1,
              element.AREA2,
              element.AREA3,
              element.AREA4,
              element.SIS,
              element.SITAC1,
              element.SITAC2,
              element.CME,
              element.RFC,
              element.RFI,
              element.ARFI_NILAI2
            ]);
          });
          console.log("success load Api - B2S Project");
        });
    }

    /* CORE Project
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getCorePrj():void {
    var x1=this.http.get(this.url + "Mobile_Dashboard/coreproject").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO CORE_PRJ (URUTAN,SEQ,GRP,BULAN,TAHUN,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4,SurveySITAC,CME,RFI,BAUT,ARFI_NILAI2) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

          data.dsh1.forEach(element => {
            this.database.insertData(qry,[
              element.URUTAN,
              element.SEQ,
              element.GRP,
              element.BULAN,
              element.TAHUN,
              element.NILAI,
              element.PERSEN,
              element.AREA1,
              element.AREA2,
              element.AREA3,
              element.AREA4,
              element.SurveySITAC,
              element.CME,
              element.RFI,
              element.BAUT,
              element.ARFI_NILAI2
            ]);
          });
          console.log("success load Api - CORE Project");
        });
    }

    /* MICROCELL Project
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getMcpPrj():void {
    var x1=this.http.get(this.url + "Mobile_Dashboard/microcellproject").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO MCP_PRJ (URUTAN,SEQ,GRP,BULAN,TAHUN,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4,SIS,SITAC1,SITAC2,CME,RFC,FO,RFI,ARFI_NILAI2) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

          data.dsh1.forEach(element => {
            this.database.insertData(qry,[
              element.URUTAN,
              element.SEQ,
              element.GRP,
              element.BULAN,
              element.TAHUN,
              element.NILAI,
              element.PERSEN,
              element.AREA1,
              element.AREA2,
              element.AREA3,
              element.AREA4,
              element.SIS,
              element.SITAC1,
              element.SITAC2,
              element.CME,
              element.RFC,
              element.FO,
              element.RFI,
              element.ARFI_NILAI2
            ]);
          });
          console.log("success load Api - MICROCELL Project");
        });
    }

    /* SPECIAL Project
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getSpPrj():void {
    var x1=this.http.get(this.url + "Mobile_Dashboard/specialproject").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO SP_PRJ (URUTAN,SEQ,GRP,BULAN,TAHUN,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4,BAST,ARFI_NILAI2) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";

          data.dsh1.forEach(element => {
            this.database.insertData(qry,[
              element.URUTAN,
              element.SEQ,
              element.GRP,
              element.BULAN,
              element.TAHUN,
              element.NILAI,
              element.PERSEN,
              element.AREA1,
              element.AREA2,
              element.AREA3,
              element.AREA4,
              element.BAST,
              element.ARFI_NILAI2
            ]);
          });
          console.log("success load Api - SPECIAL Project");
        });
    }

    /* CHART DATA PROJECT
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getChartData():void {
    // var x1=this.http.get(this.url + "/dashboard/get_chart_project_summary").map(res => res.json());
    var x1=this.http.get(this.url + "Mobile_Dashboard/chartdata").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO TBL_CHART (ID_CHART,BULAN,TAHUN,NM_CHART,TITLE,KTG,TARGET_RFI,ACTUAL_RFI,TARGET,ACTUAL) VALUES (?,?,?,?,?,?,?,?,?,?)";

          data.chart.forEach(element => {
            this.database.insertData(qry,[
              element.ID_CHART,
              element.BULAN,
              element.TAHUN,
              element.NM_CHART,
              element.TITLE,
              element.KTG,
              element.TARGET_RFI,
              element.ACTUAL_RFI,
              element.TARGET,
              element.ACTUAL
            ]);
          });
          console.log("success load Api - Chart Data Project");
        });
    }

    /* MAP DATA ALL PROJECT
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getMapData():void {
    // var x1=this.http.get(this.url + "/dashboard/get_chart_project_summary").map(res => res.json());
    var x1=this.http.get(this.url + "Mobile_Dashboard/dshmap").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO TBL_PETA(project_id,area,lat,long,radius,site_name,nama_tenant,regional,sow,release_status,target_rfi,progress_status,pf_code,flag_mitra,from_pmo,flag_ventura) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
          data.Release.forEach(element => {
            this.database.insertData(qry,[
              element.grp,
              element.project_id,
              element.area,
              element.lat,
              element.long,
              element.radius,
              element.site_nm,
              element.tenan_nm,
              element.regional,
              element.sow,
              element.status
            ]);
          });
          console.log("success load Api - MAP Data Project");
        });
    }

    /* MAP DATA B2S PROJECT
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getMapB2s():void {
    // var x1=this.http.get(this.url + "/dashboard/get_chart_project_summary").map(res => res.json());
    var x1=this.http.get(this.url + "Mobile_Dashboard/mapb2s").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO TBL_PETA_B2S (GRP,PROJECT_ID,AREA,LAT,LONG,RADIUS,SITE_NM,TENAN_NM,REGIONAL,SOW,STATUS) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
          data.Release.forEach(element => {
            this.database.insertData(qry,[
              element.GRP,
              element.PROJECT_ID,
              element.AREA,
              element.LAT,
              element.LONG,
              element.RADIUS,
              element.SITE_NM,
              element.TENAN_NM,
              element.REGIONAL,
              element.SOW,
              element.STATUS
            ]);
          });
          console.log("success load Api - MAP Data Project");
        });
    }

    /* MAP DATA CORE PROJECT
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getMapCore(){
    // var x1=this.http.get(this.url + "/dashboard/get_chart_project_summary").map(res => res.json());
    var x1=this.http.get(this.url + "Mobile_Dashboard/dshMap").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT INTO TBL_PETA_CORE (grp,project_id,area,lat,long,radius,site_nm,tenan_nm,regional,sow,status) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
          // var qry="INSERT OR REPLACE INTO TBL_PETA_CORE (grp,project_id,area,lat,long,radius,site_nm,tenan_nm,regional,sow,status) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
          data.forEach(element => {
            this.database.insertData(qry,[
              element.grp,
              element.project_id,
              element.area,
              element.lat,
              element.long,
              element.radius,
              element.site_nm,
              element.tenan_nm,
              element.regional,
              element.sow,
              element.status
            ]);
          });
          console.log("success load Api - MAP Data Project");
        });
    }

    /* MAP DATA MICROCEL PROJECT
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
    getMapMcp():void {
      // var x1=this.http.get(this.url + "/dashboard/get_chart_project_summary").map(res => res.json());
      var x1=this.http.get(this.url + "Mobile_Dashboard/mapmicrocell").map(res => res.json());
          x1.subscribe(data => {
            // var data=res.json();
            var qry="INSERT OR REPLACE INTO TBL_PETA_MCP (GRP,PROJECT_ID,AREA,LAT,LONG,RADIUS,SITE_NM,TENAN_NM,REGIONAL,SOW,STATUS) VALUES (?,?,?,?,?,?,?,?,?,?)";
            data.Release.forEach(element => {
              this.database.insertData(qry,[
                element.GRP,
                element.PROJECT_ID,
                element.AREA,
                element.LAT,
                element.LONG,
                element.RADIUS,
                element.SITE_NM,
                element.TENAN_NM,
                element.REGIONAL,
                element.SOW,
                element.STATUS
              ]);
            });
            console.log("success load Api - MAP Data Project");
          });
    }

    /* MAP DATA SPECIAL PROJECT
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getMapSp():void {
    // var x1=this.http.get(this.url + "/dashboard/get_chart_project_summary").map(res => res.json());
    var x1=this.http.get(this.url + "Mobile_Dashboard/mapsp").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO TBL_PETA_SP (GRP,PROJECT_ID,AREA,LAT,LONG,RADIUS,SITE_NM,TENAN_NM,REGIONAL,SOW,STATUS) VALUES (?,?,?,?,?,?,?,?,?,?)";
          data.Release.forEach(element => {
            this.database.insertData(qry,[
              element.GRP,
              element.PROJECT_ID,
              element.AREA,
              element.LAT,
              element.LONG,
              element.RADIUS,
              element.SITE_NM,
              element.TENAN_NM,
              element.REGIONAL,
              element.SOW,
              element.STATUS
            ]);
          });
          console.log("success load Api - MAP Data Project");
        });
  }


  /* MAP USER
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getMitraList():void {
    // var x1=this.http.get(this.url + "/dashboard/get_chart_project_summary").map(res => res.json());
    var x1=this.http.get(this.url + "Mobile_Dashboard/mitralist").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO TBL_MITRALIST(VENDOR_ID,VENDOR_NM) VALUES (?,?)";
          data.mitra.forEach(element => {
            this.database.insertData(qry,[
              element.VENDOR_ID,
              element.VENDOR_NM
            ]);
          });
          console.log("success load Api - User");
        });
  }

  /* MAP USER
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getUser():void {
    // var x1=this.http.get(this.url + "/dashboard/get_chart_project_summary").map(res => res.json());
    var x1=this.http.get(this.url + "Mobile_Dashboard/listuser").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO TBL_USER (USER_ID,USERNAME,PASSWORD,REAL_NAME,EMAIL,USER_GROUP) VALUES (?,?,?,?,?,?)";
          data.user.forEach(element => {
            this.database.insertData(qry,[
              element.USER_ID,
              element.USERNAME,
              element.PASSWORD,
              element.REAL_NAME,
              element.EMAIL,
              element.USER_GROUP
            ]);
          });
          console.log("success load Api - User");
        });
  }
    /* APP SETTING
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
   getSetting():void{
    var x1=this.http.get(this.url + "Mobile_Dashboard/setting").map(res => res.json());
        x1.subscribe(data => {
          // var data=res.json();
          var qry="INSERT OR REPLACE INTO APPSETTING(SORT,NAME,NILAI,STT_ACTIVE) VALUES (?,?,?,?)";
          data.filter.forEach(element => {
            this.database.insertData(qry,[
              element.SORT,
              element.NAME,
              element.NILAI,
              element.STT_ACTIVE
            ]);
          });
          console.log("success load Api - Setting");
          // this.setPageSetting_FilterManthYear();
      });
    }

    /**
   * PageSetting
   * Method : GET
   * Array  : getPageSetting_FilterManthYear
   */
  // setPageSetting_FilterManthYear():void{
  //   var querySql ="SELECT SORT,GRP,NAME,NILAI,STT_ACTIVE FROM APPSETTING"
  //     +" ORDER BY GRP,SORT ASC";
  //     this.database.selectData(querySql).then(data=>{
  //       // setTimeout(()=>{
  //         // if (data[0].length>0){
  //         //   console.log(data);
  //           // return data;
  //           // this.getPageSetting_FilterManthYear=data;
  //         // }else{
  //         //   this.getPageSetting_FilterManthYear=[];
  //         // }
  //       // },500);
  //   });
  // }

  // /**
  //  * AllProject
  //  * Method : GET
  //  * Array  : getPageSetting_FilterManthYear
  //  */
  // setAllProject_first():void{
  //   var querySql ="SELECT URUTAN,SEQ,GRP,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4 FROM ALL_PRJ"
  //                 +" ORDER BY SEQ,GRP DESC,URUTAN ASC";
  //     this.database.selectData(querySql).then(data=>{
  //       // setTimeout(()=>{
  //       //   if (data[0].length>0){
  //       //     console.log(data);
  //           // return data;
  //            this.getAllProject_first=data;
  //       //   }else{
  //       //     this.getAllProject_first=[];
  //       //   }
  //       // },500);
  //   });

  // }

  postData(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      // this.http.get("http://192.168.100.3/" + "Mobile_Dashboard/login/"+ credentials)
      this.http.get(this.url + "Mobile_Dashboard/login/"+ credentials)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  postDatax(activity,credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      // this.http.get("http://192.168.100.3/" + "Mobile_Dashboard/login/"+ credentials)
      this.http.get(this.url + activity + credentials)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  postApiMap(activity,credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      // this.http.get("http://192.168.100.3/" + "Mobile_Dashboard/login/"+ credentials)
      let rslt=this.http.get(this.url + activity + credentials).map(res => res.json());
      rslt.subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }
}
