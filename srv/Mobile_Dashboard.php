<?php
header('Access-Control-Allow-Origin: *');
/*
header('Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
header('Access-Control-Allow-Headers': 'X-Requested-With,content-type');
header('Access-Control-Allow-Credentials': true);
*/

defined('BASEPATH') OR exit('No direct script access allowed');

class Mobile_Dashboard extends CI_Controller {
    public function __construct() {
        parent::__construct();
		$this->load->model('M_MobileDashboard');
		$this->load->helper('security');
   	}

	/**
	 *  Test Function.
	 */
	public function dev($bulan,$year){
		$request = [
			'bulan' => str_replace("%20","",$bulan),
			'tahun' => str_replace("%20","",$year)
		];
		$result=$this->M_MobileDashboard->dashAll($request);
		echo json_encode(["dsh1"=>$result], JSON_PRETTY_PRINT); 
	}

	/**
	 * All Project - Card.
	 */
	public function dshAll($bulan,$year){
		$request = [
			'bulan' => str_replace("%20","",$bulan),
			'tahun' => str_replace("%20","",$year)
		];
		$result=$this->M_MobileDashboard->dashAll($request);
		echo json_encode(["dsh1"=>$result], JSON_PRETTY_PRINT); 
	}


	/**
	 * Dashboard B2S - Card.
	 */
	public function dshB2s($bulan,$year){
		$request = [
			'bulan' => str_replace("%20","",$bulan),
			'tahun' => str_replace("%20","",$year)
		];
		$result=$this->M_MobileDashboard->dashB2S($request);
		echo json_encode(["dsh2"=>$result], JSON_PRETTY_PRINT); 
	}

/**
	 * Dashboard Core - Card.
	 */
	public function dshCore($bulan,$year){
		$request = [
			'bulan' => str_replace("%20","",$bulan),
			'tahun' => str_replace("%20","",$year)
		];
		$result=$this->M_MobileDashboard->dashB2S($request);
		echo json_encode(["dsh2"=>$result], JSON_PRETTY_PRINT); 
	}

	/**
	 * Dashboard Microcell - Card.
	 */
	public function dshMcp($bulan,$year){
		$request = [
			'bulan' => str_replace("%20","",$bulan),
			'tahun' => str_replace("%20","",$year)
		];
		$result=$this->M_MobileDashboard->dashB2S($request);
		echo json_encode(["dsh2"=>$result], JSON_PRETTY_PRINT); 
	}

	/**
	 * Dashboard MicrSpecial - Card.
	 */
	public function dshSpl($bulan,$year){
		$request = [
			'bulan' => str_replace("%20","",$bulan),
			'tahun' => str_replace("%20","",$year)
		];
		$result=$this->M_MobileDashboard->dashB2S($request);
		echo json_encode(["dsh2"=>$result], JSON_PRETTY_PRINT); 
	}

	/**
	 * All Project - Chard.
	 */
	public function dshChart($pf_code = ""){
		$result=$this->M_MobileDashboard->chart_project_summary($pf_code);
		echo json_encode(["chart"=>$result], JSON_PRETTY_PRINT); 
	}
	

	/**
	 * All Project - Map.
	 */
	public function dshmap(){
		$request = [
			'bulan' => str_replace("%20","",$bulan),
			'tahun' => str_replace("%20","",$year)
		];
		$result=$this->M_MobileDashboard->mapModel();
		echo json_encode($result, JSON_PRETTY_PRINT); 
		//echo json_encode(["Release"=>$result], JSON_PRETTY_PRINT); 

	}




	
	/*
	 * User Login Mobile Dashboard 
	 * Filter by 	: 
	 * 
	*/
    public function user_login($username, $password){ 
		$username = strtolower($username);
		$request = [
			'username' => str_replace("%20","",$username),
			'password' => md5($password)

		];
		
		$result = $this->M_MobileDashboard->login_m($request);
		if(!empty($result)){
			if($result->is_online == 't'){
				 $this->M_MobileDashboard->updateIsRelogin($request);
					$arr = [
						'rcCode' => 'x001',
						'user' => [],
						'project' => [],
						'msg'  => 'Anda dapat melakukan login setelah 5 menit Atau You can re-login after 5 minutes'                       
					];
				 }  if($result->is_online == 'f'){
					$this->M_MobileDashboard->updateIsOnline($result->user_id);
					$project = $this->M_MobileDashboard->getProject($result->user_id);
					$arr = [
						'rcCode' 	=> '1',
						'user' 		=> $result,
						'project' 	=> $project,
						'msg'  		=> 'Login Berhasil'   						
					];
				}
		} else {
		   $this->M_MobileDashboard->updateIsRelogin($request['username']);
			$arr = [
				'rcCode' => 'x003',
				'user' => [],
				'project' => [],
				'msg'  		=> 'Login Invalid'
			];
		}
		
		echo json_encode($arr, JSON_PRETTY_PRINT);
	}
 
	/*
	 * User Login Mobile Dashboard 
	 * Filter by 	: 
	 * 
	*/
	public function logout($username, $password){
		$username = strtolower($username);
		$request = [
			'username' => str_replace("%20","",$username),
			'password' => md5($password)
		];
   
		$result = $this->M_MobileDashboard->cek_statusOnline($request);
		if(!empty($result)){
		   if($result->is_online === 't'){
			 $this->M_MobileDashboard->updateIsOnlineOff($result->user_id);
			 $arr = ['user' => $result];
			}else{
			 $arr = ['user' => $result];
			}

		}
		echo json_encode($arr,JSON_PRETTY_PRINT);
   }   
   
   // public MitratelAllProject(){
	   
	   // $result=$this->M_MobileDashboard->
	   
   // }
	   
   public function coba(){
		$data=[
			'technologies'=>[
			[
				'uniq_id'=>'100',
				'name' => 'Ionic Framework2',
				'summary' => 'Hybrid application development framework',
				'company' => 'Drifty',
			 ],
			 [
				'uniq_id'=>'101',
				'name' => 'Angular',
				'summary' => 'Front-end development framework',
				'company' => 'Google'
			 ],
			 [
				'uniq_id'=>'102',
				'name' => 'TS_piter',
				'summary' => 'Superset of JavaScript',
				'company' => 'Microsoft'
			 ],
			 [
				'uniq_id'=>'103',
				'name' => 'Apache Cordova',
				'summary' => 'Native application development framework',
				'company' => 'Apache'
			 ],
			 [
				'uniq_id'=>'104',
				'name' => 'Ionic Native',
				'summary' => 'Apache Cordova compatible plugins',
				'company' => 'Drifty'
			 ],
			 [
				'uniq_id'=>'105',
				'name' => 'HTML5',
				'summary' => 'Mark-up language and APIs',
				'company' => 'W3C'
			 ],
			 // [
				// 'uniq_id'=>'106',
				// 'name' => 'Sass',
				// 'summary' => 'CSS pre-processor',
				// 'company' => 'W3C'
			 // ],
			 
			 // [
				// 'uniq_id'=>'107',
				// 'name' => 'Ionic CLI',
				// 'summary' => 'The engine behind the framework',
				// 'company' => 'Drifty'
			 // ],
			 // [
				// 'name' => 'Stencil',
				// 'summary' => 'Web component generator',
				// 'company' => 'Drifty'
			 // ],
			 // [
				// 'name' => 'Firebase',
				// 'summary' => 'Backend as a Service (BaaS)',
				// 'company' => 'Firebase/Google'
			 // ],
			 // [
				// 'name' => 'MongoDB',
				// 'summary' => 'NoSQL database solution',
				// 'company' => 'Mongo'
			 // ],
			 // [
				// 'name' => 'PHP',
				// 'summary' => 'Server-side scripting language',
				// 'company' => 'Zend'
			 // ],
			 // [
				// 'name' => 'MySQL',
				// 'summary' => 'Popular open-source database',
				// 'company' => 'Oracle'
			 // ],
			 // [
				// 'name' => 'PouchDB',
				// 'summary' => 'Client-side NoSQL database abstraction solution',
				// 'company' => 'PouchDB'
			 // ],
			 // [
				// 'name' => 'CouchDB',
				// 'summary' => 'Server-side NoSQL database solution',
				// 'company' => 'CouchDB'
			 // ]		
			]
		];
			echo json_encode($data, JSON_PRETTY_PRINT);
		// return $data;
	}
	


	public function allproject(){
		$data=[
		 	'dsh1'=>[
				//-HEADER
				[
					'URUTAN'=>'0',
					'SEQ' => 'HEADER',
					'GRP' => 'ALL_PRJ',
					'NILAI' => '4322',
					'PERSEN'=> '8911',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'1',
					'SEQ' => 'HEADER',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '222',
					'PERSEN'=> '52',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'2',
					'SEQ' => 'HEADER',
					'GRP' => 'PRJ_ON_PIPE',
					'NILAI' => '200',
					'PERSEN'=> '200',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'3',
					'SEQ' => 'HEADER',
					'GRP' => 'RFI',
					'NILAI' => '9000',
					'PERSEN'=> '9000',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'4',
					'SEQ' => 'HEADER',
					'GRP' => 'ARFI',
					'NILAI' => '700',
					'PERSEN'=> '700',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 
				//-NOT_RELEASE-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '2901',
					'PERSEN'=> '2901',
					'AREA1' => '113',
					'AREA2' => '111',
					'AREA3' => '133',
					'AREA4' => '115',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
				[
					'URUTAN'=>'1',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '2600',
					'PERSEN'=> '2600',
					'AREA1' => '244',
					'AREA2' => '287',
					'AREA3' => '23',
					'AREA4' => '29',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
				[
					'URUTAN'=>'2',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '2300',
					'PERSEN'=> '2300',
					'AREA1' => '77',
					'AREA2' => '32',
					'AREA3' => '32',
					'AREA4' => '1',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
				[
					'URUTAN'=>'3',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '2401',
					'PERSEN'=> '2401',
					'AREA1' => '55',
					'AREA2' => '70',
					'AREA3' => '31',
					'AREA4' => '42',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	
				//-PRJ_ON_PIPE-AREA

				[
					'URUTAN'=>'0',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'PRJ_ON_PIPE',
					'NILAI' => '3250',
					'PERSEN'=> '3250',
					'AREA1' => '33',
					'AREA2' => '132',
					'AREA3' => '37',
					'AREA4' => '24',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
				[
					'URUTAN'=>'1',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'PRJ_ON_PIPE',
					'NILAI' => '3330',
					'PERSEN'=> '3330',
					'AREA1' => '14',
					'AREA2' => '17',
					'AREA3' => '35',
					'AREA4' => '19',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
				[
					'URUTAN'=>'2',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'PRJ_ON_PIPE',
					'NILAI' => '3600',
					'PERSEN'=> '3600',
					'AREA1' => '47',
					'AREA2' => '22',
					'AREA3' => '42',
					'AREA4' => '11',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
				[
					'URUTAN'=>'3',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'PRJ_ON_PIPE',
					'NILAI' => '3100',
					'PERSEN'=> '3100',
					'AREA1' => '67',
					'AREA2' => '20',
					'AREA3' => '11',
					'AREA4' => '51',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],					
				//-RFI-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'RFI',
					'NILAI' => '1320',
					'PERSEN'=> '1320',
					'AREA1' => '44',
					'AREA2' => '13',
					'AREA3' => '61',
					'AREA4' => '54',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
				[
					'URUTAN'=>'1',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'RFI',
					'NILAI' => '1310',
					'PERSEN'=> '1310',
					'AREA1' => '43',
					'AREA2' => '47',
					'AREA3' => '39',
					'AREA4' => '91',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
				[
					'URUTAN'=>'2',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'RFI',
					'NILAI' => '1340',
					'PERSEN'=> '1340',
					'AREA1' => '65',
					'AREA2' => '55',
					'AREA3' => '44',
					'AREA4' => '10',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
				[
					'URUTAN'=>'3',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'RFI',
					'NILAI' => '1350',
					'PERSEN'=> '1350',
					'AREA1' => '71',
					'AREA2' => '74',
					'AREA3' => '71',
					'AREA4' => '17',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	
				//-ARFI-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'ARFI',
					'NILAI' => '2501',
					'PERSEN'=> '2501',
					'AREA1' => '991',
					'AREA2' => '64',
					'AREA3' => '35',
					'AREA4' => '171',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
				[
					'URUTAN'=>'1',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'ARFI',
					'NILAI' => '2600',
					'PERSEN'=> '2600',
					'AREA1' => '35',
					'AREA2' => '79',
					'AREA3' => '80',
					'AREA4' => '921',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
				[
					'URUTAN'=>'2',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'ARFI',
					'NILAI' => '2700',
					'PERSEN'=> '2700',
					'AREA1' => '38',
					'AREA2' => '87',
					'AREA3' => '99',
					'AREA4' => '13',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
				[
					'URUTAN'=>'3',
					'SEQ' => 'NOT_RELEASE',
					'GRP' => 'ARFI',
					'NILAI' => '2800',
					'PERSEN'=> '2800',
					'AREA1' => '66',
					'AREA2' => '55',
					'AREA3' => '44',
					'AREA4' => '33',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	
			]
		];
			echo json_encode($data, JSON_PRETTY_PRINT);
		// return $data;
	}
	
	public function b2sproject(){
		$data=[
		 	'dsh1'=>[
				//-HEADER
				[
					'URUTAN'=>'0',
					'SEQ' => 'HEADER',
					'GRP' => 'ALL_PRJ',
					'NILAI' => '1522',
					'PERSEN'=> '8911',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'1',
					'SEQ' => 'HEADER',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '222',
					'PERSEN'=> '52',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'2',
					'SEQ' => 'HEADER',
					'GRP' => 'PRJ_ON_PIPE',
					'NILAI' => '200',
					'PERSEN'=> '200',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'3',
					'SEQ' => 'HEADER',
					'GRP' => 'RFI',
					'NILAI' => '9000',
					'PERSEN'=> '9000',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'4',
					'SEQ' => 'HEADER',
					'GRP' => 'ARFI',
					'NILAI' => '700',
					'PERSEN'=> '700',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 
				//-NO RELEASE-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'B2S',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '2901',
					'PERSEN'=> '2901',
					'AREA1' => '113',
					'AREA2' => '111',
					'AREA3' => '133',
					'AREA4' => '115',
					'SIS'=>'0',
					'SITAC1'=>'03',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'1',
					'SEQ' => 'B2S',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '2902',
					'PERSEN'=> '29012',
					'AREA1' => '213',
					'AREA2' => '211',
					'AREA3' => '233',
					'AREA4' => '215',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'2',
					'SEQ' => 'B2S',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '3902',
					'PERSEN'=> '39012',
					'AREA1' => '313',
					'AREA2' => '311',
					'AREA3' => '333',
					'AREA4' => '315',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'3',
					'SEQ' => 'B2S',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '4902',
					'PERSEN'=> '49012',
					'AREA1' => '413',
					'AREA2' => '411',
					'AREA3' => '433',
					'AREA4' => '415',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				//-POP-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'B2S',
					'GRP' => 'POP',
					'NILAI' => '1250',
					'PERSEN'=> '1250',
					'AREA1' => '13',
					'AREA2' => '132',
					'AREA3' => '37',
					'AREA4' => '24',
					'SIS'=>'12',
					'SITAC1'=>'13',
					'SITAC2'=>'14',
					'CME'=>'15',
					'RFC'=>'16',
					'RFI'=>'17',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				   ],[
					'URUTAN'=>'1',
					'SEQ' => 'B2S',
					'GRP' => 'POP',
					'NILAI' => '2250',
					'PERSEN'=> '2250',
					'AREA1' => '23',
					'AREA2' => '232',
					'AREA3' => '27',
					'AREA4' => '24',
					'SIS'=>'22',
					'SITAC1'=>'23',
					'SITAC2'=>'24',
					'CME'=>'25',
					'RFC'=>'26',
					'RFI'=>'27',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				   ],[
					'URUTAN'=>'2',
					'SEQ' => 'B2S',
					'GRP' => 'POP',
					'NILAI' => '3250',
					'PERSEN'=> '3250',
					'AREA1' => '33',
					'AREA2' => '332',
					'AREA3' => '37',
					'AREA4' => '34',
					'SIS'=>'32',
					'SITAC1'=>'33',
					'SITAC2'=>'34',
					'CME'=>'35',
					'RFC'=>'36',
					'RFI'=>'37',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				   ],[
					'URUTAN'=>'3',
					'SEQ' => 'B2S',
					'GRP' => 'POP',
					'NILAI' => '4250',
					'PERSEN'=> '4250',
					'AREA1' => '43',
					'AREA2' => '432',
					'AREA3' => '47',
					'AREA4' => '44',
					'SIS'=>'42',
					'SITAC1'=>'43',
					'SITAC2'=>'44',
					'CME'=>'45',
					'RFC'=>'46',
					'RFI'=>'47',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],										
				//-RFI-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'B2S',
					'GRP' => 'RFI',
					'NILAI' => '1320',
					'PERSEN'=> '1320',
					'AREA1' => '44',
					'AREA2' => '13',
					'AREA3' => '11',
					'AREA4' => '14',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				     ],[
					'URUTAN'=>'1',
					'SEQ' => 'B2S',
					'GRP' => 'RFI',
					'NILAI' => '2320',
					'PERSEN'=> '2320',
					'AREA1' => '24',
					'AREA2' => '23',
					'AREA3' => '21',
					'AREA4' => '24',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				 ],[
					'URUTAN'=>'2',
					'SEQ' => 'B2S',
					'GRP' => 'RFI',
					'NILAI' => '3320',
					'PERSEN'=> '3320',
					'AREA1' => '34',
					'AREA2' => '33',
					'AREA3' => '31',
					'AREA4' => '34',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				 ],[
					'URUTAN'=>'3',
					'SEQ' => 'B2S',
					'GRP' => 'RFI',
					'NILAI' => '4320',
					'PERSEN'=> '4320',
					'AREA1' => '44',
					'AREA2' => '43',
					'AREA3' => '41',
					'AREA4' => '44',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				//-ARFI-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'B2S',
					'GRP' => 'ARFI',
					'NILAI' => '1501',
					'PERSEN'=> '1501',
					'AREA1' => '191',
					'AREA2' => '14',
					'AREA3' => '15',
					'AREA4' => '171',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'2',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'1',
					'SEQ' => 'B2S',
					'GRP' => 'ARFI',
					'NILAI' => '2501',
					'PERSEN'=> '2501',
					'AREA1' => '291',
					'AREA2' => '24',
					'AREA3' => '25',
					'AREA4' => '271',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'3',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'2',
					'SEQ' => 'B2S',
					'GRP' => 'ARFI',
					'NILAI' => '3501',
					'PERSEN'=> '3501',
					'AREA1' => '391',
					'AREA2' => '34',
					'AREA3' => '35',
					'AREA4' => '371',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'4',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'3',
					'SEQ' => 'B2S',
					'GRP' => 'ARFI',
					'NILAI' => '4501',
					'PERSEN'=> '4501',
					'AREA1' => '491',
					'AREA2' => '44',
					'AREA3' => '45',
					'AREA4' => '471',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'5',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
					
			]
		];
			echo json_encode($data, JSON_PRETTY_PRINT);
		// return $data;
	}

	public function coreproject(){
		$data=[
		 	'dsh1'=>[
				//-HEADER
				[
					'URUTAN'=>'0',
					'SEQ' => 'HEADER',
					'GRP' => 'ALL_PRJ',
					'NILAI' => '1522',
					'PERSEN'=> '8911',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'1',
					'SEQ' => 'HEADER',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '222',
					'PERSEN'=> '52',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'2',
					'SEQ' => 'HEADER',
					'GRP' => 'PRJ_ON_PIPE',
					'NILAI' => '200',
					'PERSEN'=> '200',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'3',
					'SEQ' => 'HEADER',
					'GRP' => 'RFI',
					'NILAI' => '9000',
					'PERSEN'=> '9000',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'4',
					'SEQ' => 'HEADER',
					'GRP' => 'ARFI',
					'NILAI' => '700',
					'PERSEN'=> '700',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 
				//-NO RELEASE-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'CORE',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '2901',
					'PERSEN'=> '2901',
					'AREA1' => '113',
					'AREA2' => '111',
					'AREA3' => '133',
					'AREA4' => '115',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'1',
					'SEQ' => 'CORE',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '2902',
					'PERSEN'=> '29012',
					'AREA1' => '213',
					'AREA2' => '211',
					'AREA3' => '233',
					'AREA4' => '215',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'2',
					'SEQ' => 'CORE',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '3902',
					'PERSEN'=> '39012',
					'AREA1' => '313',
					'AREA2' => '311',
					'AREA3' => '333',
					'AREA4' => '315',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'3',
					'SEQ' => 'CORE',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '4902',
					'PERSEN'=> '49012',
					'AREA1' => '413',
					'AREA2' => '411',
					'AREA3' => '433',
					'AREA4' => '415',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				//-POP-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'CORE',
					'GRP' => 'POP',
					'NILAI' => '1250',
					'PERSEN'=> '1250',
					'AREA1' => '13',
					'AREA2' => '132',
					'AREA3' => '37',
					'AREA4' => '24',
					'SurveySITAC'=>'2',
					'CME'=>'5',
					'RFI'=>'12',
					'BAUT'=>'1',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'1',
					'SEQ' => 'CORE',
					'GRP' => 'POP',
					'NILAI' => '2250',
					'PERSEN'=> '2250',
					'AREA1' => '23',
					'AREA2' => '232',
					'AREA3' => '27',
					'AREA4' => '24',
					'SurveySITAC'=>'2',
					'CME'=>'5',
					'RFI'=>'12',
					'BAUT'=>'1',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'2',
					'SEQ' => 'CORE',
					'GRP' => 'POP',
					'NILAI' => '3250',
					'PERSEN'=> '3250',
					'AREA1' => '33',
					'AREA2' => '332',
					'AREA3' => '37',
					'AREA4' => '34',
					'SurveySITAC'=>'2',
					'CME'=>'5',
					'RFI'=>'12',
					'BAUT'=>'1',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'3',
					'SEQ' => 'CORE',
					'GRP' => 'POP',
					'NILAI' => '4250',
					'PERSEN'=> '4250',
					'AREA1' => '43',
					'AREA2' => '432',
					'AREA3' => '47',
					'AREA4' => '44',
					'SurveySITAC'=>'2',
					'CME'=>'5',
					'RFI'=>'12',
					'BAUT'=>'1',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],										
				//-RFI-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'CORE',
					'GRP' => 'RFI',
					'NILAI' => '1320',
					'PERSEN'=> '1320',
					'AREA1' => '44',
					'AREA2' => '13',
					'AREA3' => '11',
					'AREA4' => '14',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'1',
					'SEQ' => 'CORE',
					'GRP' => 'RFI',
					'NILAI' => '2320',
					'PERSEN'=> '2320',
					'AREA1' => '24',
					'AREA2' => '23',
					'AREA3' => '21',
					'AREA4' => '24',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				 ],[
					'URUTAN'=>'2',
					'SEQ' => 'CORE',
					'GRP' => 'RFI',
					'NILAI' => '3320',
					'PERSEN'=> '3320',
					'AREA1' => '34',
					'AREA2' => '33',
					'AREA3' => '31',
					'AREA4' => '34',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				 ],[
					'URUTAN'=>'3',
					'SEQ' => 'CORE',
					'GRP' => 'RFI',
					'NILAI' => '4320',
					'PERSEN'=> '4320',
					'AREA1' => '44',
					'AREA2' => '43',
					'AREA3' => '41',
					'AREA4' => '44',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				//-ARFI-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'CORE',
					'GRP' => 'ARFI',
					'NILAI' => '1501',
					'PERSEN'=> '1501',
					'AREA1' => '191',
					'AREA2' => '14',
					'AREA3' => '15',
					'AREA4' => '171',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'1',
					'SEQ' => 'CORE',
					'GRP' => 'ARFI',
					'NILAI' => '2501',
					'PERSEN'=> '2501',
					'AREA1' => '291',
					'AREA2' => '24',
					'AREA3' => '25',
					'AREA4' => '271',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'2',
					'SEQ' => 'CORE',
					'GRP' => 'ARFI',
					'NILAI' => '3501',
					'PERSEN'=> '3501',
					'AREA1' => '391',
					'AREA2' => '34',
					'AREA3' => '35',
					'AREA4' => '371',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'3',
					'SEQ' => 'CORE',
					'GRP' => 'ARFI',
					'NILAI' => '4501',
					'PERSEN'=> '4501',
					'AREA1' => '491',
					'AREA2' => '44',
					'AREA3' => '45',
					'AREA4' => '471',
					'SurveySITAC'=>'0',
					'CME'=>'0',
					'RFI'=>'0',
					'BAUT'=>'0',
					'ARFI_NILAI2'=>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
					
			]
		];
			echo json_encode($data, JSON_PRETTY_PRINT);
		// return $data;
	}

	public function microcellproject(){
		$data=[
		 	'dsh1'=>[
				//-HEADER
				[
					'URUTAN'=>'0',
					'SEQ' => 'HEADER',
					'GRP' => 'ALL_PRJ',
					'NILAI' => '1522',
					'PERSEN'=> '8911',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'1',
					'SEQ' => 'HEADER',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '222',
					'PERSEN'=> '52',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'2',
					'SEQ' => 'HEADER',
					'GRP' => 'PRJ_ON_PIPE',
					'NILAI' => '200',
					'PERSEN'=> '200',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'3',
					'SEQ' => 'HEADER',
					'GRP' => 'RFI',
					'NILAI' => '9000',
					'PERSEN'=> '9000',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'4',
					'SEQ' => 'HEADER',
					'GRP' => 'ARFI',
					'NILAI' => '700',
					'PERSEN'=> '700',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 
				//-NO RELEASE-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'MCP',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '2901',
					'PERSEN'=> '2901',
					'AREA1' => '113',
					'AREA2' => '111',
					'AREA3' => '133',
					'AREA4' => '115',
					'SIS'=>'0',
					'SITAC1'=>'03',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'1',
					'SEQ' => 'MCP',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '2902',
					'PERSEN'=> '29012',
					'AREA1' => '213',
					'AREA2' => '211',
					'AREA3' => '233',
					'AREA4' => '215',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'2',
					'SEQ' => 'MCP',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '3902',
					'PERSEN'=> '39012',
					'AREA1' => '313',
					'AREA2' => '311',
					'AREA3' => '333',
					'AREA4' => '315',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'3',
					'SEQ' => 'MCP',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '4902',
					'PERSEN'=> '49012',
					'AREA1' => '413',
					'AREA2' => '411',
					'AREA3' => '433',
					'AREA4' => '415',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				//-POP-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'MCP',
					'GRP' => 'POP',
					'NILAI' => '1250',
					'PERSEN'=> '1250',
					'AREA1' => '13',
					'AREA2' => '132',
					'AREA3' => '37',
					'AREA4' => '24',
					'SIS'=>'12',
					'SITAC1'=>'13',
					'SITAC2'=>'14',
					'CME'=>'15',
					'RFC'=>'16',
					'FO'=>'21',
					'RFI'=>'17',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'1',
					'SEQ' => 'MCP',
					'GRP' => 'POP',
					'NILAI' => '2250',
					'PERSEN'=> '2250',
					'AREA1' => '23',
					'AREA2' => '232',
					'AREA3' => '27',
					'AREA4' => '24',
					'SIS'=>'22',
					'SITAC1'=>'23',
					'SITAC2'=>'24',
					'CME'=>'25',
					'RFC'=>'26',
					'FO'=>'22',
					'RFI'=>'27',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'2',
					'SEQ' => 'MCP',
					'GRP' => 'POP',
					'NILAI' => '3250',
					'PERSEN'=> '3250',
					'AREA1' => '33',
					'AREA2' => '332',
					'AREA3' => '37',
					'AREA4' => '34',
					'SIS'=>'32',
					'SITAC1'=>'33',
					'SITAC2'=>'34',
					'CME'=>'35',
					'RFC'=>'36',
					'FO'=>'23',
					'RFI'=>'37',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'3',
					'SEQ' => 'MCP',
					'GRP' => 'POP',
					'NILAI' => '4250',
					'PERSEN'=> '4250',
					'AREA1' => '43',
					'AREA2' => '432',
					'AREA3' => '47',
					'AREA4' => '44',
					'SIS'=>'42',
					'SITAC1'=>'43',
					'SITAC2'=>'44',
					'CME'=>'45',
					'RFC'=>'46',
					'FO'=>'24',
					'RFI'=>'47',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],										
				//-RFI-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'MCP',
					'GRP' => 'RFI',
					'NILAI' => '1320',
					'PERSEN'=> '1320',
					'AREA1' => '44',
					'AREA2' => '13',
					'AREA3' => '11',
					'AREA4' => '14',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				 ],[
					'URUTAN'=>'1',
					'SEQ' => 'MCP',
					'GRP' => 'RFI',
					'NILAI' => '2320',
					'PERSEN'=> '2320',
					'AREA1' => '24',
					'AREA2' => '23',
					'AREA3' => '21',
					'AREA4' => '24',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				 ],[
					'URUTAN'=>'2',
					'SEQ' => 'MCP',
					'GRP' => 'RFI',
					'NILAI' => '3320',
					'PERSEN'=> '3320',
					'AREA1' => '34',
					'AREA2' => '33',
					'AREA3' => '31',
					'AREA4' => '34',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				 ],[
					'URUTAN'=>'3',
					'SEQ' => 'MCP',
					'GRP' => 'RFI',
					'NILAI' => '4320',
					'PERSEN'=> '4320',
					'AREA1' => '44',
					'AREA2' => '43',
					'AREA3' => '41',
					'AREA4' => '44',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				//-ARFI-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'MCP',
					'GRP' => 'ARFI',
					'NILAI' => '1501',
					'PERSEN'=> '1501',
					'AREA1' => '191',
					'AREA2' => '14',
					'AREA3' => '15',
					'AREA4' => '171',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'1',
					'SEQ' => 'MCP',
					'GRP' => 'ARFI',
					'NILAI' => '2501',
					'PERSEN'=> '2501',
					'AREA1' => '291',
					'AREA2' => '24',
					'AREA3' => '25',
					'AREA4' => '271',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'2',
					'SEQ' => 'MCP',
					'GRP' => 'ARFI',
					'NILAI' => '3501',
					'PERSEN'=> '3501',
					'AREA1' => '391',
					'AREA2' => '34',
					'AREA3' => '35',
					'AREA4' => '371',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'3',
					'SEQ' => 'MCP',
					'GRP' => 'ARFI',
					'NILAI' => '4501',
					'PERSEN'=> '4501',
					'AREA1' => '491',
					'AREA2' => '44',
					'AREA3' => '45',
					'AREA4' => '471',
					'SIS'=>'0',
					'SITAC1'=>'0',
					'SITAC2'=>'0',
					'CME'=>'0',
					'RFC'=>'0',
					'FO'=>'0',
					'RFI'=>'0',
					'ARFI_NILAI2'=>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
					
			]
		];
			echo json_encode($data, JSON_PRETTY_PRINT);
		// return $data;
	}

	public function specialproject(){
		$data=[
		 	'dsh1'=>[
				//-HEADER
				[
					'URUTAN'=>'0',
					'SEQ' => 'HEADER',
					'GRP' => 'ALL_PRJ',
					'NILAI' => '1522',
					'PERSEN'=> '8911',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'1',
					'SEQ' => 'HEADER',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '222',
					'PERSEN'=> '52',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'2',
					'SEQ' => 'HEADER',
					'GRP' => 'PRJ_ON_PIPE',
					'NILAI' => '200',
					'PERSEN'=> '200',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'3',
					'SEQ' => 'HEADER',
					'GRP' => 'RFI',
					'NILAI' => '9000',
					'PERSEN'=> '9000',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				[
					'URUTAN'=>'4',
					'SEQ' => 'HEADER',
					'GRP' => 'ARFI',
					'NILAI' => '700',
					'PERSEN'=> '700',
					'AREA1' => '0',
					'AREA2' => '0',
					'AREA3' => '0',
					'AREA4' => '0',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 
				//-NO RELEASE-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'SP',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '2901',
					'PERSEN'=> '2901',
					'AREA1' => '113',
					'AREA2' => '111',
					'AREA3' => '133',
					'AREA4' => '115',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'1',
					'SEQ' => 'SP',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '2902',
					'PERSEN'=> '29012',
					'AREA1' => '213',
					'AREA2' => '211',
					'AREA3' => '233',
					'AREA4' => '215',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'2',
					'SEQ' => 'SP',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '3902',
					'PERSEN'=> '39012',
					'AREA1' => '313',
					'AREA2' => '311',
					'AREA3' => '333',
					'AREA4' => '315',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'3',
					'SEQ' => 'SP',
					'GRP' => 'NOT_RELEASE',
					'NILAI' => '4902',
					'PERSEN'=> '49012',
					'AREA1' => '413',
					'AREA2' => '411',
					'AREA3' => '433',
					'AREA4' => '415',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				//-POP-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'SP',
					'GRP' => 'POP',
					'NILAI' => '1250',
					'PERSEN'=> '1250',
					'AREA1' => '13',
					'AREA2' => '132',
					'AREA3' => '37',
					'AREA4' => '24',
					'BAST'=>'1',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'1',
					'SEQ' => 'SP',
					'GRP' => 'POP',
					'NILAI' => '2250',
					'PERSEN'=> '2250',
					'AREA1' => '23',
					'AREA2' => '232',
					'AREA3' => '27',
					'AREA4' => '24',
					'BAST'=>'2',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
			   ],[
					'URUTAN'=>'2',
					'SEQ' => 'SP',
					'GRP' => 'POP',
					'NILAI' => '3250',
					'PERSEN'=> '3250',
					'AREA1' => '33',
					'AREA2' => '332',
					'AREA3' => '37',
					'AREA4' => '34',
					'BAST'=>'3',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'3',
					'SEQ' => 'SP',
					'GRP' => 'POP',
					'NILAI' => '4250',
					'PERSEN'=> '4250',
					'AREA1' => '43',
					'AREA2' => '432',
					'AREA3' => '47',
					'AREA4' => '44',
					'BAST'=>'4',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],										
				//-RFI-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'SP',
					'GRP' => 'RFI',
					'NILAI' => '1320',
					'PERSEN'=> '1320',
					'AREA1' => '44',
					'AREA2' => '13',
					'AREA3' => '11',
					'AREA4' => '14',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'1',
					'SEQ' => 'SP',
					'GRP' => 'RFI',
					'NILAI' => '2320',
					'PERSEN'=> '2320',
					'AREA1' => '24',
					'AREA2' => '23',
					'AREA3' => '21',
					'AREA4' => '24',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'2',
					'SEQ' => 'SP',
					'GRP' => 'RFI',
					'NILAI' => '3320',
					'PERSEN'=> '3320',
					'AREA1' => '34',
					'AREA2' => '33',
					'AREA3' => '31',
					'AREA4' => '34',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'3',
					'SEQ' => 'SP',
					'GRP' => 'RFI',
					'NILAI' => '4320',
					'PERSEN'=> '4320',
					'AREA1' => '44',
					'AREA2' => '43',
					'AREA3' => '41',
					'AREA4' => '44',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'0',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],
				//-ARFI-AREA
				[
					'URUTAN'=>'0',
					'SEQ' => 'SP',
					'GRP' => 'ARFI',
					'NILAI' => '1501',
					'PERSEN'=> '1501',
					'AREA1' => '191',
					'AREA2' => '14',
					'AREA3' => '15',
					'AREA4' => '171',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'1',
					'SEQ' => 'SP',
					'GRP' => 'ARFI',
					'NILAI' => '2501',
					'PERSEN'=> '2501',
					'AREA1' => '291',
					'AREA2' => '24',
					'AREA3' => '25',
					'AREA4' => '271',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'2',
					'SEQ' => 'SP',
					'GRP' => 'ARFI',
					'NILAI' => '3501',
					'PERSEN'=> '3501',
					'AREA1' => '391',
					'AREA2' => '34',
					'AREA3' => '35',
					'AREA4' => '371',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'7',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],[
					'URUTAN'=>'3',
					'SEQ' => 'SP',
					'GRP' => 'ARFI',
					'NILAI' => '4501',
					'PERSEN'=> '4501',
					'AREA1' => '491',
					'AREA2' => '44',
					'AREA3' => '45',
					'AREA4' => '471',
					'BAST'=>'0',
					'ARFI_NILAI2'=>'2',
					'BULAN'=>'09',
					'TAHUN'=>'2018'
				],	 	
					
			]
		];
			echo json_encode($data, JSON_PRETTY_PRINT);
		// return $data;
	}
	
	public function chartdata(){
		$data=[
			'chart'=>[
				[
					'ID_CHART'=>'mp001',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'NM_CHART'=>'All Project', 
					'TITLE'=>'Project Summary', 
					'KTG'=>["W1-Jan-2018","W2-Jan-2018","W3-Jan-2018","W4-Jan-2018","W5-Jan-2018","W1-Feb-2018","W2-Feb-2018","W3-Feb-2018","W4-Feb-2018","W5-Feb-2018","W1-Mar-2018","W2-Mar-2018","W3-Mar-2018","W4-Mar-2018","W5-Mar-2018","W1-Apr-2018","W2-Apr-2018","W3-Apr-2018","W4-Apr-2018","W5-Apr-2018","W6-Apr-2018","W1-May-2018","W2-May-2018","W3-May-2018","W4-May-2018","W5-May-2018","W1-Jun-2018","W2-Jun-2018","W3-Jun-2018","W4-Jun-2018","W5-Jun-2018","W1-Jul-2018","W2-Jul-2018","W3-Jul-2018","W4-Jul-2018","W5-Jul-2018","W6-Jul-2018","W1-Aug-2018","W2-Aug-2018","W3-Aug-2018","W4-Aug-2018","W5-Aug-2018","W1-Sep-2018","W2-Sep-2018","W3-Sep-2018","W4-Sep-2018","W5-Sep-2018","W1-Oct-2018","W2-Oct-2018","W3-Oct-2018","W4-Oct-2018","W5-Oct-2018","W1-Nov-2018","W2-Nov-2018","W3-Nov-2018"],
					'TARGET_RFI'=>[0,0,0,0,0,0,0,0,0,0,0,16,61,302,382,394,411,421,873,885,886,900,1195,1233,1251,1401,1422,1447,1449,1459,1461,1461,1487,1487,1489,1530,1560,1564,1577,1586,1606,1610,1610,1613,1613,1613,1615,1650,1650,1654,1712,1716,1716,1721], 
					'ACTUAL_RFI'=>[0,0,0,0,0,0,0,0,0,0,0,22,56,123,206,209,259,303,331,339,343,343,350,353,354,356,357,359,362,362,362,363,367,372,399,403,408,456],
					'TARGET'=>[0,0,0,0,0,0,0,0,0,0,0,16,45,241,80,12,17,10,452,12,1,14,295,38,18,150,21,25,2,10,2,0,26,0,2,41,30,4,13,9,20,4,0,3,0,0,2,35,0,4,58,4,0,5,0],
					'ACTUAL'=>[0,0,0,0,0,0,0,0,0,0,0,22,34,67,83,3,50,44,28,8,4,0,7,3,1,2,1,2,3,0,0,1,4,5,27,4,5,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				],
				[
					'ID_CHART'=>'mp002',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'NM_CHART'=>'B2S Project', 
					'TITLE'=>'Project Summary', 
					'KTG'=>["W1-Jan-2018","W2-Jan-2018","W3-Jan-2018","W4-Jan-2018","W5-Jan-2018","W1-Feb-2018","W2-Feb-2018","W3-Feb-2018","W4-Feb-2018","W5-Feb-2018","W1-Mar-2018","W2-Mar-2018","W3-Mar-2018","W4-Mar-2018","W5-Mar-2018","W1-Apr-2018","W2-Apr-2018","W3-Apr-2018","W4-Apr-2018","W5-Apr-2018","W6-Apr-2018","W1-May-2018","W2-May-2018","W3-May-2018","W4-May-2018","W5-May-2018","W1-Jun-2018","W2-Jun-2018","W3-Jun-2018","W4-Jun-2018","W5-Jun-2018","W1-Jul-2018","W2-Jul-2018","W3-Jul-2018","W4-Jul-2018","W5-Jul-2018","W6-Jul-2018","W1-Aug-2018","W2-Aug-2018","W3-Aug-2018","W4-Aug-2018","W5-Aug-2018","W1-Sep-2018","W2-Sep-2018","W3-Sep-2018","W4-Sep-2018","W5-Sep-2018","W1-Oct-2018","W2-Oct-2018","W3-Oct-2018","W4-Oct-2018","W5-Oct-2018","W1-Nov-2018","W2-Nov-2018","W3-Nov-2018"],
					'TARGET_RFI'=>[0,0,0,0,0,0,0,0,0,0,0,16,61,302,382,394,411,421,873,885,886,900,1195,1233,1251,1401,1422,1447,1449,1459,1461,1461,1487,1487,1489,1530,1560,1564,1577,1586,1606,1610,1610,1613,1613,1613,1615,1650,1650,1654,1712,1716,1716,1721], 
					'ACTUAL_RFI'=>[0,0,0,0,0,0,0,0,0,0,0,22,56,123,206,209,259,303,331,339,343,343,350,353,354,356,357,359,362,362,362,363,367,372,399,403,408,456],
					'TARGET'=>[0,0,0,0,0,0,0,0,0,0,0,16,45,241,80,12,17,10,452,12,1,14,295,38,18,150,21,25,2,10,2,0,26,0,2,41,30,4,13,9,20,4,0,3,0,0,2,35,0,4,58,4,0,5,0],
					'ACTUAL'=>[0,0,0,0,0,0,0,0,0,0,0,22,34,67,83,3,50,44,28,8,4,0,7,3,1,2,1,2,3,0,0,1,4,5,27,4,5,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				],
				[
					'ID_CHART'=>'mp003',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'NM_CHART'=>'Core Project', 
					'TITLE'=>'Project Summary', 
					'KTG'=>["W1-Jan-2018","W2-Jan-2018","W3-Jan-2018","W4-Jan-2018","W5-Jan-2018","W1-Feb-2018","W2-Feb-2018","W3-Feb-2018","W4-Feb-2018","W5-Feb-2018","W1-Mar-2018","W2-Mar-2018","W3-Mar-2018","W4-Mar-2018","W5-Mar-2018","W1-Apr-2018","W2-Apr-2018","W3-Apr-2018","W4-Apr-2018","W5-Apr-2018","W6-Apr-2018","W1-May-2018","W2-May-2018","W3-May-2018","W4-May-2018","W5-May-2018","W1-Jun-2018","W2-Jun-2018","W3-Jun-2018","W4-Jun-2018","W5-Jun-2018","W1-Jul-2018","W2-Jul-2018","W3-Jul-2018","W4-Jul-2018","W5-Jul-2018","W6-Jul-2018","W1-Aug-2018","W2-Aug-2018","W3-Aug-2018","W4-Aug-2018","W5-Aug-2018","W1-Sep-2018","W2-Sep-2018","W3-Sep-2018","W4-Sep-2018","W5-Sep-2018","W1-Oct-2018","W2-Oct-2018","W3-Oct-2018","W4-Oct-2018","W5-Oct-2018","W1-Nov-2018","W2-Nov-2018","W3-Nov-2018"],
					'TARGET_RFI'=>[0,0,0,0,0,0,0,0,0,0,0,16,61,302,382,394,411,421,873,885,886,900,1195,1233,1251,1401,1422,1447,1449,1459,1461,1461,1487,1487,1489,1530,1560,1564,1577,1586,1606,1610,1610,1613,1613,1613,1615,1650,1650,1654,1712,1716,1716,1721], 
					'ACTUAL_RFI'=>[0,0,0,0,0,0,0,0,0,0,0,22,56,123,206,209,259,303,331,339,343,343,350,353,354,356,357,359,362,362,362,363,367,372,399,403,408,456],
					'TARGET'=>[0,0,0,0,0,0,0,0,0,0,0,16,45,241,80,12,17,10,452,12,1,14,295,38,18,150,21,25,2,10,2,0,26,0,2,41,30,4,13,9,20,4,0,3,0,0,2,35,0,4,58,4,0,5,0],
					'ACTUAL'=>[0,0,0,0,0,0,0,0,0,0,0,22,34,67,83,3,50,44,28,8,4,0,7,3,1,2,1,2,3,0,0,1,4,5,27,4,5,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				],
				[
					'ID_CHART'=>'mp004',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'NM_CHART'=>'Microcell Project', 
					'TITLE'=>'Project Summary', 
					'KTG'=>["W1-Jan-2018","W2-Jan-2018","W3-Jan-2018","W4-Jan-2018","W5-Jan-2018","W1-Feb-2018","W2-Feb-2018","W3-Feb-2018","W4-Feb-2018","W5-Feb-2018","W1-Mar-2018","W2-Mar-2018","W3-Mar-2018","W4-Mar-2018","W5-Mar-2018","W1-Apr-2018","W2-Apr-2018","W3-Apr-2018","W4-Apr-2018","W5-Apr-2018","W6-Apr-2018","W1-May-2018","W2-May-2018","W3-May-2018","W4-May-2018","W5-May-2018","W1-Jun-2018","W2-Jun-2018","W3-Jun-2018","W4-Jun-2018","W5-Jun-2018","W1-Jul-2018","W2-Jul-2018","W3-Jul-2018","W4-Jul-2018","W5-Jul-2018","W6-Jul-2018","W1-Aug-2018","W2-Aug-2018","W3-Aug-2018","W4-Aug-2018","W5-Aug-2018","W1-Sep-2018","W2-Sep-2018","W3-Sep-2018","W4-Sep-2018","W5-Sep-2018","W1-Oct-2018","W2-Oct-2018","W3-Oct-2018","W4-Oct-2018","W5-Oct-2018","W1-Nov-2018","W2-Nov-2018","W3-Nov-2018"],
					'TARGET_RFI'=>[0,0,0,0,0,0,0,0,0,0,0,16,61,302,382,394,411,421,873,885,886,900,1195,1233,1251,1401,1422,1447,1449,1459,1461,1461,1487,1487,1489,1530,1560,1564,1577,1586,1606,1610,1610,1613,1613,1613,1615,1650,1650,1654,1712,1716,1716,1721], 
					'ACTUAL_RFI'=>[0,0,0,0,0,0,0,0,0,0,0,22,56,123,206,209,259,303,331,339,343,343,350,353,354,356,357,359,362,362,362,363,367,372,399,403,408,456],
					'TARGET'=>[0,0,0,0,0,0,0,0,0,0,0,16,45,241,80,12,17,10,452,12,1,14,295,38,18,150,21,25,2,10,2,0,26,0,2,41,30,4,13,9,20,4,0,3,0,0,2,35,0,4,58,4,0,5,0],
					'ACTUAL'=>[0,0,0,0,0,0,0,0,0,0,0,22,34,67,83,3,50,44,28,8,4,0,7,3,1,2,1,2,3,0,0,1,4,5,27,4,5,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				],
				[
					'ID_CHART'=>'mp005',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'NM_CHART'=>'Special Project', 
					'TITLE'=>'Project Summary', 
					'KTG'=>["W1-Jan-2018","W2-Jan-2018","W3-Jan-2018","W4-Jan-2018","W5-Jan-2018","W1-Feb-2018","W2-Feb-2018","W3-Feb-2018","W4-Feb-2018","W5-Feb-2018","W1-Mar-2018","W2-Mar-2018","W3-Mar-2018","W4-Mar-2018","W5-Mar-2018","W1-Apr-2018","W2-Apr-2018","W3-Apr-2018","W4-Apr-2018","W5-Apr-2018","W6-Apr-2018","W1-May-2018","W2-May-2018","W3-May-2018","W4-May-2018","W5-May-2018","W1-Jun-2018","W2-Jun-2018","W3-Jun-2018","W4-Jun-2018","W5-Jun-2018","W1-Jul-2018","W2-Jul-2018","W3-Jul-2018","W4-Jul-2018","W5-Jul-2018","W6-Jul-2018","W1-Aug-2018","W2-Aug-2018","W3-Aug-2018","W4-Aug-2018","W5-Aug-2018","W1-Sep-2018","W2-Sep-2018","W3-Sep-2018","W4-Sep-2018","W5-Sep-2018","W1-Oct-2018","W2-Oct-2018","W3-Oct-2018","W4-Oct-2018","W5-Oct-2018","W1-Nov-2018","W2-Nov-2018","W3-Nov-2018"],
					'TARGET_RFI'=>[0,0,0,0,0,0,0,0,0,0,0,16,61,302,382,394,411,421,873,885,886,900,1195,1233,1251,1401,1422,1447,1449,1459,1461,1461,1487,1487,1489,1530,1560,1564,1577,1586,1606,1610,1610,1613,1613,1613,1615,1650,1650,1654,1712,1716,1716,1721], 
					'ACTUAL_RFI'=>[0,0,0,0,0,0,0,0,0,0,0,22,56,123,206,209,259,303,331,339,343,343,350,353,354,356,357,359,362,362,362,363,367,372,399,403,408,456],
					'TARGET'=>[0,0,0,0,0,0,0,0,0,0,0,16,45,241,80,12,17,10,452,12,1,14,295,38,18,150,21,25,2,10,2,0,26,0,2,41,30,4,13,9,20,4,0,3,0,0,2,35,0,4,58,4,0,5,0],
					'ACTUAL'=>[0,0,0,0,0,0,0,0,0,0,0,22,34,67,83,3,50,44,28,8,4,0,7,3,1,2,1,2,3,0,0,1,4,5,27,4,5,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				]			
			]
		];
		echo json_encode($data, JSON_PRETTY_PRINT);
		// return $data;
	}

	public function newmaps($sorting)
    {
        if($sorting == 'rfi') {
            $query = $this->db->query("SELECT * FROM d_project_list_of_work_order WHERE release_status iS NOT NULL AND target_rfi IS NOT NULL AND rfi IS NOT NULL")->result();
            echo json_encode($query);
        } elseif($sorting == 'release') {
            $query = $this->db->query("SELECT * FROM d_project_list_of_work_order WHERE release_status IS NOT NULL AND rfi IS NULL")->result();
            echo json_encode($query);
        } elseif($sorting == 'notrelease') {
            $query = $this->db->query("SELECT * FROM d_project_list_of_work_order WHERE release_status IS NULL AND rfi IS NULL")->result();
            echo json_encode($query);
        } elseif ($sorting == 'rfirelease') {
            $query = $this->db->query("SELECT * FROM d_project_list_of_work_order WHERE release_status iS NOT NULL AND target_rfi IS NOT NULL AND rfi IS NOT NULL OR release_status IS NOT NULL AND rfi IS NULL")->result();
            echo json_encode($query);
        }  elseif ($sorting == 'rfinotrelease') {
            $query = $this->db->query("SELECT * FROM d_project_list_of_work_order WHERE release_status IS NULL AND rfi IS NULL OR release_status iS NOT NULL AND target_rfi IS NOT NULL AND rfi IS NOT NULL")->result();
            echo json_encode($query);
        } elseif ($sorting == 'releasenotrelease') {
            $query = $this->db->query("SELECT * FROM d_project_list_of_work_order WHERE release_status IS NOT NULL AND rfi IS NULL OR release_status IS NULL AND rfi IS NULL")->result();
            echo json_encode($query);
        } elseif ($sorting == 'rfireleasenotrelease') {
            $query = $this->db->query("SELECT * FROM d_project_list_of_work_order")->result();
            echo json_encode($query);
        }
    }
	
	public function mapproject(){
		
		// $data=[
		// 	'Release'=>[
		// 		[
					
		// 			'GRP'=>'RFI',
		// 			'PROJECT_ID' =>'1',
		// 			'BULAN'=>'09',
		// 			'TAHUN'=>'2018',
		// 			'AREA'=>'1',
		// 			'LAT' =>'-6.544450709916854',
		// 			'LONG' =>'106.25513876486207',
		// 			'RADIUS' =>'100',
		// 			'SITE_NM'=>'Banten', 
		// 		  	'TENAN_NM'=>'lapo', 
		// 			'REGIONAL'=>'WIT',
		// 			'SOW'=>'piter', 
		// 			'STATUS'=>'RFI'
		// 		],[
					
		// 			'GRP'=>'RFI',
		// 			'PROJECT_ID' =>'2',
		// 			'BULAN'=>'09',
		// 			'TAHUN'=>'2018',
		// 			'AREA'=>'2',
		// 			'LAT' =>'-6.938416512744405',
		// 			'LONG' =>'107.12031210470582',
		// 			'RADIUS' =>'100',
		// 			'SITE_NM'=>'Sukabumi', 
		// 		  	'TENAN_NM'=>'lapo', 
		// 			'REGIONAL'=>'WIT',
		// 			'SOW'=>'piter', 
		// 			'STATUS'=>'RFI	'
		// 		],[
					
		// 			'GRP'=>'RELEASE',
		// 			'PROJECT_ID' =>'1',
		// 			'BULAN'=>'09',
		// 			'TAHUN'=>'2018',
		// 			'AREA'=>'1',
		// 			'LAT' =>'-3.73425',
		// 			'LONG' =>'103.802',
		// 			'RADIUS' =>'100',
		// 			'SITE_NM'=>'jakarta', 
		// 		  	'TENAN_NM'=>'lapo', 
		// 			'REGIONAL'=>'WIT',
		// 			'SOW'=>'piter', 
		// 			'STATUS'=>'release'
		// 		],

		// 		[
		// 			'GRP'=>'RELEASE',
		// 			'PROJECT_ID' =>'1',
		// 			'BULAN'=>'09',
		// 			'TAHUN'=>'2018',
		// 			'AREA'=>'2',
		// 			'LAT' =>'-6.220648',
		// 			'LONG' =>'106.805989',
		// 			'RADIUS' =>'100',
		// 			'SITE_NM'=>'jakarta', 
		// 		  	'TENAN_NM'=>'lapo', 
		// 			'REGIONAL'=>'WIT',
		// 			'SOW'=>'piter', 
		// 			'STATUS'=>'release'
		// 		],
		// 		[
		// 			'GRP'=>'RELEASE',
		// 			'PROJECT_ID' =>'1',
		// 			'BULAN'=>'09',
		// 			'TAHUN'=>'2018',
		// 			'AREA'=>'3',
		// 			'LAT' =>'-8.137381',
		// 			'LONG' =>'115.102289',
		// 			'RADIUS' =>'100',
		// 			'SITE_NM'=>'jakarta', 
		// 		  	'TENAN_NM'=>'lapo', 
		// 			'REGIONAL'=>'WIT',
		// 			'SOW'=>'piter', 
		// 			'STATUS'=>'release'

		// 		],[
		// 			'GRP'=>'RELEASE',
		// 			'PROJECT_ID' =>'1',
		// 			'BULAN'=>'09',
		// 			'TAHUN'=>'2018',
		// 			'AREA'=>'4',
		// 			'LAT' =>'-6.324000',
		// 			'LONG' =>'106.626076',
		// 			'RADIUS' =>'100',
		// 			'SITE_NM'=>'jakarta', 
		// 		  	'TENAN_NM'=>'lapo', 
		// 			'REGIONAL'=>'WIT',
		// 			'SOW'=>'piter', 
		// 			'STATUS'=>'release'

		// 		],[
		// 			'GRP'=>'RELEASE',
		// 			'PROJECT_ID' =>'2',
		// 			'BULAN'=>'09',
		// 			'TAHUN'=>'2018',
		// 			'AREA'=>'1',
		// 			'LAT' =>'-6.652587',
		// 			'LONG' =>'-253.292509',
		// 			'RADIUS' =>'100',
		// 			'SITE_NM'=>'Tangerang', 
		// 		  	'TENAN_NM'=>'lapo', 
		// 			'REGIONAL'=>'WIT',
		// 			'SOW'=>'piter', 
		// 			'STATUS'=>'Release'

		// 		],[
		// 			'GRP'=>'NOTRELEASE',
		// 			'PROJECT_ID' =>'6',
		// 			'BULAN'=>'09',
		// 			'TAHUN'=>'2018',
		// 			'AREA'=>'1',
		// 			'LAT' =>'-7.4301105456290895',
		// 			'LONG' =>'108.15852011251832',
		// 			'RADIUS' =>'100',
		// 			'SITE_NM'=>'Tasikmalaya', 
		// 		  	'TENAN_NM'=>'lapo', 
		// 			'REGIONAL'=>'WIT',
		// 			'SOW'=>'piter', 
		// 			'STATUS'=>'Not Release'

		// 		],[
		// 			'GRP'=>'NOTRELEASE',
		// 			'PROJECT_ID' =>'7',
		// 			'BULAN'=>'09',
		// 			'TAHUN'=>'2018',
		// 			'AREA'=>'2',
		// 			'LAT' =>'-7.419216330967707',
		// 			'LONG' =>'109.56477011251832',
		// 			'RADIUS' =>'100',
		// 			'SITE_NM'=>'Purwokerto', 
		// 		  	'TENAN_NM'=>'lapo', 
		// 			'REGIONAL'=>'WIT',
		// 			'SOW'=>'piter', 
		// 			'STATUS'=>'Not Release'

		// 		]


		// 	]
		// ];	
		echo json_encode($data, JSON_PRETTY_PRINT);
	}
	
	public function mapb2s(){
		$data=[
			'Release'=>[
				[
					
					'GRP'=>'RFI',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-6.544450709916854',
					'LONG' =>'106.25513876486207',
					'RADIUS' =>'100',
					'SITE_NM'=>'Banten', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'RFI'
				],[
					
					'GRP'=>'RFI',
					'PROJECT_ID' =>'2',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'2',
					'LAT' =>'-6.938416512744405',
					'LONG' =>'107.12031210470582',
					'RADIUS' =>'100',
					'SITE_NM'=>'Sukabumi', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'RFI	'
				],[
					
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-3.73425',
					'LONG' =>'103.802',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'
				],

				[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'2',
					'LAT' =>'-6.220648',
					'LONG' =>'106.805989',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'
				],
				[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'3',
					'LAT' =>'-8.137381',
					'LONG' =>'115.102289',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'

				],[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'4',
					'LAT' =>'-6.324000',
					'LONG' =>'106.626076',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'

				],[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'2',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-6.652587',
					'LONG' =>'-253.292509',
					'RADIUS' =>'100',
					'SITE_NM'=>'Tangerang', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'Release'

				],[
					'GRP'=>'NOTRELEASE',
					'PROJECT_ID' =>'6',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-7.4301105456290895',
					'LONG' =>'108.15852011251832',
					'RADIUS' =>'100',
					'SITE_NM'=>'Tasikmalaya', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'Not Release'

				],[
					'GRP'=>'NOTRELEASE',
					'PROJECT_ID' =>'7',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'2',
					'LAT' =>'-7.419216330967707',
					'LONG' =>'109.56477011251832',
					'RADIUS' =>'100',
					'SITE_NM'=>'Purwokerto', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'Not Release'

				]


			]
		];	
		echo json_encode($data, JSON_PRETTY_PRINT);
	}

	public function mapcore(){
		$data=[
			'Release'=>[
				[
					
					'GRP'=>'RFI',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-6.544450709916854',
					'LONG' =>'106.25513876486207',
					'RADIUS' =>'100',
					'SITE_NM'=>'Banten', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'RFI'
				],[
					
					'GRP'=>'RFI',
					'PROJECT_ID' =>'2',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'2',
					'LAT' =>'-6.938416512744405',
					'LONG' =>'107.12031210470582',
					'RADIUS' =>'100',
					'SITE_NM'=>'Sukabumi', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'RFI	'
				],[
					
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-3.73425',
					'LONG' =>'103.802',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'
				],

				[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'2',
					'LAT' =>'-6.220648',
					'LONG' =>'106.805989',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'
				],
				[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'3',
					'LAT' =>'-8.137381',
					'LONG' =>'115.102289',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'

				],[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'4',
					'LAT' =>'-6.324000',
					'LONG' =>'106.626076',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'

				],[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'2',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-6.652587',
					'LONG' =>'-253.292509',
					'RADIUS' =>'100',
					'SITE_NM'=>'Tangerang', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'Release'

				],[
					'GRP'=>'NOTRELEASE',
					'PROJECT_ID' =>'6',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-7.4301105456290895',
					'LONG' =>'108.15852011251832',
					'RADIUS' =>'100',
					'SITE_NM'=>'Tasikmalaya', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'Not Release'

				],[
					'GRP'=>'NOTRELEASE',
					'PROJECT_ID' =>'7',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'2',
					'LAT' =>'-7.419216330967707',
					'LONG' =>'109.56477011251832',
					'RADIUS' =>'100',
					'SITE_NM'=>'Purwokerto', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'Not Release'

				]


			]
		];	
		echo json_encode($data, JSON_PRETTY_PRINT);
	}

	public function mapmicrocell(){
		$data=[
			'Release'=>[
				[
					
					'GRP'=>'RFI',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-6.544450709916854',
					'LONG' =>'106.25513876486207',
					'RADIUS' =>'100',
					'SITE_NM'=>'Banten', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'RFI'
				],[
					
					'GRP'=>'RFI',
					'PROJECT_ID' =>'2',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'2',
					'LAT' =>'-6.938416512744405',
					'LONG' =>'107.12031210470582',
					'RADIUS' =>'100',
					'SITE_NM'=>'Sukabumi', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'RFI	'
				],[
					
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-3.73425',
					'LONG' =>'103.802',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'
				],

				[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'2',
					'LAT' =>'-6.220648',
					'LONG' =>'106.805989',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'
				],
				[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'3',
					'LAT' =>'-8.137381',
					'LONG' =>'115.102289',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'

				],[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'4',
					'LAT' =>'-6.324000',
					'LONG' =>'106.626076',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'

				],[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'2',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-6.652587',
					'LONG' =>'-253.292509',
					'RADIUS' =>'100',
					'SITE_NM'=>'Tangerang', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'Release'

				],[
					'GRP'=>'NOTRELEASE',
					'PROJECT_ID' =>'6',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-7.4301105456290895',
					'LONG' =>'108.15852011251832',
					'RADIUS' =>'100',
					'SITE_NM'=>'Tasikmalaya', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'Not Release'

				],[
					'GRP'=>'NOTRELEASE',
					'PROJECT_ID' =>'7',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'2',
					'LAT' =>'-7.419216330967707',
					'LONG' =>'109.56477011251832',
					'RADIUS' =>'100',
					'SITE_NM'=>'Purwokerto', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'Not Release'

				]


			]
		];	
		echo json_encode($data, JSON_PRETTY_PRINT);
	}

	public function mapsp(){
		$data=[
			'Release'=>[
				[
					
					'GRP'=>'RFI',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-6.544450709916854',
					'LONG' =>'106.25513876486207',
					'RADIUS' =>'100',
					'SITE_NM'=>'Banten', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'RFI'
				],[
					
					'GRP'=>'RFI',
					'PROJECT_ID' =>'2',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'2',
					'LAT' =>'-6.938416512744405',
					'LONG' =>'107.12031210470582',
					'RADIUS' =>'100',
					'SITE_NM'=>'Sukabumi', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'RFI	'
				],[
					
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-3.73425',
					'LONG' =>'103.802',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'
				],

				[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'2',
					'LAT' =>'-6.220648',
					'LONG' =>'106.805989',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'
				],
				[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'3',
					'LAT' =>'-8.137381',
					'LONG' =>'115.102289',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'

				],[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'1',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'4',
					'LAT' =>'-6.324000',
					'LONG' =>'106.626076',
					'RADIUS' =>'100',
					'SITE_NM'=>'jakarta', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'release'

				],[
					'GRP'=>'RELEASE',
					'PROJECT_ID' =>'2',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-6.652587',
					'LONG' =>'-253.292509',
					'RADIUS' =>'100',
					'SITE_NM'=>'Tangerang', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'Release'

				],[
					'GRP'=>'NOTRELEASE',
					'PROJECT_ID' =>'6',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'1',
					'LAT' =>'-7.4301105456290895',
					'LONG' =>'108.15852011251832',
					'RADIUS' =>'100',
					'SITE_NM'=>'Tasikmalaya', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'Not Release'

				],[
					'GRP'=>'NOTRELEASE',
					'PROJECT_ID' =>'7',
					'BULAN'=>'09',
					'TAHUN'=>'2018',
					'AREA'=>'2',
					'LAT' =>'-7.419216330967707',
					'LONG' =>'109.56477011251832',
					'RADIUS' =>'100',
					'SITE_NM'=>'Purwokerto', 
				  	'TENAN_NM'=>'lapo', 
					'REGIONAL'=>'WIT',
					'SOW'=>'piter', 
					'STATUS'=>'Not Release'

				]


			]
		];	
		echo json_encode($data, JSON_PRETTY_PRINT);
	}


	public function setting(){
		$data=[
			'filter'=>[
				[
					'SORT' =>'0',
					'NAME' =>'All',
					'NILAI' =>'0-0000',
					'STT_ACTIVE'=>false
				],
				[
					'SORT' =>'1',
					'NAME' =>'Jan - 2018',
					'NILAI' =>'1-2018',
					'STT_ACTIVE'=>false
				],
				
				[
					'SORT' =>'2',
					'NAME' =>'Feb - 2018',
					'NILAI' =>'2-2018',
					'STT_ACTIVE'=>false

				],
				[
					'SORT' =>'3',
					'NAME' =>'Mar - 2018',
					'NILAI' =>'3-2018',
					'STT_ACTIVE'=>false

				],
				[
					'SORT' =>'4',
					'NAME' =>'Apr - 2018',
					'NILAI' =>'4-2018',
					'STT_ACTIVE'=>false

				],
				[
					'SORT' =>'5',
					'NAME' =>'Mei - 2018',
					'NILAI' =>'5-2018',
					'STT_ACTIVE'=>false

				],
				[
					'SORT' =>'6',
					'NAME' =>'Jun - 2018',
					'NILAI' =>'6-2018',
					'STT_ACTIVE'=>false

				],
				[
					'SORT' =>'7',
					'NAME' =>'Jul - 2018',
					'NILAI' =>'7-2018',
					'STT_ACTIVE'=>false

				],
				[
					'SORT' =>'8',
					'NAME' =>'Aug - 2018',
					'NILAI' =>'8-2018',
					'STT_ACTIVE'=>false	

				],[
					'SORT' =>'9',
					'NAME' =>'Sep - 2018',
					'NILAI' =>'9-2018',
					'STT_ACTIVE'=>false	

				],[
					'SORT' =>'10',
					'NAME' =>'Okt - 2018',
					'NILAI' =>'10-2018',
					'STT_ACTIVE'=>true	

				]				
			]
		];
		echo json_encode($data, JSON_PRETTY_PRINT);
		// return $data;
	}

	/* LIST USER
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * SQLite    : Live Mobile Storage.
    * WebSql    : Develompent debug database,table,query.
    * Author    : ptr.nov@gmail.com
    */
	public function listuser(){
		//-Result Usage
		$result=$this->M_MobileDashboard->ambilUser();
		echo json_encode(["user"=>$result], JSON_PRETTY_PRINT);

		//-Result Example 
		$data=[
			'user'=>[
				[
					'USER_ID' =>"1",
					'USERNAME' =>"piter",
					'PASSWORD' =>"asd123",
					'REAL_NAME' =>"PTRNOV",
					'EMAIL'=>"test@test.com",
					'USER_GROUP'=>"percobaan"
				],							
			]
		];
		// echo json_encode($data, JSON_PRETTY_PRINT);
	}

	/* LIST USER
    * Event     : ViewLoad & ViewInit (Observable)
    * Rest Api  : Request & respon
    * Method    : Post Validation
    * Author    : ptr.nov@gmail.com
    */
	public function login($username,$password){		
		$request = [
			'username' => strtolower($username),
			'password' => md5($password)
		];
		$result=$this->M_MobileDashboard->validateLogin($request);		
		echo json_encode(["login"=>$result], JSON_PRETTY_PRINT);
	}

	public function mitralist(){
		$data=[
			'mitra'=>[
				[
					'VENDOR_ID' =>"1694",
					'VENDOR_NM' =>"Abassy"
				],[
					'VENDOR_ID' =>"1706",
					'VENDOR_NM' =>"Abdi Sentosa Abadi"
				],[
					'VENDOR_ID' =>"1417",
					'VENDOR_NM' =>"Agcia Pertiwi"
				],[
					'VENDOR_ID' =>"742",
					'VENDOR_NM' =>"Agungmas Prima Sempurna"
				],[
					'VENDOR_ID' =>"1696",
					'VENDOR_NM' =>"Akses Insani"
				],						
			]
		];
		echo json_encode($data, JSON_PRETTY_PRINT);
		// return $data;
	}



     
}
