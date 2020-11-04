<?php
	include 'class/class.php';
	
	class MoyenLocomotion
	{
		use Hydrate;

		public $id;
		public $type;

		public function getId(){
			return $this->id;
		}

		public function setId($id){
			$this->id = $id;
		}

		public function getType(){
			return $this->type;
		}

		public function setType($type){
			$this->type = $type;
		}


		static function getAllMoyenLocomotions()
		{
			$db = new Database();
			$datas = $db->query("SELECT * FROM moyen_locomotion");
			$res = array();
			foreach ($datas as $data)
			{
				$tmp = new MoyenLocomotion();
				$tmp->hydrate($data);
				$res[]  = $tmp;
			}

			return $res;
		}


		static function getMoyenLocomotionById($id)
		{
			$db = new Database();
			$data = $db->queryOne("SELECT * FROM moyen_locomotion WHERE id = ?", array($id));
			$tmp = new MoyenLocomotion();
			$tmp->hydrate($data);
			return $tmp;
		}
	}