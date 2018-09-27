import {Component,ViewChild, ElementRef  } from "@angular/core";
import {NavController, PopoverController,AlertController,ModalController,MenuController} from "ionic-angular";
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

//Google Variable
declare var google;
// var marker = [];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private subscription1;
  private subscription2;
  private cardValue_Header;
  //MAP
  @ViewChild('map1') mapElement2: ElementRef;
  map1: any;
  // directionsService = new google.maps.DirectionsService;
  // directionsDisplay = new google.maps.DirectionsRenderer;
  mapOptions1:any;
  charting;
  constructor(
      // private storage: Storage,
      public navCtrl: NavController,
      public popoverCtrl: PopoverController,
      private dashboarAll: DashboardAllProvider,
      public alertCtrl: AlertController,
      public modalCtrl: ModalController,
      private database: DatabaseProvider,
      private menu: MenuController
  ){
    this.mapOptions1={
      zoom: 4,
      // center: new google.maps.LatLng(-2.209764,117.114258),
      styles: this.database._defaultNewStyle
    };
  }

  ionViewDidEnter(){
    // this.menu.swipeEnable(false);
    this.subscription2 = Observable.timer(3000, 3000).subscribe(x => {
      console.log('run-Disply');
       this.getData();
    });
  }

  ngOnInit() {
    this.subscription1 = Observable.timer(10000,10000).subscribe(x => {
      console.log('run-Disply');
      this.dashboarAll.getAllPrj();
      // this.dashboarAll.getSetting();
    });
  }
   /**
   * Event Back / close Page
   */
  ionViewWillUnload() {
    console.log("Previus page")
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  private goToAccount() {
    this.navCtrl.push(SettingsPage);
  }

  ionViewDidLoad() {
    this.initMouseOverOut();
    this.initClickEvent();
    document.getElementById("dsh1[1]").hidden=false;
    document.getElementById("dsh1[2]").hidden=false;
    document.getElementById("dsh1_headcard[0]footer-properties-lbl[0]").hidden=true;
    document.getElementById("dsh1_headcard[0]footer-properties-lbl[1]").hidden=true;

    // document.getElementById("dsh1[3]").hidden=true;
    // document.getElementById("dsh1[4]").hidden=true;
    // document.getElementById("dsh1[5]").hidden=true;
    // document.getElementById("dsh1[6]").hidden=true;
    this.initMap();
    console.log('ionViewDidLoad Dsh2HomePage');
    // if (chkInit==true){
      this.drilldown();
      //chkInit=false;
    // }
    this.tampilkanNilai();
  }

  private getData(){
    var ary_Header=[];
    var rsltAry=[];
    var grpNotRelease=[];
    var area_NOT_RELEASE=[];
    var area_POP=[];
    var area_RFI=[];
    var area_ARFI=[];
    var querySql ="SELECT DISTINCT URUTAN,SEQ,GRP,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4 FROM ALL_PRJ "// WHERE GRP='test' "
                  +" WHERE BULAN='08' AND TAHUN='2018'";
                  +" ORDER BY SEQ,GRP DESC,URUTAN ASC";
      this.database.selectData(querySql).then(data=>{
         rsltAry=[];
         rsltAry.push(data);
         if (rsltAry[0].length!==0){
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
    console.log(this.getData());
  //},1000);
  //  a.push(a.filter(function(headerObj){
  //           return headerObj.SEQ.indexOf("HEADER") > -1
  //         }));
  //   console.log(a);

    //--HIDE CARD
    for (var x1=1; x1<=20; x1++){
      document.getElementById("dsh1["+x1+"]").hidden=true;
    }

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

  initMap(){
    // this.map1 = new google.maps.Map(document.getElementById("map1"),this.mapOptions1);
    // this.directionsDisplay.setMap(this.map1);
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
        this.ionViewDidLoad();
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

  private drilldown(){
        this.charting=HighCharts.chart({
          chart: {
            renderTo:'dsh1-b2cChart',
            zoomType: 'x',
            panning: true,
            panKey: 'shift',
            type:'areaspline'
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
             categories: ["W1-Jan-2018","W2-Jan-2018","W3-Jan-2018","W4-Jan-2018","W5-Jan-2018","W1-Feb-2018","W2-Feb-2018","W3-Feb-2018","W4-Feb-2018","W5-Feb-2018","W1-Mar-2018","W2-Mar-2018","W3-Mar-2018","W4-Mar-2018","W5-Mar-2018","W1-Apr-2018","W2-Apr-2018","W3-Apr-2018","W4-Apr-2018","W5-Apr-2018","W6-Apr-2018","W1-May-2018","W2-May-2018","W3-May-2018","W4-May-2018","W5-May-2018","W1-Jun-2018","W2-Jun-2018","W3-Jun-2018","W4-Jun-2018","W5-Jun-2018","W1-Jul-2018","W2-Jul-2018","W3-Jul-2018","W4-Jul-2018","W5-Jul-2018","W6-Jul-2018","W1-Aug-2018","W2-Aug-2018","W3-Aug-2018","W4-Aug-2018","W5-Aug-2018","W1-Sep-2018","W2-Sep-2018","W3-Sep-2018","W4-Sep-2018","W5-Sep-2018","W1-Oct-2018","W2-Oct-2018","W3-Oct-2018","W4-Oct-2018","W5-Oct-2018","W1-Nov-2018","W2-Nov-2018","W3-Nov-2018"],
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
                data: [null,null,null,null,null,null,null,null,null,null,null,16,61,302,382,394,411,421,873,885,886,900,1195,1233,1251,1401,1422,1447,1449,1459,1461,1461,1487,1487,1489,1530,1560,1564,1577,1586,1606,1610,1610,1613,1613,1613,1615,1650,1650,1654,1712,1716,1716,1721],
                color:'#2c303e',
                //fillOpacity: 0.5
            }, {
                // type: 'spline',
                name: 'Actual RFI',
                data: [null,null,null,null,null,null,null,null,null,null,null,22,56,123,206,209,259,303,331,339,343,343,350,353,354,356,357,359,362,362,362,363,367,372,399,403,408,456],
                color:'#a50500',
                //fillOpacity: 0.5
          }, {
                type: 'column',
                name: 'Target',
                data: [0,0,0,0,0,0,0,0,0,0,0,16,45,241,80,12,17,10,452,12,1,14,295,38,18,150,21,25,2,10,2,0,26,0,2,41,30,4,13,9,20,4,0,3,0,0,2,35,0,4,58,4,0,5,0],
                color:'#2F69C5'
          }, {
                type: 'column',
                name: 'Actual',
                data: [0,0,0,0,0,0,0,0,0,0,0,22,34,67,83,3,50,44,28,8,4,0,7,3,1,2,1,2,3,0,0,1,4,5,27,4,5,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                color:'#FF9735'
          }],
          navigation: {
              menuItemStyle: {
                  fontSize: '10px'
              }
          }
    });
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

