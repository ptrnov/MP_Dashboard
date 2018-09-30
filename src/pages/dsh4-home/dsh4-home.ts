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
var dsh4_charting;
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
  private dsh4_subscription1;
  private dsh4_subscription2;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: DatabaseProvider,
    private dashboarAll: DashboardAllProvider,
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
    document.getElementById("dsh4_headcard[0]footer-properties-lbl[0]").hidden=true;
    document.getElementById("dsh4_headcard[0]footer-properties-lbl[1]").hidden=true;
    document.getElementById("dsh4_headcard[1]content[1]-properties-img").hidden=true;;
    document.getElementById("dsh4_headcard[1]content[1]-properties-lbl").innerHTML="SELECTED";
    this.initMap();
    this.dsh4_InitChart();
    this.dsh4_UpdateDataChart();
    console.log('ionViewDidLoad Dsh2HomePage');
    // if (chkInit==true){
      // this.drilldown();
      //chkInit=false;
    // }
    // this.tampilkanNilai();
  }

  ionViewDidEnter(){
    // this.menu.swipeEnable(false);
    this.dsh4_subscription2 = Observable.timer(3000, 3000).subscribe(x => {
      console.log('run-Disply');
       this.dsh4_GetData();
       this.dsh4_UpdateDataChart();
    });
  }

  ionViewWillUnload() {
    console.log("Previus page");
    this.dsh4_subscription1.unsubscribe();
    this.dsh4_subscription2.unsubscribe();
  }

  /** API LOAD */
  ngOnInit() {
    this.dsh4_subscription1 = Observable.timer(10000,10000).subscribe(x => {
      console.log('run-Disply');
      this.dashboarAll.getMcpPrj();
      // this.dashboarAll.getSetting();
    });
  }

  private dsh4_GetData(){
    var ary_Header=[];
    var rsltAry=[];
    var grpMCP=[];
    var area_NOT_RELEASE=[];
    var area_POP=[];
    var area_FRI=[];
    var  area_AFRI=[];
    var querySql ="SELECT URUTAN,SEQ,GRP,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4,SIS,SITAC1,SITAC2,CME,RFC,FO,RFI,ARFI_NILAI2 FROM MCP_PRJ "// WHERE GRP='test' "
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
              grpMCP=[];
              grpMCP.push(rsltAry[0].filter(function(b2cAreaObj){
                  return b2cAreaObj.SEQ=="MCP";
                })
              );
              /** NOT RELEASE - UBIS -> PER AREA */
              area_NOT_RELEASE=[];
              area_NOT_RELEASE.push(grpMCP[0].filter(function(notReleaseObj){
                  return notReleaseObj.GRP=="NOT_RELEASE";
                })
              );
              /** PROJECT ON PIPE - UBIS -> PER AREA */
              area_POP=[];
              area_POP.push(grpMCP[0].filter(function(pipeObj){
                  return pipeObj.GRP=="PRJ_ON_PIPE";
                })
              );
               /** RFI - UBIS -> PER AREA */
              area_FRI=[];
              area_FRI.push(grpMCP[0].filter(function(rfiObj){
                  return rfiObj.GRP=="RFI";
                })
              );
               /** AFTER RFI - UBIS -> PER AREA */
              area_AFRI=[];
              area_AFRI.push(grpMCP[0].filter(function(arfiObj){
                  return arfiObj.GRP=="ARFI";
                })
              );

              //-> toDisply
              ary_Header[0].forEach(el=>{
                  console.log(el.GRP);
                  // console.log(el);
                  if (el.GRP=='ALL_PRJ') {
                    document.getElementById("dsh4_headcard[0]content[1]-properties-lbl").innerHTML=(el.NILAI).toString();
                    // document.getElementById("dsh4_headcard[0]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='NOT_RELEASE') {
                    document.getElementById("dsh4[0]card[0]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh4[0]card[0]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='PRJ_ON_PIPE'){
                    document.getElementById("dsh4[0]card[1]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh4[0]card[1]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='RFI') {
                    document.getElementById("dsh4[0]card[2]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh4[0]card[2]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='ARFI') {
                    document.getElementById("dsh4[0]card[3]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh4[0]card[3]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
              });
              area_NOT_RELEASE[0].forEach(el1=>{
                  console.log(el1);
                  document.getElementById("dsh4[1]card["+el1.URUTAN +"]content[1]-properties-lbl").innerHTML=(el1.NILAI).toString();
              });
              area_POP[0].forEach(el2=>{
                console.log(el2);
                document.getElementById("dsh4[5]card["+el2.URUTAN +"]content[1]-properties-lbl").innerHTML=(el2.NILAI).toString();
              });
              area_FRI[0].forEach(el3=>{
                console.log(el3);
                document.getElementById("dsh4[2]card["+el3.URUTAN +"]content[1]-properties-lbl").innerHTML=(el3.NILAI).toString();
              });
              area_AFRI[0].forEach(el4=>{
                console.log(el4);
                document.getElementById("dsh4[3]card["+el4.URUTAN +"]content[1]-properties-lbl").innerHTML=(el4.NILAI).toString();
                document.getElementById("dsh4[4]card["+el4.URUTAN +"]content[1]-properties-lbl").innerHTML=(el4.ARFI_NILAI2).toString();
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
    document.getElementById("dsh4_headcard[0]content[1]-properties-lbl").innerHTML=(99+17).toString();

      /** PER-AREA*/
    for (var i=0; i<=3; i++){
      //second=NoRelease|Pop|RFI|AfterRFI| Value %
      document.getElementById("dsh4[0]card["+i+"]content[1]-properties-lbl").innerHTML=(i+100).toString() + "%";
      //NoRelease AREA[1,2,3,4]
      document.getElementById("dsh4[1]card["+i+"]content[1]-properties-lbl").innerHTML=(i+10).toString();
      //RFI AREA[1,2,3,4]
      document.getElementById("dsh4[2]card["+i+"]content[1]-properties-lbl").innerHTML=(i+5).toString();
      //AfterRFI AREA[1,2,3,4]
      document.getElementById("dsh4[3]card["+i+"]content[1]-properties-lbl").innerHTML=(i+12).toString();
      document.getElementById("dsh4[4]card["+i+"]content[1]-properties-lbl").innerHTML=(i+13).toString();
      //PoP AREA[1,2,3,4]
      document.getElementById("dsh4[5]card["+i+"]content[1]-properties-lbl").innerHTML=(i+20).toString();
    }

    /** Total */
    for(var x=0; x<=3; x ++){
      document.getElementById("dsh4[0]card["+x+"]footer-properties-lbl[1]").innerHTML=(x+293).toString();
    }
    /** POP VALUE DETAIL */
    for (var i1=0; i1<=6; i1++){
      document.getElementById("dsh4[6]card[0]properties-lbl["+i1+"]").innerHTML=(i1+1).toString();
      document.getElementById("dsh4[6]card[1]properties-lbl["+i1+"]").innerHTML=(i1+2).toString();
      document.getElementById("dsh4[6]card[2]properties-lbl["+i1+"]").innerHTML=(i1+3).toString();
      document.getElementById("dsh4[6]card[3]properties-lbl["+i1+"]").innerHTML=(i1+4).toString();
    }
  }

  initMap() {


    // this.map = new google.maps.Map(this.mapElement.nativeElement, {
    this.map4 = new google.maps.Map(document.getElementById("map4"),this.mapOptions4);

    // this.directionsDisplay.setMap(this.map);
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }

  private dsh4_UpdateDataChart(){
    var dsh4_rsltAryChart=[];
    var dsh4_aryCtg=[];
    var dsh4_aryTarget_RFI=[];
    var dsh4_aryActual_RFI=[];
    var dsh4_aryTarget=[];
    var dsh4_aryActual=[];
    var dsh4_querySql ="SELECT DISTINCT ID_CHART,BULAN,TAHUN,NM_CHART,TITLE,KTG,TARGET_RFI,ACTUAL_RFI,TARGET,ACTUAL FROM TBL_CHART "// WHERE GRP='test' "
                  +" WHERE ID_CHART='mp001' AND BULAN='09' AND TAHUN='2018'";
                  // ?+" ORDER BY SEQ,GRP DESC,URUTAN ASC";
    this.database.selectData(dsh4_querySql).then(data=>{
          dsh4_rsltAryChart=[];
          dsh4_aryTarget_RFI=[];
          dsh4_aryActual_RFI=[];
          dsh4_aryTarget=[];
          dsh4_aryActual=[];
          dsh4_rsltAryChart.push(data);
        if(dsh4_rsltAryChart !== undefined || dsh4_rsltAryChart.length > 0){
          dsh4_aryCtg =dsh4_rsltAryChart[0][0]['KTG'].split(","); //Split value string string
          dsh4_aryTarget_RFI =dsh4_rsltAryChart[0][0]['TARGET_RFI'].split(",").map(Number); //Split default value Number
          dsh4_aryActual_RFI =dsh4_rsltAryChart[0][0]['ACTUAL_RFI'].split(",").map(Number);
          dsh4_aryTarget =dsh4_rsltAryChart[0][0]['TARGET'].split(",").map(Number);
          dsh4_aryActual =dsh4_rsltAryChart[0][0]['ACTUAL'].split(",").map(Number);
          // console.log(aryTarget_RFI);
            // setTimeout(() => {
              dsh4_charting.update({
                xAxis: {
                  categories:dsh4_aryCtg,
                  labels: {
                       overflow: 'justify'
                  }
                },
                series: [{
                  name: 'Target RFI',
                  data: dsh4_aryTarget_RFI,
                  color:'#2c303e',
                },{
                  name: 'Actual RFI',
                  data: dsh4_aryActual_RFI,
                  color:'#a50500',
                },{
                  name: 'Target',
                  data: dsh4_aryTarget,
                  color:'#2F69C5',
                },{
                  name: 'Actual',
                  data: dsh4_aryActual,
                  color:'#FF9735',
                }
              ]
              });
            // }, 200);
        }
    });
  }

  private dsh4_InitChart(){
      const dsh4_tgl = new Date();
      const dsh4_monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
      dsh4_charting=HighCharts.chart({
          chart: {
            renderTo:'dsh4-b2cChart',
            zoomType: 'x',
            panning: true,
            panKey: 'shift',
            type:'areaspline'
          },
          title: {
              text: "Project Summary of " + dsh4_tgl.getDay() +" " + dsh4_monthNames[dsh4_tgl.getMonth()] + ' ' + dsh4_tgl.getFullYear(),
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

  private initClickEvent(){
    /** dsh4_0 CONTAIN */
    var hdrImgDes1=<HTMLImageElement>document.getElementById("dsh4_headcard[1]content[1]-properties-img");
    var hdrImgDes2=<HTMLImageElement>document.getElementById("dsh4_headcard[1]content[1]-properties-lbl");
    //-FOOTER - LABEL LEFT
    var hdrImgDes3=<HTMLImageElement>document.getElementById("dsh4_headcard[1]footer-properties-lbl[0]");
    /** NO RELEASE */
    var dsh4_0card_0content=<HTMLImageElement>document.getElementById("dsh4[0]card[0]content");
        dsh4_0card_0content.addEventListener('click', function () {
          switch(dsh4_0card_0content_click) {
            case 0:
                  hdrImgDes2.innerHTML="No Release";
                  hdrImgDes3.innerHTML="Microcell-PerArea";
                  dsh4_0card_0content.style.backgroundColor="#83D7F1";
                  dsh4_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_3content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_0content_click=1;
                  dsh4_0card_1content_click=0;
                  dsh4_0card_2content_click=0;
                  dsh4_0card_3content_click=0;
                  document.getElementById("dsh4[1]").hidden=false;
                  document.getElementById("dsh4[2]").hidden=true;
                  document.getElementById("dsh4[3]").hidden=true;
                  document.getElementById("dsh4[4]").hidden=true;
                  document.getElementById("dsh4[5]").hidden=true;
                  document.getElementById("dsh4[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh4[0]card[0]content[1]-properties-img");
                      var srcScoundImgName0=hdrImgSrc.src;
                      var aryScoundImgName0 = srcScoundImgName0.split("/");
                      var ScoundImgName0=aryScoundImgName0.reverse()[0];
                      hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                      hdrImgDes1.hidden=false;
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
                    hdrImgDes2.innerHTML="Project On Pipe";
                    hdrImgDes3.innerHTML="Microcell-PerArea";
                    dsh4_0card_0content.style.backgroundColor="#FFFFFF";
                    dsh4_0card_1content.style.backgroundColor="#83D7F1";
                    dsh4_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh4_0card_3content.style.backgroundColor="#FFFFFF";
                    dsh4_0card_0content_click=0;
                    dsh4_0card_1content_click=1;
                    dsh4_0card_2content_click=0;
                    dsh4_0card_3content_click=0;
                    document.getElementById("dsh4[1]").hidden=true;
                    document.getElementById("dsh4[2]").hidden=true;
                    document.getElementById("dsh4[3]").hidden=true;
                    document.getElementById("dsh4[4]").hidden=true;
                    document.getElementById("dsh4[5]").hidden=false;
                    document.getElementById("dsh4[6]").hidden=false;
                    /** HEADER */
                    var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh4[0]card[1]content[1]-properties-img");
                        var srcScoundImgName0=hdrImgSrc.src;
                        var aryScoundImgName0 = srcScoundImgName0.split("/");
                        var ScoundImgName0=aryScoundImgName0.reverse()[0];
                        hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                        hdrImgDes1.hidden=false;

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
                  hdrImgDes2.innerHTML="RFI";
                  hdrImgDes3.innerHTML="Microcell-PerArea";
                  dsh4_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_2content.style.backgroundColor="#83D7F1";
                  dsh4_0card_3content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_0content_click=0;
                  dsh4_0card_1content_click=0;
                  dsh4_0card_2content_click=1;
                  dsh4_0card_3content_click=0;
                  document.getElementById("dsh4[1]").hidden=true;
                  document.getElementById("dsh4[2]").hidden=false;
                  document.getElementById("dsh4[3]").hidden=true;
                  document.getElementById("dsh4[4]").hidden=true;
                  document.getElementById("dsh4[5]").hidden=true;
                  document.getElementById("dsh4[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh4[0]card[2]content[1]-properties-img");
                  var srcScoundImgName0=hdrImgSrc.src;
                  var aryScoundImgName0 = srcScoundImgName0.split("/");
                  var ScoundImgName0=aryScoundImgName0.reverse()[0];
                  hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                  hdrImgDes1.hidden=false;

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
                  hdrImgDes2.innerHTML="After RFI";
                  hdrImgDes3.innerHTML="Microcell-PerArea";
                  dsh4_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh4_0card_3content.style.backgroundColor="#83D7F1";
                  dsh4_0card_0content_click=0;
                  dsh4_0card_1content_click=0;
                  dsh4_0card_2content_click=0;
                  dsh4_0card_3content_click=1;
                  document.getElementById("dsh4[1]").hidden=true;
                  document.getElementById("dsh4[2]").hidden=true;
                  document.getElementById("dsh4[3]").hidden=false;
                  document.getElementById("dsh4[4]").hidden=false;
                  document.getElementById("dsh4[5]").hidden=true;
                  document.getElementById("dsh4[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh4[0]card[3]content[1]-properties-img");
                      var srcScoundImgName0=hdrImgSrc.src;
                      var aryScoundImgName0 = srcScoundImgName0.split("/");
                      var ScoundImgName0=aryScoundImgName0.reverse()[0];
                      hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                      hdrImgDes1.hidden=false;
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
