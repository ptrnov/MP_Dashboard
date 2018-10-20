import { Component } from '@angular/core';
import { AlertController,ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import { SelectSearchableComponent  } from 'ionic-select-searchable';
import { DashboardAllProvider } from "../../providers/dashboard-all/dashboard-all";
import { DatabaseProvider } from '../../providers/database/database';
import * as Highcharts from "highcharts";
import addMore from "highcharts/highcharts-more";
import {Dsh7ModalFlowPage} from '../dsh7-modal-flow/dsh7-modal-flow';

// var aryListMitra=[];

class Port {
  public VENDOR_ID: number;
  public VENDOR_NM: string;
}
var setTotal=0;
var clk_b2s=0;
var clk_core=0;
var clk_micro=0;
var clk_sp=0;
var clk_b2sArea1;
var clk_b2sArea2;
var clk_b2sArea3;
var clk_b2sArea4;
var clk_coreArea1;
var clk_coreArea2;
var clk_coreArea3;
var clk_coreArea4;
var clk_microArea1;
var clk_microArea2;
var clk_microArea3;
var clk_microArea4;
var clk_spArea1;
var clk_spArea2;
var clk_spArea3;
var clk_spArea4;
var charting;
var dsh6_charting;
@IonicPage()
@Component({
  selector: 'page-dsh6-home',
  templateUrl: 'dsh6-home.html',
})
export class Dsh6HomePage {
  // ports: Port[];
  port: Port;
  aryListMitra: Port[];
  public aryValueMitra;
  public aryb2sArea1;
  public aryb2sArea2;
  public aryb2sArea3;
  public aryb2sArea4;
    public aryCoreArea1;
    public aryCoreArea2;
    public aryCoreArea3;
    public aryCoreArea4;
  public aryMicroArea1;
  public aryMicroArea2;
  public aryMicroArea3;
  public aryMicroArea4;
    public arySpecialArea1;
    public arySpecialArea2;
    public arySpecialArea3;
    public arySpecialArea4;


  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private dashboarAll: DashboardAllProvider,
      private database: DatabaseProvider,
      public modalCtrl: ModalController,
      public alertCtrl: AlertController,
  ) {
      this.dashboarAll.postDatax("Mobile_Dashboard/mitralist/","").then((result:any) => {
      this.aryListMitra=result.listMitra;
      console.log("result.listMitra=",result.listMitra)
  });
    // this.ports = [
    //   { id: 1, name: 'Tokai' },
    //   { id: 2, name: 'Vladivostok' },
    //   { id: 3, name: 'Navlakhi' }
    // ];


  }
  ngOnInit() {
    setTimeout(() => {
      // this.dashboarAll.postDatax("Mobile_Dashboard/mitralist/","").then((result:any) => {
      //   this.aryListMitra=result.listMitra;
      //   console.log("result.listMitra=",result.listMitra)
      // });
      document.getElementById("b2s_area").hidden=true;
      document.getElementById("core_area").hidden=true;
      document.getElementById("micro_area").hidden=true;
      document.getElementById("special_area").hidden=true;
      document.getElementById("card-view").hidden=true;
      this.initCharting();
      this.getListMitra();
    }, 100);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dsh6HomePage');

  }

  getListMitra():void{
    // var aryRslt=[];
    //     aryRslt=[];
    // var querySql ="SELECT DISTINCT VENDOR_ID,VENDOR_NM FROM TBL_MITRALIST ORDER BY VENDOR_NM ASC";
    // this.database.selectData(querySql).then(data=>{
    //   aryRslt.push(data);
    //   this.aryListMitra=aryRslt[0];
    // });
  }
  portChange(event: {
    component: SelectSearchableComponent,
    value: any
  }) {
      console.log('port:', event.value['vendor_id']);
      this.dashboarAll.postDatax("Mobile_Dashboard/mitralistId/",event.value['vendor_id']).then((result:any) => {
        this.aryValueMitra=result;
        //b2s
        this.aryb2sArea1=result.b2s.area1;
        this.aryb2sArea2=result.b2s.area2;
        this.aryb2sArea3=result.b2s.area3;
        this.aryb2sArea4=result.b2s.area4;
        //core
        this.aryMicroArea1=result.cre.area1;
        this.aryCoreArea2=result.cre.area2;
        this.aryCoreArea3=result.cre.area3;
        this.aryCoreArea4=result.cre.area4;
         //Microcell
        this.aryMicroArea1=result.mcp.area1;
        this.aryMicroArea2=result.mcp.area2;
        this.aryMicroArea3=result.mcp.area3;
        this.aryMicroArea4=result.mcp.area4;
         //Special
        this.arySpecialArea1=result.spr.area1;
        this.arySpecialArea2=result.spr.area2;
        this.arySpecialArea3=result.spr.area3;
        this.arySpecialArea4=result.spr.area4;

        console.log("total_project=",result.total_project);
        document.getElementById("ttl-prj").innerHTML="Total Project ("+result.total_project+")";
        document.getElementById("b2s").innerHTML="B2S("+result.total_project+")";
        document.getElementById("ttl-activity").innerHTML=result.total_activity;
        document.getElementById("progress-nilai").innerHTML=result.total_progress;
        document.getElementById("waspang-approval").innerHTML=result.waspang_approval;
        document.getElementById("waiting-pm-approval").innerHTML=result.waiting_pmapproval;
        document.getElementById("pm-approval").innerHTML=result.pm_approval;

        //SERIAL
        setTimeout(() => {
          this.updateCharting(result);
        }, 100);
      });
  }


  public viewFlowClick(){
      let alert1= this.alertCtrl.create({
        title: '<p>Approval Flow<p>',
        //subTitle:'subtitle','
        message: "<img class='home-satelit' src='assets/img/approval_flow.jpeg'>",
        // cssClass:'modal-flow'
      });

      alert1.present();
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }

  public setTotalClick(event){
    if(setTotal==0){
      document.getElementById("card-view").hidden=false;
      setTotal=1;
    }else{
      document.getElementById("card-view").hidden=true;
      setTotal=0;
    }
  }
  public setB2sClick(){
    if (clk_b2s==0){
      document.getElementById("b2s_area").hidden=false;
      document.getElementById("b2s_area1").hidden=true;
      document.getElementById("b2s_area2").hidden=true;
      document.getElementById("b2s_area3").hidden=true;
      document.getElementById("b2s_area4").hidden=true;
      clk_b2s=1;
    }else{
      document.getElementById("b2s_area").hidden=true;
      clk_b2s=0;
    }
  }
  /** B2S-AREA CLICK */
  public b2sArea1(){
    if (clk_b2sArea1==0){
      document.getElementById("b2s_area1").hidden=false;
      clk_b2sArea1=1;
    }else{
      document.getElementById("b2s_area1").hidden=true;
      clk_b2sArea1=0;
    }
  }
  public b2sArea2(){
    if (clk_b2sArea2==0){
      document.getElementById("b2s_area2").hidden=false;
      clk_b2sArea2=1;
    }else{
      document.getElementById("b2s_area2").hidden=true;
      clk_b2sArea2=0;
    }
  }
  public b2sArea3(){
    if (clk_b2sArea3==0){
      document.getElementById("b2s_area3").hidden=false;
      clk_b2sArea3=1;
    }else{
      document.getElementById("b2s_area3").hidden=true;
      clk_b2sArea3=0;
    }
  }
  public b2sArea4(){
    if (clk_b2sArea4==0){
      document.getElementById("b2s_area4").hidden=false;
      clk_b2sArea4=1;
    }else{
      document.getElementById("b2s_area4").hidden=true;
      clk_b2sArea4=0;
    }
  }

  public setCoreClick(){
    if (clk_core==0){
      document.getElementById("core_area").hidden=false;
      // document.getElementById("core_area1").hidden=true;
      // document.getElementById("core_area2").hidden=true;
      // document.getElementById("core_area3").hidden=true;
      // document.getElementById("core_area4").hidden=true;
      clk_core=1;
    }else{
      document.getElementById("core_area").hidden=true;
      clk_core=0;
    }
  }
  /** CORE-AREA CLICK */
  public coreArea1(){
    if (clk_coreArea1==0){
      document.getElementById("core_area1").hidden=false;
      clk_coreArea1=1;
    }else{
      document.getElementById("core_area1").hidden=true;
      clk_coreArea1=0;
    }
  }
  public coreArea2(){
    if (clk_coreArea2==0){
      document.getElementById("core_area2").hidden=false;
      clk_coreArea2=1;
    }else{
      document.getElementById("core_area2").hidden=true;
      clk_coreArea2=0;
    }
  }
  public coreArea3(){
    if (clk_coreArea3==0){
      document.getElementById("core_area3").hidden=false;
      clk_coreArea3=1;
    }else{
      document.getElementById("core_area3").hidden=true;
      clk_coreArea3=0;
    }
  }
  public coreArea4(){
    if (clk_coreArea4==0){
      document.getElementById("core_area4").hidden=false;
      clk_coreArea4=1;
    }else{
      document.getElementById("core_area4").hidden=true;
      clk_coreArea4=0;
    }
  }

  public setMicroClick(){
    if (clk_micro==0){
      document.getElementById("micro_area").hidden=false;
      document.getElementById("micro_area1").hidden=true;
      document.getElementById("micro_area2").hidden=true;
      document.getElementById("micro_area3").hidden=true;
      document.getElementById("micro_area4").hidden=true;
      clk_micro=1;
    }else{
      document.getElementById("micro_area").hidden=true;
      clk_micro=0;
    }
  }
 /** Micro-AREA CLICK */
  public microArea1(){
    if (clk_microArea1==0){
      document.getElementById("micro_area1").hidden=false;
      clk_microArea1=1;
    }else{
      document.getElementById("micro_area1").hidden=true;
      clk_microArea1=0;
    }
  }
  public microArea2(){
    if (clk_microArea2==0){
      document.getElementById("micro_area2").hidden=false;
      clk_microArea2=1;
    }else{
      document.getElementById("micro_area2").hidden=true;
      clk_microArea2=0;
    }
  }
  public microArea3(){
    if (clk_microArea3==0){
      document.getElementById("micro_area3").hidden=false;
      clk_microArea3=1;
    }else{
      document.getElementById("micro_area3").hidden=true;
      clk_microArea3=0;
    }
  }
  public microArea4(){
    if (clk_microArea4==0){
      document.getElementById("micro_area4").hidden=false;
      clk_microArea4=1;
    }else{
      document.getElementById("micro_area4").hidden=true;
      clk_microArea4=0;
    }
  }

  public setSpClick(){
    if (clk_sp==0){
      document.getElementById("special_area").hidden=false;
      document.getElementById("sp_area1").hidden=true;
      document.getElementById("sp_area2").hidden=true;
      document.getElementById("sp_area3").hidden=true;
      document.getElementById("sp_area4").hidden=true
      clk_sp=1;
    }else{
      document.getElementById("special_area").hidden=true;
      clk_sp=0;
    }
  }
   /** Special-AREA CLICK */
   public spArea1(){
    if (clk_spArea1==0){
      document.getElementById("sp_area1").hidden=false;
      clk_spArea1=1;
    }else{
      document.getElementById("sp_area1").hidden=true;
      clk_spArea1=0;
    }
  }
  public spArea2(){
    if (clk_spArea2==0){
      document.getElementById("sp_area2").hidden=false;
      clk_spArea2=1;
    }else{
      document.getElementById("sp_area2").hidden=true;
      clk_spArea2=0;
    }
  }
  public spArea3(){
    if (clk_spArea3==0){
      document.getElementById("sp_area3").hidden=false;
      clk_spArea3=1;
    }else{
      document.getElementById("sp_area3").hidden=true;
      clk_spArea3=0;
    }
  }
  public spArea4(){
    if (clk_spArea4==0){
      document.getElementById("sp_area4").hidden=false;
      clk_spArea4=1;
    }else{
      document.getElementById("sp_area4").hidden=true;
      clk_spArea4=0;
    }
  }

  updateCharting(dataSerial:any){
    //var arySerial=[];
   // arySerial.push(dataSerial);
    var a=JSON.stringify(dataSerial.serial);
    dataSerial.serial.forEach(el=>{
      console.log("el1=", el.Progress100);
      console.log("el2=", el.ProgressNull);
      console.log("el3=", el.Approve);
      console.log("el4=", el.NeedApproval);
      console.log("el5=", el.Reject);
      dsh6_charting.update({
        series: [{
            name: 'Brands',
            // colorByPoint: true,
            data: [
              {
                name: 'Progress Is 100% -',
                y: el.Progress100,
                color:'blue',
                sliced: true,
                selected: true
              },{
                color:'gray',
                name: 'Progress Is Null',
                y: el.ProgressNull
              },{
                color:'green',
                name: 'Approve',
                y:el.Approve
              },{
                color:'orange',
                name: 'Need Approval',
                y:el.NeedApproval
              },        {
                color:'red',
                name: 'Reject',
                y:el.Reject
              }
            ]
        }]
      });

    });
  }

  initCharting(){
    dsh6_charting=Highcharts.chart({
      chart: {
        renderTo:"chart-donut",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Activity Status by Mitra'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color:'(Highcharts && Highcharts.theme.contrastTextColor)' || 'black'
            }
          }
        }
      },
      series: [{
          name: 'Brands',
          // colorByPoint: true,
          data: [{
            name: 'Progress Is 100% -',
            y: 10,
            color:'blue',
            sliced: true,
            selected: true
          },{
            color:'gray',
            name: 'Progress Is Null',
            y: 10
          },{
            color:'green',
            name: 'Approve',
            y: 10
          },{
            color:'orange',
            name: 'Need Approval',
            y: 10
          },        {
            color:'red',
            name: 'Reject',
            y: 10
          }
        ]
      }]
    });
  }



}
