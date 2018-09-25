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
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
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
      center: new google.maps.LatLng(-2.209764,117.114258),
      styles: this.database._defaultNewStyle
    };
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(false);
    // this.subscription2 = Observable.timer(3000, 3000).subscribe(x => {
      console.log('run-Disply');
      //  this.nilaiDispyValue1();
    // });
  }

  ngOnInit() {
    // this.subscription1 = Observable.timer(10000,10000).subscribe(x => {
      console.log('run-Disply');
      // this.dashboarAll.getAllPrj();
      // this.dashboarAll.getSetting();
    // });
  }
   /**
   * Event Back / close Page
   */
  ionViewWillUnload() {
    console.log("Previus page")
    // this.subscription1.unsubscribe();
    // this.subscription2.unsubscribe();
  }

  private goToAccount() {
    this.navCtrl.push(SettingsPage);
  }

  ionViewDidLoad() {
    this.initMouseOverOut();
    this.initClickEvent();
    document.getElementById("dsh1[1]").hidden=false;
    document.getElementById("dsh1[2]").hidden=false;
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
    for (var i=0; i<=8; i++){
      document.getElementById("dsh1["+i+"]card[0]content[1]-properties-lbl").innerHTML='1';
      document.getElementById("dsh1["+i+"]card[1]content[1]-properties-lbl").innerHTML='1';
      document.getElementById("dsh1["+i+"]card[2]content[1]-properties-lbl").innerHTML='1';
      document.getElementById("dsh1["+i+"]card[3]content[1]-properties-lbl").innerHTML='1';
    }
    for (var j=0; j<=3; j++){
      document.getElementById("dsh1[0]card["+j+"]footer-properties-lbl[1]").innerHTML='212';
    }

  }



  initMap(){
    this.map1 = new google.maps.Map(document.getElementById("map1"),this.mapOptions1);
    this.directionsDisplay.setMap(this.map1);
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
    //-HEADER - LABEL LEFT CONTENT
    var hdrImgDes3=<HTMLImageElement>document.getElementById("dsh1_headcard[1]footer-properties-lbl[0]");

    /** NO RELEASE */
    var dsh1_0card_0content=<HTMLImageElement>document.getElementById("dsh1[0]card[0]content");
        dsh1_0card_0content.addEventListener('click', function () {
          switch(dsh1_0card_0content_click) {
            case 0:
                  dsh1_0card_0content_click=1;
                  dsh1_0card_0content.style.backgroundColor="#83D7F1";
                  //yang tidak di click kembali default
                    dsh1_0card_1content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_3content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_1content_click=0;
                    dsh1_0card_2content_click=0;
                    dsh1_0card_3content_click=0;
                  //show card - Not release - Per-Aria
                  document.getElementById("dsh1[1]").hidden=false;
                  //====>CLOSE
                  document.getElementById("dsh1[2]").hidden=true;
                  document.getElementById("dsh1[3]").hidden=true;
                  document.getElementById("dsh1[4]").hidden=true;
                  document.getElementById("dsh1[5]").hidden=true;
                  document.getElementById("dsh1[6]").hidden=true;
                  /** HEADER */
                  // var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh1[0]card[0]content[1]-properties-img");
                  //     var srcScoundImgName0=hdrImgSrc.src;
                  //     var aryScoundImgName0 = srcScoundImgName0.split("/");
                  //     var ScoundImgName0=aryScoundImgName0.reverse()[0];
                  //     hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                  //     hdrImgDes1.hidden=false;
                      hdrImgDes2.innerHTML="No Release";
                      hdrImgDes3.innerHTML="Per Ubis";
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
                  document.getElementById("dsh1[1]").hidden=true;
                  document.getElementById("dsh1[2]").hidden=true;
                  document.getElementById("dsh1[3]").hidden=true;
                  document.getElementById("dsh1[4]").hidden=true;
                  document.getElementById("dsh1[5]").hidden=true;
                  document.getElementById("dsh1[6]").hidden=true;
                  hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
              break;
            default:
          };
        });
    /** POP */
    var dsh1_0card_1content=<HTMLImageElement>document.getElementById("dsh1[0]card[1]content");
        dsh1_0card_1content.addEventListener('click', function () {
          switch(dsh1_0card_1content_click) {
              case 0:
                    dsh1_0card_1content_click=1;
                    dsh1_0card_1content.style.backgroundColor="#83D7F1";
                    //yang tidak di click kembali default
                    dsh1_0card_0content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_3content.style.backgroundColor="#FFFFFF";
                    dsh1_0card_0content_click=0;
                    dsh1_0card_2content_click=0;
                    dsh1_0card_3content_click=0;
                    //show card - POP - Per-Aria
                    document.getElementById("dsh1[5]").hidden=false;
                    document.getElementById("dsh1[6]").hidden=false;
                    //====>CLOSE
                    document.getElementById("dsh1[1]").hidden=true;
                    document.getElementById("dsh1[2]").hidden=true;
                    document.getElementById("dsh1[3]").hidden=true;
                    document.getElementById("dsh1[4]").hidden=true;
                    /** HEADER */
                    // var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh1[0]card[1]content[1]-properties-img");
                    //     var srcScoundImgName0=hdrImgSrc.src;
                    //     var aryScoundImgName0 = srcScoundImgName0.split("/");
                    //     var ScoundImgName0=aryScoundImgName0.reverse()[0];
                    //     hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                    //     hdrImgDes1.hidden=false;
                        hdrImgDes2.innerHTML="Project On Pipe";
                        hdrImgDes3.innerHTML="Per Ubis";
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
                    document.getElementById("dsh1[1]").hidden=true;
                    document.getElementById("dsh1[2]").hidden=true;
                    document.getElementById("dsh1[3]").hidden=true;
                    document.getElementById("dsh1[4]").hidden=true;
                    document.getElementById("dsh1[5]").hidden=true;
                    document.getElementById("dsh1[6]").hidden=true;
                    hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
                break;
              default:
          };
        });
    /** RFI */
    var dsh1_0card_2content=<HTMLImageElement>document.getElementById("dsh1[0]card[2]content");
        dsh1_0card_2content.addEventListener('click', function () {
          switch(dsh1_0card_2content_click) {
            case 0:
                  dsh1_0card_2content_click=1;
                  dsh1_0card_2content.style.backgroundColor="#83D7F1";
                  //yang tidak di click kembali default
                  dsh1_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_3content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_0content_click=0;
                  dsh1_0card_1content_click=0;
                  dsh1_0card_3content_click=0;
                  //--- RFI
                  document.getElementById("dsh1[2]").hidden=false;
                  //====>CLOSE
                  document.getElementById("dsh1[1]").hidden=true;
                  document.getElementById("dsh1[3]").hidden=true;
                  document.getElementById("dsh1[4]").hidden=true;
                  document.getElementById("dsh1[5]").hidden=true;
                  document.getElementById("dsh1[6]").hidden=true;
                  /** HEADER */
                  // var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh1[0]card[2]content[1]-properties-img");
                  // var srcScoundImgName0=hdrImgSrc.src;
                  // var aryScoundImgName0 = srcScoundImgName0.split("/");
                  // var ScoundImgName0=aryScoundImgName0.reverse()[0];
                  // hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                  // hdrImgDes1.hidden=false;
                  hdrImgDes2.innerHTML="RFI";
                  hdrImgDes3.innerHTML="Per Ubis";
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
                  document.getElementById("dsh1[1]").hidden=true;
                  document.getElementById("dsh1[2]").hidden=true;
                  document.getElementById("dsh1[3]").hidden=true;
                  document.getElementById("dsh1[4]").hidden=true;
                  document.getElementById("dsh1[5]").hidden=true;
                  document.getElementById("dsh1[6]").hidden=true;
                  hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
              break;
            default:
          };
        });
    /** AFTER RFI */
    var dsh1_0card_3content=<HTMLImageElement>document.getElementById("dsh1[0]card[3]content");
        dsh1_0card_3content.addEventListener('click', function () {
          switch(dsh1_0card_3content_click) {
            case 0:
                  dsh1_0card_3content_click=1;
                  dsh1_0card_3content.style.backgroundColor="#83D7F1";
                  //yang tidak di click kembali default
                  dsh1_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh1_0card_0content_click=0;
                  dsh1_0card_1content_click=0;
                  dsh1_0card_2content_click=0;
                  //--- AFTER RFI
                  document.getElementById("dsh1[3]").hidden=false;
                  document.getElementById("dsh1[4]").hidden=false;
                  //====>CLOSE
                  document.getElementById("dsh1[1]").hidden=true;
                  document.getElementById("dsh1[2]").hidden=true;
                  document.getElementById("dsh1[5]").hidden=true;
                  document.getElementById("dsh1[6]").hidden=true;
                  /** HEADER */
                  // var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh1[0]card[3]content[1]-properties-img");
                  // var srcScoundImgName0=hdrImgSrc.src;
                  // var aryScoundImgName0 = srcScoundImgName0.split("/");
                  // var ScoundImgName0=aryScoundImgName0.reverse()[0];
                  // hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                  // hdrImgDes1.hidden=false;
                  hdrImgDes2.innerHTML="After RFI";
                  hdrImgDes3.innerHTML="Per Ubis";
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
                  document.getElementById("dsh1[1]").hidden=true;
                  document.getElementById("dsh1[2]").hidden=true;
                  document.getElementById("dsh1[3]").hidden=true;
                  document.getElementById("dsh1[4]").hidden=true;
                  document.getElementById("dsh1[5]").hidden=true;
                  document.getElementById("dsh1[6]").hidden=true;
                  hdrImgDes3.innerHTML="Per-Ubis/Per-Area";
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
                  document.getElementById("dsh1[1]").hidden=true;
                  document.getElementById("dsh1[2]").hidden=true;
                  document.getElementById("dsh1[3]").hidden=true;
                  document.getElementById("dsh1[4]").hidden=true;
                  document.getElementById("dsh1[5]").hidden=true;
                  document.getElementById("dsh1[6]").hidden=true;
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

