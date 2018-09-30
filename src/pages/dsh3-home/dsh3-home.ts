import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import * as HighCharts from "highcharts";
import { DatabaseProvider} from "../../providers/database/database";
import { DashboardAllProvider } from "../../providers/dashboard-all/dashboard-all";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';

declare var google;

/** VAR CLICK & MOUSEOVER STATUS */
var dsh3_0card_0content_click=0;
var dsh3_0card_1content_click=0;
var dsh3_0card_2content_click=0;
var dsh3_0card_3content_click=0;
var dsh3_0card_0footer_click=0;
var dsh3_0card_1footer_click=0;
var dsh3_0card_2footer_click=0;
var dsh3_0card_3footer_click=0;
/** IMG SOURCE */
var defaultUrlImg="assets/img/new/";
var dsh3_charting;
@IonicPage()
@Component({
  selector: 'page-dsh3-home',
  templateUrl: 'dsh3-home.html',
})
export class Dsh3HomePage {

  @ViewChild('map3') mapElement3: ElementRef;
  map3: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  mapOptions3:any;

  private dsh3_subscription1;
  private dsh3_subscription2;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: DatabaseProvider,
    private dashboarAll: DashboardAllProvider,
  ) {
    this.mapOptions3={
      zoom: 4,
      center: new google.maps.LatLng(-2.209764,117.114258),
      styles: this.database._defaultNewStyle
    };
  }


  ionViewDidLoad() {
    this.initMouseOverOut();
    this.initClickEvent();
    document.getElementById("dsh3[1]").hidden=true;
    document.getElementById("dsh3[2]").hidden=true;
    document.getElementById("dsh3[3]").hidden=true;
    document.getElementById("dsh3[4]").hidden=true;
    document.getElementById("dsh3[5]").hidden=true;
    document.getElementById("dsh3[6]").hidden=true;
    document.getElementById("dsh3_headcard[0]footer-properties-lbl[0]").hidden=true;
    document.getElementById("dsh3_headcard[0]footer-properties-lbl[1]").hidden=true;
    document.getElementById("dsh3_headcard[1]content[1]-properties-img").hidden=true;;
    document.getElementById("dsh3_headcard[1]content[1]-properties-lbl").innerHTML="SELECTED";
    this.initMap();
    this.dsh3_InitChart();
    this.dsh3_UpdateDataChart();

    console.log('ionViewDidLoad dsh3HomePage');
    // if (chkInit==true){
      // this.drilldown();
      //chkInit=false;
    // }
    this.tampilkanNilai();
    this.dsh3_getData();
  }

  ionViewDidEnter(){
    // this.menu.swipeEnable(false);
    this.dsh3_subscription2 = Observable.timer(6000, 6000).subscribe(x => {
      console.log('run-Disply');
       this.dsh3_getData();
       this.dsh3_UpdateDataChart();
    });
  }

  ionViewWillUnload() {
    console.log("Previus page");
    // this.dsh3_subscription1.unsubscribe();
    this.dsh3_subscription2.unsubscribe();
  }

  ngOnInit() {
    this.dsh3_subscription1 = Observable.timer(10000,10000).subscribe(x => {
      console.log('run-Disply');
      this.dashboarAll.getCorePrj();
      // this.dashboarAll.getSetting();
    });
  }

  private dsh3_UpdateDataChart(){
    var dsh3_rsltAryChart=[];
    var dsh3_aryCtg=[];
    var dsh3_aryTarget_RFI=[];
    var dsh3_aryActual_RFI=[];
    var dsh3_aryTarget=[];
    var dsh3_aryActual=[];
    var dsh3_querySql ="SELECT DISTINCT ID_CHART,BULAN,TAHUN,NM_CHART,TITLE,KTG,TARGET_RFI,ACTUAL_RFI,TARGET,ACTUAL FROM TBL_CHART "// WHERE GRP='test' "
                  +" WHERE ID_CHART='mp001' AND BULAN='09' AND TAHUN='2018'";
                  // ?+" ORDER BY SEQ,GRP DESC,URUTAN ASC";
    this.database.selectData(dsh3_querySql).then(data=>{
          dsh3_rsltAryChart=[];
          dsh3_aryTarget_RFI=[];
          dsh3_aryActual_RFI=[];
          dsh3_aryTarget=[];
          dsh3_aryActual=[];
          dsh3_rsltAryChart.push(data);
        if(dsh3_rsltAryChart !== undefined || dsh3_rsltAryChart.length > 0){
          dsh3_aryCtg =dsh3_rsltAryChart[0][0]['KTG'].split(","); //Split value string string
          dsh3_aryTarget_RFI =dsh3_rsltAryChart[0][0]['TARGET_RFI'].split(",").map(Number); //Split default value Number
          dsh3_aryActual_RFI =dsh3_rsltAryChart[0][0]['ACTUAL_RFI'].split(",").map(Number);
          dsh3_aryTarget =dsh3_rsltAryChart[0][0]['TARGET'].split(",").map(Number);
          dsh3_aryActual =dsh3_rsltAryChart[0][0]['ACTUAL'].split(",").map(Number);
          // console.log(aryTarget_RFI);
            // setTimeout(() => {
              dsh3_charting.update({
                xAxis: {
                  categories:dsh3_aryCtg,
                  labels: {
                       overflow: 'justify'
                  }
                },
                series: [{
                  name: 'Target RFI',
                  data: dsh3_aryTarget_RFI,
                  color:'#2c303e',
                },{
                  name: 'Actual RFI',
                  data: dsh3_aryActual_RFI,
                  color:'#a50500',
                },{
                  name: 'Target',
                  data: dsh3_aryTarget,
                  color:'#2F69C5',
                },{
                  name: 'Actual',
                  data: dsh3_aryActual,
                  color:'#FF9735',
                }
              ]
              });
            // }, 200);
        }
    });
  }

  private dsh3_InitChart(){
      const dsh3_tgl = new Date();
      const dsh3_monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
      dsh3_charting=HighCharts.chart({
          chart: {
            renderTo:'dsh3-b2cChart',
            zoomType: 'x',
            panning: true,
            panKey: 'shift',
            type:'areaspline'
          },
          title: {
              text: "Project Summary of " + dsh3_tgl.getDay() +" " + dsh3_monthNames[dsh3_tgl.getMonth()] + ' ' + dsh3_tgl.getFullYear(),
              style: {
                fontSize: '15px'
              }
          },
          credits: {
            enabled: false
          },
          xAxis: {
              categories:[null,null,null,null,null,null,null,null,null,null,null],
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
                data: [null,null,null,null,null,null,null,null,null,null,null,22,56,123,206,209,259,303,331,339,343,343,350,353,354,356,357,359,362,362,362,363,367,372,399,403,408,456],
                // data: aryActual_RFI,
                color:'#a50500',
                //fillOpacity: 0.5
          }, {
                type: 'column',
                name: 'Target',
                data: [0,0,0,0,0,0,0,0,0,0,0,16,45,241,80,12,17,10,452,12,1,14,295,38,18,150,21,25,2,10,2,0,26,0,2,41,30,4,13,9,20,4,0,3,0,0,2,35,0,4,58,4,0,5,0],
                // data: aryTarget,
                color:'#2F69C5'
          }, {
                type: 'column',
                name: 'Actual',
                data: [0,0,0,0,0,0,0,0,0,0,0,22,34,67,83,3,50,44,28,8,4,0,7,3,1,2,1,2,3,0,0,1,4,5,27,4,5,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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


  private dsh3_getData(){
    var ary_Header=[];
    var rsltAry=[];
    var grpCore=[];
    var areaNOT_RELEASE=[];
    var areaPOP=[];
    var areaRFI=[];
    var  areaARFI=[];
    var querySql ="SELECT URUTAN,SEQ,GRP,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4,SurveySITAC,CME,RFI,BAUT,ARFI_NILAI2 FROM CORE_PRJ "// WHERE GRP='test' "
                 +" ORDER BY SEQ,GRP DESC,URUTAN ASC";
      this.database.selectData(querySql).then(data=>{
        rsltAry=[];
        rsltAry.push(data);
        //  if (rsltAry[0].length!==0){
        if (rsltAry !== undefined || rsltAry.length!==0){
              // console.log("data ada");
              // console.log(rsltAry);
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
              grpCore=[];
              grpCore.push(rsltAry[0].filter(function(b2cAreaObj){
                  return b2cAreaObj.SEQ=="CORE";
                })
              );
              /** NOT RELEASE - UBIS -> PER AREA */
              areaNOT_RELEASE=[];
              areaNOT_RELEASE.push(grpCore[0].filter(function(notReleaseObj){
                  return notReleaseObj.GRP=="NOT_RELEASE";
                })
              );
              /** PROJECT ON PIPE - UBIS -> PER AREA */
              areaPOP=[];
              areaPOP.push(grpCore[0].filter(function(pipeObj){
                  return pipeObj.GRP=="POP";
                })
              );
               /** RFI - UBIS -> PER AREA */
              areaRFI=[];
              areaRFI.push(grpCore[0].filter(function(rfiObj){
                  return rfiObj.GRP=="RFI";
                })
              );
               /** AFTER RFI - UBIS -> PER AREA */
              areaARFI=[];
              areaARFI.push(grpCore[0].filter(function(arfiObj){
                  return arfiObj.GRP=="ARFI";
                })
              );

              //-> toDisply
              ary_Header[0].forEach(el=>{
                  console.log(el.GRP);
                  // console.log(el);
                  if (el.GRP=='ALL_PRJ') {
                    document.getElementById("dsh3_headcard[0]content[1]-properties-lbl").innerHTML=(el.NILAI).toString();
                    // document.getElementById("dsh3_headcard[0]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='NOT_RELEASE') {
                    document.getElementById("dsh3[0]card[0]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh3[0]card[0]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='PRJ_ON_PIPE'){
                    document.getElementById("dsh3[0]card[1]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh3[0]card[1]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='RFI') {
                    document.getElementById("dsh3[0]card[2]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh3[0]card[2]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='ARFI') {
                    document.getElementById("dsh3[0]card[3]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh3[0]card[3]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
              });
              areaNOT_RELEASE[0].forEach(el1=>{
                  console.log(el1);
                  document.getElementById("dsh3[1]card["+el1.URUTAN +"]content[1]-properties-lbl").innerHTML=(el1.NILAI).toString();
              });
              areaPOP[0].forEach(el2=>{
                console.log(el2);
                document.getElementById("dsh3[5]card["+el2.URUTAN +"]content[1]-properties-lbl").innerHTML=(el2.NILAI).toString();
                document.getElementById("dsh3[6]card["+el2.URUTAN +"]properties-lbl[0]").innerHTML=(el2.SurveySITAC).toString();
                document.getElementById("dsh3[6]card["+el2.URUTAN +"]properties-lbl[1]").innerHTML=(el2.CME).toString();
                document.getElementById("dsh3[6]card["+el2.URUTAN +"]properties-lbl[2]").innerHTML=(el2.RFI).toString();
                document.getElementById("dsh3[6]card["+el2.URUTAN +"]properties-lbl[3]").innerHTML=(el2.BAUT).toString();
              });
              areaRFI[0].forEach(el3=>{
                console.log(el3);
                document.getElementById("dsh3[2]card["+el3.URUTAN +"]content[1]-properties-lbl").innerHTML=(el3.NILAI).toString();
              });
              areaARFI[0].forEach(el4=>{
                console.log(el4);
                document.getElementById("dsh3[3]card["+el4.URUTAN +"]content[1]-properties-lbl").innerHTML=(el4.NILAI).toString();
                document.getElementById("dsh3[4]card["+el4.URUTAN +"]content[1]-properties-lbl").innerHTML=(el4.ARFI_NILAI2).toString();
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
    // document.getElementById("dsh3_headcard[0]content[1]-properties-lbl").innerHTML=(44+10).toString();

    //   /** PER-AREA*/
    // for (var i=0; i<=3; i++){
    //   //second=NoRelease|Pop|RFI|AfterRFI| Value %
    //   document.getElementById("dsh3[0]card["+i+"]content[1]-properties-lbl").innerHTML=(i+100).toString() + "%";
    //   //NoRelease AREA[1,2,3,4]
    //   document.getElementById("dsh3[1]card["+i+"]content[1]-properties-lbl").innerHTML=(i+10).toString();
    //   //RFI AREA[1,2,3,4]
    //   document.getElementById("dsh3[2]card["+i+"]content[1]-properties-lbl").innerHTML=(i+5).toString();
    //   //AfterRFI AREA[1,2,3,4]
    //   document.getElementById("dsh3[3]card["+i+"]content[1]-properties-lbl").innerHTML=(i+12).toString();
    //   document.getElementById("dsh3[4]card["+i+"]content[1]-properties-lbl").innerHTML=(i+13).toString();
    //   //PoP AREA[1,2,3,4]
    //   document.getElementById("dsh3[5]card["+i+"]content[1]-properties-lbl").innerHTML=(i+20).toString();
    // }

    // /** Total */
    // for(var x=0; x<=3; x ++){
    //   document.getElementById("dsh3[0]card["+x+"]footer-properties-lbl[1]").innerHTML=(x+293).toString();
    // }
    // /** POP VALUE DETAIL */
    // for (var i1=0; i1<=3; i1++){
    //   document.getElementById("dsh3[6]card[0]properties-lbl["+i1+"]").innerHTML=(i1+1).toString();
    //   document.getElementById("dsh3[6]card[1]properties-lbl["+i1+"]").innerHTML=(i1+2).toString();
    //   document.getElementById("dsh3[6]card[2]properties-lbl["+i1+"]").innerHTML=(i1+3).toString();
    //   document.getElementById("dsh3[6]card[3]properties-lbl["+i1+"]").innerHTML=(i1+4).toString();
    // }
  }

  initMap() {
    // this.map = new google.maps.Map(this.mapElement.nativeElement, {
    this.map3 = new google.maps.Map(document.getElementById("map3"),this.mapOptions3);
    this.directionsDisplay.setMap(this.map3);
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }


  private initClickEvent(){
    /** dsh3_0 CONTAIN */
    var hdrImgDes1=<HTMLImageElement>document.getElementById("dsh3_headcard[1]content[1]-properties-img");
    var hdrImgDes2=<HTMLImageElement>document.getElementById("dsh3_headcard[1]content[1]-properties-lbl");
    /** NO RELEASE */
    //-FOOTER - LABEL LEFT
    var hdrImgDes3=<HTMLImageElement>document.getElementById("dsh3_headcard[1]footer-properties-lbl[0]");

    var dsh3_0card_0content=<HTMLImageElement>document.getElementById("dsh3[0]card[0]content");
        dsh3_0card_0content.addEventListener('click', function () {
          switch(dsh3_0card_0content_click) {
            case 0:
                  hdrImgDes2.innerHTML="No Release";
                  hdrImgDes3.innerHTML="C&R-PerArea";
                  dsh3_0card_0content.style.backgroundColor="#83D7F1";
                  dsh3_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_3content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_0content_click=1;
                  dsh3_0card_1content_click=0;
                  dsh3_0card_2content_click=0;
                  dsh3_0card_3content_click=0;
                  document.getElementById("dsh3[1]").hidden=false;
                  document.getElementById("dsh3[2]").hidden=true;
                  document.getElementById("dsh3[3]").hidden=true;
                  document.getElementById("dsh3[4]").hidden=true;
                  document.getElementById("dsh3[5]").hidden=true;
                  document.getElementById("dsh3[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh3[0]card[0]content[1]-properties-img");
                      var srcScoundImgName0=hdrImgSrc.src;
                      var aryScoundImgName0 = srcScoundImgName0.split("/");
                      var ScoundImgName0=aryScoundImgName0.reverse()[0];
                      hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                      hdrImgDes1.hidden=false;
              break;
            case 1:
                  dsh3_0card_0content_click=0;
                  dsh3_0card_1content_click=0;
                  dsh3_0card_2content_click=0;
                  dsh3_0card_3content_click=0;
                  dsh3_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh3[1]").hidden=true;
                  document.getElementById("dsh3[2]").hidden=true;
                  document.getElementById("dsh3[3]").hidden=true;
                  document.getElementById("dsh3[4]").hidden=true;
                  document.getElementById("dsh3[5]").hidden=true;
                  document.getElementById("dsh3[6]").hidden=true;
          break;
        default:
      };
    });
    /** POP */
    var dsh3_0card_1content=<HTMLImageElement>document.getElementById("dsh3[0]card[1]content");
        dsh3_0card_1content.addEventListener('click', function () {
          switch(dsh3_0card_1content_click) {
              case 0:
                    hdrImgDes2.innerHTML="Project On Pipe";
                    hdrImgDes3.innerHTML="C&R-PerArea";
                    dsh3_0card_0content.style.backgroundColor="#FFFFFF";
                    dsh3_0card_1content.style.backgroundColor="#83D7F1";
                    dsh3_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh3_0card_3content.style.backgroundColor="#FFFFFF";
                    dsh3_0card_0content_click=0;
                    dsh3_0card_1content_click=1;
                    dsh3_0card_2content_click=0;
                    dsh3_0card_3content_click=0;
                    document.getElementById("dsh3[1]").hidden=true;
                    document.getElementById("dsh3[2]").hidden=true;
                    document.getElementById("dsh3[3]").hidden=true;
                    document.getElementById("dsh3[4]").hidden=true;
                    document.getElementById("dsh3[5]").hidden=false;
                    document.getElementById("dsh3[6]").hidden=false;
                    /** HEADER */
                    var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh3[0]card[1]content[1]-properties-img");
                        var srcScoundImgName0=hdrImgSrc.src;
                        var aryScoundImgName0 = srcScoundImgName0.split("/");
                        var ScoundImgName0=aryScoundImgName0.reverse()[0];
                        hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                        hdrImgDes1.hidden=false;
                break;
              case 1:
                    dsh3_0card_0content_click=0;
                    dsh3_0card_1content_click=0;
                    dsh3_0card_2content_click=0;
                    dsh3_0card_3content_click=0;
                    dsh3_0card_0content.style.backgroundColor="#FFFFFF";
                    dsh3_0card_1content.style.backgroundColor="#FFFFFF";
                    dsh3_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh3_0card_3content.style.backgroundColor="#FFFFFF";
                    document.getElementById("dsh3[1]").hidden=true;
                    document.getElementById("dsh3[2]").hidden=true;
                    document.getElementById("dsh3[3]").hidden=true;
                    document.getElementById("dsh3[4]").hidden=true;
                    document.getElementById("dsh3[5]").hidden=true;
                    document.getElementById("dsh3[6]").hidden=true;
                break;
              default:
      };
    });
    /** RFI */
    var dsh3_0card_2content=<HTMLImageElement>document.getElementById("dsh3[0]card[2]content");
        dsh3_0card_2content.addEventListener('click', function () {
          switch(dsh3_0card_2content_click) {
            case 0:
                  hdrImgDes2.innerHTML="RFI";
                  hdrImgDes3.innerHTML="C&R-PerArea";
                  dsh3_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_2content.style.backgroundColor="#83D7F1";
                  dsh3_0card_3content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_0content_click=0;
                  dsh3_0card_1content_click=0;
                  dsh3_0card_2content_click=1;
                  dsh3_0card_3content_click=0;
                  document.getElementById("dsh3[1]").hidden=true;
                  document.getElementById("dsh3[2]").hidden=false;
                  document.getElementById("dsh3[3]").hidden=true;
                  document.getElementById("dsh3[4]").hidden=true;
                  document.getElementById("dsh3[5]").hidden=true;
                  document.getElementById("dsh3[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh3[0]card[2]content[1]-properties-img");
                      var srcScoundImgName0=hdrImgSrc.src;
                      var aryScoundImgName0 = srcScoundImgName0.split("/");
                      var ScoundImgName0=aryScoundImgName0.reverse()[0];
                      hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                      hdrImgDes1.hidden=false;
              break;
            case 1:
                  dsh3_0card_0content_click=0;
                  dsh3_0card_1content_click=0;
                  dsh3_0card_2content_click=0;
                  dsh3_0card_3content_click=0;
                  dsh3_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh3[1]").hidden=true;
                  document.getElementById("dsh3[2]").hidden=true;
                  document.getElementById("dsh3[3]").hidden=true;
                  document.getElementById("dsh3[4]").hidden=true;
                  document.getElementById("dsh3[5]").hidden=true;
                  document.getElementById("dsh3[6]").hidden=true;
              break;
            default:
      };
    });
    /** AFTER RFI */
    var dsh3_0card_3content=<HTMLImageElement>document.getElementById("dsh3[0]card[3]content");
        dsh3_0card_3content.addEventListener('click', function () {
          switch(dsh3_0card_3content_click) {
            case 0:
                  hdrImgDes2.innerHTML="After RFI";
                  hdrImgDes3.innerHTML="C&R-PerArea";
                  dsh3_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_3content.style.backgroundColor="#83D7F1";
                  dsh3_0card_0content_click=0;
                  dsh3_0card_1content_click=0;
                  dsh3_0card_2content_click=0;
                  dsh3_0card_3content_click=1;
                  document.getElementById("dsh3[1]").hidden=true;
                  document.getElementById("dsh3[2]").hidden=true;
                  document.getElementById("dsh3[3]").hidden=false;
                  document.getElementById("dsh3[4]").hidden=false;
                  document.getElementById("dsh3[5]").hidden=true;
                  document.getElementById("dsh3[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh3[0]card[3]content[1]-properties-img");
                      var srcScoundImgName0=hdrImgSrc.src;
                      var aryScoundImgName0 = srcScoundImgName0.split("/");
                      var ScoundImgName0=aryScoundImgName0.reverse()[0];
                      hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                      hdrImgDes1.hidden=false;
              break;
            case 1:
                  dsh3_0card_0content_click=0;
                  dsh3_0card_1content_click=0;
                  dsh3_0card_2content_click=0;
                  dsh3_0card_3content_click=0;
                  dsh3_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh3_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh3[1]").hidden=true;
                  document.getElementById("dsh3[2]").hidden=true;
                  document.getElementById("dsh3[3]").hidden=true;
                  document.getElementById("dsh3[4]").hidden=true;
                  document.getElementById("dsh3[5]").hidden=true;
                  document.getElementById("dsh3[6]").hidden=true;
              break;
            default:
      };
    });

    /** dsh3_0 FOOTER */
    var dsh3_0card_0footer=document.getElementById("dsh3[0]card[0]footer");
        dsh3_0card_0footer.addEventListener('click', function () {
          switch(dsh3_0card_0footer_click) {
            case 0:
                  dsh3_0card_0footer_click=1;
                  dsh3_0card_0footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh3_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_1footer_click=0;
                  dsh3_0card_2footer_click=0;
                  dsh3_0card_3footer_click=0;
              break;
            case 1:
                  dsh3_0card_0footer_click=0;
                  dsh3_0card_1footer_click=0;
                  dsh3_0card_2footer_click=0;
                  dsh3_0card_3footer_click=0;
                  dsh3_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_3footer.style.backgroundColor="#E9E9E9";
                  document.getElementById("dsh3[1]").hidden=true;
                  document.getElementById("dsh3[2]").hidden=true;
                  document.getElementById("dsh3[3]").hidden=true;
                  document.getElementById("dsh3[4]").hidden=true;
                  document.getElementById("dsh3[5]").hidden=true;
                  document.getElementById("dsh3[6]").hidden=true;
              break;
            default:
          };
        });

    var dsh3_0card_1footer=document.getElementById("dsh3[0]card[1]footer");
        dsh3_0card_1footer.addEventListener('click', function () {
          switch(dsh3_0card_1footer_click) {
            case 0:
                  dsh3_0card_1footer_click=1;
                  dsh3_0card_1footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh3_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_0footer_click=0;
                  dsh3_0card_2footer_click=0;
                  dsh3_0card_3footer_click=0;
              break;
            case 1:
                  dsh3_0card_0footer_click=0;
                  dsh3_0card_1footer_click=0;
                  dsh3_0card_2footer_click=0;
                  dsh3_0card_3footer_click=0;
                  dsh3_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });

    var dsh3_0card_2footer=document.getElementById("dsh3[0]card[2]footer");
        dsh3_0card_2footer.addEventListener('click', function () {
          switch(dsh3_0card_2footer_click) {
            case 0:
                  dsh3_0card_2footer_click=1;
                  dsh3_0card_2footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh3_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_0footer_click=0;
                  dsh3_0card_1footer_click=0;
                  dsh3_0card_3footer_click=0;
              break;
            case 1:
                  dsh3_0card_0footer_click=0;
                  dsh3_0card_1footer_click=0;
                  dsh3_0card_2footer_click=0;
                  dsh3_0card_3footer_click=0;
                  dsh3_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });

    var dsh3_0card_3footer=document.getElementById("dsh3[0]card[3]footer");
        dsh3_0card_3footer.addEventListener('click', function () {
          switch(dsh3_0card_3footer_click) {
            case 0:
                  dsh3_0card_3footer_click=1;
                  dsh3_0card_3footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh3_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_0footer_click=0;
                  dsh3_0card_1footer_click=0;
                  dsh3_0card_2footer_click=0;
              break;
            case 1:
                  dsh3_0card_0footer_click=0;
                  dsh3_0card_1footer_click=0;
                  dsh3_0card_2footer_click=0;
                  dsh3_0card_3footer_click=0;
                  dsh3_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh3_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });
  }

  private initMouseOverOut(){
       /* dsh3_0 CONTAIN */
      var dsh3_0card_0content=document.getElementById("dsh3[0]card[0]content");
          dsh3_0card_0content.onmouseover= function () {
            dsh3_0card_0content.style.backgroundColor="#BBE5F2";
          }
          dsh3_0card_0content.onmouseout = function () {
            if (dsh3_0card_0content_click!==1){
              dsh3_0card_0content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh3_0card_1content=document.getElementById("dsh3[0]card[1]content");
          dsh3_0card_1content.onmouseover= function () {
            dsh3_0card_1content.style.backgroundColor="#BBE5F2";
          }
          dsh3_0card_1content.onmouseout = function () {
            if (dsh3_0card_1content_click!==1){
              dsh3_0card_1content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh3_0card_2content=document.getElementById("dsh3[0]card[2]content");
          dsh3_0card_2content.onmouseover= function () {
            dsh3_0card_2content.style.backgroundColor="#BBE5F2";
          }
          dsh3_0card_2content.onmouseout = function () {
            if (dsh3_0card_2content_click!==1){
              dsh3_0card_2content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh3_0card_3content=document.getElementById("dsh3[0]card[3]content");
          dsh3_0card_3content.onmouseover= function () {
            dsh3_0card_3content.style.backgroundColor="#BBE5F2";
          }
          dsh3_0card_3content.onmouseout = function () {
            if (dsh3_0card_3content_click!==1){
              dsh3_0card_3content.style.backgroundColor="#FFFFFF";
            }
          }

      /* dsh3_0 FOOTER */
      var dsh3_0card_0footer=document.getElementById("dsh3[0]card[0]footer");
          dsh3_0card_0footer.onmouseover= function () {
            dsh3_0card_0footer.style.backgroundColor="#FA8633";
          }
          dsh3_0card_0footer.onmouseout = function () {
            if (dsh3_0card_0footer_click!==1){
              dsh3_0card_0footer.style.backgroundColor="#E9E9E9";
            }

          }

      var dsh3_0card_1footer=document.getElementById("dsh3[0]card[1]footer");
          dsh3_0card_1footer.onmouseover= function () {
            dsh3_0card_1footer.style.backgroundColor="#FA8633";
          }
          dsh3_0card_1footer.onmouseout = function () {
            if (dsh3_0card_1footer_click!==1){
              dsh3_0card_1footer.style.backgroundColor="#E9E9E9";
            }
          }

      var dsh3_0card_2footer=document.getElementById("dsh3[0]card[2]footer");
          dsh3_0card_2footer.onmouseover= function () {
            dsh3_0card_2footer.style.backgroundColor="#FA8633";
          }
          dsh3_0card_2footer.onmouseout = function () {
            if (dsh3_0card_2footer_click!==1){
              dsh3_0card_2footer.style.backgroundColor="#E9E9E9";
            }
          }
      var dsh3_0card_3footer=document.getElementById("dsh3[0]card[3]footer");
          dsh3_0card_3footer.onmouseover= function () {
            dsh3_0card_3footer.style.backgroundColor="#FA8633";
          }
          dsh3_0card_3footer.onmouseout = function () {
            if (dsh3_0card_3footer_click!==1){
              dsh3_0card_3footer.style.backgroundColor="#E9E9E9";
            }
          }
  }
}
