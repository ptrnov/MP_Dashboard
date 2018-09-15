webpackJsonp([12],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardAllProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the DashboardAllProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DashboardAllProvider = (function () {
    // private url: string ="http://192.168.1.135/";
    // private url: string ="http://172.20.10.9/";
    function DashboardAllProvider(httpClient, http, database) {
        this.httpClient = httpClient;
        this.http = http;
        this.database = database;
        // private url: string ="http://mproject.mitratel.int/";
        this.url = "http://192.168.100.5/";
        console.log('Hello DashboardAllProvider Provider');
    }
    DashboardAllProvider.prototype.getDataAll = function () {
        return this.http.get(this.url + "mobile_dashboard/user_login/field_eng1@mitratel.co.id/password")
            .do(function (res) { return console.log(res); });
    };
    DashboardAllProvider.prototype.getCobaData = function () {
        return this.http.get(this.url + "mobile_dashboard/coba")
            .map(function (res) { return res.json(); });
    };
    DashboardAllProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], DashboardAllProvider);
    return DashboardAllProvider;
}());

//# sourceMappingURL=dashboard-all.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_trips__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                return this.trips[i];
            }
        }
        return null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    TripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TripService);
    return TripService;
}());

//# sourceMappingURL=trip-service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dsh1SecondNoreleasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dashboard_all_dashboard_all__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// var rsltData: any;
var promises = [];
var Dsh1SecondNoreleasePage = (function () {
    function Dsh1SecondNoreleasePage(navCtrl, navParams, _HTTP, dashboarAll, dp, 
        // private dbCharting: ChartingService,
        zone, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._HTTP = _HTTP;
        this.dashboarAll = dashboarAll;
        this.dp = dp;
        this.zone = zone;
        this.platform = platform;
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
        platform.ready().then(function () {
        });
    }
    Dsh1SecondNoreleasePage.prototype.ionViewDidLoad = function () {
        // this.dashboarAll.getCobaData().subscribe(data=>{
        //   //console.log(data.technologies[0]['name']);
        //   // this.ambilDataRrows = data;
        //   //this.rows=data.technologies;
        //     data.technologies.forEach(element => {
        //       // console.log('data=' + element.summary);
        //       this.masukinDatabaru("'"+element.name+"'","'"+element.summary+"'","'"+element.company+"'");
        //    });
        //  });
        this.masukinDatabaru("Piter", "Zakirnaik", "Dedat");
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
        this.ambilDataBaru();
        this.ambilDataBaru();
        // setTimeout(()=> {
        //    console.log(this.rsltData);
        // this.rows =this.rsltData;
        // },50);
        //
    };
    // getCobaData(){
    //   this.dashboarAll.getCobaData().subscribe(data=>console.log(data));
    // }
    Dsh1SecondNoreleasePage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
    };
    Dsh1SecondNoreleasePage.prototype.masukinDatabaru = function (name, summary, company) {
        // console.log('data=' + name);
        var qry = "INSERT INTO piter (NAME,SUMMARY,COMPANY) VALUES (?,?,?)";
        this.dp.insertData(qry, [name.toString, summary.toString, company.toString]);
    };
    Dsh1SecondNoreleasePage.prototype.ambilDataBaru = function () {
        var _this = this;
        var querySql = "SELECT NAME,SUMMARY,COMPANY FROM piter ORDER BY NAME DESC";
        // var data=this.database.selectData(querySql,[]);
        var getDataQry = this.dp.selectData(querySql, []);
        // getDataQry.then((data)=>{
        //alert('message' + msq);
        // this.rsltData=data;
        getDataQry.then(function (data) {
            setTimeout(function () {
                // console.log(this.rsltData);
                // console.log(data);
                _this.rows = data;
                // console.log(data);
            }, 100);
        });
        // return data;
        // });
        // .then((data)=>{
        //  console.log(data);
        //  this.aryRslt=data;
        // return data.rows.;
        // this.rows =data;
        // this.rsltData=data;
        // var datax: any=data;
        // });
    };
    Dsh1SecondNoreleasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dsh1-second-norelease',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh1-second-norelease\dsh1-second-norelease.html"*/'<ion-header color="primary">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        <div style="width:100%; text-align: center">\n            <div class="norepease-logo"></div>\n            <ion-label>No Release Detail</ion-label>\n        </div>\n    </ion-title>\n    <ion-buttons end>\n      <!-- <button ion-button tappable>\n          <img class="home-satelit" src="assets/img/satellite.png">\n      </button> -->\n      <button ion-button tappable (click)="goToAccount()">\n          <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="common-bg">\n    <ion-grid class="common-bg" style="margin-left: -10px; margin-top: 10px">\n      <ion-row class="full-width" style="margin-top: -20px">\n        <!-- All Project -->\n        <ion-col col-3>\n            <ion-card class="card full-width">\n                <div id="divSecond[3]">\n                  <ion-card-header class="header-title">\n                    All Project\n                  </ion-card-header>\n                  <ion-card-content>\n                      <div class="row">\n                            <div class="left-icon">\n                              <img  id="second-img-3" src="assets/img/new/All_Project_m.png" style="margin-top:-10px;">\n                              <!-- <ion-icon class="fa-home"></ion-icon> -->\n                              <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                              <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                            </div>\n                            <div class="right-text">\n                                <ion-label id="secondValue[3]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px;margin-bottom:-5px">99 </ion-label>\n                            </div>\n                      </div>\n                  </ion-card-content>\n                </div>\n                <ion-row class="footer-color-block">\n                    <div class="row">\n                      <ion-col class="footer-title">\n                            Total\n                      </ion-col>\n                    </div>\n                </ion-row>\n            </ion-card>\n          </ion-col>\n          <!-- NOT RELEASE -->\n          <ion-col col-3 id="divId_noRelease">\n              <ion-card class="card full-width">\n                  <div id="divSecond[0]">\n                    <ion-card-header class="header-title">\n                      Not Release\n                    </ion-card-header>\n                    <ion-card-content>\n                      <div class="row">\n                        <div  class="left-icon">\n                            <img  id="second-img-0" src="assets/img/new/Not_Release_m.png" style="margin-top:-10px;">\n                            <!-- <ion-icon class="fa fa-home"></ion-icon> -->\n                            <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                            <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                        </div>\n                        <div class="right-text" >\n                            <ion-label id="secondValue[0]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px">10.000.000</ion-label>\n                        </div>\n                        <!-- <ion-icon   name="lock" ></ion-icon> -->\n                        <!-- <img class="second-card-content-left-icon" src="../assets/img/new/Not_Release_m.png"> -->\n                      </div>\n                    </ion-card-content>\n                  </div>\n                  <ion-row class="footer-color-block">\n                      <div class="row">\n                        <ion-col class="footer-title">\n                              Total\n                        </ion-col>\n                      </div>\n                  </ion-row>\n                </ion-card>\n          </ion-col>\n          <!-- PROJECT ON PIPE -->\n          <ion-col col-3>\n              <ion-card class="card full-width">\n                  <div id="divSecond[1]">\n                    <ion-card-header class="header-title">\n                    Prj on Pipe\n                    </ion-card-header>\n                    <ion-card-content>\n                      <div class="row">\n                        <div class="left-icon">\n                            <img  id="second-img-1" src="assets/img/new/PoP_m.png" style="margin-top:-10px;">\n                            <!-- <ion-icon class="fa-home"></ion-icon> -->\n                            <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                            <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                        </div>\n                        <div class="right-text">\n                            <ion-label id="secondValue[1]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px">100 %</ion-label>\n                        </div>\n                        <!-- <ion-icon   name="lock" ></ion-icon> -->\n                        <!-- <img class="second-card-content-left-icon" src="../assets/img/new/PoP_m.png"> -->\n                      </div>\n                    </ion-card-content>\n                  </div>\n                  <ion-row class="footer-color-block">\n                      <div class="row">\n                        <ion-col class="footer-title">\n                              Total\n                        </ion-col>\n                      </div>\n                  </ion-row>\n              </ion-card>\n          </ion-col>\n          <!-- RFI -->\n          <ion-col col-3>\n              <ion-card class="card full-width">\n                  <div id="divSecond[2]">\n                    <ion-card-header class="header-title">\n                      After Rfi\n                    </ion-card-header>\n                    <ion-card-content>\n                        <div class="row">\n                              <div class="left-icon">\n                                <img  id="second-img-2" src="assets/img/new/Rfi_m.png" style="margin-top:-10px;">\n                                <!-- <ion-icon class="fa-home"></ion-icon> -->\n                                <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                                <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                              </div>\n                              <div class="right-text">\n                                  <ion-label id="secondValue[2]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px">88 %</ion-label>\n                              </div>\n                        </div>\n                    </ion-card-content>\n                  </div>\n                  <ion-row class="footer-color-block">\n                      <div class="row">\n                        <ion-col class="footer-title">\n                              Total\n                        </ion-col>\n                      </div>\n                  </ion-row>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="margin-left:2%">\n            <ngx-datatable\n              [sortType]="multi"\n              [headerHeight]="50"\n              [footerHeight]="50"\n              [rowHeight]="50"\n              [rows]="rows"\n              [columns]="columns"\n              [columnMode]="\'force\'"\n              [limit]="10">\n            </ngx-datatable>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh1-second-norelease\dsh1-second-norelease.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_dashboard_all_dashboard_all__["a" /* DashboardAllProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */]])
    ], Dsh1SecondNoreleasePage);
    return Dsh1SecondNoreleasePage;
}());

//# sourceMappingURL=dsh1-second-norelease.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dsh1SecondPrjonpipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Dsh1SecondPrjonpipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Dsh1SecondPrjonpipePage = (function () {
    function Dsh1SecondPrjonpipePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.dataArys = [
            { persen: '0 - 20 %', nilai: '1137' },
            { persen: '> 20 % - 50 %', nilai: '65' },
            { persen: '> 50 % - 100 %', nilai: '274' },
            { persen: 'No Activity', nilai: '604' }
        ];
    }
    Dsh1SecondPrjonpipePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Dsh1SecondPrjonpipePage');
    };
    Dsh1SecondPrjonpipePage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    Dsh1SecondPrjonpipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dsh1-second-prjonpipe',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh1-second-prjonpipe\dsh1-second-prjonpipe.html"*/'\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-header style="background-color:#FA8633">\n             <ion-title>\n                <div style="width:100%; text-align: center; float:left;">\n                    <div class="prjonpipe-logo"></div>\n                    <ion-label>Project On Pipe</ion-label>\n                </div>\n                <i class="fa fa-remove fa-1x"  style="margin-left:-10px" (click)="closeModal()"></i>\n            </ion-title>\n      </ion-header>\n    </ion-row>\n    <ion-row>\n        <ion-col style="margin-top:50px">\n          <ion-list>\n              <ion-item *ngFor="let item of dataArys" style="color:black;background-color:white">\n                  <ion-grid>\n                    <ion-row style="height:10px;">\n                      <ion-col col-6 style="margin-top:-10px">{{item.persen}}</ion-col>\n                      <ion-col col-6 style="margin-top:-10px">{{item.nilai}}</ion-col>\n                    </ion-row>\n                </ion-grid>\n              </ion-item>\n          </ion-list>\n        </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col width-50>\n        <button ion-button block  outline (click)="closeModal()">Cancel</button>\n      </ion-col>\n\n      <ion-col width-50>\n        <button ion-button block  type="submit">Ok</button>\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh1-second-prjonpipe\dsh1-second-prjonpipe.html"*/,
        })
        // export interface dataList{
        //   persen: string;
        //   nilai: any;
        // }
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], Dsh1SecondPrjonpipePage);
    return Dsh1SecondPrjonpipePage;
}());

//# sourceMappingURL=dsh1-second-prjonpipe.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dsh1SecondRfiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Dsh1SecondRfiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Dsh1SecondRfiPage = (function () {
    function Dsh1SecondRfiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Dsh1SecondRfiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Dsh1SecondRfiPage');
    };
    Dsh1SecondRfiPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    Dsh1SecondRfiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dsh1-second-rfi',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh1-second-rfi\dsh1-second-rfi.html"*/'<ion-header color="primary">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        <div style="width:100%; text-align: center">\n            <div class="rfi-logo"></div>\n            <ion-label>RFI Details</ion-label>\n        </div>\n    </ion-title>\n    <ion-buttons end>\n      <!-- <button ion-button tappable>\n          <img class="home-satelit" src="assets/img/satellite.png">\n      </button> -->\n      <button ion-button tappable (click)="goToAccount()">\n          <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="common-bg">\n    <ion-grid class="common-bg" style="margin-left: -10px; margin-top: 10px">\n      <ion-row class="full-width" style="margin-top: -20px">\n        <!-- All Project -->\n        <ion-col col-3>\n            <ion-card class="card full-width">\n                <div id="divSecond[3]">\n                  <ion-card-header class="header-title">\n                    All Project\n                  </ion-card-header>\n                  <ion-card-content>\n                      <div class="row">\n                            <div class="left-icon">\n                              <img  id="second-img-3" src="assets/img/new/All_Project_m.png" style="margin-top:-10px;">\n                              <!-- <ion-icon class="fa-home"></ion-icon> -->\n                              <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                              <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                            </div>\n                            <div class="right-text">\n                                <ion-label id="secondValue[3]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px;margin-bottom:-5px">99 </ion-label>\n                            </div>\n                      </div>\n                  </ion-card-content>\n                </div>\n                <ion-row class="footer-color-block">\n                    <div class="row">\n                      <ion-col class="footer-title">\n                            Total\n                      </ion-col>\n                    </div>\n                </ion-row>\n            </ion-card>\n          </ion-col>\n          <!-- NOT RELEASE -->\n          <ion-col col-3 id="divId_noRelease">\n              <ion-card class="card full-width">\n                  <div id="divSecond[0]">\n                    <ion-card-header class="header-title">\n                      Not Release\n                    </ion-card-header>\n                    <ion-card-content>\n                      <div class="row">\n                        <div  class="left-icon">\n                            <img  id="second-img-0" src="assets/img/new/Not_Release_m.png" style="margin-top:-10px;">\n                            <!-- <ion-icon class="fa fa-home"></ion-icon> -->\n                            <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                            <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                        </div>\n                        <div class="right-text" >\n                            <ion-label id="secondValue[0]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px">10.000.000</ion-label>\n                        </div>\n                        <!-- <ion-icon   name="lock" ></ion-icon> -->\n                        <!-- <img class="second-card-content-left-icon" src="../assets/img/new/Not_Release_m.png"> -->\n                      </div>\n                    </ion-card-content>\n                  </div>\n                  <ion-row class="footer-color-block">\n                      <div class="row">\n                        <ion-col class="footer-title">\n                              Total\n                        </ion-col>\n                      </div>\n                  </ion-row>\n                </ion-card>\n          </ion-col>\n          <!-- PROJECT ON PIPE -->\n          <ion-col col-3>\n              <ion-card class="card full-width">\n                  <div id="divSecond[1]">\n                    <ion-card-header class="header-title">\n                    Prj on Pipe\n                    </ion-card-header>\n                    <ion-card-content>\n                      <div class="row">\n                        <div class="left-icon">\n                            <img  id="second-img-1" src="assets/img/new/PoP_m.png" style="margin-top:-10px;">\n                            <!-- <ion-icon class="fa-home"></ion-icon> -->\n                            <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                            <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                        </div>\n                        <div class="right-text">\n                            <ion-label id="secondValue[1]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px">100 %</ion-label>\n                        </div>\n                        <!-- <ion-icon   name="lock" ></ion-icon> -->\n                        <!-- <img class="second-card-content-left-icon" src="../assets/img/new/PoP_m.png"> -->\n                      </div>\n                    </ion-card-content>\n                  </div>\n                  <ion-row class="footer-color-block">\n                      <div class="row">\n                        <ion-col class="footer-title">\n                              Total\n                        </ion-col>\n                      </div>\n                  </ion-row>\n              </ion-card>\n          </ion-col>\n          <!-- RFI -->\n          <ion-col col-3>\n              <ion-card class="card full-width">\n                  <div id="divSecond[2]">\n                    <ion-card-header class="header-title">\n                      After Rfi\n                    </ion-card-header>\n                    <ion-card-content>\n                        <div class="row">\n                              <div class="left-icon">\n                                <img  id="second-img-2" src="assets/img/new/Rfi_m.png" style="margin-top:-10px;">\n                                <!-- <ion-icon class="fa-home"></ion-icon> -->\n                                <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                                <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                              </div>\n                              <div class="right-text">\n                                  <ion-label id="secondValue[2]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px">88 %</ion-label>\n                              </div>\n                        </div>\n                    </ion-card-content>\n                  </div>\n                  <ion-row class="footer-color-block">\n                      <div class="row">\n                        <ion-col class="footer-title">\n                              Total\n                        </ion-col>\n                      </div>\n                  </ion-row>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh1-second-rfi\dsh1-second-rfi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Dsh1SecondRfiPage);
    return Dsh1SecondRfiPage;
}());

//# sourceMappingURL=dsh1-second-rfi.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dsh1SecondAfterrfiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Dsh1SecondAfterrfiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Dsh1SecondAfterrfiPage = (function () {
    function Dsh1SecondAfterrfiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Dsh1SecondAfterrfiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Dsh1SecondAfterrfiPage');
    };
    Dsh1SecondAfterrfiPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    Dsh1SecondAfterrfiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dsh1-second-afterrfi',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh1-second-afterrfi\dsh1-second-afterrfi.html"*/'<ion-header color="primary">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        <div style="width:100%; text-align: center">\n            <div class="afterrfi-logo"></div>\n            <ion-label>After RFI Details</ion-label>\n        </div>\n    </ion-title>\n    <ion-buttons end>\n      <!-- <button ion-button tappable>\n          <img class="home-satelit" src="assets/img/satellite.png">\n      </button> -->\n      <button ion-button tappable (click)="goToAccount()">\n          <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="common-bg">\n    <ion-grid class="common-bg" style="margin-left: -10px; margin-top: 10px">\n      <ion-row class="full-width" style="margin-top: -20px">\n        <!-- All Project -->\n        <ion-col col-3>\n            <ion-card class="card full-width">\n                <div id="divSecond[3]">\n                  <ion-card-header class="header-title">\n                    All Project\n                  </ion-card-header>\n                  <ion-card-content>\n                      <div class="row">\n                            <div class="left-icon">\n                              <img  id="second-img-3" src="assets/img/new/All_Project_m.png" style="margin-top:-10px;">\n                              <!-- <ion-icon class="fa-home"></ion-icon> -->\n                              <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                              <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                            </div>\n                            <div class="right-text">\n                                <ion-label id="secondValue[3]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px;margin-bottom:-5px">99 </ion-label>\n                            </div>\n                      </div>\n                  </ion-card-content>\n                </div>\n                <ion-row class="footer-color-block">\n                    <div class="row">\n                      <ion-col class="footer-title">\n                            Total\n                      </ion-col>\n                    </div>\n                </ion-row>\n            </ion-card>\n          </ion-col>\n          <!-- NOT RELEASE -->\n          <ion-col col-3 id="divId_noRelease">\n              <ion-card class="card full-width">\n                  <div id="divSecond[0]">\n                    <ion-card-header class="header-title">\n                      Not Release\n                    </ion-card-header>\n                    <ion-card-content>\n                      <div class="row">\n                        <div  class="left-icon">\n                            <img  id="second-img-0" src="assets/img/new/Not_Release_m.png" style="margin-top:-10px;">\n                            <!-- <ion-icon class="fa fa-home"></ion-icon> -->\n                            <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                            <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                        </div>\n                        <div class="right-text" >\n                            <ion-label id="secondValue[0]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px">10.000.000</ion-label>\n                        </div>\n                        <!-- <ion-icon   name="lock" ></ion-icon> -->\n                        <!-- <img class="second-card-content-left-icon" src="../assets/img/new/Not_Release_m.png"> -->\n                      </div>\n                    </ion-card-content>\n                  </div>\n                  <ion-row class="footer-color-block">\n                      <div class="row">\n                        <ion-col class="footer-title">\n                              Total\n                        </ion-col>\n                      </div>\n                  </ion-row>\n                </ion-card>\n          </ion-col>\n          <!-- PROJECT ON PIPE -->\n          <ion-col col-3>\n              <ion-card class="card full-width">\n                  <div id="divSecond[1]">\n                    <ion-card-header class="header-title">\n                    Prj on Pipe\n                    </ion-card-header>\n                    <ion-card-content>\n                      <div class="row">\n                        <div class="left-icon">\n                            <img  id="second-img-1" src="assets/img/new/PoP_m.png" style="margin-top:-10px;">\n                            <!-- <ion-icon class="fa-home"></ion-icon> -->\n                            <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                            <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                        </div>\n                        <div class="right-text">\n                            <ion-label id="secondValue[1]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px">100 %</ion-label>\n                        </div>\n                        <!-- <ion-icon   name="lock" ></ion-icon> -->\n                        <!-- <img class="second-card-content-left-icon" src="../assets/img/new/PoP_m.png"> -->\n                      </div>\n                    </ion-card-content>\n                  </div>\n                  <ion-row class="footer-color-block">\n                      <div class="row">\n                        <ion-col class="footer-title">\n                              Total\n                        </ion-col>\n                      </div>\n                  </ion-row>\n              </ion-card>\n          </ion-col>\n          <!-- RFI -->\n          <ion-col col-3>\n              <ion-card class="card full-width">\n                  <div id="divSecond[2]">\n                    <ion-card-header class="header-title">\n                      After Rfi\n                    </ion-card-header>\n                    <ion-card-content>\n                        <div class="row">\n                              <div class="left-icon">\n                                <img  id="second-img-2" src="assets/img/new/Rfi_m.png" style="margin-top:-10px;">\n                                <!-- <ion-icon class="fa-home"></ion-icon> -->\n                                <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                                <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                              </div>\n                              <div class="right-text">\n                                  <ion-label id="secondValue[2]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px">88 %</ion-label>\n                              </div>\n                        </div>\n                    </ion-card-content>\n                  </div>\n                  <ion-row class="footer-color-block">\n                      <div class="row">\n                        <ion-col class="footer-title">\n                              Total\n                        </ion-col>\n                      </div>\n                  </ion-row>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh1-second-afterrfi\dsh1-second-afterrfi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Dsh1SecondAfterrfiPage);
    return Dsh1SecondAfterrfiPage;
}());

//# sourceMappingURL=dsh1-second-afterrfi.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dsh2HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Dsh2HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Dsh2HomePage = (function () {
    function Dsh2HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Dsh2HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Dsh2HomePage');
    };
    Dsh2HomePage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    Dsh2HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dsh2-home',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh2-home\dsh2-home.html"*/'<ion-header color="primary">\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n          <div style="width:100%; text-align: center">\n              <div class="norepease-logo"></div>\n              <ion-label>Build to Suite Dashboard</ion-label>\n          </div>\n      </ion-title>\n      <ion-buttons end>\n        <!-- <button ion-button tappable (click)="presentNotifications($event)"> -->\n        <!-- <button ion-button  class="circle"> -->\n            <!-- <img class="home-indikator" src="../assets/img/circle_btn_red"> -->\n          <!-- <ion-icon name="notifications"></ion-icon> -->\n        <!-- </button> -->\n        <!-- <button ion-button tappable>\n            <img class="home-satelit" src="assets/img/satellite.png">\n        </button> -->\n        <button ion-button tappable (click)="goToAccount()">\n            <ion-icon name="cog"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class="common-bg">\n      <ion-scroll scrollY="true">\n        <ion-row>\n\n\n        </ion-row>\n      </ion-scroll>\n  </ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh2-home\dsh2-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Dsh2HomePage);
    return Dsh2HomePage;
}());

//# sourceMappingURL=dsh2-home.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dsh3HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Dsh3HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Dsh3HomePage = (function () {
    function Dsh3HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Dsh3HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Dsh3HomePage');
    };
    Dsh3HomePage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    Dsh3HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dsh3-home',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh3-home\dsh3-home.html"*/'<ion-header color="primary">\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n          <div style="width:100%; text-align: center">\n              <div class="norepease-logo"></div>\n              <ion-label>Colaction & Reseller Dashboard</ion-label>\n          </div>\n      </ion-title>\n      <ion-buttons end>\n        <!-- <button ion-button tappable (click)="presentNotifications($event)"> -->\n        <!-- <button ion-button  class="circle"> -->\n            <!-- <img class="home-indikator" src="../assets/img/circle_btn_red"> -->\n          <!-- <ion-icon name="notifications"></ion-icon> -->\n        <!-- </button> -->\n        <!-- <button ion-button tappable>\n            <img class="home-satelit" src="assets/img/satellite.png">\n        </button> -->\n        <button ion-button tappable (click)="goToAccount()">\n            <ion-icon name="cog"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class="common-bg">\n      <ion-scroll scrollY="true">\n        <ion-row>\n\n\n        </ion-row>\n      </ion-scroll>\n  </ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh3-home\dsh3-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Dsh3HomePage);
    return Dsh3HomePage;
}());

//# sourceMappingURL=dsh3-home.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dsh4HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Dsh4HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Dsh4HomePage = (function () {
    function Dsh4HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Dsh4HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Dsh4HomePage');
    };
    Dsh4HomePage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    Dsh4HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dsh4-home',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh4-home\dsh4-home.html"*/'<ion-header color="primary">\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n          <div style="width:100%; text-align: center">\n              <div class="norepease-logo"></div>\n              <ion-label>Microcell Dashboard</ion-label>\n          </div>\n      </ion-title>\n      <ion-buttons end>\n        <!-- <button ion-button tappable (click)="presentNotifications($event)"> -->\n        <!-- <button ion-button  class="circle"> -->\n            <!-- <img class="home-indikator" src="../assets/img/circle_btn_red"> -->\n          <!-- <ion-icon name="notifications"></ion-icon> -->\n        <!-- </button> -->\n        <!-- <button ion-button tappable>\n            <img class="home-satelit" src="assets/img/satellite.png">\n        </button> -->\n        <button ion-button tappable (click)="goToAccount()">\n            <ion-icon name="cog"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class="common-bg">\n      <ion-scroll scrollY="true">\n        <ion-row>\n\n\n        </ion-row>\n      </ion-scroll>\n  </ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh4-home\dsh4-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Dsh4HomePage);
    return Dsh4HomePage;
}());

//# sourceMappingURL=dsh4-home.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dsh6HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Dsh6HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Dsh6HomePage = (function () {
    function Dsh6HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Dsh6HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Dsh6HomePage');
    };
    Dsh6HomePage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    Dsh6HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dsh6-home',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh6-home\dsh6-home.html"*/'<ion-header color="primary">\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n          <div style="width:100%; text-align: center">\n              <div class="norepease-logo"></div>\n              <ion-label>Mitra Dashboard</ion-label>\n          </div>\n      </ion-title>\n      <ion-buttons end>\n        <!-- <button ion-button tappable (click)="presentNotifications($event)"> -->\n        <!-- <button ion-button  class="circle"> -->\n            <!-- <img class="home-indikator" src="../assets/img/circle_btn_red"> -->\n          <!-- <ion-icon name="notifications"></ion-icon> -->\n        <!-- </button> -->\n        <!-- <button ion-button tappable>\n            <img class="home-satelit" src="assets/img/satellite.png">\n        </button> -->\n        <button ion-button tappable (click)="goToAccount()">\n            <ion-icon name="cog"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class="common-bg">\n      <ion-scroll scrollY="true">\n        <ion-row>\n\n\n        </ion-row>\n      </ion-scroll>\n  </ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh6-home\dsh6-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Dsh6HomePage);
    return Dsh6HomePage;
}());

//# sourceMappingURL=dsh6-home.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dsh7HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Dsh7HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Dsh7HomePage = (function () {
    function Dsh7HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Dsh7HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Dsh7HomePage');
    };
    Dsh7HomePage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    Dsh7HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dsh7-home',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh7-home\dsh7-home.html"*/'<ion-header color="primary">\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n          <div style="width:100%; text-align: center">\n              <div class="norepease-logo"></div>\n              <ion-label>Summary Dashboard</ion-label>\n          </div>\n      </ion-title>\n      <ion-buttons end>\n        <!-- <button ion-button tappable (click)="presentNotifications($event)"> -->\n        <!-- <button ion-button  class="circle"> -->\n            <!-- <img class="home-indikator" src="../assets/img/circle_btn_red"> -->\n          <!-- <ion-icon name="notifications"></ion-icon> -->\n        <!-- </button> -->\n        <!-- <button ion-button tappable>\n            <img class="home-satelit" src="assets/img/satellite.png">\n        </button> -->\n        <button ion-button tappable (click)="goToAccount()">\n            <ion-icon name="cog"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class="common-bg">\n      <ion-scroll scrollY="true">\n        <ion-row>\n\n\n        </ion-row>\n      </ion-scroll>\n  </ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh7-home\dsh7-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Dsh7HomePage);
    return Dsh7HomePage;
}());

//# sourceMappingURL=dsh7-home.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dsh5HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Dsh5HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Dsh5HomePage = (function () {
    function Dsh5HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Dsh5HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Dsh5HomePage');
    };
    Dsh5HomePage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    Dsh5HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dsh5-home',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh5-home\dsh5-home.html"*/'<ion-header color="primary">\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n          <div style="width:100%; text-align: center">\n              <div class="norepease-logo"></div>\n              <ion-label>Special Project Dashboard</ion-label>\n          </div>\n      </ion-title>\n      <ion-buttons end>\n        <!-- <button ion-button tappable (click)="presentNotifications($event)"> -->\n        <!-- <button ion-button  class="circle"> -->\n            <!-- <img class="home-indikator" src="../assets/img/circle_btn_red"> -->\n          <!-- <ion-icon name="notifications"></ion-icon> -->\n        <!-- </button> -->\n        <!-- <button ion-button tappable>\n            <img class="home-satelit" src="assets/img/satellite.png">\n        </button> -->\n        <button ion-button tappable (click)="goToAccount()">\n            <ion-icon name="cog"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class="common-bg">\n      <ion-scroll scrollY="true">\n        <ion-row>\n\n\n        </ion-row>\n      </ion-scroll>\n  </ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\dsh5-home\dsh5-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Dsh5HomePage);
    return Dsh5HomePage;
}());

//# sourceMappingURL=dsh5-home.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dsh1-second-afterrfi/dsh1-second-afterrfi.module": [
		709,
		11
	],
	"../pages/dsh1-second-norelease/dsh1-second-norelease.module": [
		708,
		10
	],
	"../pages/dsh1-second-prjonpipe/dsh1-second-prjonpipe.module": [
		710,
		9
	],
	"../pages/dsh1-second-rfi/dsh1-second-rfi.module": [
		711,
		8
	],
	"../pages/dsh2-home/dsh2-home.module": [
		712,
		7
	],
	"../pages/dsh3-home/dsh3-home.module": [
		713,
		6
	],
	"../pages/dsh4-home/dsh4-home.module": [
		714,
		5
	],
	"../pages/dsh5-home/dsh5-home.module": [
		718,
		4
	],
	"../pages/dsh6-home/dsh6-home.module": [
		715,
		3
	],
	"../pages/dsh7-home/dsh7-home.module": [
		716,
		2
	],
	"../pages/peta/peta.module": [
		717,
		1
	],
	"../pages/welcome/welcome.module": [
		719,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 227;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(nav) {
        this.nav = nav;
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\register\register.html"*/'<!-- -->\n\n<ion-content class="auth-page">\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding text-center>\n\n      <div class="logo"></div>\n\n      <h2 ion-text class="text-primary">\n\n        <strong>Ionic 3</strong> Start Theme\n\n      </h2>\n\n    </div>\n\n\n\n    <!-- Login form -->\n\n    <form class="list-form">\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n\n          Full Name\n\n        </ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n\n          Email\n\n        </ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n    </form>\n\n\n\n    <div margin-top>\n\n      <button ion-button block color="dark" tappable (click)="register()">\n\n        SIGN UP\n\n      </button>\n\n\n\n      <p text-center ion-text color="secondary">Or Sign Up with:</p>\n\n\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <button ion-button icon-only block class="btn-facebook">\n\n              <ion-icon name="logo-facebook"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button icon-only block class="btn-twitter">\n\n              <ion-icon name="logo-twitter"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button icon-only block class="btn-gplus">\n\n              <ion-icon name="logo-googleplus"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <!-- Other links -->\n\n    <div text-center margin-top>\n\n      <span ion-text color="primary" tappable (click)="login()">I have an account</span>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    // logout
    SettingsPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\settings\settings.html"*/'<!-- -->\n\n<ion-header class="no-shadow">\n\n\n\n  <ion-navbar class="no-border">\n\n    <ion-title>\n\n      <ion-icon name="cog" class="text-primary"></ion-icon>\n\n      <span class="text-primary">Settings</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="common-bg">\n\n  <!-- User settings-->\n\n  <ion-item-group>\n\n    <ion-item-divider color="secondary" class="bold">User Settings</ion-item-divider>\n\n    <ion-item>\n\n      <ion-label>Language</ion-label>\n\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n\n        <ion-option value="en-GB">English (UK)</ion-option>\n\n        <ion-option value="en-CA">English (CA)</ion-option>\n\n        <ion-option value="en-AU">English (AU)</ion-option>\n\n        <ion-option value="en-IN">English (IN)</ion-option>\n\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Currency</ion-label>\n\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n\n        <ion-option value="EUR">Euro (€)</ion-option>\n\n        <ion-option value="GBP">Pound (£)</ion-option>\n\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Units</ion-label>\n\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n\n        <ion-option value="M" selected="true">Miles (ft²)</ion-option>\n\n        <ion-option value="K">Kilometers (m²)</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Notifications?</ion-label>\n\n      <ion-toggle checked="true"></ion-toggle>\n\n    </ion-item>\n\n  </ion-item-group>\n\n  <!-- App settings-->\n\n  <ion-item-group>\n\n    <ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n\n    <ion-item>\n\n      <span>Clear Private Data</span>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Push Notifications?</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span>Privacy Policy</span>\n\n    </ion-item>\n\n  </ion-item-group>  \n\n\n\n  <!--sign out button-->\n\n  <button ion-button color="primary" full tappable (click)="logout()">LOG OUT</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutTripPage = (function () {
    function CheckoutTripPage(nav, tripService, loadingCtrl, toastCtrl) {
        this.nav = nav;
        this.tripService = tripService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // number of adults
        this.adults = 2;
        // date
        this.date = new Date();
        this.paymethods = 'creditcard';
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // process send button
    CheckoutTripPage.prototype.send = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Book Activity Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    CheckoutTripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checkout-trip',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\checkout-trip\checkout-trip.html"*/'<!-- -->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Activity Checkout</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="checkout-trip common-bg">\n\n  <!--trip information-->\n\n  <div class="trip-info card round">\n\n    <div class="trip-image border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}"></div>\n\n    <ion-grid padding>\n\n      <ion-row>\n\n        <ion-col width-66>\n\n          <h5 ion-text color="primary">{{ trip.name }}</h5>\n\n          <div>\n\n            <span class="bold">{{ trip.sub_name }}</span>\n\n            <br/>\n\n            <span ion-text color="dark">{{ adults }} Adults</span>\n\n          </div>\n\n          <div margin-top>\n\n            <span ion-text color="dark">{{ date | date: \'EEE, MMM dd\' }}</span>\n\n            <br/>\n\n            <span ion-text>{{ trip.location }}</span>\n\n          </div>\n\n          <div margin-top>\n\n            <ion-icon name="checkmark" class="text-green" *ngIf="trip.free_cancellation"></ion-icon>\n\n            <span ion-text *ngIf="trip.free_cancellation">Free cancellation</span>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <span ion-text>Total with Tax</span>\n\n          <h5 ion-text color="primary" class="bold" no-margin>{{ trip.price_adult * adults | currency:\'USD\':true }}</h5>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n    <!--more info-->\n\n  <h5>Guest Details</h5>\n\n  <div class="card round" margin-top>\n\n\n\n    <ion-list no-margin>\n\n      <ion-item class="primary-bg">\n\n        <ion-avatar item-start>\n\n          <img src="assets/img/avatar.jpeg">\n\n        </ion-avatar>\n\n        <h2 ion-text class="text-white bold">João Firmino</h2>\n\n        <p ion-text class="text-secondary bold">User</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <div padding>\n\n      <h5 ion-text color="secondary">Other Guests</h5>\n\n\n\n      <ion-item no-padding>\n\n        <ion-label color="dark" stacked>Adult 1 Name:</ion-label>\n\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n\n      </ion-item>\n\n      <ion-item no-padding>\n\n        <ion-label color="dark" stacked>Child 1 Name:</ion-label>\n\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n\n      </ion-item>\n\n    </div>\n\n  </div>\n\n\n\n  <!--payment info-->\n\n  <h5>Payment Methods</h5>\n\n  <ion-segment color="secondary" [(ngModel)]="paymethods">\n\n    <ion-segment-button value="creditcard" >\n\n      Credit card\n\n    </ion-segment-button>\n\n    <ion-segment-button value="paypal">\n\n      PayPal\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div class="card round" margin-top margin-bottom>\n\n\n\n    <div [ngSwitch]="paymethods">\n\n      <ion-grid *ngSwitchCase="\'creditcard\'" padding>\n\n        <ion-row>\n\n          <ion-col no-padding text-center>\n\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMTUuMTg3NSAxOSBMIDEyLjU1ODU5NCAyNi44MzIwMzEgQyAxMi41NTg1OTQgMjYuODMyMDMxIDExLjg5NDUzMSAyMy41MTk1MzEgMTEuODI4MTI1IDIzLjEwMTU2MyBDIDEwLjMzMjAzMSAxOS42OTE0MDYgOC4xMjUgMTkuODgyODEzIDguMTI1IDE5Ljg4MjgxMyBMIDEwLjcyNjU2MyAzMCBMIDEwLjcyNjU2MyAyOS45OTYwOTQgTCAxMy44ODY3MTkgMjkuOTk2MDk0IEwgMTguMjU3ODEzIDE5IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkZGRkY7IiBkPSJNIDE3LjY4NzUgMzAgTCAyMC41NTg1OTQgMzAgTCAyMi4yOTY4NzUgMTkgTCAxOS4zOTA2MjUgMTkgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMzguMDA3ODEzIDE5IEwgMzQuOTg4MjgxIDE5IEwgMzAuMjc3MzQ0IDMwIEwgMzMuMTI4OTA2IDMwIEwgMzMuNzE4NzUgMjguNDI5Njg4IEwgMzcuMzEyNSAyOC40Mjk2ODggTCAzNy42MTcxODggMzAgTCA0MC4yMzA0NjkgMzAgWiBNIDM0LjUxMTcxOSAyNi4zMjgxMjUgTCAzNi4wNzQyMTkgMjIuMTcxODc1IEwgMzYuODk0NTMxIDI2LjMyODEyNSBaICIvPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNi4zNjcxODggMjIuMjA3MDMxIEMgMjYuMzY3MTg4IDIxLjYwMTU2MyAyNi44NjcxODggMjEuMTQ4NDM4IDI4LjI5Njg3NSAyMS4xNDg0MzggQyAyOS4yMjI2NTYgMjEuMTQ4NDM4IDMwLjI4NTE1NiAyMS44MjQyMTkgMzAuMjg1MTU2IDIxLjgyNDIxOSBMIDMwLjc1MzkwNiAxOS41MTU2MjUgQyAzMC43NTM5MDYgMTkuNTE1NjI1IDI5LjM5NDUzMSAxOSAyOC4wNjI1IDE5IEMgMjUuMDQyOTY5IDE5IDIzLjQ4NDM3NSAyMC40NDE0MDYgMjMuNDg0Mzc1IDIyLjI2OTUzMSBDIDIzLjQ4NDM3NSAyNS41NzgxMjUgMjcuNDY0ODQ0IDI1LjEyNSAyNy40NjQ4NDQgMjYuODIwMzEzIEMgMjcuNDY0ODQ0IDI3LjExMzI4MSAyNy4yMzQzNzUgMjcuNzg1MTU2IDI1LjU3NDIxOSAyNy43ODUxNTYgQyAyMy45MTQwNjMgMjcuNzg1MTU2IDIyLjgxNjQwNiAyNy4xNzU3ODEgMjIuODE2NDA2IDI3LjE3NTc4MSBMIDIyLjMyMDMxMyAyOS4zOTQ1MzEgQyAyMi4zMjAzMTMgMjkuMzk0NTMxIDIzLjM4NjcxOSAzMCAyNS40Mzc1IDMwIEMgMjcuNDk2MDk0IDMwIDMwLjM1NTQ2OSAyOC40NjA5MzggMzAuMzU1NDY5IDI2LjI0NjA5NCBDIDMwLjM1NTQ2OSAyMy41ODU5MzggMjYuMzY3MTg4IDIzLjM5NDUzMSAyNi4zNjcxODggMjIuMjA3MDMxIFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkMxMDc7IiBkPSJNIDEyLjIxMDkzOCAyNC45NDUzMTMgTCAxMS4yNDYwOTQgMjAuMTk1MzEzIEMgMTEuMjQ2MDk0IDIwLjE5NTMxMyAxMC44MDg1OTQgMTkuMTY3OTY5IDkuNjcxODc1IDE5LjE2Nzk2OSBDIDguNTM1MTU2IDE5LjE2Nzk2OSA1LjIzNDM3NSAxOS4xNjc5NjkgNS4yMzQzNzUgMTkuMTY3OTY5IEMgNS4yMzQzNzUgMTkuMTY3OTY5IDEwLjg5NDUzMSAyMC44Mzk4NDQgMTIuMjEwOTM4IDI0Ljk0NTMxMyBaICIvPjwvZz48L3N2Zz4=" alt="Visa" />\n\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojM0Y1MUI1OyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGQzEwNzsiIGQ9Ik0gNDAgMjQgQyA0MCAyOS41MjM0MzggMzUuNTIzNDM4IDM0IDMwIDM0IEMgMjQuNDc2NTYzIDM0IDIwIDI5LjUyMzQzOCAyMCAyNCBDIDIwIDE4LjQ3NjU2MyAyNC40NzY1NjMgMTQgMzAgMTQgQyAzNS41MjM0MzggMTQgNDAgMTguNDc2NTYzIDQwIDI0IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRjNEMDA7IiBkPSJNIDIyLjAxNTYyNSAzMCBDIDIxLjU1MDc4MSAyOS4zODI4MTMgMjEuMTUyMzQ0IDI4LjcxNDg0NCAyMC44Mzk4NDQgMjggTCAyNi4xNjQwNjMgMjggQyAyNi40NDE0MDYgMjcuMzYzMjgxIDI2LjY2MDE1NiAyNi42OTUzMTMgMjYuODAwNzgxIDI2IEwgMjAuMjAzMTI1IDI2IEMgMjAuMDcwMzEzIDI1LjM1NTQ2OSAyMCAyNC42ODc1IDIwIDI0IEwgMjcgMjQgQyAyNyAyMy4zMTI1IDI2LjkyOTY4OCAyMi42NDQ1MzEgMjYuODAwNzgxIDIyIEwgMjAuMTk5MjE5IDIyIEMgMjAuMzQzNzUgMjEuMzA0Njg4IDIwLjU1ODU5NCAyMC42MzY3MTkgMjAuODM5ODQ0IDIwIEwgMjYuMTY0MDYzIDIwIEMgMjUuODUxNTYzIDE5LjI4NTE1NiAyNS40NTMxMjUgMTguNjE3MTg4IDI0Ljk4ODI4MSAxOCBMIDIyLjAxNTYyNSAxOCBDIDIyLjQ0OTIxOSAxNy40MjE4NzUgMjIuOTQ1MzEzIDE2Ljg3ODkwNiAyMy40OTYwOTQgMTYuNDA2MjUgQyAyMS43NDYwOTQgMTQuOTEwMTU2IDE5LjQ4MDQ2OSAxNCAxNyAxNCBDIDExLjQ3NjU2MyAxNCA3IDE4LjQ3NjU2MyA3IDI0IEMgNyAyOS41MjM0MzggMTEuNDc2NTYzIDM0IDE3IDM0IEMgMjAuMjY5NTMxIDM0IDIzLjE2MDE1NiAzMi40MjU3ODEgMjQuOTg0Mzc1IDMwIFogIi8+PC9nPjwvc3ZnPg==" alt="mastercard">\n\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojRTFFN0VBOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjE5OTIxOSA0My4xOTkyMTkgMzkgNDEgMzkgTCA3IDM5IEMgNC44MDA3ODEgMzkgMyAzNy4xOTkyMTkgMyAzNSBMIDMgMTMgQyAzIDEwLjgwMDc4MSA0LjgwMDc4MSA5IDcgOSBMIDQxIDkgQyA0My4xOTkyMTkgOSA0NSAxMC44MDA3ODEgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGNkQwMDsiIGQ9Ik0gNDUgMzUgQyA0NSAzNy4xOTkyMTkgNDMuMTk5MjE5IDM5IDQxIDM5IEwgMTYgMzkgQyAxNiAzOSAzOS42MDE1NjMgMzUuMTk5MjE5IDQ1IDI0IFogTSAyMiAyNCBDIDIyIDI1LjY5OTIxOSAyMy4zMDA3ODEgMjcgMjUgMjcgQyAyNi42OTkyMTkgMjcgMjggMjUuNjk5MjE5IDI4IDI0IEMgMjggMjIuMzAwNzgxIDI2LjY5OTIxOSAyMSAyNSAyMSBDIDIzLjMwMDc4MSAyMSAyMiAyMi4zMDA3ODEgMjIgMjQgWiAiLz48cGF0aCBzdHlsZT0iICIgZD0iTSAxMS4xOTkyMTkgMjEgTCAxMi4zMDA3ODEgMjEgTCAxMi4zMDA3ODEgMjcgTCAxMS4xOTkyMTkgMjcgWiBNIDE3LjE5OTIxOSAyNCBDIDE3LjE5OTIxOSAyNS42OTkyMTkgMTguNSAyNyAyMC4xOTkyMTkgMjcgQyAyMC42OTkyMTkgMjcgMjEuMTAxNTYzIDI2Ljg5ODQzOCAyMS42MDE1NjMgMjYuNjk5MjE5IEwgMjEuNjAxNTYzIDI1LjM5ODQzOCBDIDIxLjE5OTIxOSAyNS44MDA3ODEgMjAuODAwNzgxIDI2IDIwLjE5OTIxOSAyNiBDIDE5LjEwMTU2MyAyNiAxOC4zMDA3ODEgMjUuMTk5MjE5IDE4LjMwMDc4MSAyNCBDIDE4LjMwMDc4MSAyMi44OTg0MzggMTkuMTAxNTYzIDIyIDIwLjE5OTIxOSAyMiBDIDIwLjY5OTIxOSAyMiAyMS4xMDE1NjMgMjIuMTk5MjE5IDIxLjYwMTU2MyAyMi42MDE1NjMgTCAyMS42MDE1NjMgMjEuMzAwNzgxIEMgMjEuMTAxNTYzIDIxLjEwMTU2MyAyMC42OTkyMTkgMjAuODk4NDM4IDIwLjE5OTIxOSAyMC44OTg0MzggQyAxOC41IDIxIDE3LjE5OTIxOSAyMi4zOTg0MzggMTcuMTk5MjE5IDI0IFogTSAzMC42MDE1NjMgMjQuODk4NDM4IEwgMjkgMjEgTCAyNy44MDA3ODEgMjEgTCAzMC4zMDA3ODEgMjcgTCAzMC44OTg0MzggMjcgTCAzMy4zOTg0MzggMjEgTCAzMi4xOTkyMTkgMjEgWiBNIDMzLjg5ODQzOCAyNyBMIDM3LjEwMTU2MyAyNyBMIDM3LjEwMTU2MyAyNiBMIDM1IDI2IEwgMzUgMjQuMzk4NDM4IEwgMzcgMjQuMzk4NDM4IEwgMzcgMjMuMzk4NDM4IEwgMzUgMjMuMzk4NDM4IEwgMzUgMjIgTCAzNy4xMDE1NjMgMjIgTCAzNy4xMDE1NjMgMjEgTCAzMy44OTg0MzggMjEgWiBNIDQxLjUgMjIuODAwNzgxIEMgNDEuNSAyMS42OTkyMTkgNDAuODAwNzgxIDIxIDM5LjUgMjEgTCAzNy44MDA3ODEgMjEgTCAzNy44MDA3ODEgMjcgTCAzOC44OTg0MzggMjcgTCAzOC44OTg0MzggMjQuNjAxNTYzIEwgMzkgMjQuNjAxNTYzIEwgNDAuNjAxNTYzIDI3IEwgNDIgMjcgTCA0MC4xOTkyMTkgMjQuNSBDIDQxIDI0LjMwMDc4MSA0MS41IDIzLjY5OTIxOSA0MS41IDIyLjgwMDc4MSBaIE0gMzkuMTk5MjE5IDIzLjgwMDc4MSBMIDM4Ljg5ODQzOCAyMy44MDA3ODEgTCAzOC44OTg0MzggMjIgTCAzOS4xOTkyMTkgMjIgQyAzOS44OTg0MzggMjIgNDAuMzAwNzgxIDIyLjMwMDc4MSA0MC4zMDA3ODEgMjIuODk4NDM4IEMgNDAuMzAwNzgxIDIzLjM5ODQzOCA0MCAyMy44MDA3ODEgMzkuMTk5MjE5IDIzLjgwMDc4MSBaIE0gNy42OTkyMTkgMjEgTCA2IDIxIEwgNiAyNyBMIDcuNjAxNTYzIDI3IEMgMTAuMTAxNTYzIDI3IDEwLjY5OTIxOSAyNC44OTg0MzggMTAuNjk5MjE5IDI0IEMgMTAuODAwNzgxIDIyLjE5OTIxOSA5LjUgMjEgNy42OTkyMTkgMjEgWiBNIDcuMzk4NDM4IDI2IEwgNy4xMDE1NjMgMjYgTCA3LjEwMTU2MyAyMiBMIDcuNSAyMiBDIDkgMjIgOS42MDE1NjMgMjMgOS42MDE1NjMgMjQgQyA5LjYwMTU2MyAyNC4zOTg0MzggOS41IDI2IDcuMzk4NDM4IDI2IFogTSAxNS4zMDA3ODEgMjMuMzAwNzgxIEMgMTQuNjAxNTYzIDIzIDE0LjM5ODQzOCAyMi44OTg0MzggMTQuMzk4NDM4IDIyLjYwMTU2MyBDIDE0LjM5ODQzOCAyMi4xOTkyMTkgMTQuODAwNzgxIDIyIDE1LjE5OTIxOSAyMiBDIDE1LjUgMjIgMTUuODAwNzgxIDIyLjEwMTU2MyAxNi4xMDE1NjMgMjIuNSBMIDE2LjY5OTIxOSAyMS42OTkyMTkgQyAxNi4xOTkyMTkgMjEuMTk5MjE5IDE1LjY5OTIxOSAyMSAxNSAyMSBDIDE0IDIxIDEzLjE5OTIxOSAyMS42OTkyMTkgMTMuMTk5MjE5IDIyLjY5OTIxOSBDIDEzLjE5OTIxOSAyMy41IDEzLjYwMTU2MyAyMy44OTg0MzggMTQuNjAxNTYzIDI0LjMwMDc4MSBDIDE1LjE5OTIxOSAyNC41IDE1LjY5OTIxOSAyNC42OTkyMTkgMTUuNjk5MjE5IDI1LjE5OTIxOSBDIDE1LjY5OTIxOSAyNS42OTkyMTkgMTUuMzAwNzgxIDI2IDE0LjgwMDc4MSAyNiBDIDE0LjMwMDc4MSAyNiAxMy44MDA3ODEgMjUuNjk5MjE5IDEzLjYwMTU2MyAyNS4xOTkyMTkgTCAxMi44OTg0MzggMjUuODk4NDM4IEMgMTMuMzk4NDM4IDI2LjY5OTIxOSAxNCAyNyAxNC44OTg0MzggMjcgQyAxNi4xMDE1NjMgMjcgMTYuODk4NDM4IDI2LjE5OTIxOSAxNi44OTg0MzggMjUuMTAxNTYzIEMgMTYuODk4NDM4IDI0LjE5OTIxOSAxNi41IDIzLjgwMDc4MSAxNS4zMDA3ODEgMjMuMzAwNzgxIFogIi8+PC9nPjwvc3ZnPg==" alt="discover">\n\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTIgMjUyIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyNTJ2LTI1MmgyNTJ2MjUyeiIgZmlsbD0ibm9uZSIvPjxnPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggZD0iTTIzNi4yNSwxODMuNzVjMCwxMS42MDc0MiAtOS4zOTI1OCwyMSAtMjEsMjFoLTE3OC41Yy0xMS42MDc0MiwwIC0yMSwtOS4zOTI1OCAtMjEsLTIxdi0xMTUuNWMwLC0xMS42MDc0MiA5LjM5MjU4LC0yMSAyMSwtMjFoMTc4LjVjMTEuNjA3NDIsMCAyMSw5LjM5MjU4IDIxLDIxeiIgZmlsbD0iIzE2YTA4NSIvPjxwYXRoIGQ9Ik0xMTYuODMzMDEsMTA1bC0xMS4wOTQ3MywyNC41ODg4N2wtMTEuMDMzMiwtMjQuNTg4ODdoLTE0LjE1MDM5djM1LjMxNDQ2bC0xNS43NzA1MSwtMzUuMzE0NDZoLTExLjkzNTU1bC0xNi4wOTg2MywzNi42NDc0Nmg5LjUzNjEzbDMuNTA2ODQsLTguMTgyNjJoMTguMDI2MzdsMy41ODg4Nyw4LjE4MjYyaDE4LjE5MDQzdi0yNy4yMTM4N2wxMi4wNTg1OSwyNy4yMTM4N2g4LjIwMzEzbDEyLjM0NTcxLC0yNi43NDIxOXYyNi43NDIxOWg5LjA0Mzk0di0zNi42NDc0NnpNNTMuMjE3NzcsMTI1LjU0ODgzbDUuMzczMDQsLTEyLjc5Njg3bDUuNTk4NjQsMTIuNzk2ODh6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE5OC44ODQ3NywxMjIuOTIzODNsMTYuMzY1MjMsLTE3LjgyMTI5aC0xMS42NDg0NGwtMTAuNDU4OTgsMTEuMzYxMzNsLTEwLjEzMDg2LC0xMS40NjM4N2gtMzYuMDExNzJ2MzYuNjQ3NDZoMzQuODQyNzdsMTAuOTcxNjgsLTEyLjEyMDEybDEwLjcwNTA4LDEyLjIyMjY2aDExLjYwNzQyek0xNzcuMDY0NDYsMTMzLjk1NzAzaC0yMS4wNDEwMnYtNy4yMzkyNmgyMC4xMzg2N3YtNi45NTIxNWgtMjAuMTM4Njd2LTYuODcwMTJsMjIuMjA5OTYsMC4wNjE1Mmw4LjkwMDM5LDkuOTY2OHoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="Amex">\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item no-padding>\n\n              <ion-input type="text" placeholder="Card Holder"></ion-input>\n\n<!--               <ion-icon name="person" item-end no-margin></ion-icon> -->\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item no-padding>\n\n              <ion-input placeholder="Card Number" type="number"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-item no-padding>\n\n              <ion-select placeholder="MM" class="max-width full-width">\n\n                <ion-option value="01">01</ion-option>\n\n                <ion-option value="02">02</ion-option>\n\n                <ion-option value="03">03</ion-option>\n\n                <ion-option value="04">04</ion-option>\n\n                <ion-option value="05">05</ion-option>\n\n                <ion-option value="06">06</ion-option>\n\n                <ion-option value="07">07</ion-option>\n\n                <ion-option value="08">08</ion-option>\n\n                <ion-option value="09">09</ion-option>\n\n                <ion-option value="10">10</ion-option>\n\n                <ion-option value="11">11</ion-option>\n\n                <ion-option value="12">12</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-item no-padding>\n\n              <ion-select placeholder="YY" class="max-width full-width">\n\n                <ion-option value="19">19</ion-option>\n\n                <ion-option value="20">20</ion-option>\n\n                <ion-option value="21">21</ion-option>\n\n                <ion-option value="22">22</ion-option>\n\n                <ion-option value="23">23</ion-option>\n\n                <ion-option value="24">24</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-item no-padding>\n\n              <ion-input placeholder="CVV" type="number"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <ion-grid *ngSwitchCase="\'paypal\'" padding>\n\n        <ion-row>\n\n          <ion-col no-padding text-center>\n\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSAxOC42OTkyMTkgMTMuNzY1NjI1IEwgMTguNzAzMTI1IDEzLjc2OTUzMSBDIDE4LjgwODU5NCAxMy4zMjQyMTkgMTkuMTg3NSAxMyAxOS42NjAxNTYgMTMgTCAzMy4xMzI4MTMgMTMgQyAzMy4xNDg0MzggMTMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xODM1OTQgMTIuOTkyMTg4IEMgMzIuODk0NTMxIDguMjE0ODQ0IDI4Ljg4NjcxOSA2IDI1LjM1MTU2MyA2IEwgMTEuODc4OTA2IDYgQyAxMS40MDIzNDQgNiAxMS4wMjczNDQgNi4zMzU5MzggMTAuOTIxODc1IDYuNzc3MzQ0IEwgMTAuOTE3OTY5IDYuNzczNDM4IEwgNS4wMjczNDQgMzMuODEyNSBMIDUuMDQyOTY5IDMzLjgxMjUgQyA1LjAyNzM0NCAzMy44Nzg5MDYgNS4wMDM5MDYgMzMuOTM3NSA1LjAwMzkwNiAzNC4wMDc4MTMgQyA1LjAwMzkwNiAzNC41NjI1IDUuNDQ5MjE5IDM1IDYuMDAzOTA2IDM1IEwgMTQuMDc0MjE5IDM1IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMwMzlCRTU7IiBkPSJNIDMzLjE4MzU5NCAxMi45OTIxODggQyAzMy4yMzQzNzUgMTMuODcxMDk0IDMzLjE3OTY4OCAxNC44MjQyMTkgMzIuOTUzMTI1IDE1Ljg3NSBDIDMxLjY3MTg3NSAyMS44NzEwOTQgMjcuMDQyOTY5IDI0Ljk5MjE4OCAyMS4zMjAzMTMgMjQuOTkyMTg4IEMgMjEuMzIwMzEzIDI0Ljk5MjE4OCAxNy44NDc2NTYgMjQuOTkyMTg4IDE3LjAwNzgxMyAyNC45OTIxODggQyAxNi40ODQzNzUgMjQuOTkyMTg4IDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuMTI1IDI1LjUzMTI1IEwgMTQuMzg2NzE5IDMzLjU3ODEyNSBMIDE0LjA4MjAzMSAzNS4wMDc4MTMgTCAxNC4wNzQyMTkgMzUuMDA3ODEzIEwgMTIuODEyNSA0MC44MDQ2ODggTCAxMi44MjQyMTkgNDAuODA0Njg4IEMgMTIuODEyNSA0MC44NzEwOTQgMTIuNzg1MTU2IDQwLjkyOTY4OCAxMi43ODUxNTYgNDEgQyAxMi43ODUxNTYgNDEuNTU0Njg4IDEzLjIzNDM3NSA0MiAxMy43ODUxNTYgNDIgTCAyMS4xMTcxODggNDIgTCAyMS4xMzI4MTMgNDEuOTg4MjgxIEMgMjEuNjA1NDY5IDQxLjk4NDM3NSAyMS45ODA0NjkgNDEuNjQ0NTMxIDIyLjA3ODEyNSA0MS4yMDMxMjUgTCAyMi4wOTM3NSA0MS4xODc1IEwgMjMuOTA2MjUgMzIuNzY5NTMxIEMgMjMuOTA2MjUgMzIuNzY5NTMxIDI0LjAzMTI1IDMxLjk2ODc1IDI0Ljg3ODkwNiAzMS45Njg3NSBDIDI1LjcyMjY1NiAzMS45Njg3NSAyOS4wNTQ2ODggMzEuOTY4NzUgMjkuMDU0Njg4IDMxLjk2ODc1IEMgMzQuNzc3MzQ0IDMxLjk2ODc1IDM5LjQ1NzAzMSAyOC44NjMyODEgNDAuNzM4MjgxIDIyLjg2NzE4OCBDIDQyLjE3OTY4OCAxNi4xMDU0NjkgMzcuMzU5Mzc1IDEzLjAxOTUzMSAzMy4xODM1OTQgMTIuOTkyMTg4IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMyODM1OTM7IiBkPSJNIDE5LjY2MDE1NiAxMyBDIDE5LjE4NzUgMTMgMTguODA4NTk0IDEzLjMyNDIxOSAxOC43MDMxMjUgMTMuNzY5NTMxIEwgMTguNjk5MjE5IDEzLjc2NTYyNSBMIDE2LjEyNSAyNS41MzEyNSBDIDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuNDg0Mzc1IDI0Ljk5MjE4OCAxNy4wMDM5MDYgMjQuOTkyMTg4IEMgMTcuODQ3NjU2IDI0Ljk5MjE4OCAyMS4yMzgyODEgMjQuOTkyMTg4IDIxLjIzODI4MSAyNC45OTIxODggQyAyNi45NjQ4NDQgMjQuOTkyMTg4IDMxLjY3MTg3NSAyMS44NzEwOTQgMzIuOTUzMTI1IDE1Ljg3ODkwNiBDIDMzLjE3OTY4OCAxNC44MjQyMTkgMzMuMjM0Mzc1IDEzLjg3MTA5NCAzMy4xODM1OTQgMTIuOTk2MDk0IEMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xNDg0MzggMTMgMzMuMTMyODEzIDEzIFogIi8+PC9nPjwvc3ZnPg==" alt="paypal">\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item no-padding>\n\n              <ion-input type="mail" placeholder="E-mail"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item no-padding>\n\n              <ion-input placeholder="Password" type="password"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n  </div>\n\n\n\n  <!--submit button-->\n\n  <button ion-button class="round" color="primary" margin-top full tappable (click)="send()">SEND</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\checkout-trip\checkout-trip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], CheckoutTripPage);
    return CheckoutTripPage;
}());

//# sourceMappingURL=checkout-trip.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage = (function () {
    function TripDetailPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // minus adult when click minus button
    TripDetailPage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    TripDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trip-detail',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\trip-detail\trip-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.name }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.time }}</span>\n            <ion-icon name="checkbox-outline" margin-left class="text-white" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text color="light" *ngIf="trip.free_cancellation">Free cancellation</span>\n            <ion-icon name="list-box" margin-left class="text-white" *ngIf="trip.electric_voucher"></ion-icon>\n            <span ion-text color="light" *ngIf="trip.electric_voucher">Electronic voucher</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">HIGHLIGHT</span>\n    <ul class="highlight">\n      <li *ngFor="let highlight of trip.highlights">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ highlight }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--booking form-->\n  <div class="booking-form card round" margin>\n    <div class="border-bottom" padding>\n      <h5>{{ trip.sub_name }}</h5>\n\n      <!--choose guest-->\n      <ion-grid class="filters" no-padding margin-top>\n        <ion-row>\n          <ion-col class="adult" width-70>\n            <span ion-text color="primary"><strong>{{ trip.price_adult | currency:\'USD\':true }}</strong> Adults</span>\n          </ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusAdult()" [hidden]="adults < 2"\n                      color="secondary"></ion-icon>\n          </ion-col>\n          <ion-col width-10 text-center>{{ adults }}</ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusAdult()" color="secondary"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row margin-top>\n          <ion-col width-70>\n            <span ion-text color="primary"><strong>{{ trip.price_child | currency:\'USD\':true }}</strong> Child (0-12 years)</span>\n          </ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusChildren()" [hidden]="children < 1"\n                      color="secondary"></ion-icon>\n          </ion-col>\n          <ion-col width-10 text-center>{{ children }}</ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusChildren()" color="secondary"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div padding class="form-bottom">\n<!--       <span ion-text color="dark" class="bold">{{ adults }} Adults</span> -->\n      <!--booking button-->\n      <button ion-button class="pull-right" color="secondary" tappable (click)="checkout()">Book Now {{ adults * trip.price_adult +\n        children * trip.price_child | currency:\'USD\':true }}\n      </button>\n      <div class="clear"></div>\n    </div>\n  </div>\n\n  <!--description-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">DESCRIPTION</span>\n    <p ion-text>{{ trip.description }}</p>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">LOCATION</span>\n    <p ion-text>{{ trip.location }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\trip-detail\trip-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
    ], TripDetailPage);
    return TripDetailPage;
}());

//# sourceMappingURL=trip-detail.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(374);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_activity_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_checkout_trip_checkout_trip__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_notifications_notifications__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_register_register__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_search_location_search_location__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_trip_detail_trip_detail__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_trips_trips__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_local_weather_local_weather__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_rest_rest__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_dashboard_all_dashboard_all__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_dsh1_second_norelease_dsh1_second_norelease__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_dsh1_second_prjonpipe_dsh1_second_prjonpipe__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_dsh1_second_rfi_dsh1_second_rfi__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_dsh1_second_afterrfi_dsh1_second_afterrfi__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_dsh2_home_dsh2_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_dsh3_home_dsh3_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_dsh4_home_dsh4_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_dsh5_home_dsh5_home__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_dsh6_home_dsh6_home__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_dsh7_home_dsh7_home__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__swimlane_ngx_datatable__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_database_database__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { IonicStorageModule } from '@ionic/storage';





// import {TripService} from "../services/trip-service";
// import {WeatherProvider} from "../services/weather";

























// import { ChartingService } from '../services/charting-service';
// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_local_weather_local_weather__["a" /* LocalWeatherPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_search_location_search_location__["a" /* SearchLocationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_trips_trips__["a" /* TripsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_dsh1_second_norelease_dsh1_second_norelease__["a" /* Dsh1SecondNoreleasePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_dsh1_second_prjonpipe_dsh1_second_prjonpipe__["a" /* Dsh1SecondPrjonpipePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_dsh1_second_rfi_dsh1_second_rfi__["a" /* Dsh1SecondRfiPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_dsh1_second_afterrfi_dsh1_second_afterrfi__["a" /* Dsh1SecondAfterrfiPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_dsh2_home_dsh2_home__["a" /* Dsh2HomePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_dsh3_home_dsh3_home__["a" /* Dsh3HomePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_dsh4_home_dsh4_home__["a" /* Dsh4HomePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_dsh5_home_dsh5_home__["a" /* Dsh5HomePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_dsh6_home_dsh6_home__["a" /* Dsh6HomePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_dsh7_home_dsh7_home__["a" /* Dsh7HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_33__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/dsh1-second-norelease/dsh1-second-norelease.module#Dsh1SecondNoreleasePageModule', name: 'Dsh1SecondNoreleasePage', segment: 'dsh1-second-norelease', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dsh1-second-afterrfi/dsh1-second-afterrfi.module#Dsh1SecondAfterrfiPageModule', name: 'Dsh1SecondAfterrfiPage', segment: 'dsh1-second-afterrfi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dsh1-second-prjonpipe/dsh1-second-prjonpipe.module#Dsh1SecondPrjonpipePageModule', name: 'Dsh1SecondPrjonpipePage', segment: 'dsh1-second-prjonpipe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dsh1-second-rfi/dsh1-second-rfi.module#Dsh1SecondRfiPageModule', name: 'Dsh1SecondRfiPage', segment: 'dsh1-second-rfi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dsh2-home/dsh2-home.module#Dsh2HomePageModule', name: 'Dsh2HomePage', segment: 'dsh2-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dsh3-home/dsh3-home.module#Dsh3HomePageModule', name: 'Dsh3HomePage', segment: 'dsh3-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dsh4-home/dsh4-home.module#Dsh4HomePageModule', name: 'Dsh4HomePage', segment: 'dsh4-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dsh6-home/dsh6-home.module#Dsh6HomePageModule', name: 'Dsh6HomePage', segment: 'dsh6-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dsh7-home/dsh7-home.module#Dsh7HomePageModule', name: 'Dsh7HomePage', segment: 'dsh7-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/peta/peta.module#PetaPageModule', name: 'PetaPage', segment: 'peta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dsh5-home/dsh5-home.module#Dsh5HomePageModule', name: 'Dsh5HomePage', segment: 'dsh5-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                // CheckoutTripPage,
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                // LocalWeatherPage,
                __WEBPACK_IMPORTED_MODULE_15__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
                // SearchLocationPage,
                // TripDetailPage,
                // TripsPage,
                __WEBPACK_IMPORTED_MODULE_23__pages_dsh1_second_norelease_dsh1_second_norelease__["a" /* Dsh1SecondNoreleasePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_dsh1_second_prjonpipe_dsh1_second_prjonpipe__["a" /* Dsh1SecondPrjonpipePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_dsh1_second_rfi_dsh1_second_rfi__["a" /* Dsh1SecondRfiPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_dsh1_second_afterrfi_dsh1_second_afterrfi__["a" /* Dsh1SecondAfterrfiPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_dsh2_home_dsh2_home__["a" /* Dsh2HomePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_dsh3_home_dsh3_home__["a" /* Dsh3HomePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_dsh4_home_dsh4_home__["a" /* Dsh4HomePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_dsh5_home_dsh5_home__["a" /* Dsh5HomePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_dsh6_home_dsh6_home__["a" /* Dsh6HomePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_dsh7_home_dsh7_home__["a" /* Dsh7HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_9__services_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_34__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_dashboard_all_dashboard_all__["a" /* DashboardAllProvider */]
                // ChartingService    
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_activities__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = (function () {
    function ActivityService() {
        this.activities = __WEBPACK_IMPORTED_MODULE_1__mock_activities__["a" /* ACTIVITIES */];
    }
    ActivityService.prototype.getAll = function () {
        return this.activities;
    };
    ActivityService.prototype.getItem = function (id) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id === parseInt(id)) {
                return this.activities[i];
            }
        }
        return null;
    };
    ActivityService.prototype.remove = function (item) {
        this.activities.splice(this.activities.indexOf(item), 1);
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ActivityService);
    return ActivityService;
}());

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [];
//# sourceMappingURL=mock-activities.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dsh2_home_dsh2_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dsh3_home_dsh3_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dsh4_home_dsh4_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dsh5_home_dsh5_home__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dsh6_home_dsh6_home__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dsh7_home_dsh7_home__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { timer } from 'rxjs/observable/timer';






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard, database) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.database = database;
        this.showSplash = true;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'All Mitratel Project', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], icon: 'ios-list' },
            { title: 'Build To Suit', component: __WEBPACK_IMPORTED_MODULE_8__pages_dsh2_home_dsh2_home__["a" /* Dsh2HomePage */], icon: 'ios-checkmark-circle-outline' },
            { title: 'Colaction & Reseller ', component: __WEBPACK_IMPORTED_MODULE_9__pages_dsh3_home_dsh3_home__["a" /* Dsh3HomePage */], icon: 'ios-checkmark-circle-outline' },
            { title: 'Microcell ', component: __WEBPACK_IMPORTED_MODULE_10__pages_dsh4_home_dsh4_home__["a" /* Dsh4HomePage */], icon: 'ios-checkmark-circle-outline' },
            { title: 'Special Project ', component: __WEBPACK_IMPORTED_MODULE_11__pages_dsh5_home_dsh5_home__["a" /* Dsh5HomePage */], icon: 'ios-checkmark-circle-outline' },
            { title: 'Mitra ', component: __WEBPACK_IMPORTED_MODULE_12__pages_dsh6_home_dsh6_home__["a" /* Dsh6HomePage */], icon: 'ios-checkmark-circle-outline' },
            { title: 'Summary ', component: __WEBPACK_IMPORTED_MODULE_13__pages_dsh7_home_dsh7_home__["a" /* Dsh7HomePage */], icon: 'ios-checkmark-circle-outline' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Splash Screen
            // this.splashScreen.show();
            _this.splashScreen.hide();
            //   timer(3000).subscribe(() => this.showSplash = false);
            //*** Control Keyboard
            // this.keyboard.hideKeyboardAccessoryBar(false);
            _this.keyboard.disableScroll(true);
            // //***  CREATE TABLE IS NOT EXIST
            // console.log('ionViewDidLoad WelcomePage setup table');  
            // // let qry="CREATE TABLE IF NOT EXISTS piter (id INTEGER NULL PRIMARY KEY AUTOINCREMENT, name TEXT , Summary TEXT, Company TEXT)"
            // let qry="CREATE TABLE IF NOT EXISTS piter (NAME TEXT,SUMMARY TEXT,COMPANY TEXT)"
            // this.database.createTable(qry,[]);    
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\app\app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar class="user-profile">\n\n\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n              <div class="user-avatar">\n\n                <img src="assets/img/avatar.jpeg">\n\n              </div>\n\n          </ion-col>\n\n          <ion-col padding-top col-8>\n\n            <h3 ion-text class="no-margin bold text-white">\n\n              Piter Novian\n\n            </h3>\n\n            <span ion-text color="putih">Super Admin</span><br>\n\n            <!-- <span ion-text color="putih">Area</span> -->\n\n          </ion-col>\n\n\n\n        </ion-row>\n\n\n\n        <ion-row no-padding class="other-data">\n\n          <ion-col no-padding class="column">\n\n            <!-- <button ion-button icon-left small full menuClose enable>\n\n              <ion-icon name="contact"></ion-icon>\n\n              Edit Profile\n\n            </button> -->\n\n          </ion-col>\n\n          <ion-col no-padding class="column">\n\n            <button ion-button icon-left small full  menuClose (click)="logout()">\n\n              <ion-icon class="fa fa-power-off"></ion-icon>\n\n              Log Out\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-grid>\n\n\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content color="hitam">\n\n    <!-- <ion-scroll scrollY="true"> -->\n\n            <ion-list class="user-list" >\n\n                <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n\n                    <ion-icon item-left [name]="menuItem.icon" style="color:antiquewhite"></ion-icon>\n\n                    <span ion-text color="putih">{{menuItem.title}}</span>\n\n                </button>\n\n            </ion-list>\n\n    <!-- </ion-scroll> -->\n\n    \n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- <div *ngIf="showSplash" class="splash">\n\n        <div class="spinner">\n\n                <div class="rect1"></div>\n\n                <div class="rect2"></div>\n\n                <div class="rect3"></div>\n\n                <div class="rect4"></div>\n\n                <div class="rect5"></div>\n\n              </div> -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        name: "Copacabana Beach",
        price_adult: 60,
        price_child: 30,
        time: "12h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_1.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [
            "assets/img/trip/thumb/trip_5.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 2,
        name: "Christ the Redeemer",
        price_adult: 90,
        price_child: 45,
        time: "4h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_2.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 3,
        name: "Ipiranga Museum",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_3.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 4,
        name: "Fernando de Noronha",
        price_adult: 500,
        price_child: 250,
        time: "24h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_4.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [],
        highlights: []
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notifications',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\notifications\notifications.html"*/'<ion-list class="no-margin">\n\n  <ion-list-header class="no-margin">\n\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n\n  	<span ion-text color="primary" class="bold">Notifications</span>\n\n  </ion-list-header>\n\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail"></ion-icon>\n\n  	New booking success!\n\n  </button>\n\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail"></ion-icon>\n\n  	Activity rescheduled\n\n  </button>\n\n  <button ion-item class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n\n  	<span ion-text color="secondary">Activity rescheduled</span>\n\n  </button>\n\n  <button ion-item class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n\n  	<span ion-text color="secondary">Activity rescheduled</span>\n\n  </button>\n\n</ion-list>\n\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\notifications\notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {SearchCarsPage} from "../search-cars/search-cars";
var SearchLocationPage = (function () {
    function SearchLocationPage(storage, nav, navParams) {
        this.storage = storage;
        this.nav = nav;
        this.navParams = navParams;
        // places
        this.places = {
            nearby: [
                {
                    id: 1,
                    name: "Current Location"
                },
                {
                    id: 2,
                    name: "Rio de Janeiro, Brazil"
                },
                {
                    id: 3,
                    name: "São Paulo, Brazil"
                },
                {
                    id: 4,
                    name: "New York, United States"
                },
                {
                    id: 5,
                    name: "London, United Kingdom"
                },
                {
                    id: 6,
                    name: "Same as pickup"
                }
            ],
            recent: [
                {
                    id: 1,
                    name: "Rio de Janeiro"
                }
            ]
        };
        this.fromto = this.navParams.data;
    }
    // search by item
    SearchLocationPage.prototype.searchBy = function (item) {
        if (this.fromto === 'from') {
            this.storage.set('pickup', item.name);
        }
        if (this.fromto === 'to') {
            this.storage.set('dropOff', item.name);
        }
        // this.nav.push(SearchCarsPage);
        this.nav.pop();
    };
    SearchLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-location',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\search-location\search-location.html"*/'<!-- # -->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-input placeholder="Enter Destination" padding-left autofocus></ion-input>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="list-no-border">\n\n    <!--nearby places-->\n\n    <ion-item *ngFor="let item of places.nearby" tappable (click)="searchBy(item)">\n\n      <ion-icon name="md-locate" item-left color="primary"></ion-icon>\n\n      <span ion-text color="primary">{{ item.name }}</span>\n\n    </ion-item>\n\n    <!--recent places-->\n\n    <ion-item *ngFor="let item of places.recent" tappable (click)="searchBy(item)">\n\n      <ion-icon name="md-time" item-left color="primary"></ion-icon>\n\n      <span ion-text color="primary">{{ item.name }}</span>\n\n    </ion-item>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\search-location\search-location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SearchLocationPage);
    return SearchLocationPage;
}());

//# sourceMappingURL=search-location.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripsPage = (function () {
    function TripsPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // set sample data
        this.trips = tripService.getAll();
    }
    // view trip detail
    TripsPage.prototype.viewDetail = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__["a" /* TripDetailPage */], { id: id });
    };
    TripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trips',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\trips\trips.html"*/'<!-- -->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      <span ion-text>Activities</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n  <!--  -->\n\n  <ion-toolbar padding color="light">\n\n    <p ion-text no-margin class="text-white">\n\n      <strong>4</strong> results found!\n\n    </p>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="trips detail-bg">\n\n  <!--list of trips-->\n\n  <div class="trip card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}">\n\n      <div class="background-filter rlt">\n\n        <div class="align-bottom" padding-left padding-right>\n\n          <h6 class="pull-left text-white" ion-text>{{ trip.name }}</h6>\n\n          <h6 class="pull-right text-white" ion-text>{{ trip.price_adult | currency:\'USD\':true }}</h6>\n\n          <div class="clear"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="padding-sm primary-bg">\n\n      <ion-icon name="time" class="text-white"></ion-icon>\n\n      <span ion-text class="text-white">{{ trip.time }}</span>\n\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\trips\trips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
    ], TripsPage);
    return TripsPage;
}());

//# sourceMappingURL=trips.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalWeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weather__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HttpErrorResponse } from '@angular/common/http';
//declare var tableauPlaceholder: any;
var LocalWeatherPage = (function () {
    // public locationList: Array<any> = [
    //   {city: 'Los Angeles', state: 'CA'},
    //   {city: 'Miami', state: 'FL'},
    //   {city: 'New York', state: 'NY'},
    //   {city: 'Seattle', state: 'WA'}
    // ]
    function LocalWeatherPage(navCtrl, weatherProvider, storage) {
        this.navCtrl = navCtrl;
        this.weatherProvider = weatherProvider;
        this.storage = storage;
        // this.viz_v1 = tableauPlaceholder.viz_v1;
    }
    LocalWeatherPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('location').then(function (val) {
            if (val != null) {
                _this.location = JSON.parse(val);
            }
            else {
                _this.location = {
                    state: 'NY',
                    city: 'New York'
                };
            }
            _this.getWeather(_this.location);
        });
    };
    LocalWeatherPage.prototype.getWeather = function (location) {
        var _this = this;
        if (typeof location === 'string') {
            this.location = JSON.parse(location);
            console.log(this.location);
        }
        else {
            this.location = location;
        }
        this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
    };
    LocalWeatherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-local-weather',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\local-weather\local-weather.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Local Weather</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="common-bg">\n  <iframe\n  name="iframe_a"\n  id="iframea"\n  src="http://36.67.240.56:8000/views/BOD/BOD_Summary?:embed=y&:showShareOptions=true&:display_count=no&:showVizHome=no"\n  frameborder="0"\n  style=" overflow:hidden;\n          overflow-x:hidden;\n          overflow-y:hidden;\n          height:100%;\n          width:100%;\n          position:absolute;\n          top:14px;left:0px;right:0px;bottom:0px;\n          -ms-touch-action: none;"\n          height="100%" width="100%"\n></iframe>\n<!-- <div class=\'tableauPlaceholder\' style=\'width: 1020px; height: 1000px;\'>\n  <object class=\'tableauViz\' width=\'1020\' height=\'1000\' style=\'display:none;\'>\n    <param name=\'host_url\' value=\'http%3A%2F%2F36.67.240.56%3A8000%2F\' />\n    <param name=\'site_root\' value=\'\' /><param name=\'name\' value=\'BOD&#47;BOD_Summary\' />\n    <param name=\'tabs\' value=\'no\' /><param name=\'toolbar\' value=\'yes\' />\n    <param name=\'showShareOptions\' value=\'true\' />\n  </object>\n</div> -->\n</ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\local-weather\local-weather.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */]])
    ], LocalWeatherPage);
    return LocalWeatherPage;
}());

//# sourceMappingURL=local-weather.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { api } from './config';


var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // Private
    WeatherProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    WeatherProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    WeatherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WeatherProvider);
    return WeatherProvider;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        console.log('Hello RestProvider Provider');
    }
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dashboard_all_dashboard_all__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dsh1_second_norelease_dsh1_second_norelease__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dsh1_second_prjonpipe_dsh1_second_prjonpipe__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dsh1_second_rfi_dsh1_second_rfi__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dsh1_second_afterrfi_dsh1_second_afterrfi__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_highcharts__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Storage} from '@ionic/storage';
// import { DOCUMENT} from '@angular/common';
// import {NotificationsPage} from "../notifications/notifications";

// import {TripsPage} from "../trips/trips";
//import {SearchLocationPage} from "../search-location/search-location";

// import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';





// import HighCharts from 'highcharts'
// import addMore from "highcharts/highcharts-more";
// addMore(Highcharts)
var HomePage = (function () {
    // search condition
    // public search = {
    //   name: "Rio de Janeiro, Brazil",
    //   date: new Date().toISOString()
    // }
    //today;
    // dataInicial: any;
    // maxDate: string;
    // @ViewChild(Content) content: Content
    function HomePage(
        // private storage: Storage,
        navCtrl, popoverCtrl, dashboarAll, alertCtrl, modalCtrl
        // private pageScrollService: PageScrollService
        // ,@Inject(DOCUMENT)
        // private document: any
    ) {
        //this.today = new Date().toISOString();
        // this.getDataAll();
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.dashboarAll = dashboarAll;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        // this.getCobaData();
    }
    HomePage.prototype.secondAlertInfo1 = function () {
        var _this = this;
        var alert1 = this.alertCtrl.create({
            title: '<p>Warning<p>',
            //subTitle:'subtitle',
            message: "<p>It might take time to load this Site's table. Do you still want to proceed?</p>",
            cssClass: 'alertModal',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'alertSucess',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Continue',
                    cssClass: 'alertDangger',
                    handler: function (data) {
                        // console.log('Items Removed!');
                        //  alert("suksess");
                        //Call you API to remove Items here.
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dsh1_second_norelease_dsh1_second_norelease__["a" /* Dsh1SecondNoreleasePage */]);
                    }
                }
            ]
        });
        alert1.present();
    };
    HomePage.prototype.secondAlertInfo2 = function () {
        var _this = this;
        //var data = { message : 'hello world' };
        var ModalAdduser = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__dsh1_second_prjonpipe_dsh1_second_prjonpipe__["a" /* Dsh1SecondPrjonpipePage */]);
        ModalAdduser.onDidDismiss(function () {
            _this.ionViewDidLoad();
        });
        ModalAdduser.present();
        // let alert1= this.alertCtrl.create({
        //   title: '<p>Warning<p>',
        //   //subTitle:'subtitle',
        //   message: "<p>It might take time to load this Site's table. Do you still want to proceed?</p>",
        //   cssClass:'alertModal',
        //   buttons: [
        //     {
        //       text: 'Cancel',
        //       role: 'cancel',
        //       cssClass:'alertSucess',
        //       handler: () => {
        //         console.log('Cancel clicked');
        //       }
        //     },
        //     {
        //       text: 'Continue',
        //       cssClass:'alertDangger',
        //       handler: data => {
        //         this.navCtrl.push(Dsh1SecondPrjonpipePage);
        //       }
        //     }
        //   ]
        // });
        // alert1.present();
    };
    HomePage.prototype.secondAlertInfo3 = function () {
        var _this = this;
        var alert1 = this.alertCtrl.create({
            title: '<p>Warning<p>',
            //subTitle:'subtitle',
            message: "<p>It might take time to load this Site's table. Do you still want to proceed?</p>",
            cssClass: 'alertModal',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'alertSucess',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Continue',
                    cssClass: 'alertDangger',
                    handler: function (data) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__dsh1_second_rfi_dsh1_second_rfi__["a" /* Dsh1SecondRfiPage */]);
                    }
                }
            ]
        });
        alert1.present();
    };
    HomePage.prototype.secondAlertInfo4 = function () {
        var _this = this;
        var alert1 = this.alertCtrl.create({
            title: '<p>Warning<p>',
            //subTitle:'subtitle',
            message: "<p>It might take time to load this Site's table. Do you still want to proceed?</p>",
            cssClass: 'alertModal',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'alertSucess',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Continue',
                    cssClass: 'alertDangger',
                    handler: function (data) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__dsh1_second_afterrfi_dsh1_second_afterrfi__["a" /* Dsh1SecondAfterrfiPage */]);
                    }
                }
            ]
        });
        alert1.present();
    };
    // public goToHead2(): void {
    //     let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#container-scroll');
    //     this.pageScrollService.start(pageScrollInstance);
    // };
    // public scrollSomewhereHorizontally(): void {
    //     let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: '#targetToTheRight', verticalScrolling: false});
    //     this.pageScrollService.start(pageScrollInstance);
    // };
    // public goToHeadingInContainer(): void {
    //     let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: '.headingClass', scrollingViews: [this.container.nativeElement]});
    //     this.pageScrollService.start(pageScrollInstance);
    // };
    // @ViewChild('datePicker') datePicker;
    //    open() {
    //        if (!this.dataInicial) {
    //            this.dataInicial = new Date().toJSON().split('T')[0];
    //            setTimeout(() => {
    //                this.datePicker.open();
    //            }, 50)
    //        } else {
    //            this.datePicker.open();
    //        }
    //    }
    HomePage.prototype.getDataAll = function () {
        this.dashboarAll.getDataAll().subscribe(function (data) { return console.log(data); });
    };
    HomePage.prototype.getCobaData = function () {
        this.dashboarAll.getCobaData().subscribe(function (data) { return console.log(data); });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        //== Mouse Over - Change Color ==
        this.firstCardEventMouse();
        this.secondEventMousehover();
        this.trheeEventMousehover();
        document.getElementById("divPerUbis").hidden = true;
        this.fourthEventMousehover();
        document.getElementById("divPerArea").hidden = true;
        this.drilldown();
        // var objRelease=document.getElementById("card-footer-release");
        // objRelease.addEventListener('click', function (){
        //   alert("test");
        // });
    };
    HomePage.prototype.firstCardEventMouse = function () {
        // SECOND TO THREE
        // == Not Release
        var defaultUrlImg = "assets/img/new/";
        var varSecond0 = 0;
        var varSecond1 = 0;
        var varSecond2 = 0;
        var varSecond3 = 0;
        var varPerubisCol_1 = 0;
        var varPerubisCol_2 = 0;
        var varPerubisCol_3 = 0;
        var varPerubisCol_4 = 0;
        // var ObjSecondNotRelease= <HTMLImageElement>document.getElementById("divId_header_notRelease");
        //     ObjSecondNotRelease.addEventListener('click', function () {
        //       switch(expression) {
        //         case 0:
        //             document.getElementById("divPerUbis").hidden = false;
        //             // var objScoundImg1= <HTMLImageElement>document.getElementById("second-img-4");
        //             // objScoundImg1.src = "assets/img/new/PoP_m.png";
        //             expression = 1;
        //             break;
        //         case 1:
        //              document.getElementById("divPerUbis").hidden = true;
        //              document.getElementById("divPerArea").hidden = true;
        //              expression = 0;
        //              varPerubisCol_1=0;
        //             break;
        //         default:
        //             document.getElementById("divPerUbis").hidden = true;
        //     }
        // });
        //=>SeCOND DIFINITION
        var ObjSecond0 = document.getElementById("divSecond[0]");
        var ObjSecond1 = document.getElementById("divSecond[1]");
        var ObjSecond2 = document.getElementById("divSecond[2]");
        var ObjSecond3 = document.getElementById("divSecond[3]");
        //=>THREE DIFINITION
        var ObjThree0 = document.getElementById("divThree[0]");
        var ObjThree1 = document.getElementById("divThree[1]");
        var ObjThree2 = document.getElementById("divThree[2]");
        var ObjThree3 = document.getElementById("divThree[3]");
        //=> IMAGE DEFINITION
        var objScoundImg0 = document.getElementById("second-img-0");
        var objScoundImg1 = document.getElementById("second-img-1");
        var objScoundImg2 = document.getElementById("second-img-2");
        var objScoundImg3 = document.getElementById("second-img-3");
        var objThreeImg0 = document.getElementById("three-img-0");
        var objThreeImg1 = document.getElementById("three-img-1");
        var objThreeImg2 = document.getElementById("three-img-2");
        var objThreeImg3 = document.getElementById("three-img-3");
        var objFourthImg0 = document.getElementById("fourth-img-0");
        var objFourthImg1 = document.getElementById("fourth-img-1");
        var objFourthImg2 = document.getElementById("fourth-img-2");
        var objFourthImg3 = document.getElementById("fourth-img-3");
        var objFourthFooterLabelLeft0 = document.getElementById("fourthFooterLabelLeft[0]");
        var objFourthFooterLabelLeft1 = document.getElementById("fourthFooterLabelLeft[1]");
        var objFourthFooterLabelLeft2 = document.getElementById("fourthFooterLabelLeft[2]");
        var objFourthFooterLabelLeft3 = document.getElementById("fourthFooterLabelLeft[3]");
        var threeFooterLabelLeft0 = document.getElementById("threeFooterLabelLeft[0]");
        var threeFooterLabelLeft1 = document.getElementById("threeFooterLabelLeft[1]");
        var threeFooterLabelLeft2 = document.getElementById("threeFooterLabelLeft[2]");
        var threeFooterLabelLeft3 = document.getElementById("threeFooterLabelLeft[3]");
        var firstLabel0 = document.getElementById("firstLabel[0]"); //text header
        var firstLabel1 = document.getElementById("firstLabel[1]"); //image
        var firstLabel2 = document.getElementById("firstLabel[2]"); //Value
        var firstLabel3 = document.getElementById("firstLabel[3]"); //text footer
        // SECOND TO THREE
        // == PER-UBIS -> B2S
        //== divSecond[0]
        ObjSecond0.addEventListener('click', function () {
            switch (varSecond0) {
                case 0:
                    ObjSecond0.style.backgroundColor = "#83D7F1";
                    ObjSecond1.style.backgroundColor = "#FFFFFF";
                    ObjSecond2.style.backgroundColor = "#FFFFFF";
                    ObjSecond3.style.backgroundColor = "#FFFFFF";
                    ObjThree0.style.backgroundColor = "#FFFFFF";
                    ObjThree1.style.backgroundColor = "#FFFFFF";
                    ObjThree2.style.backgroundColor = "#FFFFFF";
                    ObjThree3.style.backgroundColor = "#FFFFFF";
                    document.getElementById("divPerUbis").hidden = false;
                    varSecond0 = 1;
                    varSecond1 = 0;
                    varSecond2 = 0;
                    varSecond3 = 0;
                    var srcScoundImgName0 = objScoundImg0.src;
                    var aryScoundImgName0 = srcScoundImgName0.split("/");
                    var ScoundImgName0 = aryScoundImgName0.reverse()[0];
                    objThreeImg0.src = defaultUrlImg + ScoundImgName0;
                    objThreeImg1.src = defaultUrlImg + ScoundImgName0;
                    objThreeImg2.src = defaultUrlImg + ScoundImgName0;
                    objThreeImg3.src = defaultUrlImg + ScoundImgName0;
                    firstLabel0.innerText = "Not Release";
                    firstLabel1.src = defaultUrlImg + ScoundImgName0;
                    firstLabel2.innerText = "";
                    firstLabel3.innerText = "PER-UBIS";
                    threeFooterLabelLeft0.innerText = "Build To Suit";
                    threeFooterLabelLeft1.innerText = "CORE";
                    threeFooterLabelLeft2.innerText = "Microcell";
                    threeFooterLabelLeft3.innerText = "Special Project";
                    objFourthFooterLabelLeft0.innerText = "Area1";
                    objFourthFooterLabelLeft1.innerText = "Area2";
                    objFourthFooterLabelLeft2.innerText = "Area3";
                    objFourthFooterLabelLeft3.innerText = "Area4";
                    break;
                case 1:
                    firstLabel0.innerText = "All Project";
                    firstLabel1.src = defaultUrlImg + "All_Project_m.png";
                    firstLabel2.innerText = "1000"; //getfrom API
                    firstLabel3.innerText = "";
                    ObjSecond0.style.backgroundColor = "#FFFFFF";
                    ObjThree0.style.backgroundColor = "#FFFFFF";
                    ObjThree1.style.backgroundColor = "#FFFFFF";
                    ObjThree2.style.backgroundColor = "#FFFFFF";
                    ObjThree3.style.backgroundColor = "#FFFFFF";
                    document.getElementById("divPerUbis").hidden = true;
                    document.getElementById("divPerArea").hidden = true;
                    varSecond0 = 0;
                    varPerubisCol_1 = 0;
                    break;
                default:
                    document.getElementById("divPerUbis").hidden = true;
            }
        });
        //== divSecond[0]
        ObjSecond1.addEventListener('click', function () {
            switch (varSecond1) {
                case 0:
                    ObjSecond0.style.backgroundColor = "#FFFFFF";
                    ObjSecond1.style.backgroundColor = "#83D7F1";
                    ObjSecond2.style.backgroundColor = "#FFFFFF";
                    ObjSecond3.style.backgroundColor = "#FFFFFF";
                    ObjThree0.style.backgroundColor = "#FFFFFF";
                    ObjThree1.style.backgroundColor = "#FFFFFF";
                    ObjThree2.style.backgroundColor = "#FFFFFF";
                    ObjThree3.style.backgroundColor = "#FFFFFF";
                    document.getElementById("divPerUbis").hidden = false;
                    document.getElementById("divPerArea").hidden = true;
                    varSecond0 = 0;
                    varSecond1 = 1;
                    varSecond2 = 0;
                    varSecond3 = 0;
                    var srcScoundImgName1 = objScoundImg1.src;
                    var aryScoundImgName1 = srcScoundImgName1.split("/");
                    var ScoundImgName1 = aryScoundImgName1.reverse()[0];
                    objThreeImg0.src = defaultUrlImg + ScoundImgName1;
                    objThreeImg1.src = defaultUrlImg + ScoundImgName1;
                    objThreeImg2.src = defaultUrlImg + ScoundImgName1;
                    objThreeImg3.src = defaultUrlImg + ScoundImgName1;
                    firstLabel0.innerText = "Prj On Pipe";
                    firstLabel1.src = defaultUrlImg + ScoundImgName1;
                    firstLabel2.innerText = "";
                    firstLabel3.innerText = "PER-UBIS";
                    threeFooterLabelLeft0.innerText = "Build To Suit";
                    threeFooterLabelLeft1.innerText = "CORE";
                    threeFooterLabelLeft2.innerText = "Microcell";
                    threeFooterLabelLeft3.innerText = "Special Project";
                    objFourthFooterLabelLeft0.innerText = "Area1";
                    objFourthFooterLabelLeft1.innerText = "Area2";
                    objFourthFooterLabelLeft2.innerText = "Area3";
                    objFourthFooterLabelLeft3.innerText = "Area4";
                    break;
                case 1:
                    firstLabel0.innerText = "All Project";
                    firstLabel1.src = defaultUrlImg + "All_Project_m.png";
                    firstLabel2.innerText = "1000"; //getfrom API
                    firstLabel3.innerText = "";
                    ObjSecond1.style.backgroundColor = "#FFFFFF";
                    ObjThree0.style.backgroundColor = "#FFFFFF";
                    ObjThree1.style.backgroundColor = "#FFFFFF";
                    ObjThree2.style.backgroundColor = "#FFFFFF";
                    ObjThree3.style.backgroundColor = "#FFFFFF";
                    document.getElementById("divPerUbis").hidden = true;
                    document.getElementById("divPerArea").hidden = true;
                    varSecond1 = 0;
                    varPerubisCol_1 = 0;
                    break;
                default:
                    document.getElementById("divPerUbis").hidden = true;
            }
        });
        //== divSecond[0]
        ObjSecond2.addEventListener('click', function () {
            switch (varSecond2) {
                case 0:
                    ObjSecond0.style.backgroundColor = "#FFFFFF";
                    ObjSecond1.style.backgroundColor = "#FFFFFF";
                    ObjSecond2.style.backgroundColor = "#83D7F1";
                    ObjSecond3.style.backgroundColor = "#FFFFFF";
                    ObjThree0.style.backgroundColor = "#FFFFFF";
                    ObjThree1.style.backgroundColor = "#FFFFFF";
                    ObjThree2.style.backgroundColor = "#FFFFFF";
                    ObjThree3.style.backgroundColor = "#FFFFFF";
                    document.getElementById("divPerUbis").hidden = false;
                    document.getElementById("divPerArea").hidden = true;
                    varSecond0 = 0;
                    varSecond1 = 0;
                    varSecond2 = 1;
                    varSecond3 = 0;
                    var srcScoundImgName2 = objScoundImg2.src;
                    var aryScoundImgName2 = srcScoundImgName2.split("/");
                    var ScoundImgName2 = aryScoundImgName2.reverse()[0];
                    objThreeImg0.src = defaultUrlImg + ScoundImgName2;
                    objThreeImg1.src = defaultUrlImg + ScoundImgName2;
                    objThreeImg2.src = defaultUrlImg + ScoundImgName2;
                    objThreeImg3.src = defaultUrlImg + ScoundImgName2;
                    firstLabel0.innerText = "RFI";
                    firstLabel1.src = defaultUrlImg + ScoundImgName2;
                    firstLabel2.innerText = "";
                    firstLabel3.innerText = "PER-UBIS";
                    threeFooterLabelLeft0.innerText = "Build To Suit";
                    threeFooterLabelLeft1.innerText = "CORE";
                    threeFooterLabelLeft2.innerText = "Microcell";
                    threeFooterLabelLeft3.innerText = "Special Project";
                    objFourthFooterLabelLeft0.innerText = "Area1";
                    objFourthFooterLabelLeft1.innerText = "Area2";
                    objFourthFooterLabelLeft2.innerText = "Area3";
                    objFourthFooterLabelLeft3.innerText = "Area4";
                    break;
                case 1:
                    firstLabel0.innerText = "All Project";
                    firstLabel1.src = defaultUrlImg + "All_Project_m.png";
                    firstLabel2.innerText = "1000"; //getfrom API
                    firstLabel3.innerText = "";
                    ObjSecond2.style.backgroundColor = "#FFFFFF";
                    ObjThree0.style.backgroundColor = "#FFFFFF";
                    ObjThree1.style.backgroundColor = "#FFFFFF";
                    ObjThree2.style.backgroundColor = "#FFFFFF";
                    ObjThree3.style.backgroundColor = "#FFFFFF";
                    document.getElementById("divPerUbis").hidden = true;
                    document.getElementById("divPerArea").hidden = true;
                    varSecond2 = 0;
                    varPerubisCol_1 = 0;
                    break;
                default:
                    document.getElementById("divPerUbis").hidden = true;
            }
        });
        //== divSecond[0]
        ObjSecond3.addEventListener('click', function () {
            switch (varSecond3) {
                case 0:
                    ObjSecond0.style.backgroundColor = "#FFFFFF";
                    ObjSecond1.style.backgroundColor = "#FFFFFF";
                    ObjSecond2.style.backgroundColor = "#FFFFFF";
                    ObjSecond3.style.backgroundColor = "#83D7F1";
                    ObjThree0.style.backgroundColor = "#FFFFFF";
                    ObjThree1.style.backgroundColor = "#FFFFFF";
                    ObjThree2.style.backgroundColor = "#FFFFFF";
                    ObjThree3.style.backgroundColor = "#FFFFFF";
                    document.getElementById("divPerUbis").hidden = false;
                    document.getElementById("divPerArea").hidden = true;
                    varSecond0 = 0;
                    varSecond1 = 0;
                    varSecond2 = 0;
                    varSecond3 = 1;
                    var srcScoundImgName3 = objScoundImg3.src;
                    var aryScoundImgName3 = srcScoundImgName3.split("/");
                    var ScoundImgName3 = aryScoundImgName3.reverse()[0];
                    objThreeImg0.src = defaultUrlImg + ScoundImgName3;
                    objThreeImg1.src = defaultUrlImg + ScoundImgName3;
                    objThreeImg2.src = defaultUrlImg + ScoundImgName3;
                    objThreeImg3.src = defaultUrlImg + ScoundImgName3;
                    firstLabel0.innerText = "AFTER RFI";
                    firstLabel1.src = defaultUrlImg + ScoundImgName3;
                    firstLabel2.innerText = "";
                    firstLabel3.innerText = "PER-UBIS";
                    threeFooterLabelLeft0.innerText = "BAUT";
                    threeFooterLabelLeft1.innerText = "BAST 1";
                    threeFooterLabelLeft2.innerText = "BAST 2";
                    threeFooterLabelLeft3.innerText = "Close";
                    objFourthFooterLabelLeft0.innerText = "BAUK";
                    objFourthFooterLabelLeft1.innerText = "BAPS";
                    objFourthFooterLabelLeft2.innerText = "Invoice";
                    objFourthFooterLabelLeft3.innerText = "close";
                    break;
                case 1:
                    firstLabel0.innerText = "All Project";
                    firstLabel1.src = defaultUrlImg + "All_Project_m.png";
                    firstLabel2.innerText = ""; //getfrom API
                    firstLabel3.innerText = "";
                    ObjSecond3.style.backgroundColor = "#FFFFFF";
                    ObjThree0.style.backgroundColor = "#FFFFFF";
                    ObjThree1.style.backgroundColor = "#FFFFFF";
                    ObjThree2.style.backgroundColor = "#FFFFFF";
                    ObjThree3.style.backgroundColor = "#FFFFFF";
                    document.getElementById("divPerUbis").hidden = true;
                    document.getElementById("divPerArea").hidden = true;
                    varSecond3 = 0;
                    varPerubisCol_1 = 0;
                    break;
                default:
                    document.getElementById("divPerUbis").hidden = true;
            }
        });
        // THREE TO FOURTH
        // == PER-UBIS -> B2S
        ObjThree0.addEventListener('click', function () {
            var srcThreeImgName0 = objThreeImg0.src;
            var aryThreeImgName0 = srcThreeImgName0.split("/");
            var ThreeImgName0 = aryThreeImgName0.reverse()[0];
            switch (varPerubisCol_1) {
                case 0:
                    document.getElementById("divPerArea").hidden = false;
                    varPerubisCol_1 = 1;
                    varPerubisCol_2 = 0;
                    varPerubisCol_3 = 0;
                    varPerubisCol_4 = 0;
                    ObjThree0.style.backgroundColor = "#83D7F1";
                    ObjThree1.style.backgroundColor = "#FFFFFF";
                    ObjThree2.style.backgroundColor = "#FFFFFF";
                    ObjThree3.style.backgroundColor = "#FFFFFF";
                    //==Aditional Attribute on Change ==
                    // var ImgName1 = strName1.replace(srcUrlImg,"");
                    // alert("url=" + objScoundImg1.src);
                    // alert("Name=" + ImgName1);
                    // alert("last=" + rlst);
                    objFourthImg0.src = defaultUrlImg + ThreeImgName0;
                    objFourthImg1.src = defaultUrlImg + ThreeImgName0;
                    objFourthImg2.src = defaultUrlImg + ThreeImgName0;
                    objFourthImg3.src = defaultUrlImg + ThreeImgName0;
                    // alert("text tree=" + threeFooterLabelLeft0.textContent);
                    firstLabel0.innerText = threeFooterLabelLeft0.textContent; //"BUILD TO SUIT";
                    firstLabel1.src = defaultUrlImg + ThreeImgName0;
                    firstLabel2.innerText = "";
                    firstLabel3.innerText = "PER-AREA";
                    break;
                case 1:
                    ObjThree0.style.backgroundColor = "#FFFFFF";
                    document.getElementById("divPerArea").hidden = true;
                    varPerubisCol_1 = 0;
                    firstLabel0.innerText = threeFooterLabelLeft0.textContent; //"BUILD TO SUIT";
                    firstLabel1.src = defaultUrlImg + ThreeImgName0;
                    firstLabel2.innerText = "";
                    firstLabel3.innerText = "PER-UBIS";
                    break;
                default:
                    document.getElementById("divPerUbis").hidden = true;
            }
        });
        // == PER-UBIS -> CORE
        ObjThree1.addEventListener('click', function () {
            var srcThreeImgName1 = objThreeImg1.src;
            var aryThreeImgName1 = srcThreeImgName1.split("/");
            var ThreeImgName1 = aryThreeImgName1.reverse()[0];
            switch (varPerubisCol_2) {
                case 0:
                    document.getElementById("divPerArea").hidden = false;
                    varPerubisCol_1 = 0;
                    varPerubisCol_2 = 1;
                    varPerubisCol_3 = 0;
                    varPerubisCol_4 = 0;
                    ObjThree0.style.backgroundColor = "#FFFFFF";
                    ObjThree1.style.backgroundColor = "#83D7F1";
                    ObjThree2.style.backgroundColor = "#FFFFFF";
                    ObjThree3.style.backgroundColor = "#FFFFFF";
                    //==Aditional Attribute on Change ==
                    objFourthImg0.src = defaultUrlImg + ThreeImgName1;
                    objFourthImg1.src = defaultUrlImg + ThreeImgName1;
                    objFourthImg2.src = defaultUrlImg + ThreeImgName1;
                    objFourthImg3.src = defaultUrlImg + ThreeImgName1;
                    firstLabel0.innerText = threeFooterLabelLeft1.textContent; //"CORE";
                    firstLabel1.src = defaultUrlImg + ThreeImgName1;
                    firstLabel2.innerText = "";
                    firstLabel3.innerText = "PER-AREA";
                    break;
                case 1:
                    ObjThree1.style.backgroundColor = "#FFFFFF";
                    varPerubisCol_2 = 0;
                    document.getElementById("divPerArea").hidden = true;
                    firstLabel0.innerText = threeFooterLabelLeft1.textContent; //"CORE";
                    firstLabel1.src = defaultUrlImg + ThreeImgName1;
                    firstLabel2.innerText = "";
                    firstLabel3.innerText = "PER-UBIS";
                    break;
                default:
                    document.getElementById("divPerUbis").hidden = true;
            }
        });
        // == PER-UBIS -> Microcell
        ObjThree2.addEventListener('click', function () {
            var srcThreeImgName2 = objThreeImg2.src;
            var aryThreeImgName2 = srcThreeImgName2.split("/");
            var ThreeImgName2 = aryThreeImgName2.reverse()[0];
            switch (varPerubisCol_3) {
                case 0:
                    document.getElementById("divPerArea").hidden = false;
                    varPerubisCol_1 = 0;
                    varPerubisCol_2 = 0;
                    varPerubisCol_3 = 1;
                    varPerubisCol_4 = 0;
                    ObjThree0.style.backgroundColor = "#FFFFFF";
                    ObjThree1.style.backgroundColor = "#FFFFFF";
                    ObjThree2.style.backgroundColor = "#83D7F1";
                    ObjThree3.style.backgroundColor = "#FFFFFF";
                    //==Aditional Attribute on Change ==
                    objFourthImg0.src = defaultUrlImg + ThreeImgName2;
                    objFourthImg1.src = defaultUrlImg + ThreeImgName2;
                    objFourthImg2.src = defaultUrlImg + ThreeImgName2;
                    objFourthImg3.src = defaultUrlImg + ThreeImgName2;
                    firstLabel0.innerText = threeFooterLabelLeft2.textContent; //"Microcell";
                    firstLabel1.src = defaultUrlImg + ThreeImgName2;
                    firstLabel2.innerText = "";
                    firstLabel3.innerText = "PER-AREA";
                    break;
                case 1:
                    ObjThree2.style.backgroundColor = "#FFFFFF";
                    varPerubisCol_3 = 0;
                    document.getElementById("divPerArea").hidden = true;
                    firstLabel0.innerText = threeFooterLabelLeft2.textContent; //"Microcell";
                    firstLabel1.src = defaultUrlImg + ThreeImgName2;
                    firstLabel2.innerText = "";
                    firstLabel3.innerText = "PER-UBIS";
                    break;
                default:
                    document.getElementById("divPerUbis").hidden = true;
            }
        });
        // == PER-UBIS -> Special Project
        ObjThree3.addEventListener('click', function () {
            var srcThreeImgName3 = objThreeImg3.src;
            var aryThreeImgName3 = srcThreeImgName3.split("/");
            var ThreeImgName3 = aryThreeImgName3.reverse()[0];
            switch (varPerubisCol_4) {
                case 0:
                    document.getElementById("divPerArea").hidden = false;
                    varPerubisCol_1 = 0;
                    varPerubisCol_2 = 0;
                    varPerubisCol_3 = 0;
                    varPerubisCol_4 = 1;
                    ObjThree0.style.backgroundColor = "#FFFFFF";
                    ObjThree1.style.backgroundColor = "#FFFFFF";
                    ObjThree2.style.backgroundColor = "#FFFFFF";
                    ObjThree3.style.backgroundColor = "#83D7F1";
                    //==Aditional Attribute on Change ==
                    objFourthImg0.src = defaultUrlImg + ThreeImgName3;
                    objFourthImg1.src = defaultUrlImg + ThreeImgName3;
                    objFourthImg2.src = defaultUrlImg + ThreeImgName3;
                    objFourthImg3.src = defaultUrlImg + ThreeImgName3;
                    firstLabel0.innerText = threeFooterLabelLeft3.textContent; //"Special Project";
                    firstLabel1.src = defaultUrlImg + ThreeImgName3;
                    firstLabel2.innerText = "";
                    firstLabel3.innerText = "PER-AREA";
                    break;
                case 1:
                    ObjThree3.style.backgroundColor = "#FFFFFF";
                    varPerubisCol_4 = 0;
                    document.getElementById("divPerArea").hidden = true;
                    firstLabel0.innerText = threeFooterLabelLeft3.textContent; //"Special Project";
                    firstLabel1.src = defaultUrlImg + ThreeImgName3;
                    firstLabel2.innerText = "";
                    firstLabel3.innerText = "PER-UBIS";
                    break;
                default:
                    document.getElementById("divPerUbis").hidden = true;
            }
        });
    };
    HomePage.prototype.secondEventMousehover = function () {
        // NOT-RELEASE
        var objRelease = document.getElementById("card-footer-release");
        objRelease.onmouseover = function () {
            objRelease.style.backgroundColor = "#FA8633";
        };
        objRelease.onmouseout = function () {
            objRelease.style.backgroundColor = "#E9E9E9";
        };
        // ON PIPE
        var objOnPipe = document.getElementById("card-footer-onPipe");
        objOnPipe.onmouseover = function () {
            objOnPipe.style.backgroundColor = "#FA8633";
        };
        objOnPipe.onmouseout = function () {
            objOnPipe.style.backgroundColor = "#E9E9E9";
        };
        //RFI
        var objRfi = document.getElementById("card-footer-onRfi");
        objRfi.onmouseover = function () {
            objRfi.style.backgroundColor = "#FA8633";
        };
        objRfi.onmouseout = function () {
            objRfi.style.backgroundColor = "#E9E9E9";
        };
        // BEFORE RFI
        var onAfterRfi = document.getElementById("card-footer-onAfterRfi");
        onAfterRfi.onmouseover = function () {
            onAfterRfi.style.backgroundColor = "#FA8633";
        };
        onAfterRfi.onmouseout = function () {
            onAfterRfi.style.backgroundColor = "#E9E9E9";
        };
    };
    //THREE - PerUbis
    HomePage.prototype.trheeEventMousehover = function () {
        // BUILT TO SUIT
        var objB2c = document.getElementById("three-card-footer-b2c");
        objB2c.onmouseover = function () {
            objB2c.style.backgroundColor = "#FA8633";
        };
        objB2c.onmouseout = function () {
            objB2c.style.backgroundColor = "#E9E9E9";
        };
        // CORE
        var objCore = document.getElementById("three-card-footer-core");
        objCore.onmouseover = function () {
            objCore.style.backgroundColor = "#FA8633";
        };
        objCore.onmouseout = function () {
            objCore.style.backgroundColor = "#E9E9E9";
        };
        //MICROCELL
        var objMicrocell = document.getElementById("three-card-footer-microcell");
        objMicrocell.onmouseover = function () {
            objMicrocell.style.backgroundColor = "#FA8633";
        };
        objMicrocell.onmouseout = function () {
            objMicrocell.style.backgroundColor = "#E9E9E9";
        };
        // SPECIAL PROJECT
        var ObjSprj = document.getElementById("three-card-footer-specialPrj");
        ObjSprj.onmouseover = function () {
            ObjSprj.style.backgroundColor = "#FA8633";
        };
        ObjSprj.onmouseout = function () {
            ObjSprj.style.backgroundColor = "#E9E9E9";
        };
    };
    //FOURTH - PerArea
    HomePage.prototype.fourthEventMousehover = function () {
        // AREA 1
        var objArea1 = document.getElementById("fourth-card-footer-area1");
        objArea1.onmouseover = function () {
            objArea1.style.backgroundColor = "#FA8633";
        };
        objArea1.onmouseout = function () {
            objArea1.style.backgroundColor = "#E9E9E9";
        };
        // AREA 2
        var objArea2 = document.getElementById("fourth-card-footer-area2");
        objArea2.onmouseover = function () {
            objArea2.style.backgroundColor = "#FA8633";
        };
        objArea2.onmouseout = function () {
            objArea2.style.backgroundColor = "#E9E9E9";
        };
        //AREA 3
        var objArea3 = document.getElementById("fourth-card-footer-area3");
        objArea3.onmouseover = function () {
            objArea3.style.backgroundColor = "#FA8633";
        };
        objArea3.onmouseout = function () {
            objArea3.style.backgroundColor = "#E9E9E9";
        };
        // AREA 4
        var ObjArea4 = document.getElementById("fourth-card-footer-area4");
        ObjArea4.onmouseover = function () {
            ObjArea4.style.backgroundColor = "#FA8633";
        };
        ObjArea4.onmouseout = function () {
            ObjArea4.style.backgroundColor = "#E9E9E9";
        };
    };
    HomePage.prototype.drilldown = function () {
        var myChart = __WEBPACK_IMPORTED_MODULE_8_highcharts__["chart"]('testChart1', {
            chart: {
                zoomType: 'x',
                panning: true,
                panKey: 'shift',
                type: 'areaspline'
            },
            title: {
                text: "Project Summary of 10 September 2018",
                style: {
                    fontSize: '15px'
                }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ["W1-Jan-2018", "W2-Jan-2018", "W3-Jan-2018", "W4-Jan-2018", "W5-Jan-2018", "W1-Feb-2018", "W2-Feb-2018", "W3-Feb-2018", "W4-Feb-2018", "W5-Feb-2018", "W1-Mar-2018", "W2-Mar-2018", "W3-Mar-2018", "W4-Mar-2018", "W5-Mar-2018", "W1-Apr-2018", "W2-Apr-2018", "W3-Apr-2018", "W4-Apr-2018", "W5-Apr-2018", "W6-Apr-2018", "W1-May-2018", "W2-May-2018", "W3-May-2018", "W4-May-2018", "W5-May-2018", "W1-Jun-2018", "W2-Jun-2018", "W3-Jun-2018", "W4-Jun-2018", "W5-Jun-2018", "W1-Jul-2018", "W2-Jul-2018", "W3-Jul-2018", "W4-Jul-2018", "W5-Jul-2018", "W6-Jul-2018", "W1-Aug-2018", "W2-Aug-2018", "W3-Aug-2018", "W4-Aug-2018", "W5-Aug-2018", "W1-Sep-2018", "W2-Sep-2018", "W3-Sep-2018", "W4-Sep-2018", "W5-Sep-2018", "W1-Oct-2018", "W2-Oct-2018", "W3-Oct-2018", "W4-Oct-2018", "W5-Oct-2018", "W1-Nov-2018", "W2-Nov-2018", "W3-Nov-2018"],
                labels: {
                    overflow: 'justify'
                }
            },
            yAxis: {
                title: {
                    text: 'Total Project'
                }
            },
            tooltip: {
                valueSuffix: ' '
            },
            plotOptions: {
                spline: {
                    lineWidth: 3,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                    // type: 'spline',
                    name: 'Target RFI',
                    data: [null, null, null, null, null, null, null, null, null, null, null, 16, 61, 302, 382, 394, 411, 421, 873, 885, 886, 900, 1195, 1233, 1251, 1401, 1422, 1447, 1449, 1459, 1461, 1461, 1487, 1487, 1489, 1530, 1560, 1564, 1577, 1586, 1606, 1610, 1610, 1613, 1613, 1613, 1615, 1650, 1650, 1654, 1712, 1716, 1716, 1721],
                    color: '#2c303e',
                }, {
                    // type: 'spline',
                    name: 'Actual RFI',
                    data: [null, null, null, null, null, null, null, null, null, null, null, 22, 56, 123, 206, 209, 259, 303, 331, 339, 343, 343, 350, 353, 354, 356, 357, 359, 362, 362, 362, 363, 367, 372, 399, 403, 408, 456],
                    color: '#a50500',
                }, {
                    type: 'column',
                    name: 'Target',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 45, 241, 80, 12, 17, 10, 452, 12, 1, 14, 295, 38, 18, 150, 21, 25, 2, 10, 2, 0, 26, 0, 2, 41, 30, 4, 13, 9, 20, 4, 0, 3, 0, 0, 2, 35, 0, 4, 58, 4, 0, 5, 0],
                    color: '#2F69C5'
                }, {
                    type: 'column',
                    name: 'Actual',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 34, 67, 83, 3, 50, 44, 28, 8, 4, 0, 7, 3, 1, 2, 1, 2, 3, 0, 0, 1, 4, 5, 27, 4, 5, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    color: '#FF9735'
                }],
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        });
    };
    // ionViewWillEnter() {
    //   // this.search.pickup = "Rio de Janeiro, Brazil";
    //   // this.search.dropOff = "Same as pickup";
    //   this.storage.get('pickup').then((val) => {
    //     if (val === null) {
    //       this.search.name = "Rio de Janeiro, Brazil"
    //     } else {
    //       this.search.name = val;
    //     }
    //   }).catch((err) => {
    //     console.log(err)
    //   });
    // }
    // // go to result page
    // doSearch() {
    //   this.nav.push(TripsPage);
    // }
    // // choose place
    // choosePlace(from) {
    //   this.nav.push(SearchLocationPage, from);
    // }
    // to go account page
    HomePage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\home\home.html"*/'\n<ion-header color="primary">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        <div class="home-logo"></div>\n        <!-- <strong>Ionic </strong> Start Theme -->\n    </ion-title>\n    <ion-buttons end>\n      <!-- <button ion-button tappable (click)="presentNotifications($event)"> -->\n      <!-- <button ion-button  class="circle"> -->\n          <!-- <img class="home-indikator" src="../assets/img/circle_btn_red"> -->\n        <!-- <ion-icon name="notifications"></ion-icon> -->\n      <!-- </button> -->\n      <!-- <button ion-button tappable (click)="goToAccount()"> -->\n      <!-- <button ion-button tappable>\n          <img class="home-satelit" src="assets/img/satellite.png">\n      </button> -->\n      <button ion-button tappable (click)="goToAccount()">\n          <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="common-bg">\n  <ion-scroll scrollY="true">\n    <ion-row>\n      <ion-grid class="common-bg" style="margin-left: -10px; margin-top: -5px">\n          <ion-row class="full-width">\n              <ion-col col-6 >\n                  <!-- PROJECT ALL/ Per-UBIS/ Per-AREA -->\n                  <ion-card class="first-card">\n                      <ion-card-header id="divId_allProject">\n                          <div class="row">\n                              <div class="left-icon">\n                                  <img  id="firstLabel[1]" src="assets/img/new/All_Project_m.png">\n                              </div>\n                            <div id="firstLabel[0]"class="header-title">All Project</div>\n                           </div>\n                      </ion-card-header>\n                      <ion-card-content>\n                          <div class="right-text">\n                              <ion-label id="firstLabel[2]" style="margin-top: -7px;margin-bottom: -10px">10.000</ion-label>\n                          </div>\n                      </ion-card-content>\n                      <ion-row id="first-card-footer-PrjAll">\n                          <div class="row" style="height:20px">\n                              <ion-col class="first-card-header-title">\n                                  <ion-label id="firstLabel[3]" style="margin-top: -2px;">Total</ion-label>\n                              </ion-col>\n                          </div>\n                      </ion-row>\n                  </ion-card>\n\n              </ion-col>\n              <ion-col col-6>\n                  <ion-list>\n                      <!-- <ion-item class="first-column-tanggal">\n                         <ion-input placeholder="Filter Month/Year" [value]="dataInicial | date:\'MM/yyyy\'" (click)="open()"></ion-input>\n                      </ion-item>\n\n                      <ion-item no-lines hidden="true">\n                        <ion-datetime #datePicker displayFormat="MMMM/MM/YYYY" (ionCancel)="this.dataInicial  = null" [(ngModel)]="dataInicial" doneText="Feito" cancelText="Cancelar" [max]="maxDate">\n                        </ion-datetime>\n                      </ion-item> -->\n                    </ion-list>\n              </ion-col >\n          </ion-row>\n          <!-- SECOND -->\n          <ion-row class="full-width" style="margin-top: -20px">\n            <!-- NOT RELEASE -->\n            <ion-col col-3 id="divId_noRelease">\n                <ion-card class="second-card full-width">\n                    <div id="divSecond[0]">\n                      <ion-card-header class="header-title">\n                        Not Release\n                      </ion-card-header>\n                      <ion-card-content>\n                        <div class="row">\n                          <div  class="left-icon">\n                              <img  id="second-img-0" src="assets/img/new/Not_Release_m.png" style="margin-top:-10px;">\n                              <!-- <ion-icon class="fa fa-home"></ion-icon> -->\n                              <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                              <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                          </div>\n                          <div class="right-text" >\n                              <ion-label id="secondValue[0]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px">10.000.000</ion-label>\n                          </div>\n                          <!-- <ion-icon   name="lock" ></ion-icon> -->\n                          <!-- <img class="second-card-content-left-icon" src="../assets/img/new/Not_Release_m.png"> -->\n                        </div>\n                      </ion-card-content>\n                    </div>\n                    <ion-row id="card-footer-release" (click)="secondAlertInfo1()">\n                      <!-- <div class="row" onClick="alertInfo()"> -->\n                      <div class="row" >\n                        <ion-col class="footer-title">\n                            <!-- <button id="hidden-button" (click)="alertInfo()">Total </button> -->\n                            Total\n                        </ion-col>\n                      </div>\n                    </ion-row>\n                  </ion-card>\n            </ion-col>\n            <!-- PROJECT ON PIPE -->\n            <ion-col col-3>\n                <ion-card class="second-card full-width">\n                    <div id="divSecond[1]">\n                      <ion-card-header class="header-title">\n                      Prj on Pipe\n                      </ion-card-header>\n                      <ion-card-content>\n                        <div class="row">\n                          <div class="left-icon">\n                              <img  id="second-img-1" src="assets/img/new/PoP_m.png" style="margin-top:-10px;">\n                              <!-- <ion-icon class="fa-home"></ion-icon> -->\n                              <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                              <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                          </div>\n                          <div class="right-text">\n                              <ion-label id="secondValue[1]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px">100 %</ion-label>\n                          </div>\n                          <!-- <ion-icon   name="lock" ></ion-icon> -->\n                          <!-- <img class="second-card-content-left-icon" src="../assets/img/new/PoP_m.png"> -->\n                        </div>\n                      </ion-card-content>\n                    </div>\n                    <ion-row id="card-footer-onPipe" (click)="secondAlertInfo2()">\n                        <div class="row">\n                          <ion-col class="footer-title">\n                                Total\n                          </ion-col>\n                        </div>\n                    </ion-row>\n                </ion-card>\n            </ion-col>\n            <!-- RFI -->\n            <ion-col col-3>\n                <ion-card class="second-card full-width">\n                    <div id="divSecond[2]">\n                      <ion-card-header class="header-title">\n                        Rfi\n                      </ion-card-header>\n                      <ion-card-content>\n                          <div class="row">\n                                <div class="left-icon">\n                                  <img  id="second-img-2" src="assets/img/new/Rfi_m.png" style="margin-top:-10px;">\n                                  <!-- <ion-icon class="fa-home"></ion-icon> -->\n                                  <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                                  <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                                </div>\n                                <div class="right-text">\n                                    <ion-label id="secondValue[2]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px">88 %</ion-label>\n                                </div>\n                          </div>\n                      </ion-card-content>\n                    </div>\n                    <ion-row id="card-footer-onRfi" (click)="secondAlertInfo3()">\n                        <div class="row">\n                          <ion-col class="footer-title">\n                                Total\n                          </ion-col>\n                        </div>\n                    </ion-row>\n                </ion-card>\n            </ion-col>\n            <!-- AFTER RFI -->\n            <ion-col col-3>\n                <ion-card class="second-card full-width">\n                    <div id="divSecond[3]">\n                      <ion-card-header class="header-title">\n                        After Rfi\n                      </ion-card-header>\n                      <ion-card-content>\n                          <div class="row">\n                                <div class="left-icon">\n                                  <img  id="second-img-3" src="assets/img/new/BAPS_m.png" style="margin-top:-10px;">\n                                  <!-- <ion-icon class="fa-home"></ion-icon> -->\n                                  <!-- <i class="fa fa-user-md fa-2x"></i> -->\n                                  <!-- <i class=“fas fa-prescription-bottle-alt”></i> -->\n                                </div>\n                                <div class="right-text">\n                                    <ion-label id="secondValue[3]" style="margin-right:-10px;margin-top: -20px;margin-bottom: -5px;margin-bottom:-5px">99 %</ion-label>\n                                </div>\n                          </div>\n                      </ion-card-content>\n                    </div>\n                    <ion-row id="card-footer-onAfterRfi" (click)="secondAlertInfo4()">\n                        <div class="row">\n                          <ion-col class="footer-title">\n                                Total\n                          </ion-col>\n                        </div>\n                    </ion-row>\n                </ion-card>\n            </ion-col>\n          </ion-row>\n          <!-- THREE - PerUbis -->\n          <ion-row id="divPerUbis" class="full-width" style="margin-top: -20px">\n              <!-- B2C -->\n              <ion-col col-3>\n                  <ion-card  id="divThree[0]" class="three-card full-width">\n                      <ion-card-content>\n                        <div class="row">\n                          <div class="left-icon">\n                              <img  id="three-img-0" src="assets/img/new/Not_Release_m.png">\n                          </div>\n                          <div class="right-text">\n                              <ion-label id="threeValue[0]" style="margin-right:0px;margin-top: -10px;margin-bottom: -5px">33</ion-label>\n                          </div>\n                        </div>\n                      </ion-card-content>\n                      <ion-row id="three-card-footer-b2c">\n                          <div class="row" style="height:20px">\n                              <ion-col class="footer-title">\n                                  <ion-label id="threeFooterLabelLeft[0]" style="margin-top: -1px" >Build To Suit</ion-label>\n                              </ion-col>\n                          </div>\n                      </ion-row>\n                    </ion-card>\n              </ion-col>\n              <!-- CORE -->\n              <ion-col col-3 >\n                  <ion-card id="divThree[1]" class="three-card full-width">\n                      <ion-card-content>\n                        <div class="row">\n                          <div class="left-icon">\n                              <img  id="three-img-1" src="assets/img/new/PoP_m.png">\n                          </div>\n                          <div class="right-text">\n                              <ion-label id="threeValue[1]" style="margin-right:0px;margin-top: -10px;margin-bottom: -5px">323</ion-label>\n                          </div>\n                        </div>\n                      </ion-card-content>\n                      <ion-row id="three-card-footer-core">\n                          <div class="row" style="height:20px">\n                              <ion-col class="footer-title">\n                                  <ion-label id="threeFooterLabelLeft[1]" style="margin-top: -1px" >CORE</ion-label>\n                              </ion-col>\n                          </div>\n                      </ion-row>\n                  </ion-card>\n              </ion-col>\n              <!-- MICROCELL -->\n              <ion-col col-3 >\n                  <ion-card id="divThree[2]" class="three-card full-width">\n                      <ion-card-content>\n                          <div class="row">\n                                <div class="left-icon">\n                                  <img  id="three-img-2" src="assets/img/new/Rfi_m.png">\n                                </div>\n                                <div class="right-text">\n                                    <ion-label id="threeValue[2]" style="margin-right:0px;margin-top: -10px;margin-bottom: -5px">456</ion-label>\n                                </div>\n                          </div>\n                      </ion-card-content>\n                      <ion-row id="three-card-footer-microcell">\n                          <div class="row" style="height:20px">\n                              <ion-col class="footer-title">\n                                  <ion-label id="threeFooterLabelLeft[2]" style="margin-top: -1px" >Microcell</ion-label>\n                              </ion-col>\n                          </div>\n                      </ion-row>\n                  </ion-card>\n              </ion-col>\n              <!-- Special Project -->\n              <ion-col col-3 >\n                  <ion-card id="divThree[3]" class="three-card full-width">\n                     <ion-card-content>\n                          <div class="row">\n                                <div class="left-icon">\n                                  <img id="three-img-3" src="assets/img/new/BAPS_m.png">\n                                </div>\n                                <div class="right-text">\n                                    <ion-label id="threeValue[3]" style="margin-right:0px;margin-top: -10px;margin-bottom: -5px">1123</ion-label>\n                                </div>\n                          </div>\n                      </ion-card-content>\n                      <ion-row id="three-card-footer-specialPrj">\n                            <div class="row" style="height:20px">\n                              <ion-col class="footer-title">\n                                  <ion-label id="threeFooterLabelLeft[3]" style="margin-top: -1px" >Special Project</ion-label>\n                              </ion-col>\n                            </div>\n                      </ion-row>\n                  </ion-card>\n              </ion-col>\n            </ion-row>\n            <!-- FOURTH - PerArea -->\n            <ion-row id="divPerArea" class="full-width" style="margin-top: -20px">\n                <!-- Area 1 -->\n                <ion-col col-3>\n                    <ion-card class="fourth-card full-width">\n                        <ion-card-content>\n                          <div class="row">\n                            <div class="left-icon">\n                                <img  id="fourth-img-0" src="assets/img/new/Not_Release_m.png">\n                            </div>\n                            <div class="right-text">\n                                <ion-label id="fourthValue[0]" style="margin-right:0px;margin-top: -10px;margin-bottom: -5px">444</ion-label>\n                            </div>\n                          </div>\n                        </ion-card-content>\n                        <ion-row id="fourth-card-footer-area1">\n                            <div class="row" style="height:20px">\n                                <ion-col class="footer-title">\n                                    <ion-label id="fourthFooterLabelLeft[0]" style="margin-top: -1px" >Area 3</ion-label>\n                                </ion-col>\n                              </div>\n                        </ion-row>\n                      </ion-card>\n                </ion-col>\n                <!-- AREA 2 -->\n                <ion-col col-3>\n                    <ion-card class="fourth-card full-width">\n                        <ion-card-content>\n                          <div class="row">\n                            <div class="left-icon">\n                                <img id="fourth-img-1" src="assets/img/new/PoP_m.png">\n                            </div>\n                            <div class="right-text">\n                                <ion-label id="fourthValue[1]" style="margin-right:0px;margin-top: -10px;margin-bottom: -5px">999</ion-label>\n                            </div>\n                          </div>\n                        </ion-card-content>\n                        <ion-row id="fourth-card-footer-area2">\n                              <div class="row" style="height:20px">\n                                <ion-col class="footer-title">\n                                    <ion-label id="fourthFooterLabelLeft[1]" style="margin-top: -1px" >Area 3</ion-label>\n                                </ion-col>\n                              </div>\n                        </ion-row>\n                    </ion-card>\n                </ion-col>\n                <!-- AREA 3 -->\n                <ion-col col-3>\n                    <ion-card class="fourth-card full-width">\n                        <ion-card-content>\n                            <div class="row">\n                                  <div class="left-icon">\n                                    <img id="fourth-img-2"  src="assets/img/new/Rfi_m.png">\n                                  </div>\n                                  <div class="right-text">\n                                      <ion-label id="fourthValue[2]" style="margin-right:0px;margin-top: -10px;margin-bottom: -5px">777</ion-label>\n                                  </div>\n                            </div>\n                        </ion-card-content>\n                        <ion-row id="fourth-card-footer-area3">\n                            <div class="row" style="height:20px">\n                              <ion-col class="footer-title">\n                                  <ion-label id="fourthFooterLabelLeft[2]" style="margin-top: -1px" >Area 3</ion-label>\n                              </ion-col>\n                            </div>\n                        </ion-row>\n                    </ion-card>\n                </ion-col>\n                <!-- AREA 4 -->\n                <ion-col col-3>\n                    <ion-card class="fourth-card full-width">\n                       <ion-card-content>\n                            <div class="row">\n                                  <div class="left-icon">\n                                    <img id="fourth-img-3"  src="assets/img/new/BAPS_m.png">\n                                  </div>\n                                  <div class="right-text">\n                                      <ion-label id="fourthValue[3]" style="margin-right:0px;margin-top: -10px;margin-bottom: -5px">555</ion-label>\n                                  </div>\n                            </div>\n                        </ion-card-content>\n                        <ion-row id="fourth-card-footer-area4">\n                            <div class="row" style="height:20px">\n                                <ion-col class="footer-title">\n                                    <ion-label id="fourthFooterLabelLeft[3]" style="margin-top: -1px" >Area 3</ion-label>\n                                </ion-col>\n                            </div>\n                        </ion-row>\n                    </ion-card>\n                </ion-col>\n              </ion-row>\n        </ion-grid>\n      </ion-row>\n      <div id="testChart1" style = " display : block ; " > </div>\n  </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dashboard_all_dashboard_all__["a" /* DashboardAllProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]
            // private pageScrollService: PageScrollService
            // ,@Inject(DOCUMENT)
            // private document: any
        ])
    ], HomePage);
    return HomePage;
}());

//
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';




var DB_NAME = 'data.db';
var win = window;
var DatabaseProvider = (function () {
    function DatabaseProvider(http, storage, platform) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.aryRslt = [];
        /* Split platform SQLite or WebSql
        * SQLite   : Live Mobile Storage.
        * WebSql   : Develompent debug database,table,query.
        * Author   : ptr.nov@gmail.com
        */
        platform.ready().then(function () {
            console.warn('platform Indentification');
            if (platform._platforms[0] == 'cordova') {
                console.warn('Storage: Sqlite cordova/Mobile Flatform - Create DB ');
                _this.storage = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */];
                _this.storage.create({ name: DB_NAME, location: "default" }).then(function (db) {
                    _this.database = db;
                    var qry = "CREATE TABLE IF NOT EXISTS piter (ID INTEGER NULL PRIMARY KEY AUTOINCREMENT,NAME TEXT,SUMMARY TEXT,COMPANY TEXT)";
                    db.executeSql(qry, []).then(function () {
                        console.log("Create Table Success");
                    });
                    // var qryTbl="CREATE TABLE IF NOT EXISTS piter (ID INTEGER NULL PRIMARY KEY AUTOINCREMENT, NAME TEXT,SUMMARY TEXT,COMPANY TEXT)";
                    var qryTbl = "CREATE TABLE IF NOT EXISTS piter (NAME TEXT,SUMMARY TEXT,COMPANY TEXT)";
                    _this.createTable(qryTbl, []);
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else {
                console.warn('Storage: WebSql Browser Flatform');
                _this._db = win.openDatabase(DB_NAME, '1.0', '', 5 * 1024 * 1024);
                var qryTbl = "CREATE TABLE IF NOT EXISTS piter (NAME TEXT,SUMMARY TEXT,COMPANY TEXT)";
                _this.createTable(qryTbl, []);
            }
        });
    }
    /* Pungsi Create Table untuk WebSql Browser & Sqlite Cordova
    * tabel    : adalah tabel yang sudah di create sebelumnya.
    * querySql : Sql Query Syntak
    * Author   : ptr.nov@gmail.com
    */
    DatabaseProvider.prototype.createTable = function (querySql, value) {
        console.warn('Function Create Table');
        //return new Promise((resolve)=>{
        //  this.platform.ready().then(() => {
        if (this.platform._platforms[0] == 'cordova') {
            // return new Promise((resolve, reject)=>{
            console.log('Sqlite cordova/Mobile Flatform' + querySql);
            /* inser sqlite query */
            //return new Promise((resolve, reject)=>{
            var sql = querySql;
            // this.storage.create({ name: DB_NAME ,location:"default" }).then(( db: SQLiteObject ) => {
            this.database.executeSql(sql, value).then(function (data) {
                console.log('Suceess Create Table');
                // resolve(data);
            }).catch(function (error) {
                console.log(error);
            });
            // });
            //});
            //  });
        }
        else {
            /* inser websql query */
            //return new Promise((resolve, reject)=>{
            //console.log('WebSql Browser Flatform');
            console.log('WebSql Browser Flatform to Function Create Table');
            var sql_1 = querySql;
            this._db.transaction(function (tx) {
                tx.executeSql(sql_1, [], function (tx, results) {
                    console.log('return=' + results.rows.item);
                    // resolve(results);
                });
            });
            //});
        }
        //});
        //  });
    };
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
    DatabaseProvider.prototype.insertData = function (querySql, bindings) {
        var _this = this;
        if (bindings === void 0) { bindings = []; }
        var statusSave;
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
            return new Promise(function (resolve, reject) {
                var srcRsltData = _this.database.executeSql(querySql, bindings);
                srcRsltData.then(function (data) {
                    //   console.log(data);
                    resolve(true);
                    //   //statusSave=true;
                    // return true;
                });
            });
            //  });
            // });
        }
        else {
            // return new Promise((resolve, reject)=>{
            console.log('WebSql Browser Flatform');
            var sql_2 = querySql;
            this._db.transaction(function (tx) {
                tx.executeSql(sql_2, bindings);
                return true;
            }, function (error) {
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
    };
    /* Pungsi Select All Data untuk WebSql Browser & Sqlite Corddova
    * tabel    : adalah tabel yang sudah di create sebelumnya.
    * querySql : Sql Query Syntak
    * Author   : ptr.nov@gmail.com
    * var querySql ="SELECT id, usr FROM piter ORDER BY id DESC";
      this.database.selectData(querySql,[]).then((data)=>{
        console.log(data);
        this.ListUser= data;
      });
    * ListUser deklarasi  private ListUser: any;
    * ListUser send to html
    */
    DatabaseProvider.prototype.selectData = function (querySql, bindings) {
        var _this = this;
        var aryRsltInternal = [];
        bindings = typeof bindings !== 'undefined' ? bindings : [];
        return new Promise(function (resolve, reject) {
            _this.platform.ready().then(function () {
                console.log('platform Select Indentification1');
                if (_this.platform._platforms[0] == 'cordova') {
                    console.log('Sqlite on device CordovaMobile, Command=' + querySql);
                    console.log(querySql);
                    var srcRsltData = _this.database.executeSql(querySql);
                    srcRsltData.then(function (results) {
                        if (results.rows.length > 0) {
                            for (var i = 0; i < results.rows.length; i++) {
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
                            }
                            ;
                            // console.log(results);
                            return results;
                        }
                        else {
                            console.log('no data');
                            return false;
                        }
                        //console.log(JSON.stringify(aryRslt2));
                        //setTimeout(()=> {
                        // resolve(this.aryRslt);
                        //},100);
                        //resolve(JSON.stringify(aryRslt2));
                        // resolve(this.aryRslt);
                    }, function (error) {
                        console.log(error);
                    }).catch(function (e) { return console.log(e); });
                    // ,(error)=>{
                    //   console.log(error);
                    //   resolve(false);
                    // }).catch((error) => {
                    //   console.log(error);
                    // }
                    // .catch((error) => {
                    //   console.log(error);
                    // });
                    // });
                    // return aryRsltInternal;
                    resolve(aryRsltInternal);
                }
                else {
                    console.log('WebSql Browser Flatform');
                    _this._db.transaction(function (tx) {
                        console.log(querySql);
                        tx.executeSql(querySql, bindings, function (tx, results) {
                            if (results.rows.length > 0) {
                                for (var i = 0; i < results.rows.length; i++) {
                                    var item = results.rows.item(i);
                                    for (var key in item) {
                                        item[key] = item[key];
                                    }
                                    aryRsltInternal.push(item);
                                }
                            }
                        }
                        // ,function(tx, error){
                        //   resolve(error);
                        // }
                        );
                    });
                    // this.aryRslt=aryRsltInternal;
                    // return aryRsltInternal;
                    resolve(aryRsltInternal);
                }
            });
        });
    };
    DatabaseProvider.prototype.matchData = function (querySql, bindings, key) {
        var _this = this;
        bindings = typeof bindings !== 'undefined' ? bindings : [];
        return new Promise(function (resolve) {
            _this.platform.ready().then(function () {
                console.log('platform Select Indentification1');
                if (_this.platform._platforms[0] == 'cordova') {
                    console.log('Sqlite cordova/Mobile Flatform');
                    console.log(querySql);
                    _this.database.executeSql(querySql, bindings).then(function (results) {
                        resolve(results.rows.item(0).key);
                        //resolve(results);
                    });
                }
                else {
                    console.log('WebSql Browser Flatform');
                    _this._db.transaction(function (tx) {
                        console.log(querySql);
                        tx.executeSql(querySql, bindings, function (tx, results) {
                            var aryRslt = [];
                            if (results.rows.length > 0) {
                                for (var i = 0; i < results.rows.length; i++) {
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
                            }
                            else {
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
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(nav, forgotCtrl, menu, toastCtrl, database) {
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.database = database;
        this.menu.swipeEnable(false);
    }
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\login\login.html"*/'<!-- -->\n<ion-content padding >\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n       <div class="header-logo"></div>\n       <div class="login-logo"></div>\n       <h6 ion-text class="text-logo">\n        Mitratel Project Management Information System\n      </h6>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" >\n      <ion-item >\n        <ion-label floating >\n          <ion-icon name="ios-person" item-start color="hitam"></ion-icon>\n          Username\n        </ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start color="hitam"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </form>\n\n    <!-- <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p> -->\n\n    <div>\n      <button ion-button icon-start block color="hitam" tappable (click)="login()">\n        <ion-icon name="log-in"></ion-icon>\n        LOGIN\n      </button>\n\n      <!-- <p text-center ion-text color="secondary">Or Sign in with:</p>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n\n    </div>\n\n\n    <!-- Other links -->\n    <!-- <div text-center margin-top>\n      <span ion-text color="secondary" tappable (click)="register()">New here? <strong>Sign up</strong></span>\n    </div> -->\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\ionicProject\MP_Dashboard\MP_Dashboard\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[369]);
//# sourceMappingURL=main.js.map