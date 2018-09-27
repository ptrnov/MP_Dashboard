import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import * as HighCharts from "highcharts";
import { DatabaseProvider} from "../../providers/database/database";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';

// import { DomCard } from "./card";
declare var google;
/** VAR CLICK & MOUSEOVER STATUS */
var dsh2_0card_0content_click=0;
var dsh2_0card_1content_click=0;
var dsh2_0card_2content_click=0;
var dsh2_0card_3content_click=0;
var dsh2_0card_0footer_click=0;
var dsh2_0card_1footer_click=0;
var dsh2_0card_2footer_click=0;
var dsh2_0card_3footer_click=0;
/** IMG SOURCE */
var defaultUrlImg="assets/img/new/";
/** INIT ONE OPEN NEW STATUS */
var chkInit=0;

@IonicPage()
@Component({
  selector: 'page-dsh2-home',
  templateUrl: 'dsh2-home.html',
})
export class Dsh2HomePage {
  @ViewChild('map2') mapElement2: ElementRef;
  map2: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  mapOptions2:any;
  private dsh2_subscription1;
  private dsh2_subscription2;
  charting;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: DatabaseProvider
  ){
    this.mapOptions2={
      zoom: 4,
      center:  new google.maps.LatLng(-2.209764,117.114258),
      styles: this.database._defaultNewStyle
    };
  }

  ionViewDidLoad() {
    // this.menu.swipeEnable(true);
    console.log('ionViewDidLoad Dsh2HomePage');
    this.initMouseOverOut();
    this.initClickEvent();
    document.getElementById("dsh2[1]").hidden=true;
    document.getElementById("dsh2[2]").hidden=true;
    document.getElementById("dsh2[3]").hidden=true;
    document.getElementById("dsh2[4]").hidden=true;
    document.getElementById("dsh2[5]").hidden=true;
    document.getElementById("dsh2[6]").hidden=true;
    document.getElementById("dsh2_headcard[0]footer-properties-lbl[0]").hidden=true;
    document.getElementById("dsh2_headcard[0]footer-properties-lbl[1]").hidden=true;
    document.getElementById("dsh2_headcard[1]content[1]-properties-img").hidden=true;;
    document.getElementById("dsh2_headcard[1]content[1]-properties-lbl").innerHTML="SELECTED";
    this.drilldown();
    this.initMap();
    chkInit=1;
    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
    //this.tampilkanNilai();
    this.getData();
  }

  ionViewDidEnter(){
    // this.menu.swipeEnable(false);
    this.dsh2_subscription2 = Observable.timer(4000, 4000).subscribe(x => {
      console.log('run-Disply');
       this.getData();
    });
  }

  ionViewWillUnload() {
    console.log("Previus page");
    chkInit=0;
    // this.dsh2_subscription1.unsubscribe();
    this.dsh2_subscription2.unsubscribe();
  }
  private getData(){
    var ary_Header=[];
    var rsltAry=[];
    var grpB2S=[];
    var area_NOT_RELEASE=[];
    var area_POP=[];
    var area_RFI=[];
    var  area_ARFI=[];
    var querySql ="SELECT URUTAN,SEQ,GRP,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4,SIS,SITAC1,SITAC2,CME,RFC,RFI FROM B2S_PRJ "// WHERE GRP='test' "
                 +" ORDER BY SEQ,GRP DESC,URUTAN ASC";
      this.database.selectData(querySql).then(data=>{
         rsltAry.push(data);
         if (rsltAry[0].length!==0){
              // console.log("data ada");
              console.log(rsltAry);
              ary_Header=[];
              ary_Header.push(rsltAry[0].filter(function(headerObj){
                return headerObj.SEQ=="HEADER";
              }));
              // - ORDER SORT
              ary_Header[0].sort((a, b):number=>{
                if (a.URUTAN < b.URUTAN) return -1;
                if (a.URUTAN > b.URUTAN) return 1;
                return 0;
              });

              //-Set ARRAY GROUP - B2S
              grpB2S=[];
              grpB2S.push(rsltAry[0].filter(function(b2cAreaObj){
                  return b2cAreaObj.SEQ=="B2S";
                })
              );
              /** NOT RELEASE - UBIS -> PER AREA */
              area_NOT_RELEASE=[];
              area_NOT_RELEASE.push(grpB2S[0].filter(function(notReleaseObj){
                  return notReleaseObj.GRP=="NOT_RELEASE";
                })
              );
              /** PROJECT ON PIPE - UBIS -> PER AREA */
              area_POP=[];
              area_POP.push(grpB2S[0].filter(function(pipeObj){
                  return pipeObj.GRP=="POP";
                })
              );
               /** RFI - UBIS -> PER AREA */
              area_RFI=[];
              area_RFI.push(grpB2S[0].filter(function(rfiObj){
                  return rfiObj.GRP=="RFI";
                })
              );
               /** AFTER RFI - UBIS -> PER AREA */
              area_ARFI=[];
              area_ARFI.push(grpB2S[0].filter(function(arfiObj){
                  return arfiObj.GRP=="ARFI";
                })
              );

              //-> toDisply
              ary_Header[0].forEach(el=>{
                  console.log(el.GRP);
                  // console.log(el);
                  if (el.GRP=='ALL_PRJ') {
                    document.getElementById("dsh2_headcard[0]content[1]-properties-lbl").innerHTML=(el.NILAI).toString()
                    // document.getElementById("dsh2_headcard[0]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='NOT_RELEASE') {
                    document.getElementById("dsh2[0]card[0]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh2[0]card[0]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='PRJ_ON_PIPE'){
                    document.getElementById("dsh2[0]card[1]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh2[0]card[1]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='RFI') {
                    document.getElementById("dsh2[0]card[2]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh2[0]card[2]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='ARFI') {
                    document.getElementById("dsh2[0]card[3]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh2[0]card[3]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
              });
              area_NOT_RELEASE[0].forEach(el1=>{
                  console.log(el1);
                  document.getElementById("dsh2[1]card["+el1.URUTAN +"]content[1]-properties-lbl").innerHTML=(el1.NILAI).toString();
              });
              area_POP[0].forEach(el2=>{
                console.log(el2);
                document.getElementById("dsh2[5]card["+el2.URUTAN +"]content[1]-properties-lbl").innerHTML=el2.NILAI.toString();
                document.getElementById("dsh2[6]card["+el2.URUTAN +"]properties-lbl[0]").innerHTML=el2.SIS.toString();
                document.getElementById("dsh2[6]card["+el2.URUTAN +"]properties-lbl[1]").innerHTML=el2.SITAC1.toString();
                document.getElementById("dsh2[6]card["+el2.URUTAN +"]properties-lbl[2]").innerHTML=el2.SITAC2.toString();
                document.getElementById("dsh2[6]card["+el2.URUTAN +"]properties-lbl[3]").innerHTML=el2.CME.toString();
                document.getElementById("dsh2[6]card["+el2.URUTAN +"]properties-lbl[4]").innerHTML=el2.RFC.toString();
                document.getElementById("dsh2[6]card["+el2.URUTAN +"]properties-lbl[5]").innerHTML=el2.RFI.toString();
              });
              area_RFI[0].forEach(el3=>{
                console.log(el3);
                document.getElementById("dsh2[2]card["+el3.URUTAN +"]content[1]-properties-lbl").innerHTML=(el3.NILAI).toString();
              });
              area_ARFI[0].forEach(el4=>{
                console.log(el4);
                document.getElementById("dsh2[3]card["+el4.URUTAN +"]content[1]-properties-lbl").innerHTML=(el4.NILAI).toString();
              });
              console.log(ary_Header);
          }else{
              // console.log("data kosong");

          };
      });
      return rsltAry;
  }

  tampilkanNilai(){
    /** All Project */
    // document.getElementById("dsh2_headcard[0]content[1]-properties-lbl").innerHTML=(88+10).toString();

    //   /** PER-AREA*/
    // for (var i=0; i<=3; i++){
    //   //second=NoRelease|Pop|RFI|AfterRFI| Value %
    //   document.getElementById("dsh2[0]card["+i+"]content[1]-properties-lbl").innerHTML=(i+100).toString() + "%";
    //   //NoRelease AREA[1,2,3,4]
    //   document.getElementById("dsh2[1]card["+i+"]content[1]-properties-lbl").innerHTML=(i+10).toString();
    //   //RFI AREA[1,2,3,4]
    //   document.getElementById("dsh2[2]card["+i+"]content[1]-properties-lbl").innerHTML=(i+5).toString();
    //   //AfterRFI AREA[1,2,3,4]
    //   document.getElementById("dsh2[3]card["+i+"]content[1]-properties-lbl").innerHTML=(i+12).toString();
    //   document.getElementById("dsh2[4]card["+i+"]content[1]-properties-lbl").innerHTML=(i+13).toString();
    //   //PoP AREA[1,2,3,4]
    //   document.getElementById("dsh2[5]card["+i+"]content[1]-properties-lbl").innerHTML=(i+20).toString();
    // }

    // /** Total */
    // for(var x=0; x<=3; x ++){
    //   document.getElementById("dsh2[0]card["+x+"]footer-properties-lbl[1]").innerHTML=(x+293).toString();
    // }
    // /** POP VALUE DETAIL */
    // for (var i1=0; i1<=5; i1++){
    //   document.getElementById("dsh2[6]card[0]properties-lbl["+i1+"]").innerHTML=(i1+1).toString();
    //   document.getElementById("dsh2[6]card[1]properties-lbl["+i1+"]").innerHTML=(i1+2).toString();
    //   document.getElementById("dsh2[6]card[2]properties-lbl["+i1+"]").innerHTML=(i1+3).toString();
    //   document.getElementById("dsh2[6]card[3]properties-lbl["+i1+"]").innerHTML=(i1+4).toString();
    // }
  }

  onPageWillEnter () {
    // if (chkInit==0){
      // console.log('ionViewDidLoad Dsh2HomePage');
      // this.initMouseOverOut();
      // this.initClickEvent();
      // this.drilldown();
      // this.initMap();
      // chkInit=1;
    // }
  }



  initMap() {
    this.map2 = new google.maps.Map(document.getElementById("map2"),this.mapOptions2);
    this.directionsDisplay.setMap(this.map2);
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }

  private drilldown(){
   this.charting=HighCharts.chart({
      chart: {
        renderTo:'dsh2-b2cChart',
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

  // private initClickEventSecond(){
  //   /** dsh2_0 CONTAIN */
  //   var dsh2_1card_0content=<HTMLImageElement>document.getElementById("dsh2[1]card[0]content");
  //       dsh2_1card_0content.addEventListener('click', function () {
  //         switch(dsh2_0card_0content_click) {
  //           case 0:
  //                 dsh2_0card_0content_click=1;
  //                 dsh2_0card_0content.style.backgroundColor="#83D7F1";
  //                 //yang tidak di click kembali default
  //                   dsh2_0card_1content.style.backgroundColor="#FFFFFF";
  //                   dsh2_0card_2content.style.backgroundColor="#FFFFFF";
  //                   dsh2_0card_3content.style.backgroundColor="#FFFFFF";
  //                   dsh2_0card_1content_click=0;
  //                   dsh2_0card_2content_click=0;
  //                   dsh2_0card_3content_click=0;
  //             break;
  //           case 1:
  //                 dsh2_0card_0content_click=0;
  //                 dsh2_0card_1content_click=0;
  //                 dsh2_0card_2content_click=0;
  //                 dsh2_0card_3content_click=0;
  //                 dsh2_0card_0content.style.backgroundColor="#FFFFFF";
  //                 dsh2_0card_1content.style.backgroundColor="#FFFFFF";
  //                 dsh2_0card_2content.style.backgroundColor="#FFFFFF";
  //                 dsh2_0card_3content.style.backgroundColor="#FFFFFF";
  //             break;
  //           default:
  //         };
  //       });
  // }

  private initClickEvent(){
    /** dsh2_0 CONTAIN */
    var hdrImgDes1=<HTMLImageElement>document.getElementById("dsh2_headcard[1]content[1]-properties-img");
    var hdrImgDes2=<HTMLImageElement>document.getElementById("dsh2_headcard[1]content[1]-properties-lbl");
    //-FOOTER - LABEL LEFT
    var hdrImgDes3=<HTMLImageElement>document.getElementById("dsh2_headcard[1]footer-properties-lbl[0]");

    /** NO RELEASE */
    var dsh2_0card_0content=<HTMLImageElement>document.getElementById("dsh2[0]card[0]content");
        dsh2_0card_0content.addEventListener('click', function () {
          switch(dsh2_0card_0content_click) {
            case 0:
                  hdrImgDes2.innerHTML="No Release";
                  hdrImgDes3.innerHTML="B2S-PerArea";
                  dsh2_0card_0content.style.backgroundColor="#83D7F1";
                  dsh2_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_3content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_0content_click=1;
                  dsh2_0card_1content_click=0;
                  dsh2_0card_2content_click=0;
                  dsh2_0card_3content_click=0;
                  document.getElementById("dsh2[1]").hidden=false;
                  document.getElementById("dsh2[2]").hidden=true;
                  document.getElementById("dsh2[3]").hidden=true;
                  document.getElementById("dsh2[4]").hidden=true;
                  document.getElementById("dsh2[5]").hidden=true;
                  document.getElementById("dsh2[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh2[0]card[0]content[1]-properties-img");
                      var srcScoundImgName0=hdrImgSrc.src;
                      var aryScoundImgName0 = srcScoundImgName0.split("/");
                      var ScoundImgName0=aryScoundImgName0.reverse()[0];
                      hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                      hdrImgDes1.hidden=false;

              break;
            case 1:
                  dsh2_0card_0content_click=0;
                  dsh2_0card_1content_click=0;
                  dsh2_0card_2content_click=0;
                  dsh2_0card_3content_click=0;
                  dsh2_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh2[1]").hidden=true;
                  document.getElementById("dsh2[2]").hidden=true;
                  document.getElementById("dsh2[3]").hidden=true;
                  document.getElementById("dsh2[4]").hidden=true;
                  document.getElementById("dsh2[5]").hidden=true;
                  document.getElementById("dsh2[6]").hidden=true;
          break;
        default:
      };
    });
    /** POP */
    var dsh2_0card_1content=<HTMLImageElement>document.getElementById("dsh2[0]card[1]content");
        dsh2_0card_1content.addEventListener('click', function () {
          switch(dsh2_0card_1content_click) {
            case 0:
                  hdrImgDes2.innerHTML="Project On Pipe";
                  hdrImgDes3.innerHTML="B2S-PerArea";
                  dsh2_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_1content.style.backgroundColor="#83D7F1";
                  dsh2_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_3content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_0content_click=0;
                  dsh2_0card_1content_click=1;
                  dsh2_0card_2content_click=0;
                  dsh2_0card_3content_click=0;
                  document.getElementById("dsh2[1]").hidden=true;
                  document.getElementById("dsh2[2]").hidden=true;
                  document.getElementById("dsh2[3]").hidden=true;
                  document.getElementById("dsh2[4]").hidden=true;
                  document.getElementById("dsh2[5]").hidden=false;
                  document.getElementById("dsh2[6]").hidden=false;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh2[0]card[1]content[1]-properties-img");
                      var srcScoundImgName0=hdrImgSrc.src;
                      var aryScoundImgName0 = srcScoundImgName0.split("/");
                      var ScoundImgName0=aryScoundImgName0.reverse()[0];
                      hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                      hdrImgDes1.hidden=false;
                break;
            case 1:
                  dsh2_0card_0content_click=0;
                  dsh2_0card_1content_click=0;
                  dsh2_0card_2content_click=0;
                  dsh2_0card_3content_click=0;
                  dsh2_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh2[1]").hidden=true;
                  document.getElementById("dsh2[2]").hidden=true;
                  document.getElementById("dsh2[3]").hidden=true;
                  document.getElementById("dsh2[4]").hidden=true;
                  document.getElementById("dsh2[5]").hidden=true;
                  document.getElementById("dsh2[6]").hidden=true;
            break;
          default:
      };
    });
    /** RFI */
    var dsh2_0card_2content=<HTMLImageElement>document.getElementById("dsh2[0]card[2]content");
        dsh2_0card_2content.addEventListener('click', function () {
          switch(dsh2_0card_2content_click) {
            case 0:
                  hdrImgDes2.innerHTML="RFI";
                  hdrImgDes3.innerHTML="B2S-PerArea";
                  dsh2_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_2content.style.backgroundColor="#83D7F1";
                  dsh2_0card_3content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_0content_click=0;
                  dsh2_0card_1content_click=0;
                  dsh2_0card_2content_click=1;
                  dsh2_0card_3content_click=0;
                  document.getElementById("dsh2[1]").hidden=true;
                  document.getElementById("dsh2[2]").hidden=false;
                  document.getElementById("dsh2[3]").hidden=true;
                  document.getElementById("dsh2[4]").hidden=true;
                  document.getElementById("dsh2[5]").hidden=true;
                  document.getElementById("dsh2[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh2[0]card[2]content[1]-properties-img");
                      var srcScoundImgName0=hdrImgSrc.src;
                      var aryScoundImgName0 = srcScoundImgName0.split("/");
                      var ScoundImgName0=aryScoundImgName0.reverse()[0];
                      hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                      hdrImgDes1.hidden=false;
              break;
            case 1:
                  dsh2_0card_0content_click=0;
                  dsh2_0card_1content_click=0;
                  dsh2_0card_2content_click=0;
                  dsh2_0card_3content_click=0;
                  dsh2_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh2[1]").hidden=true;
                  document.getElementById("dsh2[2]").hidden=true;
                  document.getElementById("dsh2[3]").hidden=true;
                  document.getElementById("dsh2[4]").hidden=true;
                  document.getElementById("dsh2[5]").hidden=true;
                  document.getElementById("dsh2[6]").hidden=true;
              break;
            default:
          };
        });
    /** AFTER RFI */
    var dsh2_0card_3content=<HTMLImageElement>document.getElementById("dsh2[0]card[3]content");
        dsh2_0card_3content.addEventListener('click', function () {
          switch(dsh2_0card_3content_click) {
            case 0:
                  hdrImgDes2.innerHTML="After RFI";
                  hdrImgDes3.innerHTML="B2S-PerArea";
                  dsh2_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_3content.style.backgroundColor="#83D7F1";
                  dsh2_0card_0content_click=0;
                  dsh2_0card_1content_click=0;
                  dsh2_0card_2content_click=0;
                  dsh2_0card_3content_click=1;
                  document.getElementById("dsh2[1]").hidden=true;
                  document.getElementById("dsh2[2]").hidden=true;
                  document.getElementById("dsh2[3]").hidden=false;
                  document.getElementById("dsh2[4]").hidden=false;
                  document.getElementById("dsh2[5]").hidden=true;
                  document.getElementById("dsh2[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh2[0]card[3]content[1]-properties-img");
                      var srcScoundImgName0=hdrImgSrc.src;
                      var aryScoundImgName0 = srcScoundImgName0.split("/");
                      var ScoundImgName0=aryScoundImgName0.reverse()[0];
                      hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                      hdrImgDes1.hidden=false;
              break;
            case 1:
                  dsh2_0card_0content_click=0;
                  dsh2_0card_1content_click=0;
                  dsh2_0card_2content_click=0;
                  dsh2_0card_3content_click=0;
                  dsh2_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh2_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh2[1]").hidden=true;
                  document.getElementById("dsh2[2]").hidden=true;
                  document.getElementById("dsh2[3]").hidden=true;
                  document.getElementById("dsh2[4]").hidden=true;
                  document.getElementById("dsh2[5]").hidden=true;
                  document.getElementById("dsh2[6]").hidden=true;
              break;
            default:
          };
        });

    /** dsh2_0 FOOTER */
    var dsh2_0card_0footer=document.getElementById("dsh2[0]card[0]footer");
        dsh2_0card_0footer.addEventListener('click', function () {
          switch(dsh2_0card_0footer_click) {
            case 0:
                  dsh2_0card_0footer.style.backgroundColor="#FA8633";
                  dsh2_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_0footer_click=1;
                  dsh2_0card_1footer_click=0;
                  dsh2_0card_2footer_click=0;
                  dsh2_0card_3footer_click=0;
              break;
            case 1:
                  dsh2_0card_0footer_click=0;
                  dsh2_0card_1footer_click=0;
                  dsh2_0card_2footer_click=0;
                  dsh2_0card_3footer_click=0;
                  dsh2_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_3footer.style.backgroundColor="#E9E9E9";
                  document.getElementById("dsh2[1]").hidden=true;
                  document.getElementById("dsh2[2]").hidden=true;
                  document.getElementById("dsh2[3]").hidden=true;
                  document.getElementById("dsh2[4]").hidden=true;
                  document.getElementById("dsh2[5]").hidden=true;
                  document.getElementById("dsh2[6]").hidden=true;
              break;
            default:
          };
        });

    var dsh2_0card_1footer=document.getElementById("dsh2[0]card[1]footer");
        dsh2_0card_1footer.addEventListener('click', function () {
          switch(dsh2_0card_1footer_click) {
            case 0:
                  dsh2_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_1footer.style.backgroundColor="#FA8633";
                  dsh2_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_0footer_click=0;
                  dsh2_0card_1footer_click=1;
                  dsh2_0card_2footer_click=0;
                  dsh2_0card_3footer_click=0;
              break;
            case 1:
                  dsh2_0card_0footer_click=0;
                  dsh2_0card_1footer_click=0;
                  dsh2_0card_2footer_click=0;
                  dsh2_0card_3footer_click=0;
                  dsh2_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });

    var dsh2_0card_2footer=document.getElementById("dsh2[0]card[2]footer");
        dsh2_0card_2footer.addEventListener('click', function () {
          switch(dsh2_0card_2footer_click) {
            case 0:
                  dsh2_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_2footer.style.backgroundColor="#FA8633";
                  dsh2_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_0footer_click=0;
                  dsh2_0card_1footer_click=0;
                  dsh2_0card_2footer_click=1;
                  dsh2_0card_3footer_click=0;
              break;
            case 1:
                  dsh2_0card_0footer_click=0;
                  dsh2_0card_1footer_click=0;
                  dsh2_0card_2footer_click=0;
                  dsh2_0card_3footer_click=0;
                  dsh2_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });

    var dsh2_0card_3footer=document.getElementById("dsh2[0]card[3]footer");
        dsh2_0card_3footer.addEventListener('click', function () {
          switch(dsh2_0card_3footer_click) {
            case 0:
                  dsh2_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_3footer.style.backgroundColor="#FA8633";
                  dsh2_0card_0footer_click=0;
                  dsh2_0card_1footer_click=0;
                  dsh2_0card_2footer_click=0;
                  dsh2_0card_3footer_click=1;
              break;
            case 1:
                  dsh2_0card_0footer_click=0;
                  dsh2_0card_1footer_click=0;
                  dsh2_0card_2footer_click=0;
                  dsh2_0card_3footer_click=0;
                  dsh2_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh2_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });
  }

  private initMouseOverOut(){
       /* dsh2_0 CONTAIN */
      var dsh2_0card_0content=document.getElementById("dsh2[0]card[0]content");
          dsh2_0card_0content.onmouseover= function () {
            dsh2_0card_0content.style.backgroundColor="#BBE5F2";
          }
          dsh2_0card_0content.onmouseout = function () {
            if (dsh2_0card_0content_click!==1){
              dsh2_0card_0content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh2_0card_1content=document.getElementById("dsh2[0]card[1]content");
          dsh2_0card_1content.onmouseover= function () {
            dsh2_0card_1content.style.backgroundColor="#BBE5F2";
          }
          dsh2_0card_1content.onmouseout = function () {
            if (dsh2_0card_1content_click!==1){
              dsh2_0card_1content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh2_0card_2content=document.getElementById("dsh2[0]card[2]content");
          dsh2_0card_2content.onmouseover= function () {
            dsh2_0card_2content.style.backgroundColor="#BBE5F2";
          }
          dsh2_0card_2content.onmouseout = function () {
            if (dsh2_0card_2content_click!==1){
              dsh2_0card_2content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh2_0card_3content=document.getElementById("dsh2[0]card[3]content");
          dsh2_0card_3content.onmouseover= function () {
            dsh2_0card_3content.style.backgroundColor="#BBE5F2";
          }
          dsh2_0card_3content.onmouseout = function () {
            if (dsh2_0card_3content_click!==1){
              dsh2_0card_3content.style.backgroundColor="#FFFFFF";
            }
          }

      /* dsh2_0 FOOTER */
      var dsh2_0card_0footer=document.getElementById("dsh2[0]card[0]footer");
          dsh2_0card_0footer.onmouseover= function () {
            dsh2_0card_0footer.style.backgroundColor="#FA8633";
          }
          dsh2_0card_0footer.onmouseout = function () {
            if (dsh2_0card_0footer_click!==1){
              dsh2_0card_0footer.style.backgroundColor="#E9E9E9";
            }

          }

      var dsh2_0card_1footer=document.getElementById("dsh2[0]card[1]footer");
          dsh2_0card_1footer.onmouseover= function () {
            dsh2_0card_1footer.style.backgroundColor="#FA8633";
          }
          dsh2_0card_1footer.onmouseout = function () {
            if (dsh2_0card_1footer_click!==1){
              dsh2_0card_1footer.style.backgroundColor="#E9E9E9";
            }
          }

      var dsh2_0card_2footer=document.getElementById("dsh2[0]card[2]footer");
          dsh2_0card_2footer.onmouseover= function () {
            dsh2_0card_2footer.style.backgroundColor="#FA8633";
          }
          dsh2_0card_2footer.onmouseout = function () {
            if (dsh2_0card_2footer_click!==1){
              dsh2_0card_2footer.style.backgroundColor="#E9E9E9";
            }
          }
      var dsh2_0card_3footer=document.getElementById("dsh2[0]card[3]footer");
          dsh2_0card_3footer.onmouseover= function () {
            dsh2_0card_3footer.style.backgroundColor="#FA8633";
          }
          dsh2_0card_3footer.onmouseout = function () {
            if (dsh2_0card_3footer_click!==1){
              dsh2_0card_3footer.style.backgroundColor="#E9E9E9";
            }
          }

    /** Guide ROW */
      // var dsh2_0=document.getElementById("dsh2[0]");
      // /** CARD */
      // var dsh2_0card_0=document.getElementById("dsh2[0]card[0]");
      // /** CARD CONTENT */
      // var dsh2_0card_content_bolean:boolean=true;
      // var dsh2_0card_0content=document.getElementById("dsh2[0]card[0]content");
      // var dsh2_0card_1content=document.getElementById("dsh2[0]card[1]content");
      // var dsh2_0card_2content=document.getElementById("dsh2[0]card[2]content");
      // var dsh2_0card_3content=document.getElementById("dsh2[0]card[3]content");
      // /** CONTENT HEADER */
      // var dsh2_0card_0content_0=document.getElementById("dsh2[0]card[0]content[0]");
      // /** CONTENT HEADER PROPERTIES */
      // var dsh2_0card_0content_0_properties_lbl=document.getElementById("dsh2[0]card[0]content[0]-properties-lbl");
      // /** CONTENT CONTENT*/
      // var dsh2_0card_0content_1=document.getElementById("dsh2[0]card[0]content[1]");
      // /** CONTENT CONTENT PROPERTIES */
      // var dsh2_0card_0content_1_properties_img=document.getElementById("dsh2[0]card[0]content[1]-properties-img");
      // var dsh2_0card_0content_1_properties_lbl=document.getElementById("dsh2[0]card[0]content[1]-properties-lbl");
      // /** CARD FOOTER */
      // var dsh2_0card_0footer=document.getElementById("dsh2[0]-card[0]footer");
      // /** CARD FOOTER PROPERTIES */
      // var dsh2_0card_0footer_properties_lbl_0=document.getElementById("dsh2[0]card[0]footer-properties-lbl[0]");
      // var dsh2_0card_0footer_properties_lbl_1=document.getElementById("dsh2[0]card[0]footer-properties-lbl[1]");
  }
}
