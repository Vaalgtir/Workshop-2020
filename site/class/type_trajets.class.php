<?php
	class TypeTrajet
	{
		private $id;
		private $type;

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

		static function getAllTypeTrajets()
		{
			$db = new Database();
			$datas = $db->query("SELECT * FROM type_trajets");
			$res = array()
			foreach ($datas as $data)
			{
				$tmp = new TypeTrajet();
				$tmp->hydrate($data);
				$res[]  = $tmp;
			}
			return $res;
		}


		static function getTypeTrajetById($id)
		{
			$db = new Database();
			$data = $db->query("SELECT * FROM carburants WHERE id = ?", array($id));
			$tmp = new TypeTrajet();
			$tmp->hydrate($data);
			return $tmp;
		}
		
	}