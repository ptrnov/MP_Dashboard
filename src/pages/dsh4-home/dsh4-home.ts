import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import * as HighCharts from "highcharts";
import { DatabaseProvider} from "../../providers/database/database";


declare var google;
var dsh4_0card_0content_click=0;
var dsh4_0card_1content_click=0;
var dsh4_0card_2content_click=0;
var dsh4_0card_3content_click=0;
var dsh4_0card_0footer_click=0;
var dsh4_0card_1footer_click=0;
var dsh4_0card_2footer_click=0;
var dsh4_0card_3footer_click=0;
/** IMG SOURCE */
var defaultUrlImg="assets/img/new/";
@IonicPage()
@Component({
  selector: 'page-dsh4-home',
  templateUrl: 'dsh4-home.html',
})
export class Dsh4HomePage {

  @ViewChild('map4') mapElement4: ElementRef;
  map4: any;
  start = 'chicago, il';
  end = 'chicago, il';
  // directionsService = new google.maps.DirectionsService;
  directionsDisplay1 = new google.maps.DirectionsRenderer;
  mapOptions4:any;

  charting;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: DatabaseProvider
  ) {
    this.mapOptions4={
      zoom: 5,
      center: new google.maps.LatLng(-2.209764,117.114258),
      styles: this.database._defaultNewStyle
    };
  }


  ionViewDidLoad() {
    this.initMouseOverOut();
    this.initClickEvent();
    document.getElementById("dsh4[1]").hidden=true;
    document.getElementById("dsh4[2]").hidden=true;
    document.getElementById("dsh4[3]").hidden=true;
    document.getElementById("dsh4[4]").hidden=true;
    document.getElementById("dsh4[5]").hidden=true;
    document.getElementById("dsh4[6]").hidden=true;
    document.getElementById("dsh4_headcard[1]content[1]-properties-img").hidden=true;;
    document.getElementById("dsh4_headcard[1]content[1]-properties-lbl").innerHTML="SELECTED";
    this.initMap();
    console.log('ionViewDidLoad Dsh2HomePage');
    // if (chkInit==true){
      this.drilldown();
      //chkInit=false;
    // }

  }

  initMap() {


    // this.map = new google.maps.Map(this.mapElement.nativeElement, {
    this.map4 = new google.maps.Map(document.getElementById("map4"),this.mapOptions4);

    // this.directionsDisplay.setMap(this.map);
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }
  ionViewWillUnload() {
    // chkInit=false;
    // this.charting.distroy;

  }

  private drilldown(){
    this.charting=HighCharts.chart({
       chart: {
         renderTo:'dsh4-b2cChart',
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
    /** dsh4_0 CONTAIN */
    var hdrImgDes1=<HTMLImageElement>document.getElementById("dsh4_headcard[1]content[1]-properties-img");
    var hdrImgDes2=<HTMLImageElement>document.getElementById("dsh4_headcard[1]content[1]-properties-lbl");
    /** NO RELEASE */
    var dsh4_0card_0content=<HTMLImageElement>document.getElementById("dsh4[0]card[0]content");
        dsh4_0card_0content.addEventListener('click', function () {
          switch(dsh4_0card_0content_click) {
            case 0:
                  dsh4_0card_0content_click=1;
                  dsh4_0card_0content.style.backgroundColor="#83D7F1";
                  //yang tidak di click kembali default
                    dsh4_0card_1content.style.backgroundColor="#FFFFFF";
                    dsh4_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh4_0card_3content.style.backgroundColor="#FFFFFF";
                    dsh4_0card_1content_click=0;
                    dsh4_0card_2content_click=0;
                    dsh4_0card_3content_click=0;
                  //show card - Not release - Per-Aria
                  document.getElementById("dsh4[1]").hidden=false;
                  //====>CLOSE
                  document.getElementById("dsh4[2]").hidden=true;
                  document.getElementById("dsh4[3]").hidden=true;
                  document.getElementById("dsh4[4]").hidden=true;
                  document.getElementById("dsh4[5]").hidden=true;
                  document.getElementById("dsh4[6]").hidden=true;
                  /** HEADER */
                  // var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh4[0]card[0]content[1]-properties-img");
                  //     var srcScoundImgName0=hdrImgSrc.src;
                  //     var aryScoundImgName0 = srcScoundImgName0.split("/");
                  //     var ScoundImgName0=aryScoundImgName0.reverse()[0];
                  //     hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                  //     hdrImgDes1.hidden=false;
                      hdrImgDes2.innerHTML="No Release";
                  break;
                case 1:
                      dsh4_0card_0content_click=0;
                      dsh4_0card_1content_click=0;
                      dsh4_0card_2content_click=0;
                      dsh4_0card_3content_click=0;
                      dsh4_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh4[1]").hidden=true;
                  document.getElementById("dsh4[2]").hidden=true;
                  document.getElementById("dsh4[3]").hidden=true;
                  document.getElementById("dsh4[4]").hidden=true;
                  document.getElementById("dsh4[5]").hidden=true;
                  document.getElementById("dsh4[6]").hidden=true;
              break;
            default:
          };
        });
    /** POP */
    var dsh4_0card_1content=<HTMLImageElement>document.getElementById("dsh4[0]card[1]content");
        dsh4_0card_1content.addEventListener('click', function () {
          switch(dsh4_0card_1content_click) {
              case 0:
                    dsh4_0card_1content_click=1;
                    dsh4_0card_1content.style.backgroundColor="#83D7F1";
                    //yang tidak di click kembali default
                    dsh4_0card_0content.style.backgroundColor="#FFFFFF";
                    dsh4_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh4_0card_3content.style.backgroundColor="#FFFFFF";
                    dsh4_0card_0content_click=0;
                    dsh4_0card_2content_click=0;
                    dsh4_0card_3content_click=0;
                    //show card - POP - Per-Aria
                    document.getElementById("dsh4[5]").hidden=false;
                    document.getElementById("dsh4[6]").hidden=false;
                    //====>CLOSE
                    document.getElementById("dsh4[1]").hidden=true;
                    document.getElementById("dsh4[2]").hidden=true;
                    document.getElementById("dsh4[3]").hidden=true;
                    document.getElementById("dsh4[4]").hidden=true;
                    /** HEADER */
                    // var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh4[0]card[1]content[1]-properties-img");
                    //     var srcScoundImgName0=hdrImgSrc.src;
                    //     var aryScoundImgName0 = srcScoundImgName0.split("/");
                    //     var ScoundImgName0=aryScoundImgName0.reverse()[0];
                    //     hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                    //     hdrImgDes1.hidden=false;
                        hdrImgDes2.innerHTML="Project On Pipe";
                break;
              case 1:
                    dsh4_0card_0content_click=0;
                    dsh4_0card_1content_click=0;
                    dsh4_0card_2content_click=0;
                    dsh4_0card_3content_click=0;
                    dsh4_0card_0content.style.backgroundColor="#FFFFFF";
                    dsh4_0card_1content.style.backgroundColor="#FFFFFF";
                    dsh4_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh4_0card_3content.style.backgroundColor="#FFFFFF";
                    document.getElementById("dsh4[1]").hidden=true;
                    document.getElementById("dsh4[2]").hidden=true;
                    document.getElementById("dsh4[3]").hidden=true;
                    document.getElementById("dsh4[4]").hidden=true;
                    document.getElementById("dsh4[5]").hidden=true;
                    document.getElementById("dsh4[6]").hidden=true;
                break;
              default:
          };
        });
    /** RFI */
    var dsh4_0card_2content=<HTMLImageElement>document.getElementById("dsh4[0]card[2]content");
        dsh4_0card_2content.addEventListener('click', function () {
          switch(dsh4_0card_2content_click) {
            case 0:
                  dsh4_0card_2content_click=1;
                  dsh4_0card_2content.style.backgroundColor="#83D7F1";
                  //yang tidak di click kembali default
                  dsh4_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_3content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_0content_click=0;
                  dsh4_0card_1content_click=0;
                  dsh4_0card_3content_click=0;
                  //--- RFI
                  document.getElementById("dsh4[2]").hidden=false;
                  //====>CLOSE
                  document.getElementById("dsh4[1]").hidden=true;
                  document.getElementById("dsh4[3]").hidden=true;
                  document.getElementById("dsh4[4]").hidden=true;
                  document.getElementById("dsh4[5]").hidden=true;
                  document.getElementById("dsh4[6]").hidden=true;
                  /** HEADER */
                  // var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh4[0]card[2]content[1]-properties-img");
                  // var srcScoundImgName0=hdrImgSrc.src;
                  // var aryScoundImgName0 = srcScoundImgName0.split("/");
                  // var ScoundImgName0=aryScoundImgName0.reverse()[0];
                  // hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                  // hdrImgDes1.hidden=false;
                  hdrImgDes2.innerHTML="RFI";
              break;
            case 1:
                  dsh4_0card_0content_click=0;
                  dsh4_0card_1content_click=0;
                  dsh4_0card_2content_click=0;
                  dsh4_0card_3content_click=0;
                  dsh4_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh4[1]").hidden=true;
                  document.getElementById("dsh4[2]").hidden=true;
                  document.getElementById("dsh4[3]").hidden=true;
                  document.getElementById("dsh4[4]").hidden=true;
                  document.getElementById("dsh4[5]").hidden=true;
                  document.getElementById("dsh4[6]").hidden=true;
              break;
            default:
          };
        });
    /** AFTER RFI */
    var dsh4_0card_3content=<HTMLImageElement>document.getElementById("dsh4[0]card[3]content");
        dsh4_0card_3content.addEventListener('click', function () {
          switch(dsh4_0card_3content_click) {
            case 0:
                  dsh4_0card_3content_click=1;
                  dsh4_0card_3content.style.backgroundColor="#83D7F1";
                  //yang tidak di click kembali default
                  dsh4_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_0content_click=0;
                  dsh4_0card_1content_click=0;
                  dsh4_0card_2content_click=0;
                  //--- AFTER RFI
                  document.getElementById("dsh4[3]").hidden=false;
                  document.getElementById("dsh4[4]").hidden=false;
                  //====>CLOSE
                  document.getElementById("dsh4[1]").hidden=true;
                  document.getElementById("dsh4[2]").hidden=true;
                  document.getElementById("dsh4[5]").hidden=true;
                  document.getElementById("dsh4[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh4[0]card[3]content[1]-properties-img");
                  var srcScoundImgName0=hdrImgSrc.src;
                  var aryScoundImgName0 = srcScoundImgName0.split("/");
                  var ScoundImgName0=aryScoundImgName0.reverse()[0];
                  hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                  hdrImgDes1.hidden=false;
                  hdrImgDes2.innerHTML="After RFI";
              break;
            case 1:
                  dsh4_0card_0content_click=0;
                  dsh4_0card_1content_click=0;
                  dsh4_0card_2content_click=0;
                  dsh4_0card_3content_click=0;
                  dsh4_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh4[1]").hidden=true;
                  document.getElementById("dsh4[2]").hidden=true;
                  document.getElementById("dsh4[3]").hidden=true;
                  document.getElementById("dsh4[4]").hidden=true;
                  document.getElementById("dsh4[5]").hidden=true;
                  document.getElementById("dsh4[6]").hidden=true;
              break;
            default:
          };
        });

    /** dsh4_0 FOOTER */
    var dsh4_0card_0footer=document.getElementById("dsh4[0]card[0]footer");
        dsh4_0card_0footer.addEventListener('click', function () {
          switch(dsh4_0card_0footer_click) {
            case 0:
                  dsh4_0card_0footer_click=1;
                  dsh4_0card_0footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh4_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_1footer_click=0;
                  dsh4_0card_2footer_click=0;
                  dsh4_0card_3footer_click=0;
              break;
            case 1:
                  dsh4_0card_0footer_click=0;
                  dsh4_0card_1footer_click=0;
                  dsh4_0card_2footer_click=0;
                  dsh4_0card_3footer_click=0;
                  dsh4_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_3footer.style.backgroundColor="#E9E9E9";
                  document.getElementById("dsh4[1]").hidden=true;
                  document.getElementById("dsh4[2]").hidden=true;
                  document.getElementById("dsh4[3]").hidden=true;
                  document.getElementById("dsh4[4]").hidden=true;
                  document.getElementById("dsh4[5]").hidden=true;
                  document.getElementById("dsh4[6]").hidden=true;
              break;
            default:
          };
        });

    var dsh4_0card_1footer=document.getElementById("dsh4[0]card[1]footer");
        dsh4_0card_1footer.addEventListener('click', function () {
          switch(dsh4_0card_1footer_click) {
            case 0:
                  dsh4_0card_1footer_click=1;
                  dsh4_0card_1footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh4_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_0footer_click=0;
                  dsh4_0card_2footer_click=0;
                  dsh4_0card_3footer_click=0;
              break;
            case 1:
                  dsh4_0card_0footer_click=0;
                  dsh4_0card_1footer_click=0;
                  dsh4_0card_2footer_click=0;
                  dsh4_0card_3footer_click=0;
                  dsh4_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });

    var dsh4_0card_2footer=document.getElementById("dsh4[0]card[2]footer");
        dsh4_0card_2footer.addEventListener('click', function () {
          switch(dsh4_0card_2footer_click) {
            case 0:
                  dsh4_0card_2footer_click=1;
                  dsh4_0card_2footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh4_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_0footer_click=0;
                  dsh4_0card_1footer_click=0;
                  dsh4_0card_3footer_click=0;
              break;
            case 1:
                  dsh4_0card_0footer_click=0;
                  dsh4_0card_1footer_click=0;
                  dsh4_0card_2footer_click=0;
                  dsh4_0card_3footer_click=0;
                  dsh4_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });

    var dsh4_0card_3footer=document.getElementById("dsh4[0]card[3]footer");
        dsh4_0card_3footer.addEventListener('click', function () {
          switch(dsh4_0card_3footer_click) {
            case 0:
                  dsh4_0card_3footer_click=1;
                  dsh4_0card_3footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh4_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_0footer_click=0;
                  dsh4_0card_1footer_click=0;
                  dsh4_0card_2footer_click=0;
              break;
            case 1:
                  dsh4_0card_0footer_click=0;
                  dsh4_0card_1footer_click=0;
                  dsh4_0card_2footer_click=0;
                  dsh4_0card_3footer_click=0;
                  dsh4_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh4_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });
  }

  private initMouseOverOut(){
       /* dsh4_0 CONTAIN */
      var dsh4_0card_0content=document.getElementById("dsh4[0]card[0]content");
          dsh4_0card_0content.onmouseover= function () {
            dsh4_0card_0content.style.backgroundColor="#BBE5F2";
          }
          dsh4_0card_0content.onmouseout = function () {
            if (dsh4_0card_0content_click!==1){
              dsh4_0card_0content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh4_0card_1content=document.getElementById("dsh4[0]card[1]content");
          dsh4_0card_1content.onmouseover= function () {
            dsh4_0card_1content.style.backgroundColor="#BBE5F2";
          }
          dsh4_0card_1content.onmouseout = function () {
            if (dsh4_0card_1content_click!==1){
              dsh4_0card_1content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh4_0card_2content=document.getElementById("dsh4[0]card[2]content");
          dsh4_0card_2content.onmouseover= function () {
            dsh4_0card_2content.style.backgroundColor="#BBE5F2";
          }
          dsh4_0card_2content.onmouseout = function () {
            if (dsh4_0card_2content_click!==1){
              dsh4_0card_2content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh4_0card_3content=document.getElementById("dsh4[0]card[3]content");
          dsh4_0card_3content.onmouseover= function () {
            dsh4_0card_3content.style.backgroundColor="#BBE5F2";
          }
          dsh4_0card_3content.onmouseout = function () {
            if (dsh4_0card_3content_click!==1){
              dsh4_0card_3content.style.backgroundColor="#FFFFFF";
            }
          }

      /* dsh4_0 FOOTER */
      var dsh4_0card_0footer=document.getElementById("dsh4[0]card[0]footer");
          dsh4_0card_0footer.onmouseover= function () {
            dsh4_0card_0footer.style.backgroundColor="#FA8633";
          }
          dsh4_0card_0footer.onmouseout = function () {
            if (dsh4_0card_0footer_click!==1){
              dsh4_0card_0footer.style.backgroundColor="#E9E9E9";
            }

          }

      var dsh4_0card_1footer=document.getElementById("dsh4[0]card[1]footer");
          dsh4_0card_1footer.onmouseover= function () {
            dsh4_0card_1footer.style.backgroundColor="#FA8633";
          }
          dsh4_0card_1footer.onmouseout = function () {
            if (dsh4_0card_1footer_click!==1){
              dsh4_0card_1footer.style.backgroundColor="#E9E9E9";
            }
          }

      var dsh4_0card_2footer=document.getElementById("dsh4[0]card[2]footer");
          dsh4_0card_2footer.onmouseover= function () {
            dsh4_0card_2footer.style.backgroundColor="#FA8633";
          }
          dsh4_0card_2footer.onmouseout = function () {
            if (dsh4_0card_2footer_click!==1){
              dsh4_0card_2footer.style.backgroundColor="#E9E9E9";
            }
          }
      var dsh4_0card_3footer=document.getElementById("dsh4[0]card[3]footer");
          dsh4_0card_3footer.onmouseover= function () {
            dsh4_0card_3footer.style.backgroundColor="#FA8633";
          }
          dsh4_0card_3footer.onmouseout = function () {
            if (dsh4_0card_3footer_click!==1){
              dsh4_0card_3footer.style.backgroundColor="#E9E9E9";
            }
          }
  }
}
