import { Component, ViewChild, ElementRef } from '@angular/core';
import { LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import * as HighCharts from "highcharts";
import { DatabaseProvider} from "../../providers/database/database";
import { DashboardAllProvider } from "../../providers/dashboard-all/dashboard-all";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';

declare var google;
var dsh5_0card_0content_click=0;
var dsh5_0card_1content_click=0;
var dsh5_0card_2content_click=0;
var dsh5_0card_3content_click=0;
var dsh5_0card_0footer_click=0;
var dsh5_0card_1footer_click=0;
var dsh5_0card_2footer_click=0;
var dsh5_0card_3footer_click=0;
/** IMG SOURCE */
var defaultUrlImg="assets/img/new/";
var dsh5_charting;

var map5: any;
var circles=[];
let mapArrayStt = [
  {nama: "RFI", value:false},
  {nama: "RELEASE", value:false},
  {nama: "NOTRELEASE", value:false},
  {nama: "AREA", value:0}
];
@IonicPage()
@Component({
  selector: 'page-dsh5-home',
  templateUrl: 'dsh5-home.html',
})
export class Dsh5HomePage {
  // @ViewChild('map5') mapElement5: ElementRef;
  private dsh5_subscription1;
  private dsh5_subscription2;
  private responseData;

  loadingSpinner = this.loadingCtrl.create({
    // cssClass:"map-spinner",
    spinner:'ios',
    content: 'Please wait...'
  });
  private responseDataChart;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: DatabaseProvider,
    private dashboarAll: DashboardAllProvider,
    public loadingCtrl: LoadingController,
  ) {}

  /** First Innit Component  */
  ngOnInit() {
    //Second Load DOM.
    this.loadingSpinner.present();

    /** CHARTING */
    setTimeout(() => {
      this.dsh5_initCard();
      this.dsh5_InitChart();
      this.dsh5_initMap();
    }, 100);

     /** MAP */
    setTimeout(() => {
      this.dsh5_UpdateCard();
      this.dsh5_UpdateDataChart();
      this.dsh5_UpdateDataMap();
    }, 200);
  }

  /** INIT CARD */
  private dsh5_initCard(){
    this.initMouseOverOut();
    this.initClickEvent();
    document.getElementById("dsh5[1]").hidden=true;
    document.getElementById("dsh5[2]").hidden=true;
    document.getElementById("dsh5[3]").hidden=true;
    document.getElementById("dsh5[4]").hidden=true;
    document.getElementById("dsh5[5]").hidden=true;
    document.getElementById("dsh5[6]").hidden=true;
    document.getElementById("dsh5_headcard[0]footer-properties-lbl[0]").hidden=true;
    document.getElementById("dsh5_headcard[0]footer-properties-lbl[1]").hidden=true;
    document.getElementById("dsh5_headcard[1]content[1]-properties-img").hidden=true;;
    document.getElementById("dsh5_headcard[1]content[1]-properties-lbl").innerHTML="SELECTED";
  }

  private dsh5_UpdateCard($param='0/0000'){
    var ary_Header=[];
    var rsltAry=[];
    var grpSP=[];
    var area_NOT_RELEASE=[];
    var area_POP=[];
    var area_RFI=[];
    var area_ARFI=[];
    // var querySql ="SELECT URUTAN,SEQ,GRP,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4,BAST,ARFI_NILAI2 FROM SP_PRJ "// WHERE GRP='test' "
    //              +" ORDER BY SEQ,GRP DESC,URUTAN ASC";
    //   this.database.selectData(querySql).then(data=>{
    //     rsltAry=[];
    //     rsltAry.push(data);
    this.dashboarAll.postDatax("Mobile_Dashboard/dshSpl/",$param).then((result) => {
      this.responseData=result;
      console.log("length=",this.responseData.length);

      rsltAry=[];
      rsltAry.push(result['dsh5']);
        //  if (rsltAry[0].length!==0){
        if (rsltAry != undefined || rsltAry.length!=0){
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
              grpSP=[];
              grpSP.push(rsltAry[0].filter(function(b2cAreaObj){
                  return b2cAreaObj.SEQ=="SP";
                })
              );
              /** NOT RELEASE - UBIS -> PER AREA */
              area_NOT_RELEASE=[];
              area_NOT_RELEASE.push(grpSP[0].filter(function(notReleaseObj){
                  return notReleaseObj.GRP=="NOT_RELEASE";
                })
              );
              /** PROJECT ON PIPE - UBIS -> PER AREA */
              area_POP=[];
              area_POP.push(grpSP[0].filter(function(pipeObj){
                  return pipeObj.GRP=="PRJ_ON_PIPE";
                })
              );
               /** RFI - UBIS -> PER AREA */
              area_RFI=[];
              area_RFI.push(grpSP[0].filter(function(rfiObj){
                  return rfiObj.GRP=="RFI";
                })
              );
               /** AFTER RFI - UBIS -> PER AREA */
              area_ARFI=[];
              area_ARFI.push(grpSP[0].filter(function(arfiObj){
                  return arfiObj.GRP=="ARFI";
                })
              );

              //-> toDisply
              ary_Header[0].forEach(el=>{
                  console.log(el.GRP);
                  // console.log(el);
                  if (el.GRP=='ALL_PRJ') {
                    document.getElementById("dsh5_headcard[0]content[1]-properties-lbl").innerHTML=(el.NILAI).toString();
                    // document.getElementById("dsh5_headcard[0]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='NOT_RELEASE') {
                    document.getElementById("dsh5[0]card[0]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh5[0]card[0]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='PRJ_ON_PIPE'){
                    document.getElementById("dsh5[0]card[1]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh5[0]card[1]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='RFI') {
                    document.getElementById("dsh5[0]card[2]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh5[0]card[2]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
                  if (el.GRP=='ARFI') {
                    document.getElementById("dsh5[0]card[3]content[1]-properties-lbl").innerHTML=(el.PERSEN).toString()+ "%";
                    document.getElementById("dsh5[0]card[3]footer-properties-lbl[1]").innerHTML=(el.NILAI).toString();
                  }
              });
              area_NOT_RELEASE[0].forEach(el1=>{
                  console.log(el1);
                  document.getElementById("dsh5[1]card["+el1.URUTAN +"]content[1]-properties-lbl").innerHTML=(el1.NILAI).toString();
              });
              area_POP[0].forEach(el2=>{
                console.log(el2);
                document.getElementById("dsh5[5]card["+el2.URUTAN +"]content[1]-properties-lbl").innerHTML=(el2.NILAI).toString();
              });
              area_RFI[0].forEach(el3=>{
                console.log(el3);
                document.getElementById("dsh5[2]card["+el3.URUTAN +"]content[1]-properties-lbl").innerHTML=(el3.NILAI).toString();
              });
             area_ARFI[0].forEach(el4=>{
                console.log(el4);
                document.getElementById("dsh5[3]card["+el4.URUTAN +"]content[1]-properties-lbl").innerHTML=(el4.NILAI).toString();
                document.getElementById("dsh5[4]card["+el4.URUTAN +"]content[1]-properties-lbl").innerHTML=(el4.ARFI_NILAI2).toString();
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
    document.getElementById("dsh5_headcard[0]content[1]-properties-lbl").innerHTML=(99+10).toString();

      /** PER-AREA*/
    for (var i=0; i<=3; i++){
      //second=NoRelease|Pop|RFI|AfterRFI| Value %
      document.getElementById("dsh5[0]card["+i+"]content[1]-properties-lbl").innerHTML=(i+100).toString() + "%";
      //NoRelease AREA[1,2,3,4]
      document.getElementById("dsh5[1]card["+i+"]content[1]-properties-lbl").innerHTML=(i+10).toString();
      //RFI AREA[1,2,3,4]
      document.getElementById("dsh5[2]card["+i+"]content[1]-properties-lbl").innerHTML=(i+5).toString();
      //AfterRFI AREA[1,2,3,4]
      document.getElementById("dsh5[3]card["+i+"]content[1]-properties-lbl").innerHTML=(i+12).toString();
      document.getElementById("dsh5[4]card["+i+"]content[1]-properties-lbl").innerHTML=(i+13).toString();
      //PoP AREA[1,2,3,4]
      document.getElementById("dsh5[5]card["+i+"]content[1]-properties-lbl").innerHTML=(i+20).toString();
    }

    /** Total */
    for(var x=0; x<=3; x ++){
      document.getElementById("dsh5[0]card["+x+"]footer-properties-lbl[1]").innerHTML=(x+293).toString();
    }
    /** POP VALUE DETAIL */
    for (var i1=0; i1<=0; i1++){
      document.getElementById("dsh5[6]card[0]properties-lbl["+i1+"]").innerHTML=(i1+1).toString();
      document.getElementById("dsh5[6]card[1]properties-lbl["+i1+"]").innerHTML=(i1+2).toString();
      document.getElementById("dsh5[6]card[2]properties-lbl["+i1+"]").innerHTML=(i1+3).toString();
      document.getElementById("dsh5[6]card[3]properties-lbl["+i1+"]").innerHTML=(i1+4).toString();
    }
  }

  public rfiChange(event: Event){
    var objIndex;
    objIndex = mapArrayStt.findIndex((obj => obj.nama == "RFI"));
    mapArrayStt[objIndex].value = event['checked'];
    this.dsh5_UpdateDataMap(mapArrayStt);
  }

  public releaseChange(event: Event){
    var objIndex;
    objIndex = mapArrayStt.findIndex((obj => obj.nama == "RELEASE"));
    mapArrayStt[objIndex].value = event['checked'];
    this.dsh5_UpdateDataMap(mapArrayStt);
  }

  public notReleaseChange(event: Event) {
    var objIndex;
    objIndex = mapArrayStt.findIndex((obj => obj.nama == "NOTRELEASE"));
    mapArrayStt[objIndex].value = event['checked'];
    this.dsh5_UpdateDataMap(mapArrayStt);
  }

  public areaChange(event: Event) {
    var objIndex;
    var intOption;
    intOption=event;
    objIndex = mapArrayStt.findIndex((obj => obj.nama == "AREA"));
    mapArrayStt[objIndex].value = intOption;
    this.dsh5_UpdateDataMap(mapArrayStt);
  }

  private dsh5_initMap(){
    var mapOptions={
      zoom: 4,
      center: new google.maps.LatLng(-2.209764,117.114258),
      styles: this.database._defaultNewStyle
    };
    map5 = new google.maps.Map(document.getElementById("map5"),mapOptions);
  }
  private dsh5_UpdateDataMap(qryWhere:any=null){
    var rsltAryMap=[];
    var myRFI;
    var myRelease;
    var myNotRelease;
    var myLatlngRFI;
    var myLatlngRELEASE;
    var myLatlngNOTRELEASE;
    var contentString;
    var querySql;
    querySql='';
    if (qryWhere==null){
      querySql ="SELECT DISTINCT GRP,PROJECT_ID,AREA,LAT,LONG,RADIUS,SITE_NM,TENAN_NM,REGIONAL,SOW,STATUS FROM TBL_PETA_B2S "
    }else if(qryWhere!=null){
    var concatSql;
        concatSql='';
    var sqlDefault ="SELECT DISTINCT GRP,PROJECT_ID,AREA,LAT,LONG,RADIUS,SITE_NM,TENAN_NM,REGIONAL,SOW,STATUS FROM TBL_PETA_B2S "
      // querySql=querySql + " WHERE " + qryWhere;
      // console.log("test1=",qryWhere);
      // console.log("test2=",qryWhere[0]['nama']);
      if (circles.length>0){
        for(var i in circles) {
          circles[i].setMap(null);
        }
        circles = [];
      }
      var filter_GRP=[];
      var filter_AREA;
          filter_AREA='';
      qryWhere.forEach(el=>{
        if (el.value==true){
          filter_GRP.push("'"+el.nama+"'");
        }
        if (el.value!=0){
          filter_AREA=" AND AREA='" + el.value + "'";
        }
      })
      if(qryWhere[0]['value']==true || qryWhere[1]['value']==true || qryWhere[2]['value']==true){
        concatSql=concatSql +" WHERE GRP IN (" + filter_GRP + ")";
      }
      if(qryWhere[3]['value']!=0){
        concatSql=concatSql + filter_AREA;
      }
      querySql=sqlDefault + concatSql;
      console.log("concat=", filter_GRP);

    }
    var myLatlng;
    var strokeColor;
    var fillColor;
       this.database.selectData(querySql).then(data=>{
        rsltAryMap=[];
        rsltAryMap.push(data);
        if(rsltAryMap !== undefined || rsltAryMap.length > 0){
          setTimeout(()=>{
            for (var i = 0; i < rsltAryMap[0].length; i++) {
              contentString = '<div id="content">' +
                              '<div id="siteNotice">' +
                              '</div>' +
                              '<div id="bodyContent">' +
                              '<table>' +
                              '<tr>' +
                              '<td><font color="black"><b>Project ID</b></font></td>' +
                              '<td style="width:6%"><font color="black">:</font></td>' +
                              '<td><font color="black">' + rsltAryMap[0][i]['PROJECT_ID'] + '</font></td>' +
                              '</tr>' +
                              '<tr>' +
                              '<td><font color="black"><b>Site Name</b></font></td>' +
                              '<td style="width:6%"><font color="black">:</font></td>' +
                              '<td><font color="black">' + rsltAryMap[0][i]['SITE_NM'] + '</font></td>' +
                              '</tr>' +
                              '<tr>' +
                              '<td><font color="black"><b>Nama Tenant</b></font></td>' +
                              '<td style="width:6%"><font color="black">:</font></td>' +
                              '<td><font color="black">' + rsltAryMap[0][i]['TENAN_NM'] + '</font></td>' +
                              '</tr>' +
                              '<tr>' +
                              '<td><font color="black"><b>Area</b></font></td>' +
                              '<td style="width:6%"><font color="black">:</font></td>' +
                              '<td><font color="black">' + rsltAryMap[0][i]['AREA'] + '</font></td>' +
                              '</tr>' +
                              '<tr>' +
                              '<td><font color="black"><b>Regional</b></font></td>' +
                              '<td style="width:6%"><font color="black">:</font></td>' +
                              '<td><font color="black">' + rsltAryMap[0][i]['REGIONAL'] + '</font></td>' +
                              '</tr>' +
                              '<tr>' +
                              '<td><font color="black"><b>SOW</b></font></td>' +
                              '<td style="width:6%"><font color="black">:</font></td>' +
                              '<td><font color="black">' + rsltAryMap[0][i]['SOW'] + '</font></td>' +
                              '</tr>' +
                              '<tr>' +
                              '<tr>' +
                              '<td><font color="black"><b>Status</b></font></td>' +
                              '<td style="width:6%"><font color="black">:</font></td>' +
                              '<td><font color="black">' + rsltAryMap[0][i]['STATUS'] + '</font></td>' +
                              '</tr>' +
                              '<tr>' +
                              '<td><a href="" target="_blank"><button class="btn btn-warning btn-detail" id="brn-detail">Detail</button></a></td>' +
                              '</tr>' +
                              '</table>' +
                              '</div>';
              var myInfoWindow = new google.maps.InfoWindow({
                content: contentString
              });
              // var myLatlng = new google.maps.LatLng(-6.324000,106.626076);
              if (rsltAryMap[0][i]['GRP']=='RFI'){
                myLatlngRFI = new google.maps.LatLng(rsltAryMap[0][i]['LAT'],rsltAryMap[0][i]['LONG']);
                strokeColor= "rgb(19, 148, 40)";
                fillColor= "#449af0";
              }
              if (rsltAryMap[0][i]['GRP']=='RELEASE'){
                myLatlngRFI = new google.maps.LatLng(rsltAryMap[0][i]['LAT'],rsltAryMap[0][i]['LONG']);
                strokeColor= "rgb(240, 205, 10)";
                fillColor= "#449af0";
              }
              if (rsltAryMap[0][i]['GRP']=='NOTRELEASE'){
                myLatlngRFI = new google.maps.LatLng(rsltAryMap[0][i]['LAT'],rsltAryMap[0][i]['LONG']);
                strokeColor= "rgb(243, 9, 9)";
                fillColor= "#449af0";
              }

              myRFI = new google.maps.Circle({
                center: myLatlngRFI,
                radius: 10000,
                strokeColor: strokeColor, //color_status,
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: fillColor,
                fillOpacity: 0.4,
                infowindow: myInfoWindow
              });

              myRFI.setMap(map5);
              circles.push(myRFI);
                google.maps.event.addListener(myRFI, 'click', function(ev) {
                  this.infowindow.setPosition(ev.latLng);
                  this.infowindow.open(this.map5, this);
                });

          }
          this.loadingSpinner.dismiss();
        },500);
      }
    });
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }

  private dsh5_UpdateDataChart(){
    this.loadingSpinner.present();
    this.loadingSpinner.setContent("Load Chart");
    var dsh5_aryCtg=[];
    var dsh5_aryTarget_RFI=[];
    var dsh5_aryActual_RFI=[];
    var dsh5_aryTarget=[];
    var dsh5_aryActual=[];

      this.dashboarAll.postDatax("Mobile_Dashboard/dshChart","").then((result) => {
        this.responseDataChart=result;
        dsh5_aryCtg=[];
        dsh5_aryTarget_RFI=[];
        dsh5_aryActual_RFI=[];
        dsh5_aryTarget=[];
        dsh5_aryActual=[];
        // console.log("length=",this.responseDataChart.chart.length);
        console.log("data chart=",this.responseDataChart.chart);
        var data=this.responseDataChart.chart;
            dsh5_aryCtg =data['equence'];
            dsh5_aryTarget_RFI =data['target'];//.split(",").map(Number); //Split default value Number
            dsh5_aryActual_RFI =data['actual'];//.split(",").map(Number);
            dsh5_aryTarget =data['target_nonkumulatif'];//.split(",").map(Number);
            dsh5_aryActual =data['actual_nonkumulatif'];//.split(",").map(Number);
            dsh5_charting.update({
              xAxis: [{
                categories:dsh5_aryCtg,
                labels: {
                    overflow: 'justify'
                }
              }],
              series: [
                {
                  name: 'Target RFI',
                  data: dsh5_aryTarget_RFI,
                  color:'#2c303e',
                },{
                  name: 'Actual RFI',
                  data: dsh5_aryActual_RFI,
                  color:'#a50500',
                },{
                  name: 'Target',
                  data: dsh5_aryTarget,
                  color:'#2F69C5',
                },{
                  name: 'Actual',
                  data: dsh5_aryActual,
                  color:'#FF9735',
                }
              ]
            });
            // this.loadingSpinner.dismiss();
      }, (err) => {
        // this.koneksiMasalahToast();
          console.log("jaringan bermasalah");
      });
  }

  private dsh5_InitChart(){
      const dsh5_tgl = new Date();
      const dsh5_monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
      dsh5_charting=HighCharts.chart({
          chart: {
            renderTo:'dsh5-b2cChart',
            zoomType: 'x',
            panning: true,
            panKey: 'shift',
            type:'areaspline'
          },
          title: {
              text: "Project Summary of " + dsh5_tgl.getDate() +" " + dsh5_monthNames[dsh5_tgl.getMonth()] + ' ' + dsh5_tgl.getFullYear(),
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
    /** dsh5_0 CONTAIN */
    var hdrImgDes1=<HTMLImageElement>document.getElementById("dsh5_headcard[1]content[1]-properties-img");
    var hdrImgDes2=<HTMLImageElement>document.getElementById("dsh5_headcard[1]content[1]-properties-lbl");
    //-FOOTER - LABEL LEFT
    var hdrImgDes3=<HTMLImageElement>document.getElementById("dsh5_headcard[1]footer-properties-lbl[0]");
    /** NO RELEASE */
    var dsh5_0card_0content=<HTMLImageElement>document.getElementById("dsh5[0]card[0]content");
        dsh5_0card_0content.addEventListener('click', function () {
          switch(dsh5_0card_0content_click) {
            case 0:
                  hdrImgDes2.innerHTML="No Release";
                  hdrImgDes3.innerHTML="SP-PerArea";
                  dsh5_0card_0content.style.backgroundColor="#83D7F1";
                  dsh5_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_3content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_0content_click=1;
                  dsh5_0card_1content_click=0;
                  dsh5_0card_2content_click=0;
                  dsh5_0card_3content_click=0;
                  document.getElementById("dsh5[1]").hidden=false;
                  document.getElementById("dsh5[2]").hidden=true;
                  document.getElementById("dsh5[3]").hidden=true;
                  document.getElementById("dsh5[4]").hidden=true;
                  document.getElementById("dsh5[5]").hidden=true;
                  document.getElementById("dsh5[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh5[0]card[0]content[1]-properties-img");
                      var srcScoundImgName0=hdrImgSrc.src;
                      var aryScoundImgName0 = srcScoundImgName0.split("/");
                      var ScoundImgName0=aryScoundImgName0.reverse()[0];
                      hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                      hdrImgDes1.hidden=false;
                break;
            case 1:
                  dsh5_0card_0content_click=0;
                  dsh5_0card_1content_click=0;
                  dsh5_0card_2content_click=0;
                  dsh5_0card_3content_click=0;
                  dsh5_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh5[1]").hidden=true;
                  document.getElementById("dsh5[2]").hidden=true;
                  document.getElementById("dsh5[3]").hidden=true;
                  document.getElementById("dsh5[4]").hidden=true;
                  document.getElementById("dsh5[5]").hidden=true;
                  document.getElementById("dsh5[6]").hidden=true;
                break;
            default:
        };
    });
    /** POP */
    var dsh5_0card_1content=<HTMLImageElement>document.getElementById("dsh5[0]card[1]content");
        dsh5_0card_1content.addEventListener('click', function () {
          switch(dsh5_0card_1content_click) {
              case 0:
                    hdrImgDes2.innerHTML="Project On Pipe";
                    hdrImgDes3.innerHTML="SP-PerArea";
                    dsh5_0card_0content.style.backgroundColor="#FFFFFF";
                    dsh5_0card_1content.style.backgroundColor="#83D7F1";
                    dsh5_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh5_0card_3content.style.backgroundColor="#FFFFFF";
                    dsh5_0card_0content_click=0;
                    dsh5_0card_1content_click=1;
                    dsh5_0card_2content_click=0;
                    dsh5_0card_3content_click=0;
                    document.getElementById("dsh5[1]").hidden=true;
                    document.getElementById("dsh5[2]").hidden=true;
                    document.getElementById("dsh5[3]").hidden=true;
                    document.getElementById("dsh5[4]").hidden=true;
                    document.getElementById("dsh5[5]").hidden=false;
                    document.getElementById("dsh5[6]").hidden=false;
                    /** HEADER */
                    var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh5[0]card[1]content[1]-properties-img");
                        var srcScoundImgName0=hdrImgSrc.src;
                        var aryScoundImgName0 = srcScoundImgName0.split("/");
                        var ScoundImgName0=aryScoundImgName0.reverse()[0];
                        hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                        hdrImgDes1.hidden=false;
                break;
              case 1:
                    dsh5_0card_0content_click=0;
                    dsh5_0card_1content_click=0;
                    dsh5_0card_2content_click=0;
                    dsh5_0card_3content_click=0;
                    dsh5_0card_0content.style.backgroundColor="#FFFFFF";
                    dsh5_0card_1content.style.backgroundColor="#FFFFFF";
                    dsh5_0card_2content.style.backgroundColor="#FFFFFF";
                    dsh5_0card_3content.style.backgroundColor="#FFFFFF";
                    document.getElementById("dsh5[1]").hidden=true;
                    document.getElementById("dsh5[2]").hidden=true;
                    document.getElementById("dsh5[3]").hidden=true;
                    document.getElementById("dsh5[4]").hidden=true;
                    document.getElementById("dsh5[5]").hidden=true;
                    document.getElementById("dsh5[6]").hidden=true;
                break;
              default:
          };
      });
    /** RFI */
    var dsh5_0card_2content=<HTMLImageElement>document.getElementById("dsh5[0]card[2]content");
        dsh5_0card_2content.addEventListener('click', function () {
          switch(dsh5_0card_2content_click) {
            case 0:
                  hdrImgDes2.innerHTML="RFI";
                  hdrImgDes3.innerHTML="SP-PerArea";
                  dsh5_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_2content.style.backgroundColor="#83D7F1";
                  dsh5_0card_3content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_0content_click=0;
                  dsh5_0card_1content_click=0;
                  dsh5_0card_2content_click=1;
                  dsh5_0card_3content_click=0;
                  document.getElementById("dsh5[1]").hidden=true;
                  document.getElementById("dsh5[2]").hidden=false;
                  document.getElementById("dsh5[3]").hidden=true;
                  document.getElementById("dsh5[4]").hidden=true;
                  document.getElementById("dsh5[5]").hidden=true;
                  document.getElementById("dsh5[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh5[0]card[2]content[1]-properties-img");
                  var srcScoundImgName0=hdrImgSrc.src;
                  var aryScoundImgName0 = srcScoundImgName0.split("/");
                  var ScoundImgName0=aryScoundImgName0.reverse()[0];
                  hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                  hdrImgDes1.hidden=false;
              break;
            case 1:
                  dsh5_0card_0content_click=0;
                  dsh5_0card_1content_click=0;
                  dsh5_0card_2content_click=0;
                  dsh5_0card_3content_click=0;
                  dsh5_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh5[1]").hidden=true;
                  document.getElementById("dsh5[2]").hidden=true;
                  document.getElementById("dsh5[3]").hidden=true;
                  document.getElementById("dsh5[4]").hidden=true;
                  document.getElementById("dsh5[5]").hidden=true;
                  document.getElementById("dsh5[6]").hidden=true;
              break;
            default:
          };
      });
    /** AFTER RFI */
    var dsh5_0card_3content=<HTMLImageElement>document.getElementById("dsh5[0]card[3]content");
        dsh5_0card_3content.addEventListener('click', function () {
          switch(dsh5_0card_3content_click) {
            case 0:
                  hdrImgDes2.innerHTML="After RFI";
                  hdrImgDes3.innerHTML="SP-PerArea";
                  //yang tidak di click kembali default
                  dsh5_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_3content.style.backgroundColor="#83D7F1";
                  dsh5_0card_0content_click=0;
                  dsh5_0card_1content_click=0;
                  dsh5_0card_2content_click=0;
                  dsh5_0card_3content_click=1;
                  document.getElementById("dsh5[1]").hidden=true;
                  document.getElementById("dsh5[2]").hidden=true;
                  document.getElementById("dsh5[3]").hidden=false;
                  document.getElementById("dsh5[4]").hidden=false;
                  document.getElementById("dsh5[5]").hidden=true;
                  document.getElementById("dsh5[6]").hidden=true;
                  /** HEADER */
                  var hdrImgSrc=<HTMLImageElement>document.getElementById("dsh5[0]card[3]content[1]-properties-img");
                  var srcScoundImgName0=hdrImgSrc.src;
                  var aryScoundImgName0 = srcScoundImgName0.split("/");
                  var ScoundImgName0=aryScoundImgName0.reverse()[0];
                  hdrImgDes1.src =  defaultUrlImg + ScoundImgName0;
                  hdrImgDes1.hidden=false;
              break;
            case 1:
                  dsh5_0card_0content_click=0;
                  dsh5_0card_1content_click=0;
                  dsh5_0card_2content_click=0;
                  dsh5_0card_3content_click=0;
                  dsh5_0card_0content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_1content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_2content.style.backgroundColor="#FFFFFF";
                  dsh5_0card_3content.style.backgroundColor="#FFFFFF";
                  document.getElementById("dsh5[1]").hidden=true;
                  document.getElementById("dsh5[2]").hidden=true;
                  document.getElementById("dsh5[3]").hidden=true;
                  document.getElementById("dsh5[4]").hidden=true;
                  document.getElementById("dsh5[5]").hidden=true;
                  document.getElementById("dsh5[6]").hidden=true;
              break;
            default:
          };
      });

    /** dsh5_0 FOOTER */
    var dsh5_0card_0footer=document.getElementById("dsh5[0]card[0]footer");
        dsh5_0card_0footer.addEventListener('click', function () {
          switch(dsh5_0card_0footer_click) {
            case 0:
                  dsh5_0card_0footer_click=1;
                  dsh5_0card_0footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh5_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_1footer_click=0;
                  dsh5_0card_2footer_click=0;
                  dsh5_0card_3footer_click=0;
              break;
            case 1:
                  dsh5_0card_0footer_click=0;
                  dsh5_0card_1footer_click=0;
                  dsh5_0card_2footer_click=0;
                  dsh5_0card_3footer_click=0;
                  dsh5_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_3footer.style.backgroundColor="#E9E9E9";
                  document.getElementById("dsh5[1]").hidden=true;
                  document.getElementById("dsh5[2]").hidden=true;
                  document.getElementById("dsh5[3]").hidden=true;
                  document.getElementById("dsh5[4]").hidden=true;
                  document.getElementById("dsh5[5]").hidden=true;
                  document.getElementById("dsh5[6]").hidden=true;
              break;
            default:
          };
        });

    var dsh5_0card_1footer=document.getElementById("dsh5[0]card[1]footer");
        dsh5_0card_1footer.addEventListener('click', function () {
          switch(dsh5_0card_1footer_click) {
            case 0:
                  dsh5_0card_1footer_click=1;
                  dsh5_0card_1footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh5_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_0footer_click=0;
                  dsh5_0card_2footer_click=0;
                  dsh5_0card_3footer_click=0;
              break;
            case 1:
                  dsh5_0card_0footer_click=0;
                  dsh5_0card_1footer_click=0;
                  dsh5_0card_2footer_click=0;
                  dsh5_0card_3footer_click=0;
                  dsh5_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });

    var dsh5_0card_2footer=document.getElementById("dsh5[0]card[2]footer");
        dsh5_0card_2footer.addEventListener('click', function () {
          switch(dsh5_0card_2footer_click) {
            case 0:
                  dsh5_0card_2footer_click=1;
                  dsh5_0card_2footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh5_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_3footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_0footer_click=0;
                  dsh5_0card_1footer_click=0;
                  dsh5_0card_3footer_click=0;
              break;
            case 1:
                  dsh5_0card_0footer_click=0;
                  dsh5_0card_1footer_click=0;
                  dsh5_0card_2footer_click=0;
                  dsh5_0card_3footer_click=0;
                  dsh5_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });

    var dsh5_0card_3footer=document.getElementById("dsh5[0]card[3]footer");
        dsh5_0card_3footer.addEventListener('click', function () {
          switch(dsh5_0card_3footer_click) {
            case 0:
                  dsh5_0card_3footer_click=1;
                  dsh5_0card_3footer.style.backgroundColor="#FA8633";
                  //yang tidak di click kembali default
                  dsh5_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_0footer_click=0;
                  dsh5_0card_1footer_click=0;
                  dsh5_0card_2footer_click=0;
              break;
            case 1:
                  dsh5_0card_0footer_click=0;
                  dsh5_0card_1footer_click=0;
                  dsh5_0card_2footer_click=0;
                  dsh5_0card_3footer_click=0;
                  dsh5_0card_0footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_1footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_2footer.style.backgroundColor="#E9E9E9";
                  dsh5_0card_3footer.style.backgroundColor="#E9E9E9";
              break;
            default:
          };
        });
  }

  private initMouseOverOut(){
       /* dsh5_0 CONTAIN */
      var dsh5_0card_0content=document.getElementById("dsh5[0]card[0]content");
          dsh5_0card_0content.onmouseover= function () {
            dsh5_0card_0content.style.backgroundColor="#BBE5F2";
          }
          dsh5_0card_0content.onmouseout = function () {
            if (dsh5_0card_0content_click!==1){
              dsh5_0card_0content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh5_0card_1content=document.getElementById("dsh5[0]card[1]content");
          dsh5_0card_1content.onmouseover= function () {
            dsh5_0card_1content.style.backgroundColor="#BBE5F2";
          }
          dsh5_0card_1content.onmouseout = function () {
            if (dsh5_0card_1content_click!==1){
              dsh5_0card_1content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh5_0card_2content=document.getElementById("dsh5[0]card[2]content");
          dsh5_0card_2content.onmouseover= function () {
            dsh5_0card_2content.style.backgroundColor="#BBE5F2";
          }
          dsh5_0card_2content.onmouseout = function () {
            if (dsh5_0card_2content_click!==1){
              dsh5_0card_2content.style.backgroundColor="#FFFFFF";
            }
          }
      var dsh5_0card_3content=document.getElementById("dsh5[0]card[3]content");
          dsh5_0card_3content.onmouseover= function () {
            dsh5_0card_3content.style.backgroundColor="#BBE5F2";
          }
          dsh5_0card_3content.onmouseout = function () {
            if (dsh5_0card_3content_click!==1){
              dsh5_0card_3content.style.backgroundColor="#FFFFFF";
            }
          }

      /* dsh5_0 FOOTER */
      var dsh5_0card_0footer=document.getElementById("dsh5[0]card[0]footer");
          dsh5_0card_0footer.onmouseover= function () {
            dsh5_0card_0footer.style.backgroundColor="#FA8633";
          }
          dsh5_0card_0footer.onmouseout = function () {
            if (dsh5_0card_0footer_click!==1){
              dsh5_0card_0footer.style.backgroundColor="#E9E9E9";
            }

          }

      var dsh5_0card_1footer=document.getElementById("dsh5[0]card[1]footer");
          dsh5_0card_1footer.onmouseover= function () {
            dsh5_0card_1footer.style.backgroundColor="#FA8633";
          }
          dsh5_0card_1footer.onmouseout = function () {
            if (dsh5_0card_1footer_click!==1){
              dsh5_0card_1footer.style.backgroundColor="#E9E9E9";
            }
          }

      var dsh5_0card_2footer=document.getElementById("dsh5[0]card[2]footer");
          dsh5_0card_2footer.onmouseover= function () {
            dsh5_0card_2footer.style.backgroundColor="#FA8633";
          }
          dsh5_0card_2footer.onmouseout = function () {
            if (dsh5_0card_2footer_click!==1){
              dsh5_0card_2footer.style.backgroundColor="#E9E9E9";
            }
          }
      var dsh5_0card_3footer=document.getElementById("dsh5[0]card[3]footer");
          dsh5_0card_3footer.onmouseover= function () {
            dsh5_0card_3footer.style.backgroundColor="#FA8633";
          }
          dsh5_0card_3footer.onmouseout = function () {
            if (dsh5_0card_3footer_click!==1){
              dsh5_0card_3footer.style.backgroundColor="#E9E9E9";
            }
          }
  }
}
