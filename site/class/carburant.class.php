<?php
	include 'class/class.php';

	class Carburant
	{
		use Hydrate;

		public $id;
		public $nom;

		public function getId(){
			return $this->id;
		}

		public function setId($id){
			$this->id = $id;
		}

		public function getNom(){
			return $this->nom;
		}

		public function setNom($nom){
			$this->nom = $nom;
		}


		static function getAllCarburants()
		{
			$db = new Database();
			$datas = $db->query("SELECT * FROM carburants");
			$res = array();
			foreach ($datas as $data)
			{
				$tmp = new Carburant();
				$tmp->hydrate($data);
				$res[]  = $tmp;
			}
			return $res;
		}


		static function getCarburantById($id)
		{
			$db = new Database();
			$data = $db->queryOne("SELECT * FROM carburants WHERE id = ?", array($id));
			$tmp = new Carburant();
			$tmp->hydrate($data);
			return $tmp;
		}
	}