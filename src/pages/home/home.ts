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

// addMore(Highcharts)
var defaultUrlImg="assets/img/new/";
var varSecond0=0;
var varSecond1=0;
var varSecond2=0;
var varSecond3=0;
var varPerubisCol_1=0;
var varPerubisCol_2=0;
var varPerubisCol_3=0;
var varPerubisCol_4=0;

var aryB2S_AREA_NOT_RELEASE=[];
var aryB2S_AREA_PRJ_ON_PIPE=[];
var aryRFI=[];
var aryARFI=[];
var valArrayCheck=false;

//Google Variable
declare var google;
// var marker = [];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  // public search = {
  //   name: "Piter, Indonesia",
  //   date: new Date().toISOString()
  // }
  //today;
  // dataInicial: any;
  // maxDate: string;
  // @ViewChild(Content) content: Content
  private subscription1;
  private subscription2;
  private cardValue_Header;
  //MAP
  @ViewChild('map1') mapElement2: ElementRef;
  map1: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  mapOptions1:any;

  constructor(
      // private storage: Storage,
      public navCtrl: NavController,
      public popoverCtrl: PopoverController,
      private dashboarAll: DashboardAllProvider,
      public alertCtrl: AlertController,
      public modalCtrl: ModalController,
      private database: DatabaseProvider,
      private menu: MenuController
      // private pageScrollService: PageScrollService
      // ,@Inject(DOCUMENT)
      // private document: any
  ){
    this.mapOptions1={
      zoom: 4,
      center: new google.maps.LatLng(-2.209764,117.114258),
      styles: this.database._defaultNewStyle
    };

    // this.dashboarAll.getAllPrj();
    //this.today = new Date().toISOString();
    // this.getDataAll();

    // this.getCobaData();

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

  ionViewDidLoad():void{
    //== Mouse Over - Change Color ==
    // this.dashboarAll.getAllPrj();
    this.firstCardEventMouse();
    this.secondEventMousehover();
    this.trheeEventMousehover();
    document.getElementById("divPerUbis").hidden = true;
    this.fourthEventMousehover();
    document.getElementById("divPerArea").hidden = true;
    this.drilldown();
    this.nilaiDispyValue1();
    this.initMap();
  }



  initMap(){
    this.map1 = new google.maps.Map(document.getElementById("map1"),this.mapOptions1);
    this.directionsDisplay.setMap(this.map1);
  }

  nilaiDispyValue1(){
    /**
     * Load Sqlite data periodik.
     */
    console.log("valAry" +  valArrayCheck);
      // var querySql ="SELECT URUTAN,SEQ,GRP,NILAI,PERSEN,AREA1,AREA2,AREA3,AREA4 FROM ALL_PRJ"
      //               +" ORDER BY SEQ,GRP DESC,URUTAN ASC";
      // let getDataQry=this.database.selectData(querySql);
      // getDataQry.then(data=>{
        var aryRslt=[];
        var ary_Header=[];
        var aryB2S_AREA=[];
        // setTimeout(()=> {
            aryRslt=[];
            aryRslt.push(this.database.setAllProject_first);
            // aryRslt.push(data);
            if(aryRslt[0].length > 0) {
              valArrayCheck=true;
              // console.log(aryRslt);

              //-Set ARRAY GROUP - HEADER
              ary_Header=[];
              ary_Header.push(aryRslt[0].filter(function(headerObj){
                return headerObj.SEQ.indexOf("HEADER") > -1
              })
              );
              // ary_Header[0].sort("URUTAN");
              // - ORDER SORT
              ary_Header.sort((a, b):number=>{
                if (a.URUTAN < b.URUTAN) return -1;
                if (a.URUTAN > b.URUTAN) return 1;
                return 0;
              });


              //-Set ARRAY GROUP - B2S
              aryB2S_AREA=[];
              aryB2S_AREA.push(aryRslt[0].filter(function(b2cAreaObj){
                  return b2cAreaObj.SEQ.indexOf("B2S") > -1
                })
              );
              // - NOT RELEASE
              aryB2S_AREA_NOT_RELEASE=[];
              aryB2S_AREA_NOT_RELEASE.push(aryB2S_AREA[0].filter(function(notReleaseObj){
                  return notReleaseObj.GRP.indexOf("NOT_RELEASE") > -1
                })
              );
              // - PROJECT ON PIPE
              aryB2S_AREA_PRJ_ON_PIPE=[];
              aryB2S_AREA_PRJ_ON_PIPE.push(aryB2S_AREA[0].filter(function(pipeObj){
                  return pipeObj.GRP.indexOf("PRJ_ON_PIPE") > -1
                })
              );
              // - RFI
              aryRFI=[];
              aryRFI.push(aryB2S_AREA[0].filter(function(rfiObj){
                  return rfiObj.GRP.indexOf("RFI") > -1
                })
              );
              // -AFTER RFI
              aryARFI=[];
              aryARFI.push(aryB2S_AREA[0].filter(function(arfiObj){
                  return arfiObj.GRP.indexOf("ARFI") > -1
                })
              );
              console.log(
                  " varSecond0="+ varSecond0 +
                  ",varSecond1="+ varSecond1 +
                  ",varSecond2="+ varSecond2 +
                  ",varSecond3="+ varSecond3
              );

              // First layer
              document.getElementById("allPrjLabel").innerHTML=ary_Header[0][0].NILAI!=null?ary_Header[0][0].NILAI:0;

              // - VIEWER
              // console.log(aryB2S_AREA_NOT_RELEASE[1]);
              // this.nilaiDispyValue1();
              // console.log('Check='+ ary_Header[0][0].NILAI);
              document.getElementById("secondValue[0]").innerHTML=ary_Header[0][1].NILAI!=null?ary_Header[0][1].NILAI + " %":"0%";
              document.getElementById("secondValue[1]").innerHTML=ary_Header[0][2].NILAI!=null?ary_Header[0][2].NILAI + " %":"0%";
              document.getElementById("secondValue[2]").innerHTML=ary_Header[0][3].NILAI!=null?ary_Header[0][3].NILAI + " %":"0%";
              document.getElementById("secondValue[3]").innerHTML=ary_Header[0][4].NILAI!=null?ary_Header[0][4].NILAI + " %":"0%";
              //NO-RELEASE
              if (varSecond0==1){
                  document.getElementById("threeValue[0]").innerText=aryB2S_AREA_NOT_RELEASE[0][0].NILAI!=null?aryB2S_AREA_NOT_RELEASE[0][0].NILAI:0;
                  document.getElementById("threeValue[1]").innerText=aryB2S_AREA_NOT_RELEASE[0][1].NILAI!=null?aryB2S_AREA_NOT_RELEASE[0][1].NILAI:0;
                  document.getElementById("threeValue[2]").innerText=aryB2S_AREA_NOT_RELEASE[0][2].NILAI!=null?aryB2S_AREA_NOT_RELEASE[0][2].NILAI:0;
                  document.getElementById("threeValue[3]").innerText=aryB2S_AREA_NOT_RELEASE[0][3].NILAI!=null?aryB2S_AREA_NOT_RELEASE[0][3].NILAI:0;
                  if(varSecond0==1 && varPerubisCol_1==1){
                    document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_NOT_RELEASE[0][0].AREA1!=null?aryB2S_AREA_NOT_RELEASE[0][0].AREA1:0;
                    document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_NOT_RELEASE[0][0].AREA2!=null?aryB2S_AREA_NOT_RELEASE[0][0].AREA2:0;
                    document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_NOT_RELEASE[0][0].AREA3!=null?aryB2S_AREA_NOT_RELEASE[0][0].AREA3:0;
                    document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_NOT_RELEASE[0][0].AREA4!=null?aryB2S_AREA_NOT_RELEASE[0][0].AREA4:0;
                  }
                  if(varSecond0==1 && varPerubisCol_2==1){
                    document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_NOT_RELEASE[0][1].AREA1!=null?aryB2S_AREA_NOT_RELEASE[0][1].AREA1:0;
                    document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_NOT_RELEASE[0][1].AREA2!=null?aryB2S_AREA_NOT_RELEASE[0][1].AREA2:0;
                    document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_NOT_RELEASE[0][1].AREA3!=null?aryB2S_AREA_NOT_RELEASE[0][1].AREA3:0;
                    document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_NOT_RELEASE[0][1].AREA4!=null?aryB2S_AREA_NOT_RELEASE[0][1].AREA4:0;
                  }
                  if(varSecond0==1 && varPerubisCol_3==1){
                    document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_NOT_RELEASE[0][2].AREA1!=null?aryB2S_AREA_NOT_RELEASE[0][2].AREA1:0;
                    document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_NOT_RELEASE[0][2].AREA2!=null?aryB2S_AREA_NOT_RELEASE[0][2].AREA2:0;
                    document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_NOT_RELEASE[0][2].AREA3!=null?aryB2S_AREA_NOT_RELEASE[0][2].AREA3:0;
                    document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_NOT_RELEASE[0][2].AREA4!=null?aryB2S_AREA_NOT_RELEASE[0][2].AREA4:0;
                  }
                  if(varSecond0==1 && varPerubisCol_4==1){
                    document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_NOT_RELEASE[0][3].AREA1!=null?aryB2S_AREA_NOT_RELEASE[0][3].AREA1:0;
                    document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_NOT_RELEASE[0][3].AREA2!=null?aryB2S_AREA_NOT_RELEASE[0][3].AREA2:0;
                    document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_NOT_RELEASE[0][3].AREA3!=null?aryB2S_AREA_NOT_RELEASE[0][3].AREA3:0;
                    document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_NOT_RELEASE[0][3].AREA4!=null?aryB2S_AREA_NOT_RELEASE[0][3].AREA4:0;
                  }
              }
              //PIPE
              if (varSecond1==1){
                document.getElementById("threeValue[0]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][0].NILAI!=null?aryB2S_AREA_PRJ_ON_PIPE[0][0].NILAI:0;
                document.getElementById("threeValue[1]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][1].NILAI!=null?aryB2S_AREA_PRJ_ON_PIPE[0][1].NILAI:0;
                document.getElementById("threeValue[2]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][2].NILAI!=null?aryB2S_AREA_PRJ_ON_PIPE[0][2].NILAI:0;
                document.getElementById("threeValue[3]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][3].NILAI!=null?aryB2S_AREA_PRJ_ON_PIPE[0][3].NILAI:0;
                if(varSecond1==1 && varPerubisCol_1==1){
                  document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA1!=null?aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA1:0;
                  document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA2!=null?aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA2:0;
                  document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA3!=null?aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA3:0;
                  document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA4!=null?aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA4:0;
                }
                if(varSecond1==1 && varPerubisCol_2==1){
                  document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA1!=null?aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA1:0;
                  document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA2!=null?aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA2:0;
                  document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA3!=null?aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA3:0;
                  document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA4!=null?aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA4:0;
                }
                if(varSecond1==1 && varPerubisCol_3==1){
                  document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA1!=null?aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA1:0;
                  document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA2!=null?aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA2:0;
                  document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA3!=null?aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA3:0;
                  document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA4!=null?aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA4:0;
                }
                if(varSecond1==1 && varPerubisCol_4==1){
                  document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA1!=null?aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA1:0;
                  document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA2!=null?aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA2:0;
                  document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA3!=null?aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA3:0;
                  document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA4!=null?aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA4:0;
                }
            }
            //RFI
            if (varSecond2==1){
              document.getElementById("threeValue[0]").innerText=aryRFI[0][0].NILAI!=null?aryRFI[0][0].NILAI:0;
              document.getElementById("threeValue[1]").innerText=aryRFI[0][1].NILAI!=null?aryRFI[0][1].NILAI:0;
              document.getElementById("threeValue[2]").innerText=aryRFI[0][2].NILAI!=null?aryRFI[0][2].NILAI:0;
              document.getElementById("threeValue[3]").innerText=aryRFI[0][3].NILAI!=null?aryRFI[0][3].NILAI:0;
              if(varSecond2==1 && varPerubisCol_1==1){
                document.getElementById("fourthValue[0]").innerText=aryRFI[0][0].AREA1!=null?aryRFI[0][0].AREA1:0;
                document.getElementById("fourthValue[1]").innerText=aryRFI[0][0].AREA2!=null?aryRFI[0][0].AREA2:0;
                document.getElementById("fourthValue[2]").innerText=aryRFI[0][0].AREA3!=null?aryRFI[0][0].AREA3:0;
                document.getElementById("fourthValue[3]").innerText=aryRFI[0][0].AREA4!=null?aryRFI[0][0].AREA4:0;
              }
              if(varSecond2==1 && varPerubisCol_2==1){
                document.getElementById("fourthValue[0]").innerText=aryRFI[0][1].AREA1!=null?aryRFI[0][1].AREA1:0;
                document.getElementById("fourthValue[1]").innerText=aryRFI[0][1].AREA2!=null?aryRFI[0][1].AREA2:0;
                document.getElementById("fourthValue[2]").innerText=aryRFI[0][1].AREA3!=null?aryRFI[0][1].AREA3:0;
                document.getElementById("fourthValue[3]").innerText=aryRFI[0][1].AREA4!=null?aryRFI[0][1].AREA4:0;
              }
              if(varSecond2==1 && varPerubisCol_3==1){
                document.getElementById("fourthValue[0]").innerText=aryRFI[0][2].AREA1!=null?aryRFI[0][2].AREA1:0;
                document.getElementById("fourthValue[1]").innerText=aryRFI[0][2].AREA2!=null?aryRFI[0][2].AREA2:0;
                document.getElementById("fourthValue[2]").innerText=aryRFI[0][2].AREA3!=null?aryRFI[0][2].AREA3:0;
                document.getElementById("fourthValue[3]").innerText=aryRFI[0][2].AREA4!=null?aryRFI[0][2].AREA4:0;
              }
              if(varSecond2==1 && varPerubisCol_4==1){
                document.getElementById("fourthValue[0]").innerText=aryRFI[0][3].AREA1!=null?aryRFI[0][3].AREA1:0;
                document.getElementById("fourthValue[1]").innerText=aryRFI[0][3].AREA2!=null?aryRFI[0][3].AREA2:0;
                document.getElementById("fourthValue[2]").innerText=aryRFI[0][3].AREA3!=null?aryRFI[0][3].AREA3:0;
                document.getElementById("fourthValue[3]").innerText=aryRFI[0][3].AREA4!=null?aryRFI[0][3].AREA4:0;
              }
            }
            //-ARFI
            if (varSecond3==1){
              document.getElementById("threeValue[0]").innerText=aryARFI[0][0].NILAI!=null?aryARFI[0][0].NILAI:0;
              document.getElementById("threeValue[1]").innerText=aryARFI[0][1].NILAI!=null?aryARFI[0][1].NILAI:0;
              document.getElementById("threeValue[2]").innerText=aryARFI[0][2].NILAI!=null?aryARFI[0][2].NILAI:0;
              document.getElementById("threeValue[3]").innerText=aryARFI[0][3].NILAI!=null?aryARFI[0][3].NILAI:0;
              if(varSecond3==1 && varPerubisCol_1==1){
                document.getElementById("fourthValue[0]").innerText=aryARFI[0][0].AREA1!=null?aryARFI[0][0].AREA1:0;
                document.getElementById("fourthValue[1]").innerText=aryARFI[0][0].AREA2!=null?aryARFI[0][0].AREA2:0;
                document.getElementById("fourthValue[2]").innerText=aryARFI[0][0].AREA3!=null?aryARFI[0][0].AREA3:0;
                document.getElementById("fourthValue[3]").innerText=aryARFI[0][0].AREA4!=null?aryARFI[0][0].AREA4:0;
              }
              if(varSecond3==1 && varPerubisCol_2==1){
                document.getElementById("fourthValue[0]").innerText=aryARFI[0][1].AREA1!=null?aryARFI[0][1].AREA1:0;
                document.getElementById("fourthValue[1]").innerText=aryARFI[0][1].AREA2!=null?aryARFI[0][1].AREA2:0;
                document.getElementById("fourthValue[2]").innerText=aryARFI[0][1].AREA3!=null?aryARFI[0][1].AREA3:0;
                document.getElementById("fourthValue[3]").innerText=aryARFI[0][1].AREA4!=null?aryARFI[0][1].AREA4:0;
              }
              if(varSecond3==1 && varPerubisCol_3==1){
                document.getElementById("fourthValue[0]").innerText=aryARFI[0][2].AREA1!=null?aryARFI[0][2].AREA1:0;
                document.getElementById("fourthValue[1]").innerText=aryARFI[0][2].AREA2!=null?aryARFI[0][2].AREA2:0;
                document.getElementById("fourthValue[2]").innerText=aryARFI[0][2].AREA3!=null?aryARFI[0][2].AREA3:0;
                document.getElementById("fourthValue[3]").innerText=aryARFI[0][2].AREA4!=null?aryARFI[0][2].AREA4:0;
              }
              if(varSecond3==1 && varPerubisCol_4==1){
                document.getElementById("fourthValue[0]").innerText=aryARFI[0][3].AREA1!=null?aryARFI[0][3].AREA1:0;
                document.getElementById("fourthValue[1]").innerText=aryARFI[0][3].AREA2!=null?aryARFI[0][3].AREA2:0;
                document.getElementById("fourthValue[2]").innerText=aryARFI[0][3].AREA3!=null?aryARFI[0][3].AREA3:0;
                document.getElementById("fourthValue[3]").innerText=aryARFI[0][3].AREA4!=null?aryARFI[0][3].AREA4:0;
              }
            }
          }else{
            valArrayCheck=false;
          }
        // },500);
      // });
  }

  private secondAlertInfo1(){
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

  private secondAlertInfo2(){
      //var data = { message : 'hello world' };
      var ModalAdduser = this.modalCtrl.create(Dsh1SecondPrjonpipePage);
      ModalAdduser.onDidDismiss(() => {
        this.ionViewDidLoad();
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
  }

  private secondAlertInfo3(){
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

  private secondAlertInfo4(){
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
            this.navCtrl.push( Dsh1SecondAfterrfiPage);
          }
        }
      ]
    });

    alert1.present();
  }
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

  // getDataAll(){
  //   this.dashboarAll.getDataAll().subscribe(data=>console.log(data));
  // }

  // getCobaData(){
  //   // this.dashboarAll.getCobaData().subscribe(data=>console.log(data));
  // }



  private firstCardEventMouse(){
    //=>SeCOND DIFINITION
    var ObjSecond0= <HTMLImageElement>document.getElementById("divSecond[0]");
    var ObjSecond1= <HTMLImageElement>document.getElementById("divSecond[1]");
    var ObjSecond2= <HTMLImageElement>document.getElementById("divSecond[2]");
    var ObjSecond3= <HTMLImageElement>document.getElementById("divSecond[3]");
    //=>THREE DIFINITION
    var ObjThree0= <HTMLImageElement>document.getElementById("divThree[0]");
    var ObjThree1= <HTMLImageElement>document.getElementById("divThree[1]");
    var ObjThree2= <HTMLImageElement>document.getElementById("divThree[2]");
    var ObjThree3= <HTMLImageElement>document.getElementById("divThree[3]");
    //=> IMAGE DEFINITION
    var objScoundImg0= <HTMLImageElement>document.getElementById("second-img-0");
    var objScoundImg1= <HTMLImageElement>document.getElementById("second-img-1");
    var objScoundImg2= <HTMLImageElement>document.getElementById("second-img-2");
    var objScoundImg3= <HTMLImageElement>document.getElementById("second-img-3");
    var objThreeImg0= <HTMLImageElement>document.getElementById("three-img-0");
    var objThreeImg1= <HTMLImageElement>document.getElementById("three-img-1");
    var objThreeImg2= <HTMLImageElement>document.getElementById("three-img-2");
    var objThreeImg3= <HTMLImageElement>document.getElementById("three-img-3");
    var objFourthImg0= <HTMLImageElement>document.getElementById("fourth-img-0");
    var objFourthImg1= <HTMLImageElement>document.getElementById("fourth-img-1");
    var objFourthImg2= <HTMLImageElement>document.getElementById("fourth-img-2");
    var objFourthImg3= <HTMLImageElement>document.getElementById("fourth-img-3");
    var objFourthFooterLabelLeft0= document.getElementById("fourthFooterLabelLeft[0]");
    var objFourthFooterLabelLeft1= document.getElementById("fourthFooterLabelLeft[1]");
    var objFourthFooterLabelLeft2= document.getElementById("fourthFooterLabelLeft[2]");
    var objFourthFooterLabelLeft3= document.getElementById("fourthFooterLabelLeft[3]");
    var threeFooterLabelLeft0= document.getElementById("threeFooterLabelLeft[0]");
    var threeFooterLabelLeft1= document.getElementById("threeFooterLabelLeft[1]");
    var threeFooterLabelLeft2= document.getElementById("threeFooterLabelLeft[2]");
    var threeFooterLabelLeft3= document.getElementById("threeFooterLabelLeft[3]");
    var firstLabel0= <HTMLImageElement>document.getElementById("firstLabel[0]"); //text header
    var firstLabel1= <HTMLImageElement>document.getElementById("firstLabel[1]"); //image
    var firstLabel2= <HTMLImageElement>document.getElementById("firstLabel[2]"); //Value
    var firstLabel3= <HTMLImageElement>document.getElementById("firstLabel[3]"); //text footer
    firstLabel0.innerText ="";
    firstLabel1.src = "";// defaultUrlImg + "All_Project_m.png";
    firstLabel2.innerText =""; //getfrom API
    firstLabel3.innerText ="";
    // SECOND TO THREE
    // == PER-UBIS -> B2S
    //== divSecond[0]
    ObjSecond0.addEventListener('click', function () {
      switch(varSecond0) {
          case 0:
                varSecond0 = 1;
                varSecond1 = 0;
                varSecond2 = 0;
                varSecond3 = 0;

                ObjSecond0.style.backgroundColor="#83D7F1";
                ObjSecond1.style.backgroundColor="#FFFFFF";
                ObjSecond2.style.backgroundColor="#FFFFFF";
                ObjSecond3.style.backgroundColor="#FFFFFF";
                ObjThree0.style.backgroundColor="#FFFFFF";
                ObjThree1.style.backgroundColor="#FFFFFF";
                ObjThree2.style.backgroundColor="#FFFFFF";
                ObjThree3.style.backgroundColor="#FFFFFF";

                document.getElementById("divPerUbis").hidden = false;


                var srcScoundImgName0=objScoundImg0.src;
                var aryScoundImgName0 = srcScoundImgName0.split("/");
                var ScoundImgName0=aryScoundImgName0.reverse()[0];
                objThreeImg0.src =  defaultUrlImg + ScoundImgName0;
                objThreeImg1.src =  defaultUrlImg + ScoundImgName0;
                objThreeImg2.src =  defaultUrlImg + ScoundImgName0;
                objThreeImg3.src =  defaultUrlImg + ScoundImgName0;

                firstLabel0.innerText ="Not Release";
                firstLabel1.src =  defaultUrlImg + ScoundImgName0;
                firstLabel2.innerText ="";
                firstLabel3.innerText ="PER-UBIS";

                threeFooterLabelLeft0.innerText ="Build To Suit";
                threeFooterLabelLeft1.innerText ="CORE";
                threeFooterLabelLeft2.innerText ="Microcell";
                threeFooterLabelLeft3.innerText ="Special Project";
                objFourthFooterLabelLeft0.innerText ="Area1";
                objFourthFooterLabelLeft1.innerText ="Area2";
                objFourthFooterLabelLeft2.innerText ="Area3";
                objFourthFooterLabelLeft3.innerText ="Area4";
                  //aryB2S_AREA_NOT_RELEASE
                  //aryB2S_AREA_PRJ_ON_PIPE
                  //aryRFI
                  //aryARFI
                if (valArrayCheck==true){
                  document.getElementById("threeValue[0]").innerText=aryB2S_AREA_NOT_RELEASE[0][0].NILAI!=null?aryB2S_AREA_NOT_RELEASE[0][0].NILAI:0;
                  document.getElementById("threeValue[1]").innerText=aryB2S_AREA_NOT_RELEASE[0][1].NILAI!=null?aryB2S_AREA_NOT_RELEASE[0][1].NILAI:0;
                  document.getElementById("threeValue[2]").innerText=aryB2S_AREA_NOT_RELEASE[0][2].NILAI!=null?aryB2S_AREA_NOT_RELEASE[0][2].NILAI:0;
                  document.getElementById("threeValue[3]").innerText=aryB2S_AREA_NOT_RELEASE[0][3].NILAI!=null?aryB2S_AREA_NOT_RELEASE[0][3].NILAI:0;
                // console.log(aryB2S_AREA_NOT_RELEASE);
                }
              break;
          case 1:
                firstLabel0.innerText ="";
                firstLabel1.src =  "";//defaultUrlImg + "All_Project_m.png";
                firstLabel2.innerText =""; //getfrom API
                firstLabel3.innerText ="";
                ObjSecond0.style.backgroundColor="#FFFFFF";
                ObjThree0.style.backgroundColor="#FFFFFF";
                ObjThree1.style.backgroundColor="#FFFFFF";
                ObjThree2.style.backgroundColor="#FFFFFF";
                ObjThree3.style.backgroundColor="#FFFFFF";
                document.getElementById("divPerUbis").hidden = true;
                document.getElementById("divPerArea").hidden = true;
                varSecond0 = 0;
                varPerubisCol_1=0;
              break;
          default:
              document.getElementById("divPerUbis").hidden = true;
      }
    });

    //== divSecond[0]
    ObjSecond1.addEventListener('click', function () {
      switch(varSecond1) {
          case 0:
                ObjSecond0.style.backgroundColor="#FFFFFF";
                ObjSecond1.style.backgroundColor="#83D7F1";
                ObjSecond2.style.backgroundColor="#FFFFFF";
                ObjSecond3.style.backgroundColor="#FFFFFF";
                ObjThree0.style.backgroundColor="#FFFFFF";
                ObjThree1.style.backgroundColor="#FFFFFF";
                ObjThree2.style.backgroundColor="#FFFFFF";
                ObjThree3.style.backgroundColor="#FFFFFF";
                document.getElementById("divPerUbis").hidden = false;
                document.getElementById("divPerArea").hidden = true;
                varSecond0 = 0;
                varSecond1 = 1;
                varSecond2 = 0;
                varSecond3 = 0;

                var srcScoundImgName1=objScoundImg1.src;
                var aryScoundImgName1 = srcScoundImgName1.split("/");
                var ScoundImgName1=aryScoundImgName1.reverse()[0];
                objThreeImg0.src =  defaultUrlImg + ScoundImgName1;
                objThreeImg1.src =  defaultUrlImg + ScoundImgName1;
                objThreeImg2.src =  defaultUrlImg + ScoundImgName1;
                objThreeImg3.src =  defaultUrlImg + ScoundImgName1;

                firstLabel0.innerText ="Prj On Pipe";
                firstLabel1.src =  defaultUrlImg + ScoundImgName1;
                firstLabel2.innerText ="";
                firstLabel3.innerText ="PER-UBIS";

                threeFooterLabelLeft0.innerText ="Build To Suit";
                threeFooterLabelLeft1.innerText ="CORE";
                threeFooterLabelLeft2.innerText ="Microcell";
                threeFooterLabelLeft3.innerText ="Special Project";
                objFourthFooterLabelLeft0.innerText ="Area1";
                objFourthFooterLabelLeft1.innerText ="Area2";
                objFourthFooterLabelLeft2.innerText ="Area3";
                objFourthFooterLabelLeft3.innerText ="Area4";
                //VALUE B2S - AREA_PRJ_ON_PIPE
                if (valArrayCheck==true){
                  document.getElementById("threeValue[0]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][0].NILAI!=null?aryB2S_AREA_PRJ_ON_PIPE[0][0].NILAI:0;
                  document.getElementById("threeValue[1]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][1].NILAI!=null?aryB2S_AREA_PRJ_ON_PIPE[0][1].NILAI:0;
                  document.getElementById("threeValue[2]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][2].NILAI!=null?aryB2S_AREA_PRJ_ON_PIPE[0][2].NILAI:0;
                  document.getElementById("threeValue[3]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][3].NILAI!=null?aryB2S_AREA_PRJ_ON_PIPE[0][3].NILAI:0;
                }

              break;
          case 1:
                firstLabel0.innerText ="";
                firstLabel1.src = "";// defaultUrlImg + "All_Project_m.png";
                firstLabel2.innerText =""; //getfrom API
                firstLabel3.innerText ="";
                ObjSecond1.style.backgroundColor="#FFFFFF";
                ObjThree0.style.backgroundColor="#FFFFFF";
                ObjThree1.style.backgroundColor="#FFFFFF";
                ObjThree2.style.backgroundColor="#FFFFFF";
                ObjThree3.style.backgroundColor="#FFFFFF";
                document.getElementById("divPerUbis").hidden = true;
                document.getElementById("divPerArea").hidden = true;
                varSecond1 = 0;
                varPerubisCol_1=0;
              break;
          default:
              document.getElementById("divPerUbis").hidden = true;

      }
    });
    //== divSecond[0]
    ObjSecond2.addEventListener('click', function () {
      switch(varSecond2) {
          case 0:
                ObjSecond0.style.backgroundColor="#FFFFFF";
                ObjSecond1.style.backgroundColor="#FFFFFF";
                ObjSecond2.style.backgroundColor="#83D7F1";
                ObjSecond3.style.backgroundColor="#FFFFFF";
                ObjThree0.style.backgroundColor="#FFFFFF";
                ObjThree1.style.backgroundColor="#FFFFFF";
                ObjThree2.style.backgroundColor="#FFFFFF";
                ObjThree3.style.backgroundColor="#FFFFFF";
                document.getElementById("divPerUbis").hidden = false;
                document.getElementById("divPerArea").hidden = true;
                varSecond0 = 0;
                varSecond1 = 0;
                varSecond2 = 1;
                varSecond3 = 0;

                var srcScoundImgName2=objScoundImg2.src;
                var aryScoundImgName2 = srcScoundImgName2.split("/");
                var ScoundImgName2=aryScoundImgName2.reverse()[0];
                objThreeImg0.src =  defaultUrlImg + ScoundImgName2;
                objThreeImg1.src =  defaultUrlImg + ScoundImgName2;
                objThreeImg2.src =  defaultUrlImg + ScoundImgName2;
                objThreeImg3.src =  defaultUrlImg + ScoundImgName2;

                firstLabel0.innerText ="RFI";
                firstLabel1.src =  defaultUrlImg + ScoundImgName2;
                firstLabel2.innerText ="";
                firstLabel3.innerText ="PER-UBIS";

                threeFooterLabelLeft0.innerText ="Build To Suit";
                threeFooterLabelLeft1.innerText ="CORE";
                threeFooterLabelLeft2.innerText ="Microcell";
                threeFooterLabelLeft3.innerText ="Special Project";
                objFourthFooterLabelLeft0.innerText ="Area1";
                objFourthFooterLabelLeft1.innerText ="Area2";
                objFourthFooterLabelLeft2.innerText ="Area3";
                objFourthFooterLabelLeft3.innerText ="Area4";
                // VALUE RFI
                if (valArrayCheck==true){
                  document.getElementById("threeValue[0]").innerText=aryRFI[0][0].NILAI!=null?aryRFI[0][0].NILAI:0;
                  document.getElementById("threeValue[1]").innerText=aryRFI[0][1].NILAI!=null?aryRFI[0][1].NILAI:0;
                  document.getElementById("threeValue[2]").innerText=aryRFI[0][2].NILAI!=null?aryRFI[0][2].NILAI:0;
                  document.getElementById("threeValue[3]").innerText=aryRFI[0][3].NILAI!=null?aryRFI[0][3].NILAI:0;
                }
              break;
          case 1:
                firstLabel0.innerText ="";
                firstLabel1.src =  "";//defaultUrlImg + "All_Project_m.png";
                firstLabel2.innerText =""; //getfrom API
                firstLabel3.innerText ="";
                ObjSecond2.style.backgroundColor="#FFFFFF";
                ObjThree0.style.backgroundColor="#FFFFFF";
                ObjThree1.style.backgroundColor="#FFFFFF";
                ObjThree2.style.backgroundColor="#FFFFFF";
                ObjThree3.style.backgroundColor="#FFFFFF";
                document.getElementById("divPerUbis").hidden = true;
                document.getElementById("divPerArea").hidden = true;
                varSecond2 = 0;
                varPerubisCol_1=0;
              break;
          default:
              document.getElementById("divPerUbis").hidden = true;
      }
    });
    //== divSecond[0]
    ObjSecond3.addEventListener('click', function () {
      switch(varSecond3) {
          case 0:
                ObjSecond0.style.backgroundColor="#FFFFFF";
                ObjSecond1.style.backgroundColor="#FFFFFF";
                ObjSecond2.style.backgroundColor="#FFFFFF";
                ObjSecond3.style.backgroundColor="#83D7F1";

                ObjThree0.style.backgroundColor="#FFFFFF";
                ObjThree1.style.backgroundColor="#FFFFFF";
                ObjThree2.style.backgroundColor="#FFFFFF";
                ObjThree3.style.backgroundColor="#FFFFFF";
                document.getElementById("divPerUbis").hidden = false;
                document.getElementById("divPerArea").hidden = true;
                varSecond0 = 0;
                varSecond1 = 0;
                varSecond2 = 0;
                varSecond3 = 1;

                var srcScoundImgName3=objScoundImg3.src;
                var aryScoundImgName3 = srcScoundImgName3.split("/");
                var ScoundImgName3=aryScoundImgName3.reverse()[0];
                objThreeImg0.src =  defaultUrlImg + ScoundImgName3;
                objThreeImg1.src =  defaultUrlImg + ScoundImgName3;
                objThreeImg2.src =  defaultUrlImg + ScoundImgName3;
                objThreeImg3.src =  defaultUrlImg + ScoundImgName3;

                firstLabel0.innerText ="AFTER RFI";
                firstLabel1.src =  defaultUrlImg + ScoundImgName3;
                firstLabel2.innerText ="";
                firstLabel3.innerText ="PER-UBIS";

                threeFooterLabelLeft0.innerText ="BAUT";
                threeFooterLabelLeft1.innerText ="BAST 1";
                threeFooterLabelLeft2.innerText ="BAST 2";
                threeFooterLabelLeft3.innerText ="Close";

                objFourthFooterLabelLeft0.innerText ="BAUK";
                objFourthFooterLabelLeft1.innerText ="BAPS";
                objFourthFooterLabelLeft2.innerText ="Invoice";
                objFourthFooterLabelLeft3.innerText ="close";
                 //VALUE - aryARFI
                if (valArrayCheck==true){
                 document.getElementById("threeValue[0]").innerText=aryARFI[0][0].NILAI!=null?aryARFI[0][0].NILAI:0;
                 document.getElementById("threeValue[1]").innerText=aryARFI[0][1].NILAI!=null?aryARFI[0][1].NILAI:0;
                 document.getElementById("threeValue[2]").innerText=aryARFI[0][2].NILAI!=null?aryARFI[0][2].NILAI:0;
                 document.getElementById("threeValue[3]").innerText=aryARFI[0][3].NILAI!=null?aryARFI[0][3].NILAI:0;
                }
              break;
          case 1:
                firstLabel0.innerText ="";
                firstLabel1.src ="";//  defaultUrlImg + "All_Project_m.png";
                firstLabel2.innerText =""; //getfrom API
                firstLabel3.innerText ="";
                ObjSecond3.style.backgroundColor="#FFFFFF";
                ObjThree0.style.backgroundColor="#FFFFFF";
                ObjThree1.style.backgroundColor="#FFFFFF";
                ObjThree2.style.backgroundColor="#FFFFFF";
                ObjThree3.style.backgroundColor="#FFFFFF";
                document.getElementById("divPerUbis").hidden = true;
                document.getElementById("divPerArea").hidden = true;
                varSecond3 = 0;
                varPerubisCol_1=0;
              break;
          default:
              document.getElementById("divPerUbis").hidden = true;
      }
    });
    // THREE TO FOURTH
    // == PER-UBIS -> B2S
    ObjThree0.addEventListener('click', function () {
          var srcThreeImgName0=objThreeImg0.src;
          var aryThreeImgName0 = srcThreeImgName0.split("/");
          var ThreeImgName0=aryThreeImgName0.reverse()[0];

          switch(varPerubisCol_1) {
            case 0:
                  document.getElementById("divPerArea").hidden = false;
                  varPerubisCol_1= 1;
                  varPerubisCol_2= 0;
                  varPerubisCol_3= 0;
                  varPerubisCol_4= 0;
                  ObjThree0.style.backgroundColor="#83D7F1";
                  ObjThree1.style.backgroundColor="#FFFFFF";
                  ObjThree2.style.backgroundColor="#FFFFFF";
                  ObjThree3.style.backgroundColor="#FFFFFF";
                  //==Aditional Attribute on Change ==

                  // var ImgName1 = strName1.replace(srcUrlImg,"");
                  // alert("url=" + objScoundImg1.src);
                  // alert("Name=" + ImgName1);
                  // alert("last=" + rlst);
                  objFourthImg0.src = defaultUrlImg + ThreeImgName0;
                  objFourthImg1.src =defaultUrlImg + ThreeImgName0;
                  objFourthImg2.src = defaultUrlImg + ThreeImgName0;
                  objFourthImg3.src = defaultUrlImg + ThreeImgName0;
                  // alert("text tree=" + threeFooterLabelLeft0.textContent);
                  firstLabel0.innerText =threeFooterLabelLeft0.textContent;//"BUILD TO SUIT";
                  firstLabel1.src =  defaultUrlImg + ThreeImgName0;
                  firstLabel2.innerText ="";
                  firstLabel3.innerText ="PER-AREA";
                   //
                  if (valArrayCheck==true){
                    if (varSecond0==1){
                      document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_NOT_RELEASE[0][0].AREA1!=null?aryB2S_AREA_NOT_RELEASE[0][0].AREA1:0;
                      document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_NOT_RELEASE[0][0].AREA2!=null?aryB2S_AREA_NOT_RELEASE[0][0].AREA2:0;
                      document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_NOT_RELEASE[0][0].AREA3!=null?aryB2S_AREA_NOT_RELEASE[0][0].AREA3:0;
                      document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_NOT_RELEASE[0][0].AREA4!=null?aryB2S_AREA_NOT_RELEASE[0][0].AREA4:0;
                    }
                    if (varSecond1==1){
                      document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA1!=null?aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA1:0;
                      document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA2!=null?aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA2:0;
                      document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA3!=null?aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA3:0;
                      document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA4!=null?aryB2S_AREA_PRJ_ON_PIPE[0][0].AREA4:0;
                    }

                    if (varSecond2==1){
                      document.getElementById("fourthValue[0]").innerText=aryRFI[0][0].AREA1!=null?aryRFI[0][0].AREA1:0;
                      document.getElementById("fourthValue[1]").innerText=aryRFI[0][0].AREA2!=null?aryRFI[0][0].AREA2:0;
                      document.getElementById("fourthValue[2]").innerText=aryRFI[0][0].AREA3!=null?aryRFI[0][0].AREA3:0;
                      document.getElementById("fourthValue[3]").innerText=aryRFI[0][0].AREA4!=null?aryRFI[0][0].AREA4:0;
                    }
                    if (varSecond3==1){
                      document.getElementById("fourthValue[0]").innerText=aryARFI[0][0].AREA1!=null?aryARFI[0][0].AREA1:0;
                      document.getElementById("fourthValue[1]").innerText=aryARFI[0][0].AREA2!=null?aryARFI[0][0].AREA2:0;
                      document.getElementById("fourthValue[2]").innerText=aryARFI[0][0].AREA3!=null?aryARFI[0][0].AREA3:0;
                      document.getElementById("fourthValue[3]").innerText=aryARFI[0][0].AREA4!=null?aryARFI[0][0].AREA4:0;
                    }
                  }

                  break;
            case 1:
                  ObjThree0.style.backgroundColor="#FFFFFF";
                  document.getElementById("divPerArea").hidden = true;
                  varPerubisCol_1= 0;

                  firstLabel0.innerText =threeFooterLabelLeft0.textContent;//"BUILD TO SUIT";
                  firstLabel1.src =  defaultUrlImg + ThreeImgName0;
                  firstLabel2.innerText ="";
                  firstLabel3.innerText ="PER-UBIS";
                break;
            default:
                document.getElementById("divPerUbis").hidden = true;
          }
        });

    // == PER-UBIS -> CORE
    ObjThree1.addEventListener('click', function () {
          var srcThreeImgName1=objThreeImg1.src;
          var aryThreeImgName1 = srcThreeImgName1.split("/");
          var ThreeImgName1=aryThreeImgName1.reverse()[0];
          switch(varPerubisCol_2) {
            case 0:
                  document.getElementById("divPerArea").hidden = false;
                  varPerubisCol_1= 0;
                  varPerubisCol_2= 1;
                  varPerubisCol_3= 0;
                  varPerubisCol_4= 0;
                  ObjThree0.style.backgroundColor="#FFFFFF";
                  ObjThree1.style.backgroundColor="#83D7F1";
                  ObjThree2.style.backgroundColor="#FFFFFF";
                  ObjThree3.style.backgroundColor="#FFFFFF";
                  //==Aditional Attribute on Change ==
                      objFourthImg0.src = defaultUrlImg + ThreeImgName1;
                      objFourthImg1.src = defaultUrlImg + ThreeImgName1;
                      objFourthImg2.src = defaultUrlImg + ThreeImgName1;
                      objFourthImg3.src = defaultUrlImg + ThreeImgName1;

                  firstLabel0.innerText =threeFooterLabelLeft1.textContent;//"CORE";
                  firstLabel1.src =  defaultUrlImg + ThreeImgName1;
                  firstLabel2.innerText ="";
                  firstLabel3.innerText ="PER-AREA";

                  //VALUE
                  if (valArrayCheck==true){
                    if (varSecond0==1){
                      document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_NOT_RELEASE[0][1].AREA1!=null?aryB2S_AREA_NOT_RELEASE[0][1].AREA1:0;
                      document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_NOT_RELEASE[0][1].AREA2!=null?aryB2S_AREA_NOT_RELEASE[0][1].AREA2:0;
                      document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_NOT_RELEASE[0][1].AREA3!=null?aryB2S_AREA_NOT_RELEASE[0][1].AREA3:0;
                      document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_NOT_RELEASE[0][1].AREA4!=null?aryB2S_AREA_NOT_RELEASE[0][1].AREA4:0;
                    }
                    if (varSecond1==1){
                      document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA1!=null?aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA1:0;
                      document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA2!=null?aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA2:0;
                      document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA3!=null?aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA3:0;
                      document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA4!=null?aryB2S_AREA_PRJ_ON_PIPE[0][1].AREA4:0;
                    }
                    if (varSecond2==1){
                      document.getElementById("fourthValue[0]").innerText=aryRFI[0][1].AREA1!=null?aryRFI[0][1].AREA1:0;
                      document.getElementById("fourthValue[1]").innerText=aryRFI[0][1].AREA2!=null?aryRFI[0][1].AREA2:0;
                      document.getElementById("fourthValue[2]").innerText=aryRFI[0][1].AREA3!=null?aryRFI[0][1].AREA3:0;
                      document.getElementById("fourthValue[3]").innerText=aryRFI[0][1].AREA4!=null?aryRFI[0][1].AREA4:0;
                    }
                    if (varSecond3==1){
                      document.getElementById("fourthValue[0]").innerText=aryARFI[0][1].AREA1!=null?aryARFI[0][1].AREA1:0;
                      document.getElementById("fourthValue[1]").innerText=aryARFI[0][1].AREA2!=null?aryARFI[0][1].AREA2:0;
                      document.getElementById("fourthValue[2]").innerText=aryARFI[0][1].AREA3!=null?aryARFI[0][1].AREA3:0;
                      document.getElementById("fourthValue[3]").innerText=aryARFI[0][1].AREA4!=null?aryARFI[0][1].AREA4:0;
                    }
                  }
              break;
            case 1:
                  ObjThree1.style.backgroundColor="#FFFFFF";
                  varPerubisCol_2= 0;
                  document.getElementById("divPerArea").hidden = true;

                  firstLabel0.innerText =threeFooterLabelLeft1.textContent;//"CORE";
                  firstLabel1.src =  defaultUrlImg + ThreeImgName1;
                  firstLabel2.innerText ="";
                  firstLabel3.innerText ="PER-UBIS";
                break;
            default:
                document.getElementById("divPerUbis").hidden = true;
          }
    })
    // == PER-UBIS -> Microcell
    ObjThree2.addEventListener('click', function () {
          var srcThreeImgName2=objThreeImg2.src;
          var aryThreeImgName2 = srcThreeImgName2.split("/");
          var ThreeImgName2=aryThreeImgName2.reverse()[0];
          switch(varPerubisCol_3) {
            case 0:
                  document.getElementById("divPerArea").hidden = false;
                  varPerubisCol_1= 0;
                  varPerubisCol_2= 0;
                  varPerubisCol_3= 1;
                  varPerubisCol_4= 0;
                  ObjThree0.style.backgroundColor="#FFFFFF";
                  ObjThree1.style.backgroundColor="#FFFFFF";
                  ObjThree2.style.backgroundColor="#83D7F1";
                  ObjThree3.style.backgroundColor="#FFFFFF";
                  //==Aditional Attribute on Change ==
                      objFourthImg0.src = defaultUrlImg + ThreeImgName2;
                      objFourthImg1.src = defaultUrlImg + ThreeImgName2;
                      objFourthImg2.src = defaultUrlImg + ThreeImgName2;
                      objFourthImg3.src = defaultUrlImg + ThreeImgName2;
                  firstLabel0.innerText =threeFooterLabelLeft2.textContent;//"Microcell";
                  firstLabel1.src =  defaultUrlImg + ThreeImgName2;
                  firstLabel2.innerText ="";
                  firstLabel3.innerText ="PER-AREA";
                  if (valArrayCheck==true){
                    if (varSecond0==1){
                      document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_NOT_RELEASE[0][2].AREA1!=null?aryB2S_AREA_NOT_RELEASE[0][2].AREA1:0;
                      document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_NOT_RELEASE[0][2].AREA2!=null?aryB2S_AREA_NOT_RELEASE[0][2].AREA2:0;
                      document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_NOT_RELEASE[0][2].AREA3!=null?aryB2S_AREA_NOT_RELEASE[0][2].AREA3:0;
                      document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_NOT_RELEASE[0][2].AREA4!=null?aryB2S_AREA_NOT_RELEASE[0][2].AREA4:0;
                    }
                    if (varSecond1==1){
                      document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA1!=null?aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA1:0;
                      document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA2!=null?aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA2:0;
                      document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA3!=null?aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA3:0;
                      document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA4!=null?aryB2S_AREA_PRJ_ON_PIPE[0][2].AREA4:0;
                    }
                    if (varSecond2==1){
                    document.getElementById("fourthValue[0]").innerText=aryRFI[0][2].AREA1!=null?aryRFI[0][2].AREA1:0;
                    document.getElementById("fourthValue[1]").innerText=aryRFI[0][2].AREA2!=null?aryRFI[0][2].AREA2:0;
                    document.getElementById("fourthValue[2]").innerText=aryRFI[0][2].AREA3!=null?aryRFI[0][2].AREA3:0;
                    document.getElementById("fourthValue[3]").innerText=aryRFI[0][2].AREA4!=null?aryRFI[0][2].AREA4:0;
                    }
                    if (varSecond3==1){
                    document.getElementById("fourthValue[0]").innerText=aryARFI[0][2].AREA1!=null?aryARFI[0][2].AREA1:0;
                    document.getElementById("fourthValue[1]").innerText=aryARFI[0][2].AREA2!=null?aryARFI[0][2].AREA2:0;
                    document.getElementById("fourthValue[2]").innerText=aryARFI[0][2].AREA3!=null?aryARFI[0][2].AREA3:0;
                    document.getElementById("fourthValue[3]").innerText=aryARFI[0][2].AREA4!=null?aryARFI[0][2].AREA4:0;
                    }
                  }
                  break;
            case 1:
                  ObjThree2.style.backgroundColor="#FFFFFF";
                  varPerubisCol_3= 0;
                  document.getElementById("divPerArea").hidden = true;

                  firstLabel0.innerText =threeFooterLabelLeft2.textContent;//"Microcell";
                  firstLabel1.src =  defaultUrlImg + ThreeImgName2;
                  firstLabel2.innerText ="";
                  firstLabel3.innerText ="PER-UBIS";
                break;
            default:
                document.getElementById("divPerUbis").hidden = true;
          }
    })
    // == PER-UBIS -> Special Project
    ObjThree3.addEventListener('click', function () {
          var srcThreeImgName3=objThreeImg3.src;
          var aryThreeImgName3 = srcThreeImgName3.split("/");
          var ThreeImgName3=aryThreeImgName3.reverse()[0];

          switch(varPerubisCol_4) {
            case 0:
                  document.getElementById("divPerArea").hidden = false;
                  varPerubisCol_1= 0;
                  varPerubisCol_2= 0;
                  varPerubisCol_3= 0;
                  varPerubisCol_4= 1;
                  ObjThree0.style.backgroundColor="#FFFFFF";
                  ObjThree1.style.backgroundColor="#FFFFFF";
                  ObjThree2.style.backgroundColor="#FFFFFF";
                  ObjThree3.style.backgroundColor="#83D7F1";
                  //==Aditional Attribute on Change ==
                      objFourthImg0.src = defaultUrlImg + ThreeImgName3;
                      objFourthImg1.src = defaultUrlImg + ThreeImgName3;
                      objFourthImg2.src =defaultUrlImg + ThreeImgName3;
                      objFourthImg3.src = defaultUrlImg + ThreeImgName3;

                  firstLabel0.innerText =threeFooterLabelLeft3.textContent;//"Special Project";
                  firstLabel1.src =  defaultUrlImg + ThreeImgName3;
                  firstLabel2.innerText ="";
                  firstLabel3.innerText ="PER-AREA";
                  if (valArrayCheck==true){
                    if (varSecond0==1){
                      document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_NOT_RELEASE[0][3].AREA1!=null?aryB2S_AREA_NOT_RELEASE[0][3].AREA1:0;
                      document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_NOT_RELEASE[0][3].AREA2!=null?aryB2S_AREA_NOT_RELEASE[0][3].AREA2:0;
                      document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_NOT_RELEASE[0][3].AREA3!=null?aryB2S_AREA_NOT_RELEASE[0][3].AREA3:0;
                      document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_NOT_RELEASE[0][3].AREA4!=null?aryB2S_AREA_NOT_RELEASE[0][3].AREA4:0;
                    }
                    if (varSecond1==1){
                    document.getElementById("fourthValue[0]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA1!=null?aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA1:0;
                    document.getElementById("fourthValue[1]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA2!=null?aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA2:0;
                    document.getElementById("fourthValue[2]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA3!=null?aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA3:0;
                    document.getElementById("fourthValue[3]").innerText=aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA4!=null?aryB2S_AREA_PRJ_ON_PIPE[0][3].AREA4:0;
                    }
                    if (varSecond2==1){
                    document.getElementById("fourthValue[0]").innerText=aryRFI[0][3].AREA1!=null?aryRFI[0][3].AREA1:0;
                    document.getElementById("fourthValue[1]").innerText=aryRFI[0][3].AREA2!=null?aryRFI[0][3].AREA2:0;
                    document.getElementById("fourthValue[2]").innerText=aryRFI[0][3].AREA3!=null?aryRFI[0][3].AREA3:0;
                    document.getElementById("fourthValue[3]").innerText=aryRFI[0][3].AREA4!=null?aryRFI[0][3].AREA4:0;
                    }
                    if (varSecond3==1){
                    document.getElementById("fourthValue[0]").innerText=aryARFI[0][3].AREA1!=null?aryARFI[0][3].AREA1:0;
                    document.getElementById("fourthValue[1]").innerText=aryARFI[0][3].AREA2!=null?aryARFI[0][3].AREA2:0;
                    document.getElementById("fourthValue[2]").innerText=aryARFI[0][3].AREA3!=null?aryARFI[0][3].AREA3:0;
                    document.getElementById("fourthValue[3]").innerText=aryARFI[0][3].AREA4!=null?aryARFI[0][3].AREA4:0;
                    }
                  }
                  break;
            case 1:
                  ObjThree3.style.backgroundColor="#FFFFFF";
                  varPerubisCol_4= 0;
                  document.getElementById("divPerArea").hidden = true;

                  firstLabel0.innerText =threeFooterLabelLeft3.textContent;//"Special Project";
                  firstLabel1.src =  defaultUrlImg + ThreeImgName3;
                  firstLabel2.innerText ="";
                  firstLabel3.innerText ="PER-UBIS";
                break;
            default:
                document.getElementById("divPerUbis").hidden = true;
          }
    })
  }

  private secondEventMousehover(){
    // NOT-RELEASE
    var objRelease= <HTMLImageElement>document.getElementById("card-footer-release");
        objRelease.onmouseover = function () {
          objRelease.style.backgroundColor="#FA8633";
        }
        objRelease.onmouseout = function () {
          objRelease.style.backgroundColor="#E9E9E9";
        }
    // ON PIPE
    var objOnPipe = <HTMLImageElement>document.getElementById("card-footer-onPipe");
        objOnPipe.onmouseover = function () {
          objOnPipe.style.backgroundColor="#FA8633";
        }
        objOnPipe.onmouseout = function () {
          objOnPipe.style.backgroundColor="#E9E9E9";
        }
    //RFI
    var objRfi = <HTMLImageElement>document.getElementById("card-footer-onRfi");
        objRfi.onmouseover = function () {
          objRfi.style.backgroundColor="#FA8633";
        }
        objRfi.onmouseout = function () {
          objRfi.style.backgroundColor="#E9E9E9";
        }
    // BEFORE RFI
    var onAfterRfi = <HTMLImageElement>document.getElementById("card-footer-onAfterRfi");
        onAfterRfi.onmouseover = function () {
          onAfterRfi.style.backgroundColor="#FA8633";
        }
        onAfterRfi.onmouseout = function () {
          onAfterRfi.style.backgroundColor="#E9E9E9";
        }
  }

  //THREE - PerUbis
  private trheeEventMousehover(){
    // BUILT TO SUIT
    var objB2c= <HTMLImageElement>document.getElementById("three-card-footer-b2c");
        objB2c.onmouseover = function () {
          objB2c.style.backgroundColor="#FA8633";
        }
        objB2c.onmouseout = function () {
          objB2c.style.backgroundColor="#E9E9E9";
        }
    // CORE
    var objCore = <HTMLImageElement>document.getElementById("three-card-footer-core");
        objCore.onmouseover = function () {
          objCore.style.backgroundColor="#FA8633";
        }
        objCore.onmouseout = function () {
          objCore.style.backgroundColor="#E9E9E9";
        }
    //MICROCELL
    var objMicrocell = <HTMLImageElement>document.getElementById("three-card-footer-microcell");
        objMicrocell.onmouseover = function () {
          objMicrocell.style.backgroundColor="#FA8633";
        }
        objMicrocell.onmouseout = function () {
          objMicrocell.style.backgroundColor="#E9E9E9";
        }
    // SPECIAL PROJECT
    var ObjSprj = <HTMLImageElement>document.getElementById("three-card-footer-specialPrj");
        ObjSprj.onmouseover = function () {
          ObjSprj.style.backgroundColor="#FA8633";
        }
        ObjSprj.onmouseout = function () {
          ObjSprj.style.backgroundColor="#E9E9E9";
        }
  }

  //FOURTH - PerArea
  private fourthEventMousehover(){
    // AREA 1
    var objArea1= <HTMLImageElement>document.getElementById("fourth-card-footer-area1");
        objArea1.onmouseover = function () {
          objArea1.style.backgroundColor="#FA8633";
        }
        objArea1.onmouseout = function () {
          objArea1.style.backgroundColor="#E9E9E9";
        }
    // AREA 2
    var objArea2 = <HTMLImageElement>document.getElementById("fourth-card-footer-area2");
        objArea2.onmouseover = function () {
          objArea2.style.backgroundColor="#FA8633";
        }
        objArea2.onmouseout = function () {
          objArea2.style.backgroundColor="#E9E9E9";
        }
    //AREA 3
    var objArea3 = <HTMLImageElement>document.getElementById("fourth-card-footer-area3");
        objArea3.onmouseover = function () {
          objArea3.style.backgroundColor="#FA8633";
        }
        objArea3.onmouseout = function () {
          objArea3.style.backgroundColor="#E9E9E9";
        }
    // AREA 4
    var ObjArea4 = <HTMLImageElement>document.getElementById("fourth-card-footer-area4");
        ObjArea4.onmouseover = function () {
          ObjArea4.style.backgroundColor="#FA8633";
        }
        ObjArea4.onmouseout = function () {
          ObjArea4.style.backgroundColor="#E9E9E9";
        }
  }

  private drilldown(){
    var myChart = HighCharts.chart('allPrjChart', {
      chart: {
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
  private goToAccount() {
    this.navCtrl.push(SettingsPage);
  }

  // presentNotifications(myEvent) {
  //   console.log(myEvent);
  //   let popover = this.popoverCtrl.create(NotificationsPage);
  //   popover.present({
  //     ev: myEvent
  //   });
  // }



}

//
