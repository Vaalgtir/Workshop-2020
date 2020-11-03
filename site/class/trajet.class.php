<?php
	include 'class/class.php';

	class Trajet
	{
		use Hydrate;

		private $id;
		private $uti_id;
		private $carburant_id;
		private $locomotion_id;
		private $type_trajet_id;
		private $total_co2;
		private $total_km;
		private $origine;
		private $destination;
		private $time_creation;
		private $time_end;


		public function getId(){
			return $this->id;
		}

		public function setId($id){
			$this->id = $id;
		}

		public function getUti_id(){
			return $this->uti_id;
		}

		public function setUti_id($uti_id){
			$this->uti_id = $uti_id;
		}

		public function getCarburant_id(){
			return $this->carburant_id;
		}

		public function setCarburant_id($carburant_id){
			$this->carburant_id = $carburant_id;
		}

		public function getLocomotion_id(){
			return $this->locomotion_id;
		}

		public function setLocomotion_id($locomotion_id){
			$this->locomotion_id = $locomotion_id;
		}

		public function getType_trajet_id(){
			return $this->type_trajet_id;
		}

		public function setType_trajet_id($type_trajet_id){
			$this->type_trajet_id = $type_trajet_id;
		}

		public function getTotal_co2(){
			return $this->total_co2;
		}

		public function setTotal_co2($total_co2){
			$this->total_co2 = $total_co2;
		}

		public function getTotal_km(){
			return $this->total_km;
		}

		public function setTotal_km($total_km){
			$this->total_km = $total_km;
		}

		public function getOrigine(){
			return $this->origine;
		}

		public function setOrigine($origine){
			$this->origine = $origine;
		}

		public function getDestination(){
			return $this->destination;
		}

		public function setDestination($destination){
			$this->destination = $destination;
		}
		public function getTime_creation(){
			return $this->time_creation;
		}

		public function setTime_creation($time_creation){
			$this->time_creation = $time_creation;
		}

		public function getTime_end(){
			return $this->time_end;
		}

		public function setTime_end($time_end){
			$this->time_end = $time_end;
		}


		static function startNewTrajet($uti_id, $carburant_id, $locomotion_id, $type_trajet_id, $origine)
		{
			$db = new Database();
			$data = $db->executeSql('INSERT INTO trajets (uti_id, carburant_id, locomotion_id, type_trajet_id, origine, time_creation) VALUES (?, ?, ?, ?, ?, NOW())', array($uti_id, $carburant_id, $locomotion_id, $type_trajet_id, $origine));
			User::updateActualTrajet($data, $uti_id);
			return $data;
		}


		static function deleteTrajetById($trajet_id)
		{
			$db = new Database();
			$db->executeSql('DELETE FROM trajets WHERE id = ?', array($trajet_id));


		}

		static function endTrajet($trajet_id, $destination, $total_co2, $total_km)
		{
			$db = new Database();

			$data = $db->executeSql('UPDATE trajets set `total_co2` = ?, `total_km` = ?, `destination` = ?, `time_end` = NOW() WHERE id = ?', array($total_co2, $total_km, $destination, $trajet_id));
			$trajet = Trajet::getTrajetById($trajet_id);
			User::updateActualTrajet($trajet->getUti_id(), null);
		}

		static function getTrajetById($trajets_id)
		{
			$db = new Database();
			$data = $db->queryOne("SELECT * FROM trajets WHERE id = ?", array($trajets_id));
			$trajet = new Trajet();
			$trajet->hydrate($data);
			return $trajet;
		}


		static function getAllTrajetsByUtiId($uti_id)
		{
			$db = new Database();
			$datas = $db->query("SELECT * FROM trajets WHERE uti_id = ?", array($uti_id));
			$res = array();
			foreach ($datas as $data)
			{
				$tmpTrajet = new Trajet();
				$tmpTrajet->hydrate($data);
				$res[] = $data;
			}
			return $res;

		}


	}