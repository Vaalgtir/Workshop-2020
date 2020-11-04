<?php
	include 'class/class.php';


	class Locomotion
	{
		use Hydrate;

		private $id;
		private $carburant_id;
		private $locomotion_id;
		private $type_trajets_id;
		private $consommation;
		private $carburant;
		private $locomotion;
		private $type_trajets;


		public function getId(){
			return $this->id;
		}

		public function setId($id){
			$this->id = $id;
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

		public function getType_trajets_id(){
			return $this->type_trajets_id;
		}

		public function setType_trajets_id($type_trajets_id){
			$this->type_trajets_id = $type_trajets_id;
		}

		public function getConsommation(){
			return $this->consommation;
		}

		public function setConsommation($consommation){
			$this->consommation = $consommation;
		}

		public function getCarburant(){
			return $this->carburant;
		}

		public function setCarburant($carburant){
			$this->carburant = $carburant;
		}

		public function getLocomotion(){
			return $this->locomotion;
		}

		public function setLocomotion($locomotion){
			$this->locomotion = $locomotion;
		}

		public function getType_trajets(){
			return $this->type_trajets;
		}

		public function setType_trajets($type_trajets){
			$this->type_trajets = $type_trajets;
		}


		static function getLocomotionJoin($carburant_id, $locomotion_id, $type_trajets_id)
		{
			$db = new Database();
			$data = $db->queryOne('SELECT carburants.nom AS carburant, type_trajets.type AS type_trajets, moyen_locomotion.type AS locomotion, locomotion_carburant.id, carburant_id, locomotion_id, type_trajets_id FROM locomotion_carburant INNER JOIN carburants ON locomotion_carburant.carburant_id  = carburants.id INNER JOIN moyen_locomotion ON locomotion_carburant.locomotion_id = moyen_locomotion.id INNER JOIN type_trajets ON locomotion_carburant.type_trajets_id = type_trajets.id WHERE carburant_id = ? AND locomotion_id = ? AND type_trajets_id = ?', array($carburant_id, $locomotion_id, $type_trajets_id));
			$tmp = new Locomotion();
			$tmp->hydrate($data);

			return $tmp;
		}


	}