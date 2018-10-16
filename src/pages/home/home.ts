import {Component,ViewChild, ElementRef } from "@angular/core";
import {Platform,ToastController,Events,LoadingController,NavController, PopoverController,AlertController,ModalController,MenuController,Config} from "ionic-angular";
// import {Storage} from '@ionic/storage';
// import { DOCUMENT} from '@angular/common';
// import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
// import {TripsPage} from "../trips/trips";
//import {SearchLocationPage} from "../search-location/search-location";
import { DashboardAllProvider } from "../../providers/dashboard-all/dashboard-all";
import { DatabaseProvider } from '../../providers/database/database';
// import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { Dsh1SecondNoreleasePage} from '../dsh1-second-norelease/dsh1-second-norelease';
import { Dsh1SecondPrjonpipePage } from '../dsh1-second-prjonpipe/dsh1-second-prjonpipe';
import { Dsh1SecondRfiPage} from '../dsh1-second-rfi/dsh1-second-rfi';
import { Dsh1SecondAfterrfiPage} from '../dsh1-second-afterrfi/dsh1-second-afterrfi';
import * as HighCharts from "highcharts";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';

// import { Geolocation } from 'ionic-native';
// import { toArray } from "rxjs/operators";

// import HighCharts from 'highcharts'
// import addMore from "highcharts/highcharts-more";

var dsh1_0card_0content_click=0;
var dsh1_0card_1content_click=0;
var dsh1_0card_2content_click=0;
var dsh1_0card_3content_click=0;
var dsh1_0card_0footer_click=0;
var dsh1_0card_1footer_click=0;
var dsh1_0card_2footer_click=0;
var dsh1_0card_3footer_click=0;
/** PER-AREA */
var dsh1_1card_0content_click=0;
var dsh1_1card_1content_click=0;
var dsh1_1card_2content_click=0;
var dsh1_1card_3content_click=0;
var dsh1_2card_0content_click=0;
var dsh1_2card_1content_click=0;
var dsh1_2card_2content_click=0;
var dsh1_2card_3content_click=0;
var dsh1_3card_0content_click=0;
var dsh1_3card_1content_click=0;
var dsh1_3card_2content_click=0;
var dsh1_3card_3content_click=0;
var dsh1_4card_0content_click=0;
var dsh1_4card_1content_click=0;
var dsh1_4card_2content_click=0;
var dsh1_4card_3content_click=0;
/** IMG SOURCE */
var defaultUrlImg="assets/img/new/";
var map1: any;
var elSttMapButton=0;
// directionsService = new google.maps.DirectionsService;
// directionsDisplay = new google.maps.DirectionsRenderer;
var mapOptions1:any;
var sttMap;
//Google Variable
declare var google;
// var marker = [];
var dsh1_charting;
var mapStt_RFI:boolean=false;
var mapStt_Release:boolean=false;
var mapStt_NotRelease:boolean=false;
var mapStt_area;
let mapArrayStt = [
  {nama: "RFI", value:true},
  {nama: "RELEASE", value:true},
  {nama: "NOTRELEASE", value:true},
  {nama: "A0", value:"A0"}
];
var circles=[];
var responseDataCheck=[];
let spinnerCopyMap;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private dsh1_subscription1;
  private dsh1_subscription2;
  private cardValue_Header;
  private responseData;
  private responseDataChart;
  private responseDataMap=[];
  //MAP
  // @ViewChild('map1') mapElement2: ElementRef;
  // // directionsService = new google.maps.DirectionsService;
  // // directionsDisplay = new google.maps.DirectionsRenderer;
  // mapOptions1:any;

  loadingMap = this.loadingCtrl.create({
    // cssClass:"map-spinner",
    spinner:'ios',
    content: 'Please wait...'
  });

  spinnerMap = this.loadingCtrl.create({
    // cssClass:"map-spinner",
    spinner:'bubbles',
    content: 'Loading Map, Please wait...'
  });


  private spinnerPrepareMap;
  // private spinnerCopyMap;
  private param='';
  private paramMap='';

  constructor(
      private platform: Platform,
      // private storage: Storage,
      public navCtrl: NavController,
      public popoverCtrl: PopoverController,
      private dashboarAll: DashboardAllProvider,
      public alertCtrl: AlertController,
      public modalCtrl: ModalController,
      private database: DatabaseProvider,
      private menu: MenuController,
      public loadingCtrl: LoadingController,
      public config:Config,
      public events: Events,
      public toastCtrl: ToastController
  ){
    /** Event date setting*/
    // this.events.subscribe('filterTgl', (data) =>{
    //   var bulanYearSplit=data.split("-");
    //   this.param=bulanYearSplit[0]+"/"+bulanYearSplit[1];
    //   this.paramMap=(bulanYearSplit[0]).padStart(2, '0')+"/"+bulanYearSplit[1];

    //   console.log("Param Filter Bulan Tahun=",this.param);
    //   this.dsh1_UpdateCard(this.param);
    //   // this.dsh1_UpdateDataMap();
    // });
    // this.location = new LatLng(-2.209764,117.114258);
  }
  ionViewDidEnter(){
    setTimeout(() => {
      this.events.unsubscribe('filterTgl');
    }, 100);
    setTimeout(() => {
      this.events.subscribe('filterTgl', (data) =>{
        var bulanYearSplit=data.split("-");
        this.param=bulanYearSplit[0]+"/"+bulanYearSplit[1];
        this.paramMap=(bulanYearSplit[0]).padStart(2, '0')+"/"+bulanYearSplit[1];

        console.log("Param Filter Bulan Tahun=",this.param);
        this.dsh1_UpdateCard(this.param);
        // this.dsh1_UpdateDataMap();
      });
    }, 200);
  }


  /** First Innit Component  */
  ngOnInit() {

    //Second Load DOM.
    this.loadingMap.present();

    /** CHARTING */
    setTimeout(() => {
      sttMap=localStorage.getItem('dsh1SttMap')!=null?localStorage.getItem('dsh1SttMap'):0;
      console.log("sttmap=",sttMap);
      this.dsh1_initCard();
      this.dsh1_InitChart();
      this.dsh1_initMap();
      // sttMap=localStorage.getItem('dsh1SttMap')!=null?localStorage.getItem('dsh1SttMap'):0;
      //var elMapButton=document.getElementById("map-button");
      // if(elSttMapButton==0) {
      //       elMapButton.innerHTML="Click to update data Map (5000)";
      //       elMapButton.className ="mapButtonRed";
      // }else{
      //       elMapButton.className ="mapButGreen";
      //       elMapButton.innerHTML="Map Updated.";
      // }
    }, 100);

     /** MAP */
    setTimeout(() => {
      this.dsh1_UpdateCard();
      this.dsh1_UpdateDataChart();
      this.dsh1_UpdateDataMap().then((data)=>{
        if(data==true){
          localStorage.setItem('dsh1SttMap', '1');
          this.spinnerMap.dismiss();
            this.spinnerMap.onDidDismiss(()=>{
              let toastBerhasil = this.toastCtrl.create({
                message: 'Setting Maps, Please wait..',
                duration: 3000,
                position: 'middle'
              });
              toastBerhasil.present();
            });
        }
      });
    }, 200);
  }

  /** MAP Button */
  public loadMapClick(){
    console.log("elSttMapButton=",elSttMapButton);
    var elMapButton=document.getElementById("map-button");
     switch(elSttMapButton) {
          case 0:
              let prepareData=this.prepareMapLocalstorage();
              prepareData.then((data)=>{
                this.spinnerPrepareMap.dismiss();
                this.spinnerPrepareMap.onDidDismiss(()=>{
                  spinnerCopyMap = this.loadingCtrl.create({
                    // cssClass:"map-spinner",
                    spinner:'bubbles',
                    content: 'Start copying the data map, Please wait...'
                  });
                  spinnerCopyMap.present();
                  setTimeout(() => {
                    this.copyMapLocalstorage(data).then((dataCopy)=>{
                      spinnerCopyMap.onDidDismiss(()=>{
                        let toastBerhasil = this.toastCtrl.create({
                          message: ' Please wait for the database to be ready',
                          duration: 3000,
                          position: 'middle'
                        });
                        toastBerhasil.present();
                        elSttMapButton=1;
                        elMapButton.className ="mapButGreen";
                        elMapButton.innerHTML="Map Updated.";
                      });
                    });
                  },100);
                  //setTimeout(() => {
                    //this.copyMapLocalstorage(data).then((dataCopy)=>{
                      //spinnerCopyMap.setContent( 'Copy Maps data '+ dataCopy +'. Please wait...');
                      // if(dataCopy==true){
                      //   spinnerCopyMap.dismiss();
                      //   spinnerCopyMap.onDidDismiss(()=>{
                      //     let toastBerhasil = this.toastCtrl.create({
                      //       message: '',
                      //       duration: 3000,
                      //       position: 'middle'
                      //     });
                      //     toastBerhasil.present();
                      //     elSttMapButton=1;
                      //     elMapButton.className ="mapButGreen";
                      //     elMapButton.innerHTML="Map Updated.";
                      //   });
                      // }
                    //});
                  //}, 100);
                });
              });
          break;
          case 1:
              elSttMapButton= 0;
              elMapButton.className ="mapButtonRed";
              elMapButton.innerHTML="Click to update data Map (5000)";
          break;
        default:
      };
  }

  private prepareMapLocalstorage(){
    this.spinnerPrepareMap = this.loadingCtrl.create({
      // cssClass:"map-spinner",
      spinner:'bubbles',
      content: 'Prepare maps data, Please wait...'
    });
    this.spinnerPrepareMap.present();
    return new Promise((resolve)=>{
      this.dashboarAll.postApiMap("Mobile_Dashboard/dshAllmap","").then((result) => {
        resolve(result);
      });
    });
  }

  private copyMapLocalstorage(data:any){
    return new Promise((resolve)=>{
      var itemsProcessed = 0;
      var qry="INSERT OR REPLACE INTO TBL_PETA(project_id,area,lat,long,radius,site_name,nama_tenant,regional,sow,release_status,rfi,target_rfi,progress_status,pf_code,flag_mitra,from_pmo,flag_ventura) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
      data.allMap.forEach((el,index, array)=>{
        itemsProcessed++;
        console.log("data copy=",el);
        console.log("data length=",array.length);
        console.log("itemsProcessed=",itemsProcessed);
        this.database.insertData(qry,[
          el.project_id,
          el.area,
          el.lat,
          el.long,
          el.radius,
          el.site_name,
          el.nama_tenant,
          el.regional,
          el.sow,
          el.release_status!=null?el.release_status:0,
          el.rfi,
          el.target_rfi,
          el.progress_status,
          el.pf_code,
          el.flag_mitra!=null?1:0,
          el.from_pmo!=null?1:0,
          el.flag_ventura!=null?1:0
        ]);
        if(itemsProcessed == array.length) {
          spinnerCopyMap.dismiss();
          resolve(data);
        }else{
          resolve(false);
        }

      });
    });
  }
   /**
   * Event Back / close Page
   */
  ionViewWillUnload() {
    circles=[];
    // console.log("Previus page")
    // this.dsh1_subscription1.unsubscribe();
    // this.dsh1_subscription2.unsubscribe();
  }

  /** INIT CARD */
  private dsh1_initCard(){
    this.initMouseOverOut();
    this.initClickEvent();
    document.getElementById("dsh1[1]").hidden=false;
    document.getElementById("dsh1[2]").hidden=false;
    document.getElementById("dsh1_headcard[0]footer-properties-lbl[0]").hidden=true;
    document.getElementById("dsh1_headcard[0]footer-properties-lbl[1]").hidden=true;
    for (var x1=1; x1<=20; x1++){
      document.getElementById("dsh1["+x1+"]").hidden=true;
    }
  }

  /** INIT CHART */
  private dsh1_InitChart(){
    const tgl = new Date();
    const dsh1_monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    dsh1_charting=HighCharts.chart({
        chart: {
          renderTo:'dsh1-b2cChart',
          zoomType: 'x',
          panning: true,
          panKey: 'shift',
          type:'areaspline'
        },
        title: {
            text: "Project Summary of " + tgl.getDate() +" " + dsh1_monthNames[tgl.getMonth()] + ' ' + tgl.getFullYear(),
            style: {
              fontSize: '15px'
            }
        },
        credits: {
          enabled: false
        },
        xAxis: {
           categories: [null,null,null,null,null,null,null,null,null,null,null],
            // categories:aryCtg,
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
              data: [null,null,null,null,null,null,null,null,null,null,null],
              // data: aryTarget_RFI,
              color:'#2c303e',
              //fillOpacity: 0.5
          }, {
              // type: 'spline',
              name: 'Actual RFI',
              data: [null,null,null,null,null,null,null,null,null,null,null],
              // data: aryActual_RFI,
              color:'#a50500',
              //fillOpacity: 0.5
        }, {
              type: 'column',
              name: 'Target',
              data: [null,null,null,null,null,null,null,null,null,null,null],
              // data: aryTarget,
              color:'#2F69C5'
        }, {
              type: 'column',
              name: 'Actual',
              data: [null,null,null,null,null,null,null,null,null,null,null],
              // data: aryActual,
              color:'#FF9735'
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
  }

  /** INIT MAP */
  private dsh1_initMap(){
    var mapOptions={
      zoom: 4,
      center: new google.maps.LatLng(-2.209764,117.114258),
      styles: this.database._defaultNewStyle,
      scrollwheel: false,
    };
    map1 = new google.maps.Map(document.getElementById("map1"),mapOptions);
    // map1 = new google.maps.Map(this.mapElement2.nativeElement,mapOptions);
  }



  private goToAccount() {
    this.navCtrl.push(SettingsPage);
  }

  private dsh1_UpdateCard($param='0/0000'){
    var ary_Header=[];
    var rsltAry=[];
    var grpNotRelease=[];
    var area_NOT_RELEASE=[];
    var area_POP=[];
    var area_RFI=[];
    var area_ARFI=[];

    // var querySql ="SELECT DISTINCT URUTAN,SEQ,GRP,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4 FROM ALL_PRJ "// WHERE GRP='test' "
    //               //+" WHERE BULAN='08' AND TAHUN='2018'";
    //               +" ORDER BY SEQ,GRP DESC,URUTAN ASC";
    //   this.database.selectData(querySql).then(data=>{

    this.dashboarAll.postDatax("Mobile_Dashboard/dshAll/",$param).then((result) => {
        this.responseData=result;
        console.log("length=",this.responseData.length);

        rsltAry=[];
        rsltAry.push(result['dsh1']);
        //  if (rsltAry[0].length!==0){
        if (rsltAry !== undefined || rsltAry.length!==0){
              // console.log("data ada");
              // console.log(rsltAry);
              ary_Header=[];
              grpNotRelease=[];
              area_NOT_RELEASE=[];
              area_POP=[];
              area_RFI=[];
              area_ARFI=[];

              ary_Header.push(rsltAry[0].filter(function(headerObj){
                return headerObj.SEQ=="HEADER";
                // return headerObj.SEQ.indexOf("HEADER") > -1
              }));
              // - ORDER SORT
              ary_Header[0].sort((a, b):number=>{
                if (a.URUTAN < b.URUTAN) return -1;
                if (a.URUTAN > b.URUTAN) return 1;
                return 0;
              });
              //-Set ARRAY GROUP - B2S
              grpNotRelease.push(rsltAry[0].filter(function(b2cAreaObj){
                  return b2cAreaObj.SEQ=="NOT_RELEASE";
                  // return b2cAreaObj.SEQ.indexOf("B2S") > -1
                })
              );
              /** NOT RELEASE - UBIS -> PER AREA */
              area_NOT_RELEASE.push(grpNotRelease[0].filter(function(notReleaseObj){
                  return notReleaseObj.GRP=="NOT_RELEASE";
                  // return notReleaseObj.GRP.indexOf("NOT_RELEASE") > -1
                })
              );
              /** PROJECT ON PIPE - UBIS -> PER AREA */
              area_POP.push(grpNotRelease[0].filter(function(pipeObj){
                  return pipeObj.GRP=="PRJ_ON_PIPE";
                })
              );
               /** RFI - UBIS -> PER AREA */
              area_RFI.push(grpNotRelease[0].filter(function(rfiObj){
                  return rfiObj.GRP=="RFI";
                  //  return rfiObj.GRP.indexOf("RFI")  > -3
                })
              );
              /** AFTER RFI - UBIS -> PER AREA */
              area_ARFI.push(grpNotRelease[0].filter(function(arfiObj){
                  return arfiObj.GRP=="ARFI";
                  // return arfiObj.GRP.indexOf("ARFI") > -1
                })
              );
              //-> toDisply
              ary_Header[0].forEach(el=>{
                  //console.log(el.GRP);
                  // console.log(el);
                  if (el.GRP=='ALL_PRJ') {
                    document.getElementById("dsh1_headcard[0]content[1]-properties-lbl").innerHTML=(el.NILAI).toString();
                    // document.getElementById("dsh1_headcard[0]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='NOT_RELEASE') {
                    document.getElementById("dsh1[0]card[0]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh1[0]card[0]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='PRJ_ON_PIPE'){
                    document.getElementById("dsh1[0]card[1]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh1[0]card[1]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='RFI') {
                    document.getElementById("dsh1[0]card[2]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh1[0]card[2]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='ARFI') {
                    document.getElementById("dsh1[0]card[3]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh1[0]card[3]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
              });

              area_NOT_RELEASE[0].forEach(el1=>{
                  console.log(el1);
                  document.getElementById("dsh1[1]card["+el1.URUTAN +"]content[1]-properties-lbl").innerHTML=(el1.NILAI).toString();
              });
              document.getElementById("dsh1[5]card[0]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][0]['AREA1'];
              document.getElementById("dsh1[5]card[1]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][0]['AREA2'];
              document.getElementById("dsh1[5]card[2]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][0]['AREA3'];
              document.getElementById("dsh1[5]card[3]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][0]['AREA4'];
              document.getElementById("dsh1[6]card[0]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][1]['AREA1'];
              document.getElementById("dsh1[6]card[1]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][1]['AREA2'];
              document.getElementById("dsh1[6]card[2]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][1]['AREA3'];
              document.getElementById("dsh1[6]card[3]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][1]['AREA4'];
              document.getElementById("dsh1[7]card[0]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][2]['AREA1'];
              document.getElementById("dsh1[7]card[1]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][2]['AREA2'];
              document.getElementById("dsh1[7]card[2]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][2]['AREA3'];
              document.getElementById("dsh1[7]card[3]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][2]['AREA4'];
              document.getElementById("dsh1[8]card[0]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][3]['AREA1'];
              document.getElementById("dsh1[8]card[1]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][3]['AREA2'];
              document.getElementById("dsh1[8]card[2]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][3]['AREA3'];
              document.getElementById("dsh1[8]card[3]content[1]-properties-lbl").innerHTML=area_NOT_RELEASE[0][3]['AREA4'];

              area_POP[0].forEach(el2=>{
                console.log(el2);
                document.getElementById("dsh1[2]card["+el2.URUTAN +"]content[1]-properties-lbl").innerHTML=(el2.NILAI).toString();
              });
              document.getElementById("dsh1[9]card[0]content[1]-properties-lbl").innerHTML=area_POP[0][0]['AREA1'];
              document.getElementById("dsh1[9]card[1]content[1]-properties-lbl").innerHTML=area_POP[0][0]['AREA2'];
              document.getElementById("dsh1[9]card[2]content[1]-properties-lbl").innerHTML=area_POP[0][0]['AREA3'];
              document.getElementById("dsh1[9]card[3]content[1]-properties-lbl").innerHTML=area_POP[0][0]['AREA4'];
              document.getElementById("dsh1[10]card[0]content[1]-properties-lbl").innerHTML=area_POP[0][1]['AREA1'];
              document.getElementById("dsh1[10]card[1]content[1]-properties-lbl").innerHTML=area_POP[0][1]['AREA2'];
              document.getElementById("dsh1[10]card[2]content[1]-properties-lbl").innerHTML=area_POP[0][1]['AREA3'];
              document.getElementById("dsh1[10]card[3]content[1]-properties-lbl").innerHTML=area_POP[0][1]['AREA4'];
              document.getElementById("dsh1[11]card[0]content[1]-properties-lbl").innerHTML=area_POP[0][2]['AREA1'];
              document.getElementById("dsh1[11]card[1]content[1]-properties-lbl").innerHTML=area_POP[0][2]['AREA2'];
              document.getElementById("dsh1[11]card[2]content[1]-properties-lbl").innerHTML=area_POP[0][2]['AREA3'];
              document.getElementById("dsh1[11]card[3]content[1]-properties-lbl").innerHTML=area_POP[0][2]['AREA4'];
              document.getElementById("dsh1[12]card[0]content[1]-properties-lbl").innerHTML=area_POP[0][3]['AREA1'];
              document.getElementById("dsh1[12]card[1]content[1]-properties-lbl").innerHTML=area_POP[0][3]['AREA2'];
              document.getElementById("dsh1[12]card[2]content[1]-properties-lbl").innerHTML=area_POP[0][3]['AREA3'];
              document.getElementById("dsh1[12]card[3]content[1]-properties-lbl").innerHTML=area_POP[0][3]['AREA4'];

              area_RFI[0].forEach(el3=>{
                console.log(el3);
                document.getElementById("dsh1[3]card["+el3.URUTAN +"]content[1]-properties-lbl").innerHTML=(el3.NILAI).toString();
              });
              document.getElementById("dsh1[13]card[0]content[1]-properties-lbl").innerHTML=area_RFI[0][0]['AREA1']
              document.getElementById("dsh1[13]card[1]content[1]-properties-lbl").innerHTML=area_RFI[0][0]['AREA2']
              document.getElementById("dsh1[13]card[2]content[1]-properties-lbl").innerHTML=area_RFI[0][0]['AREA3']
              document.getElementById("dsh1[13]card[3]content[1]-properties-lbl").innerHTML=area_RFI[0][0]['AREA4']
              document.getElementById("dsh1[14]card[0]content[1]-properties-lbl").innerHTML=area_RFI[0][1]['AREA1']
              document.getElementById("dsh1[14]card[1]content[1]-properties-lbl").innerHTML=area_RFI[0][1]['AREA2']
              document.getElementById("dsh1[14]card[2]content[1]-properties-lbl").innerHTML=area_RFI[0][1]['AREA3']
              document.getElementById("dsh1[14]card[3]content[1]-properties-lbl").innerHTML=area_RFI[0][1]['AREA4']
              document.getElementById("dsh1[15]card[0]content[1]-properties-lbl").innerHTML=area_RFI[0][2]['AREA1']
              document.getElementById("dsh1[15]card[1]content[1]-properties-lbl").innerHTML=area_RFI[0][2]['AREA2']
              document.getElementById("dsh1[15]card[2]content[1]-properties-lbl").innerHTML=area_RFI[0][2]['AREA3']
              document.getElementById("dsh1[15]card[3]content[1]-properties-lbl").innerHTML=area_RFI[0][2]['AREA4']
              document.getElementById("dsh1[16]card[0]content[1]-properties-lbl").innerHTML=area_RFI[0][3]['AREA1']
              document.getElementById("dsh1[16]card[1]content[1]-properties-lbl").innerHTML=area_RFI[0][3]['AREA2']
              document.getElementById("dsh1[16]card[2]content[1]-properties-lbl").innerHTML=area_RFI[0][3]['AREA3']
              document.getElementById("dsh1[16]card[3]content[1]-properties-lbl").innerHTML=area_RFI[0][3]['AREA4']

              area_ARFI[0].forEach(el4=>{
                console.log(el4);
                document.getElementById("dsh1[4]card["+el4.URUTAN +"]content[1]-properties-lbl").innerHTML=(el4.NILAI).toString();
              });
              document.getElementById("dsh1[17]card[0]content[1]-properties-lbl").innerHTML=area_ARFI[0][0]['AREA1']
              document.getElementById("dsh1[17]card[1]content[1]-properties-lbl").innerHTML=area_ARFI[0][0]['AREA2']
              document.getElementById("dsh1[17]card[2]content[1]-properties-lbl").innerHTML=area_ARFI[0][0]['AREA3']
              document.getElementById("dsh1[17]card[3]content[1]-properties-lbl").innerHTML=area_ARFI[0][0]['AREA4']
              document.getElementById("dsh1[18]card[0]content[1]-properties-lbl").innerHTML=area_ARFI[0][1]['AREA1']
              document.getElementById("dsh1[18]card[1]content[1]-properties-lbl").innerHTML=area_ARFI[0][1]['AREA2']
              document.getElementById("dsh1[18]card[2]content[1]-properties-lbl").innerHTML=area_ARFI[0][1]['AREA3']
              document.getElementById("dsh1[18]card[3]content[1]-properties-lbl").innerHTML=area_ARFI[0][1]['AREA4']
              document.getElementById("dsh1[19]card[0]content[1]-properties-lbl").innerHTML=area_ARFI[0][2]['AREA1']
              document.getElementById("dsh1[19]card[1]content[1]-properties-lbl").innerHTML=area_ARFI[0][2]['AREA2']
              document.getElementById("dsh1[19]card[2]content[1]-properties-lbl").innerHTML=area_ARFI[0][2]['AREA3']
              document.getElementById("dsh1[19]card[3]content[1]-properties-lbl").innerHTML=area_ARFI[0][2]['AREA4']
              document.getElementById("dsh1[20]card[0]content[1]-properties-lbl").innerHTML=area_ARFI[0][3]['AREA1']
              document.getElementById("dsh1[20]card[1]content[1]-properties-lbl").innerHTML=area_ARFI[0][3]['AREA2']
              document.getElementById("dsh1[20]card[2]content[1]-properties-lbl").innerHTML=area_ARFI[0][3]['AREA3']
              document.getElementById("dsh1[20]card[3]content[1]-properties-lbl").innerHTML=area_ARFI[0][3]['AREA4']
              //console.log(ary_Header);
          }else{
              // console.log("data kosong");

          };
      });
      return grpNotRelease;
  }


  tampilkanNilai(){
  //  var a:[];
  //setTimeout(()=>{
    // console.log(this.dsh1_UpdateCard());
  //},1000);
  //  a.push(a.filter(function(headerObj){
  //           return headerObj.SEQ.indexOf("HEADER") > -1
  //         }));
  //   console.log(a);

    //--HIDE CARD
    // for (var x1=1; x1<=20; x1++){
    //   document.getElementById("dsh1["+x1+"]").hidden=true;
    // }

    /** All Project */
    // document.getElementById("dsh1_headcard[0]content[1]-properties-lbl").innerHTML=(99+13).toString();

    /** FOOTER VALUE */
    // for (var j=0; j<=3; j++){
    //   document.getElementById("dsh1[0]card["+j+"]footer-properties-lbl[1]").innerHTML='212';
    // }

    /** PER-UBIS*/
    // for (var i=0; i<=4; i++){
    //   document.getElementById("dsh1["+i+"]card[0]content[1]-properties-lbl").innerHTML='1';
    //   document.getElementById("dsh1["+i+"]card[1]content[1]-properties-lbl").innerHTML='2';
    //   document.getElementById("dsh1["+i+"]card[2]content[1]-properties-lbl").innerHTML='3';
    //   document.getElementById("dsh1["+i+"]card[3]content[1]-properties-lbl").innerHTML='4';
    // }

    /** NOT RELEASE: PER AREA[1,2,3,4] - |NOT RELEASE|POP|RFI|ARFI| -  */
    // for (var k1=5; k1<=8; k1++){
    //   document.getElementById("dsh1["+k1+"]card[0]content[1]-properties-lbl").innerHTML="'" + 2+k1 + "'";
    //   document.getElementById("dsh1["+k1+"]card[1]content[1]-properties-lbl").innerHTML="'" + 2+k1 + "'";
    //   document.getElementById("dsh1["+k1+"]card[2]content[1]-properties-lbl").innerHTML="'" + 2+k1 + "'";
    //   document.getElementById("dsh1["+k1+"]card[3]content[1]-properties-lbl").innerHTML="'" + 2+k1 + "'";
    // }

    /** POP: PER AREA[1,2,3,4] - |NOT RELEASE|POP|RFI|ARFI| -  */
    // for (var k2=9; k2<=12; k2++){
    //   document.getElementById("dsh1["+k2+"]card[0]content[1]-properties-lbl").innerHTML="'" + 3+k2 + "'";
    //   document.getElementById("dsh1["+k2+"]card[1]content[1]-properties-lbl").innerHTML="'" + 3+k2 + "'";
    //   document.getElementById("dsh1["+k2+"]card[2]content[1]-properties-lbl").innerHTML="'" + 3+k2 + "'";
    //   document.getElementById("dsh1["+k2+"]card[3]content[1]-properties-lbl").innerHTML="'" + 3+k2 + "'";
    // }

    /** RFI: PER AREA[1,2,3,4] - |NOT RELEASE|POP|RFI|ARFI| -  */
    // for (var k3=13; k3<=16; k3++){
    //   document.getElementById("dsh1["+k3+"]card[0]content[1]-properties-lbl").innerHTML="'" + 4+k3 + "'";
    //   document.getElementById("dsh1["+k3+"]card[1]content[1]-properties-lbl").innerHTML="'" + 4+k3 + "'";
    //   document.getElementById("dsh1["+k3+"]card[2]content[1]-properties-lbl").innerHTML="'" + 4+k3 + "'";
    //   document.getElementById("dsh1["+k3+"]card[3]content[1]-properties-lbl").innerHTML="'" + 4+k3 + "'";
    // }

    /** ARFI: PER AREA[1,2,3,4] - |NOT RELEASE|POP|RFI|ARFI| -  */
    // for (var k4=17; k4<=20; k4++){
    //   document.getElementById("dsh1["+k4+"]card[0]content[1]-properties-lbl").innerHTML="'" + 5+k4 + "'";
    //   document.getElementById("dsh1["+k4+"]card[1]content[1]-properties-lbl").innerHTML="'" + 5+k4 + "'";
    //   document.getElementById("dsh1["+k4+"]card[2]content[1]-properties-lbl").innerHTML="'" + 5+k4 + "'";
    //   document.getElementById("dsh1["+k4+"]card[3]content[1]-properties-lbl").innerHTML="'" + 5+k4 + "'";
    // }
  }

  private dsh1_UpdateDataChart(){
    this.loadingMap.present();
    this.loadingMap.setContent("Load Chart");
    var dsh1_aryCtg=[];
    var dsh1_aryTarget_RFI=[];
    var dsh1_aryActual_RFI=[];
    var dsh1_aryTarget=[];
    var dsh1_aryActual=[];

    this.dashboarAll.postDatax("Mobile_Dashboard/dshChart","").then((result) => {
      this.responseDataChart=result;
      dsh1_aryCtg=[];
      dsh1_aryTarget_RFI=[];
      dsh1_aryActual_RFI=[];
      dsh1_aryTarget=[];
      dsh1_aryActual=[];
      // console.log("length=",this.responseDataChart.chart.length);
      console.log("data chart=",this.responseDataChart.chart);
      var data=this.responseDataChart.chart;
          dsh1_aryCtg =data['sequence'];
          dsh1_aryTarget_RFI =data['target'];//.split(",").map(Number); //Split default value Number
          dsh1_aryActual_RFI =data['actual'];//.split(",").map(Number);
          dsh1_aryTarget =data['target_nonkumulatif'];//.split(",").map(Number);
          dsh1_aryActual =data['actual_nonkumulatif'];//.split(",").map(Number);
          dsh1_charting.update({
            xAxis: [{
              categories:dsh1_aryCtg,
              labels: {
                   overflow: 'justify'
              }
            }],
            series: [
              {
                name: 'Target RFI',
                data: dsh1_aryTarget_RFI,
                color:'#2c303e',
              },{
                name: 'Actual RFI',
                data: dsh1_aryActual_RFI,
                color:'#a50500',
              },{
                name: 'Target',
                data: dsh1_aryTarget,
                color:'#2F69C5',
              },{
                name: 'Actual',
                data: dsh1_aryActual,
                color:'#FF9735',
              }
            ]
          });
          this.loadingMap.dismiss();
    }, (err) => {
      // this.koneksiMasalahToast();
        console.log("jaringan bermasalah");
    });

    // var dsh1_querySql ="SELECT DISTINCT ID_CHART,BULAN,TAHUN,NM_CHART,TITLE,KTG,TARGET_RFI,ACTUAL_RFI,TARGET,ACTUAL FROM TBL_CHART "// WHERE GRP='test' "
    //               +" WHERE ID_CHART='mp001' AND BULAN='09' AND TAHUN='2018'";
    //               // ?+" ORDER BY SEQ,GRP DESC,URUTAN ASC";
    // this.database.selectData(dsh1_querySql).then(data=>{
    //   dsh1_rsltAryChart=[];
    //   dsh1_aryCtg=[];
    //   dsh1_aryTarget_RFI=[];
    //   dsh1_aryActual_RFI=[];
    //   dsh1_aryTarget=[];
    //   dsh1_aryActual=[];
    //   dsh1_rsltAryChart.push(data);
    //   // if (rsltAryChart.length!==0){
    //   if(dsh1_rsltAryChart !== undefined || dsh1_rsltAryChart.length > 0){
    //     // dsh1_aryCtg =dsh1_rsltAryChart[0][0]['KTG'].split(","); //Split value string string
    //     dsh1_aryTarget_RFI =dsh1_rsltAryChart[0][0]['TARGET_RFI'].split(",").map(Number); //Split default value Number
    //     dsh1_aryActual_RFI =dsh1_rsltAryChart[0][0]['ACTUAL_RFI'].split(",").map(Number);
    //     dsh1_aryTarget =dsh1_rsltAryChart[0][0]['TARGET'].split(",").map(Number);
    //     dsh1_aryActual =dsh1_rsltAryChart[0][0]['ACTUAL'].split(",").map(Number);
    //     // console.log(aryTarget_RFI);
    //       // setTimeout(() => {
    //         dsh1_charting.update({
    //           xAxis: [{
    //             categories:dsh1_aryCtg,
    //             labels: {
    //                  overflow: 'justify'
    //             }
    //           }],
    //           series: [{
    //             name: 'Target RFI',
    //             data: dsh1_aryTarget_RFI,
    //             color:'#2c303e',
    //           },{
    //             name: 'Actual RFI',
    //             data: dsh1_aryActual_RFI,
    //             color:'#a50500',
    //           },{
    //             name: 'Target',
    //             data: dsh1_aryTarget,
    //             color:'#2F69C5',
    //           },{
    //             name: 'Actual',
    //             data: dsh1_aryActual,
    //             color:'#FF9735',
    //           }
    //         ]
    //         });
    //       // }, 500);
    //   }
    // });
  }


  // private dsh1_InitChart(){

  //     var option={
  //             chart: {
  //               renderTo:'dsh1-b2cChart',
  //               zoomType: 'x',
  //               panning: true,
  //               panKey: 'shift',
  //               type:'areaspline'
  //             },
  //             title: {
  //               text: 'CPU Usage'
  //             },
  //             credits: {
  //               enabled: false
  //             },
  //             xAxis: {
  //                 labels: {
  //                     overflow: 'justify'
  //                 }
  //             },
  //             yAxis: {
  //                 title: {
  //                   text: 'Total Project'
  //                 }
  //             },
  //             tooltip: {
  //                 valueSuffix: ' '
  //             },
  //             plotOptions: {
  //                 spline: {
  //                   lineWidth: 3,
  //                   states: {
  //                       hover: {
  //                           lineWidth: 5
  //                       }
  //                   },
  //                   marker: {
  //                       enabled: false
  //                   }
  //                 }
  //             },
  //             navigation: {
  //                 menuItemStyle: {
  //                     fontSize: '10px'
  //                 }
  //             },
  //             series: [{}]
  //           };
  //           var chart1;
  //           option.series[0]= [{
  //            data: [null,null,null,null,null,null,null,null,null,null,null,16,61,302,382,394,411,421,873,885,886,900,1195,1233,1251,1401,1422,1447,1449,1459,1461,1461,1487,1487,1489,1530,1560,1564,1577,1586,1606,1610,1610,1613,1613,1613,1615,1650,1650,1654,1712,1716,1716,1721],
  //           }];
  //           chart1 = new heHighcharts.Chart(option);
  // }

  public rfiChange(event: Event){
    var objIndex;
    objIndex = mapArrayStt.findIndex((obj => obj.nama == "RFI"));
    mapArrayStt[objIndex].value = event['checked'];
    this.spinnerMap = this.loadingCtrl.create({
      // cssClass:"map-spinner",
      spinner:'bubbles',
      content: 'Filter Loading Map, Please wait...'
    });
    this.dsh1_UpdateDataMap(mapArrayStt).then((data)=>{
      if(data==true){
        this.spinnerMap.dismiss();
          this.spinnerMap.onDidDismiss(()=>{
            let toastBerhasil = this.toastCtrl.create({
              message: 'Setting Maps, Please wait..',
              duration: 3000,
              position: 'middle'
            });
            toastBerhasil.present();
          });
      }
    });
  }

  public releaseChange(event: Event){
    var objIndex;
    objIndex = mapArrayStt.findIndex((obj => obj.nama == "RELEASE"));
    mapArrayStt[objIndex].value = event['checked'];
    this.spinnerMap = this.loadingCtrl.create({
      // cssClass:"map-spinner",
      spinner:'bubbles',
      content: 'Filter Loading Map, Please wait...'
    });
    this.dsh1_UpdateDataMap(mapArrayStt).then((data)=>{
      if(data==true){
        this.spinnerMap.dismiss();
          this.spinnerMap.onDidDismiss(()=>{
            let toastBerhasil = this.toastCtrl.create({
              message: 'Setting Maps, Please wait..',
              duration: 3000,
              position: 'middle'
            });
            toastBerhasil.present();
          });
      }
    });
    // mapStt_Release=event['checked'];
    // console.log("RFI STT="+mapStt_RFI+"; RELEASE STT="+mapStt_Release+"; NOTRELEASE="+mapStt_NotRelease + "; Area="+mapStt_area);
  }

  public notReleaseChange(event: Event) {
    var objIndex;
    objIndex = mapArrayStt.findIndex((obj => obj.nama == "NOTRELEASE"));
    mapArrayStt[objIndex].value = event['checked'];
    this.spinnerMap = this.loadingCtrl.create({
      // cssClass:"map-spinner",
      spinner:'bubbles',
      content: 'Filter Loading Map, Please wait...'
    });
    this.dsh1_UpdateDataMap(mapArrayStt).then((data)=>{
      if(data==true){
        this.spinnerMap.dismiss();
          this.spinnerMap.onDidDismiss(()=>{
            let toastBerhasil = this.toastCtrl.create({
              message: 'Setting Maps, Please wait..',
              duration: 3000,
              position: 'middle'
            });
            toastBerhasil.present();
          });
      }
    });
  }

  public areaChange(event: Event) {
    console.log(event);
    var objIndex;
    var intOption;
    intOption=event;
    objIndex = mapArrayStt.findIndex((obj => obj.nama == "A0"));
    mapArrayStt[objIndex].value = intOption;
    this.spinnerMap = this.loadingCtrl.create({
      // cssClass:"map-spinner",
      spinner:'bubbles',
      content: 'Filter Loading Map, Please wait...'
    });
    this.dsh1_UpdateDataMap(mapArrayStt).then((data)=>{
      if(data==true){
        this.spinnerMap.dismiss();
          this.spinnerMap.onDidDismiss(()=>{
            let toastBerhasil = this.toastCtrl.create({
              message: 'Setting Maps, Please wait..',
              duration: 3000,
              position: 'middle'
            });
            toastBerhasil.present();
          });
      }
    });
  }

  private dsh1_UpdateDataMap(qryWhere:any=null){
    var rsltAryMap=[];
    var myRFI;
    var myRelease;
    var myNotRelease;
    var mylatlngRFI;
    var mylatlngRELEASE;
    var mylatlngNOTRELEASE;
    var contentString;
    var circleStrokeColor;
    var circleFillColor;
    var strFilterParam;
    console.log("responseData=",responseDataCheck);
    return new Promise((resolve)=>{
      // if (sttMap==0){
        this.spinnerMap=this.loadingCtrl.create({
          spinner:'bubbles',
          content: 'Prepare maps data, Please wait...'
        });
        this.spinnerMap.present();

        /** CLEAR ALL Circle in MAP*/
        if (circles.length>0){
          for(var i in circles) {
            circles[i].setMap(null);
          }
          circles = [];
        }
        /**
         * FILTER MANIPULATION.
         */
        var filterStt=[];
        var filterArea='A0';
        var strStt='';
        if (qryWhere==null){
          strFilterParam='0/0/A0';
        }else{
          qryWhere.forEach(el=>{
            if (el.value==true){
              // filterStt.push(el.nama);
              strStt=strStt+el.nama +"-";
              //(filterStt.toString()).replace(",","-");
            }
            if (el.nama=='A0'){
              filterArea=el.value;
            }
          })

          // var strStt2=strStt1.replace(",","-");
          strFilterParam=strStt+"/0"+"/"+filterArea.toString();
        }
        console.log("BulanTahun=",this.param);
        console.log("filterStt=",filterStt);
        console.log("filterArea=",filterArea);
        console.log("strFilterParam=",strFilterParam);

        /** GET API DATA */
        var inc=0;
        /**
         * PARAM    : $bulan,$year,$status,$pf_code,$area
         * Default  : /0/0/0/0/0"
         * Value    : /10/2018/RFI-RELEASE-NOTRELEASE/CRE/A1"
         */
        var InParam=this.paramMap!=''?(this.paramMap + "/"+ strFilterParam):'0/0/'+strFilterParam;
        console.log("InParam=",InParam);

        this.dashboarAll.postDatax("Mobile_Dashboard/dshAllmap/",InParam).then((result:any) => {
          this.responseDataMap.push(result);
          // responseDataCheck.push(result);
            console.log("length=",this.responseDataMap);

              /** Waktu Tunggu sampai data siap di prosess */
              setTimeout(()=>{
                // var kosongin = new google.maps.Circle();
                // kosongin.setMap(null);
                if(result.allMap.length>0){
                  result.allMap.forEach((el,index,array)=>{
                    inc++;
                    contentString = '<div id="content">' +
                                      '<div id="siteNotice">' +
                                      '</div>' +
                                      '<div id="bodyContent">' +
                                      '<table>' +
                                      '<tr>' +
                                      '<td><font color="black"><b>Project ID</b></font></td>' +
                                      '<td style="width:6%"><font color="black">:</font></td>' +
                                      '<td><font color="black">' + el.project_id + '</font></td>' +
                                      '</tr>' +
                                      '<tr>' +
                                      '<td><font color="black"><b>Site Name</b></font></td>' +
                                      '<td style="width:6%"><font color="black">:</font></td>' +
                                      '<td><font color="black">' + el.site_name + '</font></td>' +
                                      '</tr>' +
                                      '<tr>' +
                                      '<td><font color="black"><b>Nama Tenant</b></font></td>' +
                                      '<td style="width:6%"><font color="black">:</font></td>' +
                                      '<td><font color="black">' + el.nama_tenant + '</font></td>' +
                                      '</tr>' +
                                      '<tr>' +
                                      '<td><font color="black"><b>Area</b></font></td>' +
                                      '<td style="width:6%"><font color="black">:</font></td>' +
                                      '<td><font color="black">' + el.area + '</font></td>' +
                                      '</tr>' +
                                      '<tr>' +
                                      '<td><font color="black"><b>Regional</b></font></td>' +
                                      '<td style="width:6%"><font color="black">:</font></td>' +
                                      '<td><font color="black">' + el.regional + '</font></td>' +
                                      '</tr>' +
                                      '<tr>' +
                                      '<td><font color="black"><b>SOW</b></font></td>' +
                                      '<td style="width:6%"><font color="black">:</font></td>' +
                                      '<td><font color="black">' + el.sow + '</font></td>' +
                                      '</tr>' +
                                      '<tr>' +
                                      '<tr>' +
                                      '<td><font color="black"><b>Status</b></font></td>' +
                                      '<td style="width:6%"><font color="black">:</font></td>' +
                                      '<td><font color="black">' + el.status + '</font></td>' +
                                      '</tr>' +
                                      '<tr>' +
                                      '<td><a href="" target="_blank"><button class="btn btn-warning btn-detail" id="brn-detail">Detail</button></a></td>' +
                                      '</tr>' +
                                      '</table>' +
                                      '</div>';
                      var myInfoWindow = new google.maps.InfoWindow({
                        content: contentString
                      });
                      const dsh1_monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
                      document.getElementById("map-periode").innerHTML="[ MAPS PERIODE: " + dsh1_monthNames[el.bulan-1] + " " + el.tahun+" ]";

                    // console.log("latlog1=",rslt.lat,rslt.long);
                    mylatlngRFI =  new google.maps.LatLng(el.lat,el.long);
                    // SPLIT COLOR BACKGROUN CIRCLE
                    if(el.status=="RFI"){
                        circleStrokeColor="rgb(19, 148, 40)";
                        circleFillColor="#449af0";
                    };
                    if(el.status=="RELEASE"){
                        circleStrokeColor="rgb(240, 205, 10)";
                        circleFillColor="#449af0";
                    }
                    if(el.status=="NOTRELEASE"){
                        circleStrokeColor="rgb(243, 9, 9)";
                        circleFillColor="#449af0";
                    }

                    // SET PEROPERTIES CIRCLE
                    myRFI =  new google.maps.Circle({
                      center: mylatlngRFI,
                      radius: 10000,
                      strokeColor: circleStrokeColor,
                      strokeOpacity: 0.8,
                      strokeWeight: 2,
                      fillColor:circleFillColor,
                      fillOpacity: 1,
                      infowindow: myInfoWindow
                    });

                    myRFI.setMap(map1);
                    circles.push(myRFI);

                    google.maps.event.addListener(myRFI, 'click', function(ev) {
                      this.infowindow.setPosition(ev.latLng);
                      this.infowindow.open(this.map1, this);
                    });

                    if (inc==array.length){
                      //this.spinnerMap.dismiss();
                      resolve(true);
                    }
                    // console.log("inc=",inc);
                    // console.log("cntRow=",array.length);
                  })
                }else{
                  resolve(true);
                }
                // if(this.loadingMap){ this.loadingMap.dismiss(); this.loadingMap = null; }
              },2000);

              // localStorage.setItem('profile', JSON.stringify(this.responseData));
        },(err) => {
            this.spinnerMap.dismiss();
            this.spinnerMap.onDidDismiss(()=>{
              let toastError = this.toastCtrl.create({
                message: 'Network issues ! Make sure your network is installed to get the perfect map.',
                duration: 3000,
                position: 'middle'
              });
              toastError.present();
            });
            console.log("jaringan bermasalah");
        });
      // }else{
      //   resolve(false);
      // }
    });
  }

  public alertModalNoRelease(){
    let alert1= this.alertCtrl.create({
      title: '<p>Warning<p>',
      //subTitle:'subtitle',
      message: "<p>It might take time to load this Site's table. Do you still want to proceed?</p>",
      cssClass:'alertModal',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'alertSucess',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Continue',
          cssClass:'alertDangger',
          handler: data => {
            // console.log('Items Removed!');
            //  alert("suksess");
            //Call you API to remove Items here.
            this.navCtrl.push(Dsh1SecondNoreleasePage);
          }
        }
      ]
    });

    alert1.present();
  }

  public alertModalPop(){
      //var data = { message : 'hello world' };
      var ModalAdduser = this.modalCtrl.create(Dsh1SecondPrjonpipePage);
      ModalAdduser.onDidDismiss(() => {
        // this.ionViewDidLoad();
      });
      ModalAdduser.present();
  }

  public alertModalRfi(){
    let alert1= this.alertCtrl.create({
      title: '<p>Warning<p>',
      //subTitle:'subtitle',
      message: "<p>It might take time to load this Site's table. Do you still want to proceed?</p>",
      cssClass:'alertModal',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'alertSucess',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Continue',
          cssClass:'alertDangger',
          handler: data => {
            this.navCtrl.push(Dsh1SecondRfiPage);
          }
        }
      ]
    });

    alert1.present();
  }

  public secondAlertInfo4(){
    let alert1= this.alertCtrl.create({
      title: '<p>Warning<p>',
      //subTitle:'subtitle',
      message: "<p>It might take time to load this Site's table. Do you still want to proceed?</p>",
      cssClass:'alertModal',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          // cssClass:'alertSucess',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Continue',
          // cssClass:'alertDangger',
          handler: data => {
            this.navCtrl.push( Dsh1SecondAfterrfiPage);
          }
        }
      ]
    });

    alert1.present();
  }




  private initClickEvent(){
    /** dsh1_0 CONTAIN */
    //-HEADER - IMAGE CONTENT
    var hdrImgDes1=<HTMLImageElement>document.getElementById("dsh1_headcard[1]content[1]-properties-img");
    //-HEADER - LABEL CONTENT
    var hdrImgDes2=<HTMLImageElement>document.getElementById("dsh1_headcard[1]content[1]-properties-lbl");
    //-FOOTER - LABEL LEFT
    var hdrImgDes3=<HTMLImageElement>document.getElementById("dsh1_headcard[1]footer-properties-lbl[0]");

    /** PER-UBIS - NO RELEASE */
    var dsh1_0card_0content=<HTMLImageElement>document.getElementById("dsh1[0]card[0]content");
        dsh1_0card_0content.addEventListener('click', function () {
          switch(dsh1_0card_0content_click) {
            case 0:
                    hdrImgDes2.innerHTML="No Release";
                    hdrImgDes3.innerHTML="Per Ubis";
                    dsh1_0card_0content.style.backgroundColor="#83D7F1";
                    dsh1_0card_1content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_3content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_0content_click=1;
                    dsh1_0card_1content_click=0;
                    dsh1_0card_2content_click=0;
                    dsh1_0card_3content_click=0;
                    document.getElementById("dsh1[1]").hidden=false;
                    document.getElementById("dsh1[2]").hidden=true;
                    document.getElementById("dsh1[3]").hidden=true;
                    document.getElementById("dsh1[4]").hidden=true;
                    for (var q0=5; q0<=20; q0++){
                      document.getElementById("dsh1["+q0+"]").hidden=true;
                    }
                    /** HEADER */
                    var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh1[0]card[0]content[1]-properties-img");
                        var srcScoundImgName0=hdrImgSrc.src;
                        var aryScoundImgName0 = srcScoundImgName0.split("/");
                        var ScoundImgName0=aryScoundImgName0.reverse()[0];
                        hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                        hdrImgDes1.hidden=false;
                  break;
                case 1:
                      dsh1_0card_0content_click=0;
                      dsh1_0card_1content_click=0;
                      dsh1_0card_2content_click=0;
                      dsh1_0card_3content_click=0;
                      dsh1_0card_0content.style.backgroundColor="#FFFFFF";
                      dsh1_0card_1content.style.backgroundColor="#FFFFFF";
                      dsh1_0card_2content.style.backgroundColor="#FFFFFF";
                      dsh1_0card_3content.style.backgroundColor="#FFFFFF";
                      hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                      for (var b0=1; b0<=20; b0++){
                        document.getElementById("dsh1["+b0+"]").hidden=true;
                      }
              break;
            default:
          };
        });

    /** PER-UBIS - POP */
    var dsh1_0card_1content=<HTMLImageElement>document.getElementById("dsh1[0]card[1]content");
        dsh1_0card_1content.addEventListener('click', function () {
          switch(dsh1_0card_1content_click) {
              case 0:
                    hdrImgDes2.innerHTML="Project On Pipe";
                    hdrImgDes3.innerHTML="Per Ubis";
                    dsh1_0card_0content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_1content.style.backgroundColor="#83D7F1";
                    dsh1_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_3content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_0content_click=0;
                    dsh1_0card_1content_click=1;
                    dsh1_0card_2content_click=0;
                    dsh1_0card_3content_click=0;
                    document.getElementById("dsh1[1]").hidden=true;
                    document.getElementById("dsh1[2]").hidden=false;
                    document.getElementById("dsh1[3]").hidden=true;
                    document.getElementById("dsh1[4]").hidden=true;
                    for (var q1=5; q1<=20; q1++){
                      document.getElementById("dsh1["+q1+"]").hidden=true;
                    }
                    /** HEADER */
                    var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh1[0]card[1]content[1]-properties-img");
                        var srcScoundImgName0=hdrImgSrc.src;
                        var aryScoundImgName0 = srcScoundImgName0.split("/");
                        var ScoundImgName0=aryScoundImgName0.reverse()[0];
                        hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                        hdrImgDes1.hidden=false;
                break;
              case 1:
                    dsh1_0card_0content_click=0;
                    dsh1_0card_1content_click=0;
                    dsh1_0card_2content_click=0;
                    dsh1_0card_3content_click=0;
                    dsh1_0card_0content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_1content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_3content.style.backgroundColor="#FFFFFF";
                    hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                    for (var b1=1; b1<=20; b1++){
                      document.getElementById("dsh1["+b1+"]").hidden=true;
                    }
                break;
              default:
          };
        });

    /** PER-UBIS - RFI */
    var dsh1_0card_2content=<HTMLImageElement>document.getElementById("dsh1[0]card[2]content");
        dsh1_0card_2content.addEventListener('click', function () {
          switch(dsh1_0card_2content_click) {
            case 0:
                  hdrImgDes2.innerHTML="RFI";
                  hdrImgDes3.innerHTML="Per Ubis";
                  dsh1_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_2content.style.backgroundColor="#83D7F1";
                  dsh1_0card_3content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_0content_click=0;
                  dsh1_0card_2content_click=1;
                  dsh1_0card_1content_click=0;
                  dsh1_0card_3content_click=0;
                  document.getElementById("dsh1[1]").hidden=true;
                  document.getElementById("dsh1[2]").hidden=true;
                  document.getElementById("dsh1[3]").hidden=false;
                  document.getElementById("dsh1[4]").hidden=true;
                  for (var q2=5; q2<=20; q2++){
                    document.getElementById("dsh1["+q2+"]").hidden=true;
                  }
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh1[0]card[2]content[1]-properties-img");
                      var srcScoundImgName0=hdrImgSrc.src;
                      var aryScoundImgName0 = srcScoundImgName0.split("/");
                      var ScoundImgName0=aryScoundImgName0.reverse()[0];
                      hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                      hdrImgDes1.hidden=false;
              break;
            case 1:
                  dsh1_0card_0content_click=0;
                  dsh1_0card_1content_click=0;
                  dsh1_0card_2content_click=0;
                  dsh1_0card_3content_click=0;
                  dsh1_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_3content.style.backgroundColor="#FFFFFF";
                  hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                  for (var b2=1; b2<=20; b2++){
                    document.getElementById("dsh1["+b2+"]").hidden=true;
                  }
              break;
            default:
          };
        });

    /** PER-UBIS - A-RFI */
    var dsh1_0card_3content=<HTMLImageElement>document.getElementById("dsh1[0]card[3]content");
        dsh1_0card_3content.addEventListener('click', function () {
          switch(dsh1_0card_3content_click) {
            case 0:
                  hdrImgDes2.innerHTML="After RFI";
                  hdrImgDes3.innerHTML="Per Ubis";
                  dsh1_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_3content.style.backgroundColor="#83D7F1";
                  dsh1_0card_0content_click=0;
                  dsh1_0card_1content_click=0;
                  dsh1_0card_2content_click=0;
                  dsh1_0card_3content_click=1;
                  document.getElementById("dsh1[1]").hidden=true;
                  document.getElementById("dsh1[2]").hidden=true;
                  document.getElementById("dsh1[3]").hidden=true;
                  document.getElementById("dsh1[4]").hidden=false;
                  for (var q3=5; q3<=20; q3++){
                    document.getElementById("dsh1["+q3+"]").hidden=true;
                  }
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh1[0]card[3]content[1]-properties-img");
                      var srcScoundImgName0=hdrImgSrc.src;
                      var aryScoundImgName0 = srcScoundImgName0.split("/");
                      var ScoundImgName0=aryScoundImgName0.reverse()[0];
                      hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                      hdrImgDes1.hidden=false;
              break;
            case 1:
                  dsh1_0card_0content_click=0;
                  dsh1_0card_1content_click=0;
                  dsh1_0card_2content_click=0;
                  dsh1_0card_3content_click=0;
                  dsh1_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_3content.style.backgroundColor="#FFFFFF";
                  for (var b3=1; b3<=20; b3++){
                    document.getElementById("dsh1["+b3+"]").hidden=true;
                  }
              break;
            default:
          };
        });

    /** PER_AREA_UNRELEASE - B2S*/
    var dsh1_1card_0content=<HTMLImageElement>document.getElementById("dsh1[1]card[0]content");
        dsh1_1card_0content.addEventListener('click', function () {
          switch(dsh1_1card_0content_click) {
            case 0:
                    hdrImgDes2.innerHTML="No Release";
                    hdrImgDes3.innerHTML="B2s-PerArea";
                    dsh1_1card_0content.style.backgroundColor="#83D7F1";
                    dsh1_1card_1content.style.backgroundColor="#FFFFFF";
                    dsh1_1card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_1card_3content.style.backgroundColor="#FFFFFF";
                    dsh1_1card_0content_click=1;
                    dsh1_1card_1content_click=0;
                    dsh1_1card_2content_click=0;
                    dsh1_1card_3content_click=0;
                    document.getElementById("dsh1[5]").hidden=false;
                    document.getElementById("dsh1[6]").hidden=true;
                    document.getElementById("dsh1[7]").hidden=true;
                    document.getElementById("dsh1[8]").hidden=true;
                    for (var q1=9; q1<=20; q1++){
                      document.getElementById("dsh1["+q1+"]").hidden=true;
                    }
                  break;
                case 1:
                      dsh1_1card_0content_click=0;
                      dsh1_1card_1content_click=0;
                      dsh1_1card_2content_click=0;
                      dsh1_1card_3content_click=0;
                      dsh1_1card_0content.style.backgroundColor="#FFFFFF";
                      dsh1_1card_1content.style.backgroundColor="#FFFFFF";
                      dsh1_1card_2content.style.backgroundColor="#FFFFFF";
                      dsh1_1card_3content.style.backgroundColor="#FFFFFF";
                      hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                      for (var c0=5; c0<=20; c0++){
                        document.getElementById("dsh1["+c0+"]").hidden=true;
                      }
              break;
            default:
          };
        });

    /** PER_AREA_UNRELEASE - CORE*/
    var dsh1_1card_1content=<HTMLImageElement>document.getElementById("dsh1[1]card[1]content");
        dsh1_1card_1content.addEventListener('click', function () {
          switch(dsh1_1card_1content_click) {
            case 0:
                    hdrImgDes2.innerHTML="No Release";
                    hdrImgDes3.innerHTML="Core-PerArea";
                    dsh1_1card_0content.style.backgroundColor="#FFFFFF";
                    dsh1_1card_1content.style.backgroundColor="#83D7F1";
                    dsh1_1card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_1card_3content.style.backgroundColor="#FFFFFF";
                    dsh1_1card_0content_click=0;
                    dsh1_1card_1content_click=1;
                    dsh1_1card_2content_click=0;
                    dsh1_1card_3content_click=0;
                    document.getElementById("dsh1[5]").hidden=true;
                    document.getElementById("dsh1[6]").hidden=false;
                    document.getElementById("dsh1[7]").hidden=true;
                    document.getElementById("dsh1[8]").hidden=true;
                    for (var q1=9; q1<=20; q1++){
                      document.getElementById("dsh1["+q1+"]").hidden=true;
                    }
                  break;
                case 1:
                      dsh1_1card_0content_click=0;
                      dsh1_1card_1content_click=0;
                      dsh1_1card_2content_click=0;
                      dsh1_1card_3content_click=0;
                      dsh1_1card_0content.style.backgroundColor="#FFFFFF";
                      dsh1_1card_1content.style.backgroundColor="#FFFFFF";
                      dsh1_1card_2content.style.backgroundColor="#FFFFFF";
                      dsh1_1card_3content.style.backgroundColor="#FFFFFF";
                      hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                      for (var c1=5; c1<=20; c1++){
                        document.getElementById("dsh1["+c1+"]").hidden=true;
                      }
              break;
            default:
          };
        });

    /** PER_AREA_UNRELEASE - MICROCELL */
    var dsh1_1card_2content=<HTMLImageElement>document.getElementById("dsh1[1]card[2]content");
        dsh1_1card_2content.addEventListener('click', function () {
          switch(dsh1_1card_2content_click) {
            case 0:
                    hdrImgDes2.innerHTML="No Release";
                    hdrImgDes3.innerHTML="Microcell-PerArea";
                    dsh1_1card_0content.style.backgroundColor="#FFFFFF";
                    dsh1_1card_1content.style.backgroundColor="#FFFFFF";
                    dsh1_1card_2content.style.backgroundColor="#83D7F1";
                    dsh1_1card_3content.style.backgroundColor="#FFFFFF";
                    dsh1_1card_0content_click=0;
                    dsh1_1card_1content_click=0;
                    dsh1_1card_2content_click=1;
                    dsh1_1card_3content_click=0;
                    document.getElementById("dsh1[5]").hidden=true;
                    document.getElementById("dsh1[6]").hidden=true;
                    document.getElementById("dsh1[7]").hidden=false;
                    document.getElementById("dsh1[8]").hidden=true;
                    for (var q2=9; q2<=20; q2++){
                      document.getElementById("dsh1["+q2+"]").hidden=true;
                    }
                  break;
                case 1:
                      dsh1_1card_0content_click=0;
                      dsh1_1card_1content_click=0;
                      dsh1_1card_2content_click=0;
                      dsh1_1card_3content_click=0;
                      dsh1_1card_0content.style.backgroundColor="#FFFFFF";
                      dsh1_1card_1content.style.backgroundColor="#FFFFFF";
                      dsh1_1card_2content.style.backgroundColor="#FFFFFF";
                      dsh1_1card_3content.style.backgroundColor="#FFFFFF";
                      hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                      for (var c2=5; c2<=20; c2++){
                        document.getElementById("dsh1["+c2+"]").hidden=true;
                      }
              break;
            default:
          };
        });

    /** PER_AREA_UNRELEASE - SPECIAL PROJECT */
    var dsh1_1card_3content=<HTMLImageElement>document.getElementById("dsh1[1]card[3]content");
        dsh1_1card_3content.addEventListener('click', function () {
          switch(dsh1_1card_3content_click) {
            case 0:
                    hdrImgDes2.innerHTML="No Release";
                    hdrImgDes3.innerHTML="SP-PerArea";
                    dsh1_1card_0content.style.backgroundColor="#FFFFFF";
                    dsh1_1card_1content.style.backgroundColor="#FFFFFF";
                    dsh1_1card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_1card_3content.style.backgroundColor="#83D7F1";
                    dsh1_1card_0content_click=0;
                    dsh1_1card_1content_click=0;
                    dsh1_1card_2content_click=0;
                    dsh1_1card_3content_click=1;
                    document.getElementById("dsh1[5]").hidden=true;
                    document.getElementById("dsh1[6]").hidden=true;
                    document.getElementById("dsh1[7]").hidden=true;
                    document.getElementById("dsh1[8]").hidden=false;
                    for (var q3=9; q3<=20; q3++){
                      document.getElementById("dsh1["+q3+"]").hidden=true;
                    }
                  break;
                case 1:
                      dsh1_1card_0content_click=0;
                      dsh1_1card_1content_click=0;
                      dsh1_1card_2content_click=0;
                      dsh1_1card_3content_click=0;
                      dsh1_1card_0content.style.backgroundColor="#FFFFFF";
                      dsh1_1card_1content.style.backgroundColor="#FFFFFF";
                      dsh1_1card_2content.style.backgroundColor="#FFFFFF";
                      dsh1_1card_3content.style.backgroundColor="#FFFFFF";
                      hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                      for (var c3=5; c3<=20; c3++){
                        document.getElementById("dsh1["+c3+"]").hidden=true;
                      }
              break;
            default:
          };
        });

    /** PER_AREA_POP - B2S */
    var dsh1_2card_0content=<HTMLImageElement>document.getElementById("dsh1[2]card[0]content");
        dsh1_2card_0content.addEventListener('click', function () {
          switch(dsh1_2card_0content_click) {
            case 0:
                    hdrImgDes2.innerHTML="Project on Pipe";
                    hdrImgDes3.innerHTML="B2s-PerArea";
                    dsh1_2card_0content.style.backgroundColor="#83D7F1";
                    dsh1_2card_1content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_3content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_0content_click=1;
                    dsh1_2card_1content_click=0;
                    dsh1_2card_2content_click=0;
                    dsh1_2card_3content_click=0;
                    document.getElementById("dsh1[9]").hidden=false;
                    document.getElementById("dsh1[10]").hidden=true;
                    document.getElementById("dsh1[11]").hidden=true;
                    document.getElementById("dsh1[12]").hidden=true;
                    for (var q0=5; q0<=8; q0++){
                      document.getElementById("dsh1["+q0+"]").hidden=true;
                    }
                    for (var q01=13; q01<=20; q01++){
                      document.getElementById("dsh1["+q01+"]").hidden=true;
                    }
                  break;
                case 1:
                      dsh1_2card_0content_click=0;
                      dsh1_2card_1content_click=0;
                      dsh1_2card_2content_click=0;
                      dsh1_2card_3content_click=0;
                      dsh1_2card_0content.style.backgroundColor="#FFFFFF";
                      dsh1_2card_1content.style.backgroundColor="#FFFFFF";
                      dsh1_2card_2content.style.backgroundColor="#FFFFFF";
                      dsh1_2card_3content.style.backgroundColor="#FFFFFF";
                      hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                      for (var c3=5; c3<=20; c3++){
                        document.getElementById("dsh1["+c3+"]").hidden=true;
                      }
              break;
            default:
          };
        });

    /** PER_AREA_POP - CORE */
    var dsh1_2card_1content=<HTMLImageElement>document.getElementById("dsh1[2]card[1]content");
        dsh1_2card_1content.addEventListener('click', function () {
          switch(dsh1_2card_1content_click) {
            case 0:
                    hdrImgDes2.innerHTML="Project on Pipe";
                    hdrImgDes3.innerHTML="Core-PerArea";
                    dsh1_2card_0content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_1content.style.backgroundColor="#83D7F1";
                    dsh1_2card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_3content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_0content_click=0;
                    dsh1_2card_1content_click=1;
                    dsh1_2card_2content_click=0;
                    dsh1_2card_3content_click=0;
                    document.getElementById("dsh1[9]").hidden=true;
                    document.getElementById("dsh1[10]").hidden=false;
                    document.getElementById("dsh1[11]").hidden=true;
                    document.getElementById("dsh1[12]").hidden=true;
                    for (var q0=5; q0<=8; q0++){
                      document.getElementById("dsh1["+q0+"]").hidden=true;
                    }
                    for (var q01=13; q01<=20; q01++){
                      document.getElementById("dsh1["+q01+"]").hidden=true;
                    }
                  break;
                case 1:
                      dsh1_2card_0content_click=0;
                      dsh1_2card_1content_click=0;
                      dsh1_2card_2content_click=0;
                      dsh1_2card_3content_click=0;
                      dsh1_2card_0content.style.backgroundColor="#FFFFFF";
                      dsh1_2card_1content.style.backgroundColor="#FFFFFF";
                      dsh1_2card_2content.style.backgroundColor="#FFFFFF";
                      dsh1_2card_3content.style.backgroundColor="#FFFFFF";
                      hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                      for (var c3=5; c3<=20; c3++){
                        document.getElementById("dsh1["+c3+"]").hidden=true;
                      }
              break;
            default:
          };
        });
    /** PER_AREA_POP - MICROCELL */
    var dsh1_2card_2content=<HTMLImageElement>document.getElementById("dsh1[2]card[2]content");
        dsh1_2card_2content.addEventListener('click', function () {
          switch(dsh1_2card_2content_click) {
            case 0:
                    hdrImgDes2.innerHTML="Project on Pipe";
                    hdrImgDes3.innerHTML="Microcell-PerArea";
                    dsh1_2card_0content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_1content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_2content.style.backgroundColor="#83D7F1";
                    dsh1_2card_3content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_0content_click=0;
                    dsh1_2card_1content_click=0;
                    dsh1_2card_2content_click=1;
                    dsh1_2card_3content_click=0;
                    document.getElementById("dsh1[9]").hidden=true;
                    document.getElementById("dsh1[10]").hidden=true;
                    document.getElementById("dsh1[11]").hidden=false;
                    document.getElementById("dsh1[12]").hidden=true;
                    for (var q0=5; q0<=8; q0++){
                      document.getElementById("dsh1["+q0+"]").hidden=true;
                    }
                    for (var q01=13; q01<=20; q01++){
                      document.getElementById("dsh1["+q01+"]").hidden=true;
                    }
                  break;
                case 1:
                      dsh1_2card_0content_click=0;
                      dsh1_2card_1content_click=0;
                      dsh1_2card_2content_click=0;
                      dsh1_2card_3content_click=0;
                      dsh1_2card_0content.style.backgroundColor="#FFFFFF";
                      dsh1_2card_1content.style.backgroundColor="#FFFFFF";
                      dsh1_2card_2content.style.backgroundColor="#FFFFFF";
                      dsh1_2card_3content.style.backgroundColor="#FFFFFF";
                      hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                      for (var c3=5; c3<=20; c3++){
                        document.getElementById("dsh1["+c3+"]").hidden=true;
                      }
              break;
            default:
          };
        });
    /** PER_AREA_POP - SPECIAL PROJECT */
    var dsh1_2card_3content=<HTMLImageElement>document.getElementById("dsh1[2]card[3]content");
        dsh1_2card_3content.addEventListener('click', function () {
          switch(dsh1_2card_3content_click) {
            case 0:
                    hdrImgDes2.innerHTML="Project on Pipe";
                    hdrImgDes3.innerHTML="SP-PerArea";
                    dsh1_2card_0content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_1content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_3content.style.backgroundColor="#83D7F1";
                    dsh1_2card_0content_click=0;
                    dsh1_2card_1content_click=0;
                    dsh1_2card_2content_click=0;
                    dsh1_2card_3content_click=1;
                    document.getElementById("dsh1[9]").hidden=true;
                    document.getElementById("dsh1[10]").hidden=true;
                    document.getElementById("dsh1[11]").hidden=true;
                    document.getElementById("dsh1[12]").hidden=false;
                    for (var q0=5; q0<=8; q0++){
                      document.getElementById("dsh1["+q0+"]").hidden=true;
                    }
                    for (var q01=13; q01<=20; q01++){
                      document.getElementById("dsh1["+q01+"]").hidden=true;
                    }
                  break;
              case 1:
                    dsh1_2card_0content_click=0;
                    dsh1_2card_1content_click=0;
                    dsh1_2card_2content_click=0;
                    dsh1_2card_3content_click=0;
                    dsh1_2card_0content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_1content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_2card_3content.style.backgroundColor="#FFFFFF";
                    hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                    for (var c3=5; c3<=20; c3++){
                      document.getElementById("dsh1["+c3+"]").hidden=true;
                    }
            break;
          default:
        };
      });

    /** PER_AREA_RFI - B2S */
    var dsh1_3card_0content=<HTMLImageElement>document.getElementById("dsh1[3]card[0]content");
        dsh1_3card_0content.addEventListener('click', function () {
          switch(dsh1_3card_0content_click) {
            case 0:
                    hdrImgDes2.innerHTML="RFI";
                    hdrImgDes3.innerHTML="B2S-PerArea";
                    dsh1_3card_0content.style.backgroundColor="#83D7F1";
                    dsh1_3card_1content.style.backgroundColor="#FFFFFF";
                    dsh1_3card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_3card_3content.style.backgroundColor="#FFFFFF";
                    dsh1_3card_0content_click=1;
                    dsh1_3card_1content_click=0;
                    dsh1_3card_2content_click=0;
                    dsh1_3card_3content_click=0;
                    document.getElementById("dsh1[13]").hidden=false;
                    document.getElementById("dsh1[14]").hidden=true;
                    document.getElementById("dsh1[15]").hidden=true;
                    document.getElementById("dsh1[16]").hidden=true;
                    for (var q0=5; q0<=12; q0++){
                      document.getElementById("dsh1["+q0+"]").hidden=true;
                    }
                    for (var q01=17; q01<=20; q01++){
                      document.getElementById("dsh1["+q01+"]").hidden=true;
                    }
              break;
            case 1:
                  dsh1_3card_0content_click=0;
                  dsh1_3card_1content_click=0;
                  dsh1_3card_2content_click=0;
                  dsh1_3card_3content_click=0;
                  dsh1_3card_0content.style.backgroundColor="#FFFFFF";
                  dsh1_3card_1content.style.backgroundColor="#FFFFFF";
                  dsh1_3card_2content.style.backgroundColor="#FFFFFF";
                  dsh1_3card_3content.style.backgroundColor="#FFFFFF";
                  hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                  for (var c3=5; c3<=20; c3++){
                    document.getElementById("dsh1["+c3+"]").hidden=true;
                  }
            break;
          default:
      };
    });
   /** PER_AREA_RFI - CORE */
    var dsh1_3card_1content=<HTMLImageElement>document.getElementById("dsh1[3]card[1]content");
        dsh1_3card_1content.addEventListener('click', function () {
          switch(dsh1_3card_1content_click) {
            case 0:
                hdrImgDes2.innerHTML="RFI";
                hdrImgDes3.innerHTML="Core-PerArea";
                dsh1_3card_0content.style.backgroundColor="#FFFFFF";
                dsh1_3card_1content.style.backgroundColor="#83D7F1";
                dsh1_3card_2content.style.backgroundColor="#FFFFFF";
                dsh1_3card_3content.style.backgroundColor="#FFFFFF";
                dsh1_3card_0content_click=0;
                dsh1_3card_1content_click=1;
                dsh1_3card_2content_click=0;
                dsh1_3card_3content_click=0;
                document.getElementById("dsh1[13]").hidden=true;
                document.getElementById("dsh1[14]").hidden=false;
                document.getElementById("dsh1[15]").hidden=true;
                document.getElementById("dsh1[16]").hidden=true;
                for (var q0=5; q0<=12; q0++){
                  document.getElementById("dsh1["+q0+"]").hidden=true;
                }
                for (var q01=17; q01<=20; q01++){
                  document.getElementById("dsh1["+q01+"]").hidden=true;
                }
              break;
            case 1:
                  dsh1_3card_0content_click=0;
                  dsh1_3card_1content_click=0;
                  dsh1_3card_2content_click=0;
                  dsh1_3card_3content_click=0;
                  dsh1_3card_0content.style.backgroundColor="#FFFFFF";
                  dsh1_3card_1content.style.backgroundColor="#FFFFFF";
                  dsh1_3card_2content.style.backgroundColor="#FFFFFF";
                  dsh1_3card_3content.style.backgroundColor="#FFFFFF";
                  hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                  for (var c3=5; c3<=20; c3++){
                    document.getElementById("dsh1["+c3+"]").hidden=true;
                  }
          break;
        default:
      };
    });

    /** PER_AREA_RFI - MICROCELL */
    var dsh1_3card_2content=<HTMLImageElement>document.getElementById("dsh1[3]card[2]content");
        dsh1_3card_2content.addEventListener('click', function () {
          switch(dsh1_3card_2content_click) {
            case 0:
                hdrImgDes2.innerHTML="RFI";
                hdrImgDes3.innerHTML="Microcell-PerArea";
                dsh1_3card_0content.style.backgroundColor="#FFFFFF";
                dsh1_3card_1content.style.backgroundColor="#FFFFFF";
                dsh1_3card_2content.style.backgroundColor="#83D7F1";
                dsh1_3card_3content.style.backgroundColor="#FFFFFF";
                dsh1_3card_0content_click=0;
                dsh1_3card_1content_click=0;
                dsh1_3card_2content_click=1;
                dsh1_3card_3content_click=0;
                document.getElementById("dsh1[13]").hidden=true;
                document.getElementById("dsh1[14]").hidden=true;
                document.getElementById("dsh1[15]").hidden=false;
                document.getElementById("dsh1[16]").hidden=true;
                for (var q0=5; q0<=12; q0++){
                  document.getElementById("dsh1["+q0+"]").hidden=true;
                }
                for (var q01=17; q01<=20; q01++){
                  document.getElementById("dsh1["+q01+"]").hidden=true;
                }
              break;
            case 1:
                dsh1_3card_0content_click=0;
                dsh1_3card_1content_click=0;
                dsh1_3card_2content_click=0;
                dsh1_3card_3content_click=0;
                dsh1_3card_0content.style.backgroundColor="#FFFFFF";
                dsh1_3card_1content.style.backgroundColor="#FFFFFF";
                dsh1_3card_2content.style.backgroundColor="#FFFFFF";
                dsh1_3card_3content.style.backgroundColor="#FFFFFF";
                hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                for (var c3=5; c3<=20; c3++){
                  document.getElementById("dsh1["+c3+"]").hidden=true;
                }
          break;
        default:
      };
    });

     /** PER_AREA_RFI - SPECIAL PROJECT */
    var dsh1_3card_3content=<HTMLImageElement>document.getElementById("dsh1[3]card[3]content");
        dsh1_3card_3content.addEventListener('click', function () {
          switch(dsh1_3card_3content_click) {
            case 0:
                hdrImgDes2.innerHTML="RFI";
                hdrImgDes3.innerHTML="SP-PerArea";
                dsh1_3card_0content.style.backgroundColor="#FFFFFF";
                dsh1_3card_1content.style.backgroundColor="#FFFFFF";
                dsh1_3card_2content.style.backgroundColor="#FFFFFF";
                dsh1_3card_3content.style.backgroundColor="#83D7F1";
                dsh1_3card_0content_click=0;
                dsh1_3card_1content_click=0;
                dsh1_3card_2content_click=0;
                dsh1_3card_3content_click=1;
                document.getElementById("dsh1[13]").hidden=true;
                document.getElementById("dsh1[14]").hidden=true;
                document.getElementById("dsh1[15]").hidden=true;
                document.getElementById("dsh1[16]").hidden=false;
                for (var q0=5; q0<=12; q0++){
                  document.getElementById("dsh1["+q0+"]").hidden=true;
                }
                for (var q01=17; q01<=20; q01++){
                  document.getElementById("dsh1["+q01+"]").hidden=true;
                }
              break;
            case 1:
                dsh1_3card_0content_click=0;
                dsh1_3card_1content_click=0;
                dsh1_3card_2content_click=0;
                dsh1_3card_3content_click=0;
                dsh1_3card_0content.style.backgroundColor="#FFFFFF";
                dsh1_3card_1content.style.backgroundColor="#FFFFFF";
                dsh1_3card_2content.style.backgroundColor="#FFFFFF";
                dsh1_3card_3content.style.backgroundColor="#FFFFFF";
                hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                for (var c3=5; c3<=20; c3++){
                  document.getElementById("dsh1["+c3+"]").hidden=true;
                }
          break;
        default:
      };
    });

    /** PER_AREA_ARFI - B2S */
    var dsh1_4card_0content=<HTMLImageElement>document.getElementById("dsh1[4]card[0]content");
        dsh1_4card_0content.addEventListener('click', function () {
          switch(dsh1_4card_0content_click) {
            case 0:
                hdrImgDes2.innerHTML="After RFI";
                hdrImgDes3.innerHTML="B2C-PerArea";
                dsh1_4card_0content.style.backgroundColor="#83D7F1";
                dsh1_4card_1content.style.backgroundColor="#FFFFFF";
                dsh1_4card_2content.style.backgroundColor="#FFFFFF";
                dsh1_4card_3content.style.backgroundColor="#FFFFFF";
                dsh1_4card_0content_click=1;
                dsh1_4card_1content_click=0;
                dsh1_4card_2content_click=0;
                dsh1_4card_3content_click=0;
                document.getElementById("dsh1[17]").hidden=false;
                document.getElementById("dsh1[18]").hidden=true;
                document.getElementById("dsh1[19]").hidden=true;
                document.getElementById("dsh1[20]").hidden=true;
                for (var q0=5; q0<=16; q0++){
                  document.getElementById("dsh1["+q0+"]").hidden=true;
                }
              break;
            case 1:
                  dsh1_4card_0content_click=0;
                  dsh1_4card_1content_click=0;
                  dsh1_4card_2content_click=0;
                  dsh1_4card_3content_click=0;
                  dsh1_4card_0content.style.backgroundColor="#FFFFFF";
                  dsh1_4card_1content.style.backgroundColor="#FFFFFF";
                  dsh1_4card_2content.style.backgroundColor="#FFFFFF";
                  dsh1_4card_3content.style.backgroundColor="#FFFFFF";
                  hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                  for (var c3=5; c3<=20; c3++){
                    document.getElementById("dsh1["+c3+"]").hidden=true;
                  }
          break;
        default:
      };
    });
    /** PER_AREA_ARFI - CORE */
    var dsh1_4card_1content=<HTMLImageElement>document.getElementById("dsh1[4]card[1]content");
        dsh1_4card_1content.addEventListener('click', function () {
          switch(dsh1_4card_1content_click) {
            case 0:
                hdrImgDes2.innerHTML="After RFI";
                hdrImgDes3.innerHTML="Core-PerArea";
                dsh1_4card_0content.style.backgroundColor="#FFFFFF";
                dsh1_4card_1content.style.backgroundColor="#83D7F1";
                dsh1_4card_2content.style.backgroundColor="#FFFFFF";
                dsh1_4card_3content.style.backgroundColor="#FFFFFF";
                dsh1_4card_0content_click=0;
                dsh1_4card_1content_click=1;
                dsh1_4card_2content_click=0;
                dsh1_4card_3content_click=0;
                document.getElementById("dsh1[17]").hidden=true;
                document.getElementById("dsh1[18]").hidden=false;
                document.getElementById("dsh1[19]").hidden=true;
                document.getElementById("dsh1[20]").hidden=true;
                for (var q0=5; q0<=16; q0++){
                  document.getElementById("dsh1["+q0+"]").hidden=true;
                }
              break;
            case 1:
                dsh1_4card_0content_click=0;
                dsh1_4card_1content_click=0;
                dsh1_4card_2content_click=0;
                dsh1_4card_3content_click=0;
                dsh1_4card_0content.style.backgroundColor="#FFFFFF";
                dsh1_4card_1content.style.backgroundColor="#FFFFFF";
                dsh1_4card_2content.style.backgroundColor="#FFFFFF";
                dsh1_4card_3content.style.backgroundColor="#FFFFFF";
                hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                for (var c3=5; c3<=20; c3++){
                  document.getElementById("dsh1["+c3+"]").hidden=true;
                }
          break;
        default:
      };
    });
    /** PER_AREA_ARFI - MICROCELL */
    var dsh1_4card_2content=<HTMLImageElement>document.getElementById("dsh1[4]card[2]content");
        dsh1_4card_2content.addEventListener('click', function () {
          switch(dsh1_4card_2content_click) {
            case 0:
                hdrImgDes2.innerHTML="After RFI";
                hdrImgDes3.innerHTML="Microcell-PerArea";
                dsh1_4card_0content.style.backgroundColor="#FFFFFF";
                dsh1_4card_1content.style.backgroundColor="#FFFFFF";
                dsh1_4card_2content.style.backgroundColor="#83D7F1";
                dsh1_4card_3content.style.backgroundColor="#FFFFFF";
                dsh1_4card_0content_click=0;
                dsh1_4card_1content_click=0;
                dsh1_4card_2content_click=1;
                dsh1_4card_3content_click=0;
                document.getElementById("dsh1[17]").hidden=true;
                document.getElementById("dsh1[18]").hidden=true;
                document.getElementById("dsh1[19]").hidden=false;
                document.getElementById("dsh1[20]").hidden=true;
                for (var q0=5; q0<=16; q0++){
                  document.getElementById("dsh1["+q0+"]").hidden=true;
                }
              break;
            case 1:
                dsh1_4card_0content_click=0;
                dsh1_4card_1content_click=0;
                dsh1_4card_2content_click=0;
                dsh1_4card_3content_click=0;
                dsh1_4card_0content.style.backgroundColor="#FFFFFF";
                dsh1_4card_1content.style.backgroundColor="#FFFFFF";
                dsh1_4card_2content.style.backgroundColor="#FFFFFF";
                dsh1_4card_3content.style.backgroundColor="#FFFFFF";
                hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                for (var c3=5; c3<=20; c3++){
                  document.getElementById("dsh1["+c3+"]").hidden=true;
                }
          break;
        default:
      };
    });
    /** PER_AREA_ARFI - SPECIAL PROJECT */
    var dsh1_4card_3content=<HTMLImageElement>document.getElementById("dsh1[4]card[3]content");
        dsh1_4card_3content.addEventListener('click', function () {
          switch(dsh1_4card_3content_click) {
            case 0:
                hdrImgDes2.innerHTML="After RFI";
                hdrImgDes3.innerHTML="SP-PerArea";
                dsh1_4card_0content.style.backgroundColor="#FFFFFF";
                dsh1_4card_1content.style.backgroundColor="#FFFFFF";
                dsh1_4card_2content.style.backgroundColor="#FFFFFF";
                dsh1_4card_3content.style.backgroundColor="#83D7F1";
                dsh1_4card_0content_click=0;
                dsh1_4card_1content_click=0;
                dsh1_4card_2content_click=0;
                dsh1_4card_3content_click=1;
                document.getElementById("dsh1[17]").hidden=true;
                document.getElementById("dsh1[18]").hidden=true;
                document.getElementById("dsh1[19]").hidden=true;
                document.getElementById("dsh1[20]").hidden=false;
                for (var q0=5; q0<=16; q0++){
                  document.getElementById("dsh1["+q0+"]").hidden=true;
                }
              break;
            case 1:
                dsh1_4card_0content_click=0;
                dsh1_4card_1content_click=0;
                dsh1_4card_2content_click=0;
                dsh1_4card_3content_click=0;
                dsh1_4card_0content.style.backgroundColor="#FFFFFF";
                dsh1_4card_1content.style.backgroundColor="#FFFFFF";
                dsh1_4card_2content.style.backgroundColor="#FFFFFF";
                dsh1_4card_3content.style.backgroundColor="#FFFFFF";
                hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                for (var c3=5; c3<=20; c3++){
                  document.getElementById("dsh1["+c3+"]").hidden=true;
                }
          break;
        default:
      };
    });

    /** dsh1_0 FOOTER */
    var dsh1_0card_0footer=document.getElementById("dsh1[0]card[0]footer");
        dsh1_0card_0footer.addEventListener('click', function () {
          switch(dsh1_0card_0footer_click) {
            case 0:
                  dsh1_0card_0footer_click=1;
                  dsh1_0card_0footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh1_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_1footer_click=0;
                  dsh1_0card_2footer_click=0;
                  dsh1_0card_3footer_click=0;
              break;
            case 1:
                  dsh1_0card_0footer_click=0;
                  dsh1_0card_1footer_click=0;
                  dsh1_0card_2footer_click=0;
                  dsh1_0card_3footer_click=0;
                  dsh1_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_3footer.style.backgroundColor="#E9E9E9";
                  // document.getElementById("dsh1[1]").hidden=true;
                  // document.getElementById("dsh1[2]").hidden=true;
                  // document.getElementById("dsh1[3]").hidden=true;
                  // document.getElementById("dsh1[4]").hidden=true;
                  // document.getElementById("dsh1[5]").hidden=true;
                  // document.getElementById("dsh1[6]").hidden=true;
                  hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
              break;
            default:
          };
        });

    var dsh1_0card_1footer=document.getElementById("dsh1[0]card[1]footer");
        dsh1_0card_1footer.addEventListener('click', function () {
          switch(dsh1_0card_1footer_click) {
            case 0:
                  dsh1_0card_1footer_click=1;
                  dsh1_0card_1footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh1_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_0footer_click=0;
                  dsh1_0card_2footer_click=0;
                  dsh1_0card_3footer_click=0;
              break;
            case 1:
                  dsh1_0card_0footer_click=0;
                  dsh1_0card_1footer_click=0;
                  dsh1_0card_2footer_click=0;
                  dsh1_0card_3footer_click=0;
                  dsh1_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });

    var dsh1_0card_2footer=document.getElementById("dsh1[0]card[2]footer");
        dsh1_0card_2footer.addEventListener('click', function () {
          switch(dsh1_0card_2footer_click) {
            case 0:
                  dsh1_0card_2footer_click=1;
                  dsh1_0card_2footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh1_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_0footer_click=0;
                  dsh1_0card_1footer_click=0;
                  dsh1_0card_3footer_click=0;
              break;
            case 1:
                  dsh1_0card_0footer_click=0;
                  dsh1_0card_1footer_click=0;
                  dsh1_0card_2footer_click=0;
                  dsh1_0card_3footer_click=0;
                  dsh1_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });

    var dsh1_0card_3footer=document.getElementById("dsh1[0]card[3]footer");
        dsh1_0card_3footer.addEventListener('click', function () {
          switch(dsh1_0card_3footer_click) {
            case 0:
                  dsh1_0card_3footer_click=1;
                  dsh1_0card_3footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh1_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_0footer_click=0;
                  dsh1_0card_1footer_click=0;
                  dsh1_0card_2footer_click=0;
              break;
            case 1:
                  dsh1_0card_0footer_click=0;
                  dsh1_0card_1footer_click=0;
                  dsh1_0card_2footer_click=0;
                  dsh1_0card_3footer_click=0;
                  dsh1_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh1_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });
  }

  private initMouseOverOut(){
       /* dsh1_0 CONTAIN */
      var dsh1_0card_0content=document.getElementById("dsh1[0]card[0]content");
          dsh1_0card_0content.onmouseover= function () {
            dsh1_0card_0content.style.backgroundColor="#BBE5F2";
          }
          dsh1_0card_0content.onmouseout = function () {
            if (dsh1_0card_0content_click!==1){
              dsh1_0card_0content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh1_0card_1content=document.getElementById("dsh1[0]card[1]content");
          dsh1_0card_1content.onmouseover= function () {
            dsh1_0card_1content.style.backgroundColor="#BBE5F2";
          }
          dsh1_0card_1content.onmouseout = function () {
            if (dsh1_0card_1content_click!==1){
              dsh1_0card_1content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh1_0card_2content=document.getElementById("dsh1[0]card[2]content");
          dsh1_0card_2content.onmouseover= function () {
            dsh1_0card_2content.style.backgroundColor="#BBE5F2";
          }
          dsh1_0card_2content.onmouseout = function () {
            if (dsh1_0card_2content_click!==1){
              dsh1_0card_2content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh1_0card_3content=document.getElementById("dsh1[0]card[3]content");
          dsh1_0card_3content.onmouseover= function () {
            dsh1_0card_3content.style.backgroundColor="#BBE5F2";
          }
          dsh1_0card_3content.onmouseout = function () {
            if (dsh1_0card_3content_click!==1){
              dsh1_0card_3content.style.backgroundColor="#FFFFFF";
            }
          }

      /* dsh1_0 FOOTER */
      var dsh1_0card_0footer=document.getElementById("dsh1[0]card[0]footer");
          dsh1_0card_0footer.onmouseover= function () {
            dsh1_0card_0footer.style.backgroundColor="#FA8633";
          }
          dsh1_0card_0footer.onmouseout = function () {
            if (dsh1_0card_0footer_click!==1){
              dsh1_0card_0footer.style.backgroundColor="#E9E9E9";
            }

          }

      var dsh1_0card_1footer=document.getElementById("dsh1[0]card[1]footer");
          dsh1_0card_1footer.onmouseover= function () {
            dsh1_0card_1footer.style.backgroundColor="#FA8633";
          }
          dsh1_0card_1footer.onmouseout = function () {
            if (dsh1_0card_1footer_click!==1){
              dsh1_0card_1footer.style.backgroundColor="#E9E9E9";
            }
          }

      var dsh1_0card_2footer=document.getElementById("dsh1[0]card[2]footer");
          dsh1_0card_2footer.onmouseover= function () {
            dsh1_0card_2footer.style.backgroundColor="#FA8633";
          }
          dsh1_0card_2footer.onmouseout = function () {
            if (dsh1_0card_2footer_click!==1){
              dsh1_0card_2footer.style.backgroundColor="#E9E9E9";
            }
          }
      var dsh1_0card_3footer=document.getElementById("dsh1[0]card[3]footer");
          dsh1_0card_3footer.onmouseover= function () {
            dsh1_0card_3footer.style.backgroundColor="#FA8633";
          }
          dsh1_0card_3footer.onmouseout = function () {
            if (dsh1_0card_3footer_click!==1){
              dsh1_0card_3footer.style.backgroundColor="#E9E9E9";
            }
          }
  }
}

