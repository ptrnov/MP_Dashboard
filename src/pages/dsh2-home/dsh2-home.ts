import { Component, ViewChild, ElementRef } from '@angular/core';
import { LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import * as HighCharts from "highcharts";
import { DatabaseProvider} from "../../providers/database/database";
import { DashboardAllProvider } from "../../providers/dashboard-all/dashboard-all";
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
var dsh2_charting;

var map2: any;
let mapArrayStt = [
  {nama: "RFI", value:false},
  {nama: "RELEASE", value:false},
  {nama: "NOTRELEASE", value:false},
  {nama: "AREA", value:0}
];
@IonicPage()
@Component({
  selector: 'page-dsh2-home',
  templateUrl: 'dsh2-home.html',
})
export class Dsh2HomePage {
  // @ViewChild('map2') mapElement2: ElementRef;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  private dsh2_subscription1;
  private dsh2_subscription2;
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
  ){}

  /** First Innit Component  */
  ngOnInit() {
    //Second Load DOM.
    this.loadingSpinner.present();

    /** CHARTING */
    setTimeout(() => {
      this.dsh2_initCard();
      this.dsh2_InitChart();
      this.dsh2_initMap();
    }, 100);

     /** MAP */
    setTimeout(() => {
      this.dsh2_UpdateCard();
      this.dsh2_UpdateDataChart();
      this.dsh2_UpdateDataMap();
    }, 200);
  }

  /** INIT CARD */
  private dsh2_initCard(){
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

  }

  private dsh2_UpdateCard(){
    var ary_Header=[];
    var rsltAry=[];
    var grpB2S=[];
    var area_NOT_RELEASE=[];
    var area_POP=[];
    var area_RFI=[];
    var  area_ARFI=[];
    var querySql ="SELECT URUTAN,SEQ,GRP,BULAN,TAHUN,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4,SIS,SITAC1,SITAC2,CME,RFC,RFI,ARFI_NILAI2 FROM B2S_PRJ "// WHERE GRP='test' "
                //  +" WHERE BULAN='09' AND TAHUN='2018'"
                 +" ORDER BY SEQ,GRP DESC,URUTAN ASC";
      this.database.selectData(querySql).then(data=>{
        rsltAry=[];
        rsltAry.push(data);
        //  if (rsltAry[0].length!==0){
        if (rsltAry !== undefined || rsltAry.length!==0){
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
                document.getElementById("dsh2[4]card["+el4.URUTAN +"]content[1]-properties-lbl").innerHTML=(el4.ARFI_NILAI2).toString();
              });
              console.log(ary_Header);
          }else{
              // console.log("data kosong");
          };
      });
      return rsltAry;
  }

  private dsh2_InitChart(){
    const dsh2_tgl = new Date();
    const dsh2_monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    dsh2_charting=HighCharts.chart({
        chart: {
          renderTo:'dsh2-b2cChart',
          zoomType: 'x',
          panning: true,
          panKey: 'shift',
          type:'areaspline'
        },
        title: {
            text: "Project Summary of " + dsh2_tgl.getDate() +" " + dsh2_monthNames[dsh2_tgl.getMonth()] + ' ' + dsh2_tgl.getFullYear(),
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
private dsh2_UpdateDataChart(){
  this.loadingSpinner.present();
  this.loadingSpinner.setContent("Load Chart");
  var dsh2_aryCtg=[];
  var dsh2_aryTarget_RFI=[];
  var dsh2_aryActual_RFI=[];
  var dsh2_aryTarget=[];
  var dsh2_aryActual=[];

  this.dashboarAll.postDatax("Mobile_Dashboard/dshChart","").then((result) => {
      this.responseDataChart=result;
      dsh2_aryCtg=[];
      dsh2_aryTarget_RFI=[];
      dsh2_aryActual_RFI=[];
      dsh2_aryTarget=[];
      dsh2_aryActual=[];
      // console.log("length=",this.responseDataChart.chart.length);
      console.log("data chart=",this.responseDataChart.chart);
      var data=this.responseDataChart.chart;
          dsh2_aryCtg =data['equence'];
          dsh2_aryTarget_RFI =data['target'];//.split(",").map(Number); //Split default value Number
          dsh2_aryActual_RFI =data['actual'];//.split(",").map(Number);
          dsh2_aryTarget =data['target_nonkumulatif'];//.split(",").map(Number);
          dsh2_aryActual =data['actual_nonkumulatif'];//.split(",").map(Number);
          dsh2_charting.update({
            xAxis: [{
              categories:dsh2_aryCtg,
              labels: {
                  overflow: 'justify'
              }
            }],
            series: [
              {
                name: 'Target RFI',
                data: dsh2_aryTarget_RFI,
                color:'#2c303e',
              },{
                name: 'Actual RFI',
                data: dsh2_aryActual_RFI,
                color:'#a50500',
              },{
                name: 'Target',
                data: dsh2_aryTarget,
                color:'#2F69C5',
              },{
                name: 'Actual',
                data: dsh2_aryActual,
                color:'#FF9735',
              }
            ]
          });
          // this.loadingMap.dismiss();
    }, (err) => {
      // this.koneksiMasalahToast();
        console.log("jaringan bermasalah");
    });
  }

  public rfiChange(event: Event){
    var objIndex;
    objIndex = mapArrayStt.findIndex((obj => obj.nama == "RFI"));
    mapArrayStt[objIndex].value = event['checked'];
    this.dsh2_UpdateDataMap(mapArrayStt);
  }

  public releaseChange(event: Event){
    var objIndex;
    objIndex = mapArrayStt.findIndex((obj => obj.nama == "RELEASE"));
    mapArrayStt[objIndex].value = event['checked'];
    this.dsh2_UpdateDataMap(mapArrayStt);
  }

  public notReleaseChange(event: Event) {
    var objIndex;
    objIndex = mapArrayStt.findIndex((obj => obj.nama == "NOTRELEASE"));
    mapArrayStt[objIndex].value = event['checked'];
    this.dsh2_UpdateDataMap(mapArrayStt);
  }

  public areaChange(event: Event) {
    var objIndex;
    var intOption;
    intOption=event;
    objIndex = mapArrayStt.findIndex((obj => obj.nama == "AREA"));
    mapArrayStt[objIndex].value = intOption;
    this.dsh2_UpdateDataMap(mapArrayStt);
  }

  dsh2_initMap(){
    var mapOptions={
      zoom: 4,
      center: new google.maps.LatLng(-2.209764,117.114258),
      styles: this.database._defaultNewStyle
    };
    map2 = new google.maps.Map(document.getElementById("map2"),mapOptions);
  }
  dsh2_UpdateDataMap(qryWhere:any=null){
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
      querySql ="SELECT DISTINCT GRP,PROJECT_ID,BULAN,TAHUN,AREA,LAT,LONG,RADIUS,SITE_NM,TENAN_NM,REGIONAL,SOW,STATUS FROM TBL_PETA_B2S "// WHERE GRP='test' "
    }else if(qryWhere!=null){
    var concatSql;
        concatSql='';
    var sqlDefault ="SELECT DISTINCT GRP,PROJECT_ID,BULAN,TAHUN,AREA,LAT,LONG,RADIUS,SITE_NM,TENAN_NM,REGIONAL,SOW,STATUS FROM TBL_PETA_B2S "// WHERE GRP='test' "
      // querySql=querySql + " WHERE " + qryWhere;
      // console.log("test1=",qryWhere);
      // console.log("test2=",qryWhere[0]['nama']);

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
              }
              if (rsltAryMap[0][i]['GRP']=='RELEASE'){
                myLatlngRELEASE = new google.maps.LatLng(rsltAryMap[0][i]['LAT'],rsltAryMap[0][i]['LONG']);
              }
              if (rsltAryMap[0][i]['GRP']=='NOTRELEASE'){
                myLatlngNOTRELEASE = new google.maps.LatLng(rsltAryMap[0][i]['LAT'],rsltAryMap[0][i]['LONG']);
              }

              myRFI = new google.maps.Circle({
                center: myLatlngRFI,
                radius: 10000,
                strokeColor: "rgb(19, 148, 40)", //color_status,
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#449af0",
                fillOpacity: 0.4,
                infowindow: myInfoWindow
              });

              myRelease = new google.maps.Circle({
                  center: myLatlngRELEASE,
                  radius: 10000,
                  strokeColor: "rgb(240, 205, 10)", //color_status,
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: "#449af0",
                  infowindow: myInfoWindow
              });

              myNotRelease = new google.maps.Circle({
                center: myLatlngNOTRELEASE,
                radius: 10000,
                strokeColor: "rgb(243, 9, 9)", //color_status,
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#449af0",
                fillOpacity: 0.4,
                infowindow: myInfoWindow
            });

              myRFI.setMap(map2);
              myRelease.setMap(map2);
              myNotRelease.setMap(map2);
                google.maps.event.addListener(myRFI, 'click', function(ev) {
                  this.infowindow.setPosition(ev.latLng);
                  this.infowindow.open(this.map2, this);
                });
                google.maps.event.addListener(myRelease, 'click', function(ev) {
                  this.infowindow.setPosition(ev.latLng);
                  this.infowindow.open(this.map2, this);
                });
                google.maps.event.addListener(myNotRelease, 'click', function(ev) {
                  this.infowindow.setPosition(ev.latLng);
                  this.infowindow.open(this.map2, this);
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
