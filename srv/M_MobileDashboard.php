<?php
header('Access-Control-Allow-Origin: *');
defined('BASEPATH') OR exit('No direct script access allowed');
include(APPPATH.'libraries/php_image_magician.php');


class M_MobileDashboard extends CI_Model
{
    private $_mongoDb;

    function __construct() {
        parent::__construct();
        $this->load->database();
    }    
    /* LIST USER
    * Event     : ViewLoad & ViewInit (Observable)
    * Controller: Mobile_Dashboard
    * Activity  : listuser
    * Rest Api  : Request & respon
    * Filter    : BOD & Super Admin.
    * Author    : ptr.nov@gmail.com
    */
    public function ambilUser(){
        $query = $this->db->query("
            SELECT user_id AS USER_ID,username AS USERNAME, pass AS PASSWORD,
                   real_name AS REAL_NAME, email AS EMAIL, user_group AS USER_GROUP
            FROM users
            WHERE user_group IN ('BOD','super_admin')               
        ");
        return $query->result();
    }

    /* VALIDATE USER
    * Event     : ViewLoad & ViewInit (Observable)
    * Controller: Mobile_Dashboard
    * Activity  : listuser
    * Rest Api  : Request & respon
    * Filter    : BOD & Super Admin.
    * Author    : ptr.nov@gmail.com
    */
    public function validateLogin($data){
        $query = $this->db->query("
            SELECT user_id AS USER_ID,username AS USERNAME, pass AS PASSWORD,
                   real_name AS REAL_NAME, email AS EMAIL, user_group AS USER_GROUP
            FROM users
            WHERE username='".$data['username']."'
            AND pass='".$data['password']."'
            AND user_group IN ('BOD','super_admin')               
        ");
        if ($query->num_rows() > 0){
             return $query->result();
            return $query->result()[0];
        }else{
            $err[]= ["STATUS"=>false];
            // $err= ["STATUS"=>false];
            return $err;
        }       
    }

    /* DASHBOARD ALL
    * Event     : ViewLoad & ViewInit (Observable)
    * Controller: Mobile_Dashboard
    * Activity  : allproject
    * Rest Api  : Request & respon
    * Filter    : B2S,Core,Microcell,Special.
    * Author    : ptr.nov@gmail.com
    */
    public function dashAll($request){
        $month =$request['bulan'];
        $year =$request['tahun'];
        if($month!=0 AND $year!=0){
             /* FILTER BY BULAN & TAHUN **/
            $query_persentasi_not = $this->db->query("SELECT bulan,tahun,SUM(tot_tt::integer) AS to_nr from dashboard_front_detail WHERE tahun = '$year' AND bulan = '$month' AND kat='NOT RELEASE' GROUP BY bulan,tahun")->row();
            $query_persentasi_pop = $this->db->query("SELECT bulan,tahun,SUM(tot_tt::integer) AS to_op from dashboard_front_detail WHERE tahun = '$year' AND bulan = '$month' AND kat='ON PIPE' GROUP BY bulan,tahun")->row();
            $query_persentasi_rfi = $this->db->query("SELECT bulan,tahun,SUM(tot_tt::integer) AS to_nr from dashboard_front_detail WHERE tahun = '$year' AND bulan = '$month' AND kat='RFI' GROUP BY bulan,tahun")->row();
                $ttlAll=$query_persentasi_rfi->to_nr + $query_persentasi_pop->to_op + $query_persentasi_not->to_nr;
                $dataSub['URUTAN'] = "0";
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="ALL_PRJ";
                $dataSub['NILAI'] = $ttlAll;
                $dataSub['PERSEN'] = 0;
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['BULAN'] = $query_persentasi_not->bulan;
                $dataSub['TAHUN'] = $query_persentasi_not->tahun;
            $dataJoin[]=$dataSub;
                // $data['persentase_not'] = $query_persentasi_not;
                $dataSub['URUTAN'] = "1";
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="NOT_RELEASE";
                $dataSub['NILAI'] = $query_persentasi_not->to_nr;
                $dataSub['PERSEN'] = round(($query_persentasi_not->to_nr/$ttlAll) * 100);
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['BULAN'] = $query_persentasi_not->bulan;
                $dataSub['TAHUN'] = $query_persentasi_not->tahun;
            $dataJoin[]=$dataSub;
                // $data['persentase_pop'] = $query_persentasi_pop;
                $dataSub['URUTAN'] = "2";
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="PRJ_ON_PIPE";
                $dataSub['NILAI'] = $query_persentasi_pop->to_op;
                $dataSub['PERSEN'] = round(($query_persentasi_pop->to_op/$ttlAll) * 100);
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['BULAN'] = $query_persentasi_pop->bulan;
                $dataSub['TAHUN'] = $query_persentasi_pop->tahun;
            $dataJoin[]=$dataSub;
                // $data['persentase_rfi'] = $query_persentasi_rfi;
                $dataSub['URUTAN'] = "3";
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="RFI";
                $dataSub['NILAI'] = $query_persentasi_rfi->to_nr;
                $dataSub['PERSEN'] = round(($query_persentasi_rfi->to_nr/$ttlAll) * 100);
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['BULAN'] = $query_persentasi_rfi->bulan;
                $dataSub['TAHUN'] = $query_persentasi_rfi->tahun;
            $dataJoin[]=$dataSub; 
                // $data['persentase_rfi'] = $query_persentasi_rfi;
                $dataSub['URUTAN'] = "4";
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="ARFI";
                $dataSub['NILAI'] = 0;
                $dataSub['PERSEN'] = 0;
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['BULAN'] = $query_persentasi_rfi->bulan;
                $dataSub['TAHUN'] = $query_persentasi_rfi->tahun;
            $dataJoin[]=$dataSub; 
                //-NOT_RELEASE & AREA
                // $ubis_one = $this->db->query("SELECT ubis, tot_ubis, kat FROM dashboard_front WHERE kat ='NOT RELEASE' GROUP BY ubis, tot_ubis, kat ORDER BY ubis")->result();
                // $data['ubis_one'] = $ubis_one;
                //$getareaB2SNOT_RELEASE = $this->db->query("SELECT area, tot_area, ubis FROM dashboard_front WHERE kat ='NOT RELEASE' AND ubis = 'B2S' ORDER BY area ASC")->result();
                // $data['getareaB2SNOT_RELEASE'] = $getareaB2SNOT_RELEASE;
                $ubis_one = $this->db->query("
                    SELECT (ROW_NUMBER() OVER (ORDER BY x1.ubis))-1 AS URUTAN,x1.bulan,x1.tahun,x1.ubis,max(x1.tot_ubis) AS tt_ubis,
                        max(x1.area) as tt_area,MAX(x1.tot_area) as tot_area,
                        MAX(x1.area_1) as area_1,MAX(x1.area_2) as area_2,MAX(x1.area_3) as area_3,MAX(x1.area_4) as area_4
                        FROM	
                            (
                                SELECT b.bulan,b.tahun,b.ubis,a.tot_ubis,b.area, b.tot_area,
                                (CASE WHEN b.area='A1' THEN b.tot_tt::integer ELSE 0 END) as area_1,
                                (CASE WHEN b.area='A2' THEN b.tot_tt::integer ELSE 0 END) as area_2,
                                (CASE WHEN b.area='A3' THEN b.tot_tt::integer ELSE 0 END) as area_3,
                                (CASE WHEN b.area='A4' THEN b.tot_tt::integer ELSE 0 END) as area_4
                                FROM dashboard_front_detail b LEFT JOIN
                                (SELECT ubis, kat, sum(tot_tt::integer) as tot_ubis  FROM dashboard_front_detail WHERE tahun = '$year' AND bulan = '$month' AND kat ='NOT RELEASE' GROUP BY ubis, kat, tot_ubis  ORDER BY ubis ASC, tot_ubis DESC) a
                                ON a.ubis=b.ubis
                                WHERE tahun = '$year' AND bulan = '$month' AND b.kat ='NOT RELEASE' 
                                ORDER BY b.ubis,b.area ASC
                        ) x1 GROUP BY x1.ubis,x1.bulan,x1.tahun;
                ")->result();
                foreach($ubis_one as $row => $value){
                    $dataSub['URUTAN'] = (string)$value->urutan;
                    $dataSub['SEQ'] ="NOT_RELEASE";
                    $dataSub['GRP'] ="NOT_RELEASE";
                    $dataSub['NILAI'] = $value->tt_ubis;
                    $dataSub['PERSEN'] = 0;
                    $dataSub['AREA1'] = $value->area_1!=null?$value->area_1:0;
                    $dataSub['AREA2'] = $value->area_2;
                    $dataSub['AREA3'] = $value->area_3;
                    $dataSub['AREA4'] = $value->area_4;
                    $dataSub['BULAN'] = $value->bulan;
                    $dataSub['TAHUN'] = $value->tahun;
                $dataJoin[]=$dataSub; 
                }
                //-POP UBIS & AREA
                $ubis_one = $this->db->query("
                    SELECT (ROW_NUMBER() OVER (ORDER BY x1.ubis))-1 AS URUTAN,x1.bulan,x1.tahun,x1.ubis,max(x1.tot_ubis) AS tt_ubis,
                        max(x1.area) as tt_area,MAX(x1.tot_area) as tot_area,
                        MAX(x1.area_1) as area_1,MAX(x1.area_2) as area_2,MAX(x1.area_3) as area_3,MAX(x1.area_4) as area_4
                        FROM	
                            (
                                SELECT b.bulan,b.tahun,b.ubis,a.tot_ubis,b.area, b.tot_area,
                                (CASE WHEN b.area='A1' THEN b.tot_tt::integer ELSE 0 END) as area_1,
                                (CASE WHEN b.area='A2' THEN b.tot_tt::integer ELSE 0 END) as area_2,
                                (CASE WHEN b.area='A3' THEN b.tot_tt::integer ELSE 0 END) as area_3,
                                (CASE WHEN b.area='A4' THEN b.tot_tt::integer ELSE 0 END) as area_4
                                FROM dashboard_front_detail b 
                                                                LEFT JOIN
                                (SELECT ubis, kat, sum(tot_tt::integer) as tot_ubis  FROM dashboard_front_detail WHERE tahun = '$year' AND bulan = '$month' AND kat ='ON PIPE' GROUP BY ubis, kat, tot_ubis  ORDER BY ubis ASC, tot_ubis DESC) a
                                ON a.ubis=b.ubis
                                WHERE tahun = '$year' AND bulan = '$month' AND b.kat ='ON PIPE'
                                ORDER BY b.ubis,b.area ASC
                        ) x1 GROUP BY x1.ubis,x1.bulan,x1.tahun;
                ")->result();
                foreach($ubis_one as $row => $value){
                    $dataSub['URUTAN'] = (string)$value->urutan;
                    $dataSub['SEQ'] ="NOT_RELEASE";
                    $dataSub['GRP'] ="PRJ_ON_PIPE";
                    $dataSub['NILAI'] = $value->tt_ubis;
                    $dataSub['PERSEN'] = 0;
                    $dataSub['AREA1'] = $value->area_1;
                    $dataSub['AREA2'] = $value->area_2;
                    $dataSub['AREA3'] = $value->area_3;
                    $dataSub['AREA4'] = $value->area_4;
                    $dataSub['BULAN'] = $value->bulan;
                    $dataSub['TAHUN'] = $value->tahun;
                $dataJoin[]=$dataSub; 
                }

                //-RFI UBIS & AREA
                $ubis_one = $this->db->query("
                        SELECT (ROW_NUMBER() OVER (ORDER BY x1.ubis))-1 AS URUTAN,x1.bulan,x1.tahun,x1.ubis,max(x1.tot_ubis) AS tt_ubis,
                        max(x1.area) as tt_area,MAX(x1.tot_area) as tot_area,
                        MAX(x1.area_1) as area_1,MAX(x1.area_2) as area_2,MAX(x1.area_3) as area_3,MAX(x1.area_4) as area_4
                        FROM	
                            (
                                SELECT b.bulan,b.tahun,b.ubis,a.tot_ubis,b.area, b.tot_area,
                                (CASE WHEN b.area='A1' THEN b.tot_tt::integer ELSE 0 END) as area_1,
                                (CASE WHEN b.area='A2' THEN b.tot_tt::integer ELSE 0 END) as area_2,
                                (CASE WHEN b.area='A3' THEN b.tot_tt::integer ELSE 0 END) as area_3,
                                (CASE WHEN b.area='A4' THEN b.tot_tt::integer ELSE 0 END) as area_4
                                FROM dashboard_front_detail b 
                                                                LEFT JOIN
                                (SELECT ubis, kat, sum(tot_tt::integer) as tot_ubis  FROM dashboard_front_detail WHERE tahun = '$year' AND bulan = '$month' AND kat ='RFI' GROUP BY ubis, kat, tot_ubis  ORDER BY ubis ASC, tot_ubis DESC) a
                                ON a.ubis=b.ubis
                                WHERE tahun = '$year' AND bulan = '$month' AND b.kat ='RFI'
                                ORDER BY b.ubis,b.area ASC
                        ) x1 GROUP BY x1.ubis,x1.bulan,x1.tahun;
                ")->result();
                foreach($ubis_one as $row => $value){
                    $dataSub['URUTAN'] = (string)$value->urutan;
                    $dataSub['SEQ'] ="NOT_RELEASE";
                    $dataSub['GRP'] ="RFI";
                    $dataSub['NILAI'] = $value->tt_ubis;
                    $dataSub['PERSEN'] = 0;
                    $dataSub['AREA1'] = $value->area_1;
                    $dataSub['AREA2'] = $value->area_2;
                    $dataSub['AREA3'] = $value->area_3;
                    $dataSub['AREA4'] = $value->area_4;
                    $dataSub['BULAN'] = $value->bulan;
                    $dataSub['TAHUN'] = $value->tahun;
                $dataJoin[]=$dataSub; 
                }      
                //AFTER RFI
                for ($i = 0; $i <=3; $i++) {
                        $dataSub['URUTAN'] = (string)$i;
                        $dataSub['SEQ'] ="NOT_RELEASE";
                        $dataSub['GRP'] ="ARFI";
                        $dataSub['NILAI'] = 0;
                        $dataSub['PERSEN'] = 0;
                        $dataSub['AREA1'] = 0;
                        $dataSub['AREA2'] = 0;
                        $dataSub['AREA3'] = 0;
                        $dataSub['AREA4'] = 0;
                        $dataSub['BULAN'] = $query_persentasi_not->bulan;
                        $dataSub['TAHUN'] = $query_persentasi_not->tahun;
                    $dataJoin[]=$dataSub;   
                }
        }else{
        /* ALL DATA **/    
            $query_persentasi_not = $this->db->query("SELECT to_char(tgl, 'mm') as bulan,to_char(tgl, 'yyyy') as tahun,SUM(tot_area) AS to_nr from dashboard_front WHERE kat='NOT RELEASE' GROUP BY tgl")->row();
            $query_persentasi_pop = $this->db->query("SELECT to_char(tgl, 'mm') as bulan,to_char(tgl, 'yyyy') as tahun,SUM(tot_area) AS to_op from dashboard_front WHERE kat='ON PIPE' GROUP BY tgl")->row();
            $query_persentasi_rfi = $this->db->query("SELECT to_char(tgl, 'mm') as bulan,to_char(tgl, 'yyyy') as tahun,SUM(tot_area) AS to_nr from dashboard_front WHERE kat='RFI' GROUP BY tgl")->row();

                $ttlAll=$query_persentasi_rfi->to_nr + $query_persentasi_pop->to_op + $query_persentasi_not->to_nr;
                $dataSub['URUTAN'] = "0";
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="ALL_PRJ";
                $dataSub['NILAI'] = $ttlAll;
                $dataSub['PERSEN'] = 0;
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['BULAN'] = $query_persentasi_not->bulan;
                $dataSub['TAHUN'] = $query_persentasi_not->tahun;
            $dataJoin[]=$dataSub;
                // $data['persentase_not'] = $query_persentasi_not;
                $dataSub['URUTAN'] = "1";
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="NOT_RELEASE";
                $dataSub['NILAI'] = $query_persentasi_not->to_nr;
                $dataSub['PERSEN'] = round(($query_persentasi_not->to_nr/$ttlAll) * 100);
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['BULAN'] = $query_persentasi_not->bulan;
                $dataSub['TAHUN'] = $query_persentasi_not->tahun;
            $dataJoin[]=$dataSub;
                // $data['persentase_pop'] = $query_persentasi_pop;
                $dataSub['URUTAN'] = "2";
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="PRJ_ON_PIPE";
                $dataSub['NILAI'] = $query_persentasi_pop->to_op;
                $dataSub['PERSEN'] = round(($query_persentasi_pop->to_op/$ttlAll) * 100);
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['BULAN'] = $query_persentasi_not->bulan;
                $dataSub['TAHUN'] = $query_persentasi_not->tahun;
            $dataJoin[]=$dataSub;
                // $data['persentase_rfi'] = $query_persentasi_rfi;
                $dataSub['URUTAN'] = "3";
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="RFI";
                $dataSub['NILAI'] = $query_persentasi_rfi->to_nr;
                $dataSub['PERSEN'] = round(($query_persentasi_rfi->to_nr/$ttlAll) * 100);
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['BULAN'] = $query_persentasi_not->bulan;
                $dataSub['TAHUN'] = $query_persentasi_not->tahun;
            $dataJoin[]=$dataSub; 
                // $data['persentase_rfi'] = $query_persentasi_rfi;
                $dataSub['URUTAN'] = "4";
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="ARFI";
                $dataSub['NILAI'] = 0;
                $dataSub['PERSEN'] = 0;
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['BULAN'] = $query_persentasi_not->bulan;
                $dataSub['TAHUN'] = $query_persentasi_not->tahun;
            $dataJoin[]=$dataSub; 
                //-NOT_RELEASE & AREA
                // $ubis_one = $this->db->query("SELECT ubis, tot_ubis, kat FROM dashboard_front WHERE kat ='NOT RELEASE' GROUP BY ubis, tot_ubis, kat ORDER BY ubis")->result();
                // $data['ubis_one'] = $ubis_one;
                //$getareaB2SNOT_RELEASE = $this->db->query("SELECT area, tot_area, ubis FROM dashboard_front WHERE kat ='NOT RELEASE' AND ubis = 'B2S' ORDER BY area ASC")->result();
                // $data['getareaB2SNOT_RELEASE'] = $getareaB2SNOT_RELEASE;
                $ubis_one = $this->db->query("
                        SELECT x1.bulan,x1.tahun,(ROW_NUMBER() OVER (ORDER BY ubis))-1 AS URUTAN,x1.ubis,max(x1.tot_ubis) AS tt_ubis,max(x1.area) as tt_area,MAX(x1.tot_area),
                                MAX(x1.area_1) AS area_1,MAX(x1.area_2) AS area_2,MAX(x1.area_3) AS area_3 ,MAX(x1.area_4) AS area_4
                        FROM (
                            SELECT to_char(b.tgl, 'mm') as bulan,to_char(b.tgl, 'yyyy') as tahun,b.ubis,a.tot_ubis,b.area, b.tot_area,
                            (CASE WHEN area='A1' THEN b.tot_area ELSE 0 END) as area_1,
                            (CASE WHEN area='A2' THEN b.tot_area ELSE 0 END) as area_2,
                            (CASE WHEN area='A3' THEN b.tot_area ELSE 0 END) as area_3,
                            (CASE WHEN area='A4' THEN b.tot_area ELSE 0 END) as area_4
                            FROM dashboard_front b LEFT JOIN
                            (SELECT ubis, tot_ubis, kat FROM dashboard_front WHERE kat ='NOT RELEASE' GROUP BY ubis, tot_ubis, kat ORDER BY ubis) a
                            ON a.ubis=b.ubis
                            WHERE b.kat ='NOT RELEASE' 
                            ORDER BY b.ubis,b.area ASC	
                        ) x1 GROUP BY x1.ubis,x1.bulan,x1.tahun;
                ")->result();
                foreach($ubis_one as $row => $value){
                    $dataSub['URUTAN'] = (string)$value->urutan;
                    $dataSub['SEQ'] ="NOT_RELEASE";
                    $dataSub['GRP'] ="NOT_RELEASE";
                    $dataSub['NILAI'] = $value->tt_ubis;
                    $dataSub['PERSEN'] = 0;
                    $dataSub['AREA1'] = $value->area_1;
                    $dataSub['AREA2'] = $value->area_2;
                    $dataSub['AREA3'] = $value->area_3;
                    $dataSub['AREA4'] = $value->area_4;
                    $dataSub['BULAN'] = $value->bulan;
                    $dataSub['TAHUN'] = $value->tahun;
                $dataJoin[]=$dataSub; 
                }
                //-POP UBIS & AREA
                $ubis_one = $this->db->query("
                        SELECT x1.bulan,x1.tahun,(ROW_NUMBER() OVER (ORDER BY ubis))-1 AS URUTAN,x1.ubis,max(x1.tot_ubis) AS tt_ubis,max(x1.area) as tt_area,MAX(x1.tot_area),
                                MAX(x1.area_1) AS area_1,MAX(x1.area_2) AS area_2,MAX(x1.area_3) AS area_3 ,MAX(x1.area_4) AS area_4
                        FROM (
                            SELECT to_char(b.tgl, 'mm') as bulan,to_char(b.tgl, 'yyyy') as tahun,b.ubis,a.tot_ubis,b.area, b.tot_area,
                            (CASE WHEN area='A1' THEN b.tot_area ELSE 0 END) as area_1,
                            (CASE WHEN area='A2' THEN b.tot_area ELSE 0 END) as area_2,
                            (CASE WHEN area='A3' THEN b.tot_area ELSE 0 END) as area_3,
                            (CASE WHEN area='A4' THEN b.tot_area ELSE 0 END) as area_4
                            FROM dashboard_front b LEFT JOIN
                            (SELECT ubis, tot_ubis, kat FROM dashboard_front WHERE kat ='ON PIPE' GROUP BY ubis, tot_ubis, kat ORDER BY ubis) a
                            ON a.ubis=b.ubis
                            WHERE b.kat ='ON PIPE' 
                            ORDER BY b.ubis,b.area ASC	
                        ) x1 GROUP BY x1.ubis,x1.bulan,x1.tahun;
                ")->result();
                foreach($ubis_one as $row => $value){
                    $dataSub['URUTAN'] = (string)$value->urutan;;
                    $dataSub['SEQ'] ="NOT_RELEASE";
                    $dataSub['GRP'] ="PRJ_ON_PIPE";
                    $dataSub['NILAI'] = $value->tt_ubis;
                    $dataSub['PERSEN'] = 0;
                    $dataSub['AREA1'] = $value->area_1;
                    $dataSub['AREA2'] = $value->area_2;
                    $dataSub['AREA3'] = $value->area_3;
                    $dataSub['AREA4'] = $value->area_4;
                    $dataSub['BULAN'] = $value->bulan;
                    $dataSub['TAHUN'] = $value->tahun;
                $dataJoin[]=$dataSub; 
                }

                //-RFI UBIS & AREA
                $ubis_one = $this->db->query("
                        SELECT x1.bulan,x1.tahun,(ROW_NUMBER() OVER (ORDER BY ubis))-1 AS URUTAN,x1.ubis,max(x1.tot_ubis) AS tt_ubis,max(x1.area) as tt_area,MAX(x1.tot_area),
                                MAX(x1.area_1) AS area_1,MAX(x1.area_2) AS area_2,MAX(x1.area_3) AS area_3 ,MAX(x1.area_4) AS area_4
                        FROM (
                            SELECT to_char(b.tgl, 'mm') as bulan,to_char(b.tgl, 'yyyy') as tahun,b.ubis,a.tot_ubis,b.area, b.tot_area,
                            (CASE WHEN area='A1' THEN b.tot_area ELSE 0 END) as area_1,
                            (CASE WHEN area='A2' THEN b.tot_area ELSE 0 END) as area_2,
                            (CASE WHEN area='A3' THEN b.tot_area ELSE 0 END) as area_3,
                            (CASE WHEN area='A4' THEN b.tot_area ELSE 0 END) as area_4
                            FROM dashboard_front b LEFT JOIN
                            (SELECT ubis, tot_ubis, kat FROM dashboard_front WHERE kat ='RFI' GROUP BY ubis, tot_ubis, kat ORDER BY ubis) a
                            ON a.ubis=b.ubis
                            WHERE b.kat ='RFI' 
                            ORDER BY b.ubis,b.area ASC	
                        ) x1 GROUP BY x1.ubis,x1.bulan,x1.tahun;
                ")->result();
                foreach($ubis_one as $row => $value){
                    $dataSub['URUTAN'] = (string)$value->urutan;
                    $dataSub['SEQ'] ="NOT_RELEASE";
                    $dataSub['GRP'] ="RFI";
                    $dataSub['NILAI'] = $value->tt_ubis;
                    $dataSub['PERSEN'] = 0;
                    $dataSub['AREA1'] = $value->area_1;
                    $dataSub['AREA2'] = $value->area_2;
                    $dataSub['AREA3'] = $value->area_3;
                    $dataSub['AREA4'] = $value->area_4;
                    $dataSub['BULAN'] = $value->bulan;
                    $dataSub['TAHUN'] = $value->tahun;
                $dataJoin[]=$dataSub; 
                }      
                //AFTER RFI
                for ($i = 0; $i <=3; $i++) {
                        $dataSub['URUTAN'] = (string)$i;
                        $dataSub['SEQ'] ="NOT_RELEASE";
                        $dataSub['GRP'] ="ARFI";
                        $dataSub['NILAI'] = 0;
                        $dataSub['PERSEN'] = 0;
                        $dataSub['AREA1'] = 0;
                        $dataSub['AREA2'] = 0;
                        $dataSub['AREA3'] = 0;
                        $dataSub['AREA4'] = 0;
                        $dataSub['BULAN'] = $query_persentasi_not->bulan;
                        $dataSub['TAHUN'] = $query_persentasi_not->tahun;
                    $dataJoin[]=$dataSub;   
                }
        }
       return $dataJoin;
    }

/* DASHBOARD B2S
    * Event     : ViewLoad & ViewInit (Observable)
    * Controller: Mobile_Dashboard
    * Activity  : allproject
    * Rest Api  : Request & respon
    * Filter    : B2S,Core,Microcell,Special.
    * Author    : ptr.nov@gmail.com
    */
    public function dashB2S($request){
       	$wo = $this->db->query("SELECT tot FROM dashboard_all_project WHERE ubis='B2S';")->row();
        $tot_ubis = $this->db->query("SELECT * FROM dashboard_front WHERE  ubis = 'B2S' AND kat ='NOT RELEASE' LIMIT 1;")->row();
        $tot_pop = $this->db->query("SELECT * FROM dashboard_front WHERE  ubis = 'B2S' AND kat ='ON PIPE' LIMIT 1;")->row();
        $tot_rfi = $this->db->query("SELECT * FROM dashboard_front WHERE  ubis = 'B2S' AND kat ='RFI' LIMIT 1;")->row();

        $persen_ubis =round(($tot_ubis->tot_ubis/$wo->tot)* 100);
        $persen_pop =round(($tot_pop->tot_ubis/$wo->tot)* 100);
        $persen_rfi =round(($tot_rfi->tot_ubis/$wo->tot)* 100);

                $dataSub['URUTAN'] = 0;
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="ALL_PRJ";
                $dataSub['NILAI'] = $wo->tot;
                $dataSub['PERSEN'] = 0;
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['SIS'] = 0;
                $dataSub['SITAC1'] = 0;
                $dataSub['SITAC2'] = 0;
                $dataSub['CME'] = 0;
                $dataSub['RFC'] = 0;
                $dataSub['RFI'] = 0;
                $dataSub['ARFI_NILAI2'] = 0;
                $dataSub['BULAN'] = 0;
                $dataSub['TAHUN'] = 0;
            $dataJoin[]=$dataSub;
                $dataSub['URUTAN'] = 1;
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="NOT_RELEASE";
                $dataSub['NILAI'] = $tot_ubis->tot_ubis;
                $dataSub['PERSEN'] = $persen_ubis;
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['SIS'] = 0;
                $dataSub['SITAC1'] = 0;
                $dataSub['SITAC2'] = 0;
                $dataSub['CME'] = 0;
                $dataSub['RFC'] = 0;
                $dataSub['RFI'] = 0;
                $dataSub['ARFI_NILAI2'] = 0;
                $dataSub['BULAN'] = 0;
                $dataSub['TAHUN'] = 0;
            $dataJoin[]=$dataSub;
                $dataSub['URUTAN'] = 2;
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="PRJ_ON_PIPE";
                $dataSub['NILAI'] = $tot_pop->tot_ubis;
                $dataSub['PERSEN'] = $persen_pop;
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['SIS'] = 0;
                $dataSub['SITAC1'] = 0;
                $dataSub['SITAC2'] = 0;
                $dataSub['CME'] = 0;
                $dataSub['RFC'] = 0;
                $dataSub['RFI'] = 0;
                $dataSub['ARFI_NILAI2'] = 0;
                $dataSub['BULAN'] = 0;
                $dataSub['TAHUN'] = 0;
            $dataJoin[]=$dataSub;
                $dataSub['URUTAN'] = 3;
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="RFI";
                $dataSub['NILAI'] = $tot_rfi->tot_ubis;
                $dataSub['PERSEN'] =$persen_rfi;
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['SIS'] = 0;
                $dataSub['SITAC1'] = 0;
                $dataSub['SITAC2'] = 0;
                $dataSub['CME'] = 0;
                $dataSub['RFC'] = 0;
                $dataSub['RFI'] = 0;
                $dataSub['ARFI_NILAI2'] = 0;
                $dataSub['BULAN'] = 0;
                $dataSub['TAHUN'] = 0;
            $dataJoin[]=$dataSub;
                $dataSub['URUTAN'] = 4;
                $dataSub['SEQ'] ="HEADER";
                $dataSub['GRP'] ="ARFI";
                $dataSub['NILAI'] = 0;
                $dataSub['PERSEN'] = 0;
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['SIS'] = 0;
                $dataSub['SITAC1'] = 0;
                $dataSub['SITAC2'] = 0;
                $dataSub['CME'] = 0;
                $dataSub['RFC'] = 0;
                $dataSub['RFI'] = 0;
                $dataSub['ARFI_NILAI2'] = 0;
                $dataSub['BULAN'] = 0;
                $dataSub['TAHUN'] = 0;                
            $dataJoin[]=$dataSub;   
                //Ubis-Area - NOT_RELEASE
                $areaNotRelease = $this->db->query("SELECT * FROM dashboard_front WHERE ubis = 'B2S' AND kat ='NOT RELEASE' ORDER BY area ASC")->result();              
                foreach($areaNotRelease as $row => $value){
                        //$dataSub['AREA'.($row+1)] = $value->tot_area;
                        $dataSub['URUTAN'] = $row;
                        $dataSub['SEQ'] ="B2S";
                        $dataSub['GRP'] ="NOT_RELEASE";
                        $dataSub['NILAI'] = $value->tot_area;
                        $dataSub['PERSEN'] = 0;                
                        $dataSub['AREA1'] = 0;
                        $dataSub['AREA2'] = 0;
                        $dataSub['AREA3'] = 0;
                        $dataSub['AREA4'] = 0;
                        $dataSub['SIS'] = 0;
                        $dataSub['SITAC1'] = 0;
                        $dataSub['SITAC2'] = 0;
                        $dataSub['CME'] = 0;
                        $dataSub['RFC'] = 0;
                        $dataSub['RFI'] = 0;
                        $dataSub['ARFI_NILAI2'] = 0;
                        $dataSub['BULAN'] = 0;
                        $dataSub['TAHUN'] = 0;
                    $dataJoin[]=$dataSub;
                };
                //Ubis-Area - POP
                $areaPop = $this->db->query("SELECT * FROM dashboard_front WHERE ubis = 'B2S' AND kat ='ON PIPE' ORDER BY area ASC;")->result();              
                foreach($areaPop as $rowPop => $valuePop){
                        // $dataSub['AREA'.($rowPop+1)] = $valuePop->tot_area;
                        $sis = $this->db->query("SELECT * FROM dashboard_op_milestone WHERE ubis = 'B2S' AND area ='A1' AND mstone = 'SIS'")->row();
                        $sitac1= $this->db->query("SELECT * FROM dashboard_op_milestone WHERE ubis = 'B2S' AND area ='A1' AND mstone = 'SITAC1'")->row();
                        $sitac2 = $this->db->query("SELECT * FROM dashboard_op_milestone WHERE ubis = 'B2S' AND area ='A1' AND mstone = 'SITAC2'")->row();
                        $cme= $this->db->query("SELECT * FROM dashboard_op_milestone WHERE ubis = 'B2S' AND area ='A1' AND mstone = 'CME'")->row();
                        $rfc = $this->db->query("SELECT * FROM dashboard_op_milestone WHERE ubis = 'B2S' AND area ='A1' AND mstone = 'RFC'")->row();
                        $rfi = $this->db->query("SELECT * FROM dashboard_op_milestone WHERE ubis = 'B2S' AND area ='A1' AND mstone = 'RFI'")->row();

                        $dataSub['URUTAN'] = $rowPop;
                        $dataSub['SEQ'] ="B2S";
                        $dataSub['GRP'] ="POP";
                        $dataSub['NILAI'] = $valuePop->tot_area;
                        $dataSub['PERSEN'] = 0;               
                        $dataSub['SIS'] = $sis->tot;
                        $dataSub['SITAC1'] = $sitac1->tot;
                        $dataSub['SITAC2'] = $sitac2->tot;
                        $dataSub['CME'] =  $cme->tot;
                        $dataSub['RFC'] = $rfc->tot;
                        $dataSub['RFI'] = $rfi->tot;
                        $dataSub['ARFI_NILAI2'] = 0;
                        $dataSub['BULAN'] = 0;
                        $dataSub['TAHUN'] = 0;
                    $dataJoin[]=$dataSub;
                };
                 //Ubis-Area - RFI
                $areaRfi = $this->db->query("SELECT * FROM dashboard_front WHERE ubis = 'B2S' AND kat ='RFI' ORDER BY area ASC;")->result();              
                foreach($areaRfi as $rowRfi => $valuePfi){
                        // $dataSub['AREA'.($rowPop+1)] = $valuePop->tot_area;                   
                        $dataSub['URUTAN'] = $rowRfi;
                        $dataSub['SEQ'] ="B2S";
                        $dataSub['GRP'] ="RFI";
                        $dataSub['NILAI'] =$valuePfi->tot_area;
                        $dataSub['PERSEN'] = 0;
                        $dataSub['SIS'] =0;
                        $dataSub['SITAC1'] = 0;
                        $dataSub['SITAC2'] = 0;
                        $dataSub['CME'] = 0;
                        $dataSub['RFC'] = 0;
                        $dataSub['RFI'] = 0;
                        $dataSub['ARFI_NILAI2'] = 0;
                        $dataSub['BULAN'] = 0;
                        $dataSub['TAHUN'] = 0;
                    $dataJoin[]=$dataSub;
                };                          
                //Ubis-Area - ARFI
                $dataSub['URUTAN'] = 3;
                $dataSub['SEQ'] ="B2S";
                $dataSub['GRP'] ="ARFI";
                $dataSub['NILAI'] = 0;
                $dataSub['PERSEN'] = 0;
                $dataSub['AREA1'] = 0;
                $dataSub['AREA2'] = 0;
                $dataSub['AREA3'] = 0;
                $dataSub['AREA4'] = 0;
                $dataSub['SIS'] = 0;
                $dataSub['SITAC1'] = 0;
                $dataSub['SITAC2'] = 0;
                $dataSub['CME'] = 0;
                $dataSub['RFC'] = 0;
                $dataSub['RFI'] = 0;
                $dataSub['ARFI_NILAI2'] = 0;
                $dataSub['BULAN'] = 0;
                $dataSub['TAHUN'] = 0;
            $dataJoin[]=$dataSub;
        return $dataJoin;    }


    public function mapModel(){
        $qurey = $this->db->query("
                SELECT 
                    'RFI' AS GRP, project_id as PROJECT_ID, area as AREA, lat as LAT, long as LONG, radius AS RADIUS,
                     site_name as SITE_NM,nama_tenant as TENAN_NM, regional AS REGIONAL, sow AS SOW, release_status as STATUS	
                FROM d_project_list_of_work_order WHERE release_status iS NOT NULL AND target_rfi IS NOT NULL AND rfi IS NOT NULL
        ");
        return $qurey->result();
    }


    public function chart_project_summary($pf_code = ""){
        $arr_result = array();
		$arr_tmp = array();
		$iter = 0;
		$fisrt_waktu = "";
		$last_waktu = "";
		$last_waktu_per_jenis = array();
		$SQL = "";

		if($pf_code != "" && $pf_code != "all" ){
			$SQL = "SELECT	'target' as jenis, 
						COUNT(id) as jml, 
						to_char(target_rfi, 'YYYY-MM') || '-' || EXTRACT(WEEK FROM target_rfi) as waktu
				FROM    d_project_list_of_work_order
				WHERE	target_rfi > to_date('2018-01-01','YYYY-MM-DD')	
					    AND pf_code = '$pf_code' AND release_status IS NOT NULL	
						AND area IS NOT NULL AND regional IS NOT NULL AND sow IS NOT NULL AND long IS NOT NULL AND lat IS NOT NULL
				GROUP BY waktu, jenis

				UNION
				
				SELECT	'actual' as jenis, 
						COUNT(id) as jml, 
						to_char(rfi, 'YYYY-MM') || '-' || EXTRACT(WEEK FROM rfi) as waktu
				FROM	d_project_list_of_work_order
				WHERE	rfi > to_date('2018-03-01','YYYY-MM-DD')
						AND pf_code = '$pf_code'	AND release_status IS NOT NULL	
						AND area IS NOT NULL AND regional IS NOT NULL AND sow IS NOT NULL AND long IS NOT NULL AND lat IS NOT NULL
				GROUP BY waktu, jenis
				
				ORDER BY waktu, jenis";
		} else {
			$SQL = "SELECT	'target' as jenis, 
						COUNT(id) as jml, 
						to_char(target_rfi, 'YYYY-MM') || '-' || EXTRACT(WEEK FROM target_rfi) as waktu
				FROM	d_project_list_of_work_order
				WHERE	target_rfi > to_date('2018-01-01','YYYY-MM-DD')	
				AND release_status IS NOT NULL	
						AND area IS NOT NULL AND regional IS NOT NULL AND sow IS NOT NULL AND long IS NOT NULL AND lat IS NOT NULL
				GROUP BY waktu, jenis

				UNION
				
				SELECT	'actual' as jenis, 
						COUNT(id) as jml, 
						to_char(rfi, 'YYYY-MM') || '-' || EXTRACT(WEEK FROM rfi) as waktu
				FROM	d_project_list_of_work_order
				WHERE	rfi > to_date('2018-01-01','YYYY-MM-DD')	
					    AND release_status IS NOT NULL	
						AND area IS NOT NULL AND regional IS NOT NULL AND sow IS NOT NULL AND long IS NOT NULL AND lat IS NOT NULL
				GROUP BY waktu, jenis
				
				ORDER BY waktu, jenis";
		}

		$qry = $this->db->query($SQL);
		if($qry->num_rows() > 0){
			$arr_tmp = $qry->result();
			
			foreach ($arr_tmp as $row) {
				if($iter == 0){
					$fisrt_waktu = $row->waktu;
				}
				if($iter == count($arr_tmp)-1){
					$last_waktu = $row->waktu;
				}
				$last_waktu_per_jenis[$row->jenis] = $row->waktu;

				$iter++;
			}			
			$arr_sequence = $this->get_sequence_week_of_month($fisrt_waktu, $last_waktu);			 
			
			$tot_actual = 0;
			$tot_target = 0;
			$is_last_data_actual = false;
			$is_last_data_target = false;
			foreach($arr_sequence['by_week_of_month'] as $key => $val){
				$arr_result['sequence'][] = $key;
				
				$target_nonkumulatif = 0;
				$actual_nonkumulatif = 0;
				
				foreach ($arr_tmp as $row) {
					if(	$row->waktu == $arr_sequence['by_week_of_month'][$key]){
						if($row->jenis == "target"){
							$tot_target += $row->jml*1;
							$target_nonkumulatif = $row->jml*1;
						}
						else if($row->jenis == "actual"){
							$tot_actual += $row->jml*1;
							$actual_nonkumulatif = $row->jml*1;
						}
					}
				}
				
				$arr_result['target_nonkumulatif'][] = $target_nonkumulatif;
				$arr_result['actual_nonkumulatif'][] = $actual_nonkumulatif;			
				
				if(!$is_last_data_target){
					if($tot_target != 0){
						$arr_result['target'][] = $tot_target;
					}
					else{
						$arr_result['target'][] = null;
					}
				}
				if(!$is_last_data_actual){
					if($tot_actual != 0){
						$arr_result['actual'][] = $tot_actual;
					}
					else{
						$arr_result['actual'][] = null;
					}
				}				
				
                if (isset($last_waktu_per_jenis['actual'])) {
                    if ($arr_sequence['by_week_of_month'][$key] == $last_waktu_per_jenis['actual']) {
                            $is_last_data_actual = true;
                    }
                }

                if (isset($last_waktu_per_jenis['target'])) {
                    if ($arr_sequence['by_week_of_month'][$key] == $last_waktu_per_jenis['target']) {
                            $is_last_data_target = true;
                    }
                }
				
			}
		}
        return $arr_result;        
    }

    function get_sequence_week_of_month($first, $last){
		date_default_timezone_set('Asia/Jakarta');
		
		$tmp_start = explode("-",$first);
		$tmp_stop = explode("-",$last);
		
		
		$first_ts = strtotime($tmp_start[0]."-". $tmp_start[1]."-01 00:00:00");
		
		$date = new DateTime();
		$date->setISODate($tmp_stop[0], $tmp_stop[2],8);
		$last_ts = strtotime($date->format('Y-m-d 00:00:00'));

		$arr_sequence = array();
		
		if($first_ts <= $last_ts){
			$last_week_of_month = 1;
			$last_month = "";
			$last_year = "";
			$iter_ts = $first_ts;
			while($iter_ts  <= $last_ts) {				
				$arr_sequence['log'][] = date("Y-m-d H:i:s",$iter_ts);				
                $woy = date("W",$iter_ts);
                
				if($iter_ts == $first_ts){

					$last_month = date("m",$iter_ts);
					$last_year = date("Y",$iter_ts);
					
					$dt_week_of_year = date("Y-m-W",$iter_ts);
					$dt_week_of_month = "W1-".date("M-Y",$iter_ts);
					
					$arr_sequence['by_week_of_year'][$dt_week_of_year] = $dt_week_of_month;
					$arr_sequence['by_week_of_month'][$dt_week_of_month] = $dt_week_of_year;
					
					$date->setISODate($last_year, date("W",$iter_ts));
					$iter_ts = strtotime($date->format('Y-m-d 00:00:00'));
					
					$last_week_of_month++;					
				}
				else{					
					if(	$date->setISODate($last_year, $woy)->format('m')!= 	$date->setISODate($last_year, $woy,7)->format('m')	){

						$dt_week_of_year = date("Y-m-W",$iter_ts);
						$dt_week_of_month = "W".$last_week_of_month."-".date("M-Y",$iter_ts);
						
						$arr_sequence['by_week_of_year'][$dt_week_of_year] = $dt_week_of_month;
						$arr_sequence['by_week_of_month'][$dt_week_of_month] = $dt_week_of_year;
						
						$dt_week_of_year = date("Y-m-W",$iter_ts+(6*24*3600));
						$dt_week_of_month = "W1-".date("M-Y",$iter_ts+(6*24*3600));
						
						$arr_sequence['by_week_of_year'][$dt_week_of_year] = $dt_week_of_month;
						$arr_sequence['by_week_of_month'][$dt_week_of_month] = $dt_week_of_year;
						
						$last_week_of_month = 2;
						$last_month = date("m",$iter_ts+(6*24*3600));
						$last_year = date("Y",$iter_ts+(6*24*3600));
					}
					else{

						$dt_week_of_year = date("Y-m-W",$iter_ts);
						$dt_week_of_month = "W".$last_week_of_month."-".date("M-Y",$iter_ts);
						
						if($last_month != date("m",$iter_ts)){
							$last_week_of_month = 1;
							$dt_week_of_month = "W".$last_week_of_month."-".date("M-Y",$iter_ts);
						}
						
						$arr_sequence['by_week_of_year'][$dt_week_of_year] = $dt_week_of_month;
						$arr_sequence['by_week_of_month'][$dt_week_of_month] = $dt_week_of_year;
						
						$last_month = date("m",$iter_ts);
						$last_year = date("Y",$iter_ts);
						$last_week_of_month++;
					}
				}
				$iter_ts+= 7*24*3600;
			}
		}
		return $arr_sequence;		
	}


    public function login_m($data){
        $query = $this->db->where('username', $data['username'])->where('pass', $data['password'])->get('users')->row();
        return $query;
    }
	
    //
    public function updateIsOnline($data){
        $this->db->set('is_online', true);
        $this->db->where('user_id', $data);
        $this->db->update('users'); // gives UPDATE `users` SET `is_online` = true
     }
    public function updateIsRelogin($data){
			 $this->db->set('is_relogin', 1);// gives UPDATE `users` SET `is_online` = true
			 $this->db->where('username',$data['username']);
			 $this->db->update('users'); 
	}
	
    public function cek_statusOnline($data){
        $query = $this->db->where('username', $data['username'])->where('pass', $data['password'])->get('users')->row();
        return $query;
    }
	
    public function updateIsOnlineOff($data){
		$this->db->set('is_online', false);
		$this->db->where('user_id', $data);
		$this->db->update('users'); // gives UPDATE `users` SET `is_online` = false
	}

    public function login($data){
        $query = $this->db->where('username', $data->username)->where('pass', $data->password)->get('users')->row();
        return $query;
    }
  
	public function getProject($user_id){
        $query = $this->db->query("SELECT DISTINCT a.project_id, b.* FROM duplicate_template a
                LEFT JOIN d_project_list_of_work_order b ON a.project_id  = b.project_id
                WHERE pic_id = '$user_id' AND release_status = '1'");
        return $query->result();
    }
    /*
       function cek_users
       Description : cek status users login from apk.
       parameter request $userName,$userId.
       response 
       true when users exist
       false when users not exist

    */
     public function cekUsers($dataPost){
        $this->db->where('username',$dataPost['userName'])->where('user_id', $dataPost['userId']);        
        // $query = $this->db->get('user_id');
        $query = $this->db->get('users');
        if ($query->num_rows() > 0){
            return true;
        }
        else{
            return false;
        }
    }
   

    public function __destruct() {
        $this->db->close();
    }
	
	
	// public function dashboardAllProject(){
		// $query = $this->db->query("SELECT DISTINCT a.project_id, b.* FROM duplicate_template a
		// LEFT JOIN d_project_list_of_work_order b ON a.project_id  = b.project_id
		// WHERE pic_id = '$user_id' AND release_status = '1'");
        // return $query->result();
	// }
	
	
	
	
}