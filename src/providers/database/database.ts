// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';


const DB_NAME: string = 'data.db';
const win: any = window;

@Injectable()
export class DatabaseProvider {

  private database: SQLiteObject;   //==database sqlite cordova
  private _db: any;                 //==database websql browser
  public sttPlatform: Boolean;
  aryRslt=[];

  constructor(
    public http: Http,
    public storage: SQLite,
    private platform: Platform
  ) {
    /* Split platform SQLite or WebSql
    * SQLite   : Live Mobile Storage.
    * WebSql   : Develompent debug database,table,query.
    * Author   : ptr.nov@gmail.com
    */
    platform.ready().then(() => {
      console.warn('platform Indentification');
      if (platform._platforms[0] == 'cordova') {
          console.warn('Storage: Sqlite cordova/Mobile Flatform - Create DB ');
          this.storage = new SQLite;
          this.storage.create({ name: DB_NAME ,location:"default" }).then( ( db: SQLiteObject ) => {
              this.database = db;
              // let qry="CREATE TABLE IF NOT EXISTS piter (ID INTEGER NULL PRIMARY KEY AUTOINCREMENT,NAME TEXT,SUMMARY TEXT,COMPANY TEXT)";
              // db.executeSql(qry,[]).then(()=>{
              //   console.log("Create Table Success");
              // });
              // var qryTbl="CREATE TABLE IF NOT EXISTS piter (ID INTEGER NULL PRIMARY KEY AUTOINCREMENT, NAME TEXT,SUMMARY TEXT,COMPANY TEXT)";
              var qryTbl="CREATE TABLE IF NOT EXISTS piter (UNIQ_ID TEXT NOT NULL,NAME TEXT,SUMMARY TEXT,COMPANY TEXT)";
              this.createTable(qryTbl,[]);
              var qryTblUniqe="CREATE UNIQUE INDEX IF NOT EXISTS idx_UNIQ_ID ON piter (UNIQ_ID);";
              this.createTable(qryTblUniqe,[]);

          }).catch((error) => {
            console.log(error);
          });
      } else {
        console.warn('Storage: WebSql Browser Flatform');
        this._db = win.openDatabase(DB_NAME, '1.0', '', 5 * 1024 * 1024);
        var qryTbl="CREATE TABLE IF NOT EXISTS piter (UNIQ_ID TEXT NOT NULL,NAME TEXT,SUMMARY TEXT,COMPANY TEXT)";
        this.createTable(qryTbl,[]);
        var qryTblUniqe="CREATE UNIQUE INDEX IF NOT EXISTS idx_UNIQ_ID ON piter (UNIQ_ID);";
        this.createTable(qryTblUniqe,[]);
      }
    });


  }

  /* Pungsi Create Table untuk WebSql Browser & Sqlite Cordova
  * tabel    : adalah tabel yang sudah di create sebelumnya.
  * querySql : Sql Query Syntak
  * Author   : ptr.nov@gmail.com
  */
  public createTable(querySql: string,value:any){
    console.warn('Function Create Table');
    //return new Promise((resolve)=>{
      //  this.platform.ready().then(() => {
        if (this.platform._platforms[0] == 'cordova') {
          // return new Promise((resolve, reject)=>{
            console.log('Sqlite cordova/Mobile Flatform' + querySql);
            /* inser sqlite query */
            //return new Promise((resolve, reject)=>{
              let sql =querySql;
              // this.storage.create({ name: DB_NAME ,location:"default" }).then(( db: SQLiteObject ) => {
                this.database.executeSql(sql,value).then((data)=>{
                  console.log('Suceess Create Table');
                  // resolve(data);
                }).catch((error) => {
                  console.log(error);
                });
              // });

            //});
        //  });
        }else{
           /* inser websql query */
          //return new Promise((resolve, reject)=>{
            //console.log('WebSql Browser Flatform');
            console.log('WebSql Browser Flatform to Function Create Table');
            let sql = querySql;
            this._db.transaction(function (tx) {
              tx.executeSql(sql,[],function(tx,results ) {
                console.log('return=' +  results.rows.item);
               // resolve(results);
              });
            });
          //});
        }
      //});
    //  });
  }

  /* Pungsi Tambah Data untuk WebSql Browser & Sqlite Cordova
  * tabel    : adalah tabel yang sudah di create sebelumnya.
  * querySql : Sql Query Syntak
  * Author   : ptr.nov@gmail.com
  * Call function :
  * let qry="INSERT INTO piter (usr,psw)  VALUES (?,?)";
    this.database.insertData(qry,[data['usr'],data['psw']]).then((msq)=>{
      //alert('message' + msq);
      console.log(msq);
    });
  * ListUser deklarasi  private ListUser: any;
  * ListUser send to html
  */
  public insertData(querySql:string,bindings:any=[]) {
    let statusSave:boolean;
    bindings = typeof bindings !== 'undefined' ? bindings : [];
    // return new Promise((resolve, reject)=>{
    //   this.platform.ready().then(() => {
        console.log('platform Insert Indentification');
        if (this.platform._platforms[0] == 'cordova') {
            console.log('Sqlite on device CordovaMobile, Command=' + querySql);
            // return new Promise((resolve, reject)=>{
              /* inser sqlite query */
                // var sql =querySql;
                // this.storage.create({ name: DB_NAME ,location:"default" }).then( ( db: SQLiteObject ) => {
                  return new Promise((resolve, reject)=>{
                    var srcRsltData=this.database.executeSql(querySql,bindings);
                      srcRsltData.then((data)=>{
                         console.log(data);
                        resolve(true);
                      //   //statusSave=true;
                          // return true;
                      });
                    });

              //  });

            // });
        }else{
          // return new Promise((resolve, reject)=>{
            console.log('WebSql Browser Flatform');
            let sql = querySql;
            this._db.transaction(function (tx) {
              tx.executeSql(sql,bindings);
              return true;
            },function (error) {
                return false;
                // console.log(error);
                // console.log(error.code);
                // console.log(error.message);
                // resolve(error);
                // statusSave=true;
            });
        }
        // return statusSave;
    //   })
    // });
  }

  /* Pungsi Select All Data untuk WebSql Browser & Sqlite Corddova
  * tabel    : adalah tabel yang sudah di create sebelumnya.
  * querySql : Sql Query Syntak
  * Author   : ptr.nov@gmail.com
  * Promise  : Resolve data
  * var querySql ="SELECT id, usr FROM piter ORDER BY id DESC";
    this.database.selectData(querySql,[]).then((data)=>{
      console.log(data);
      this.ListUser= data;
    });
  * ListUser deklarasi  private ListUser: any;
  * ListUser send to html
  */
  public selectData(querySql){
    let aryRsltInternal=[];
    return new Promise((resolve, reject)=>{
      this.platform.ready().then(() => {
        if (this.platform._platforms[0] == 'cordova') {
            console.log('START_SELECT-MODUL');
            console.log('Flatform - CordovaMobile Sqlite');
            console.log('COMMAND="' + querySql + '"');
            let srcRsltData=this.database.executeSql(querySql,[]);
            srcRsltData.then((results) => {
              if(results.rows.length > 0) {
                for(let i = 0; i < results.rows.length; i++) {
                  var item = results.rows.item(i);
                  for (var key in item) {
                    item[key] = item[key];
                  }
                  aryRsltInternal.push(item);
                    //== MANUAL COSTUMIZE===
                    // aryRsltInternal.push({
                    //   NAME: results.rows.item(i).NAME,
                    //   SUMMARY: results.rows.item(i).SUMMARY,
                    //   COMPANY: results.rows.item(i).COMPANY
                    // });
                };
                console.log(aryRsltInternal);
                console.log('END_SELECT-MODUL: Show_Data');
                resolve(aryRsltInternal);
              }else{
                console.log('END_SELECT-MODUL: No_Data');
                resolve([]);
              }
              //console.log(JSON.stringify(aryRslt2));
            },(error)=>{
                 console.log(error);
            }).catch(e => console.log(e));
        }else{
            this._db.transaction(function (tx){
                console.log('Flatform - WebSql Browser');
                console.log('START_SELECT-MODUL');
                console.log('COMMAND="' + querySql + '"');
                tx.executeSql(querySql,[], function(tx, results) {
                    if(results.rows.length > 0) {
                      for(let i = 0; i < results.rows.length; i++) {
                          var item = results.rows.item(i);
                          for (var key in item) {
                            item[key] = item[key];
                          }
                          aryRsltInternal.push(item);
                      }
                      console.log(aryRsltInternal);
                      console.log('END_SELECT-MODUL: Show_Data');
                      resolve(aryRsltInternal);
                    }else{
                      console.log('END_SELECT-MODUL: No-Data');
                      resolve([]);
                    }
                },function(tx, error){
                  resolve(error);
                });
            });
        }
      });
    });
  }

  public matchData(querySql,bindings,key){
    bindings = typeof bindings !== 'undefined' ? bindings : [];
    return new Promise((resolve) => {
      this.platform.ready().then(() => {
        console.log('platform Select Indentification1');
        if (this.platform._platforms[0] == 'cordova') {
            console.log('Sqlite cordova/Mobile Flatform');
            console.log(querySql);
            this.database.executeSql(querySql,bindings).then((results) => {
              resolve(results.rows.item(0).key);
              //resolve(results);
          });
        }else{
            console.log('WebSql Browser Flatform');
            this._db.transaction(function (tx) {
                console.log(querySql);
                tx.executeSql(querySql,bindings, function(tx, results) {
                  var aryRslt=[];
                  if(results.rows.length > 0) {
                    for(let i = 0; i < results.rows.length; i++) {
                      var item = results.rows.item(i);
                      for (var key in item) {
                        item[key] = item[key];
                      }
                      aryRslt.push(item);
                      //aryRslt.push(item['psw']);
                        //== MANUAL COSTUMIZE===
                        // aryRslt2.push({
                        //     id: results2.rows.item(inc2).id,
                        //     usr: results2.rows.item(inc2).usr
                        // });
                    }
                    resolve(aryRslt);
                  }else{
                    resolve(false);
                  }
                  // if(results.rows.length > 0) {
                  //   resolve(results.rows.item(0)[key]);
                  // }
                });
            });
        }
      });
    });
  }

}
