<?php

class Groupe{

	use hydrate;

	private $id;
	private $userList;

	public function getId(){
		return $this->id;
	}

	public function setId($id){
		$this->id = $id;
	}

	public function setUserList($userList){
		$this->userList = $userList;
	}

	public function getUserList(){
		return $this->userList;
	}

	static function getAllGroupeByUtiId($uti_id){
		$db = new Database();
		$res = array();
		$groupes = $db->query('SELECT * FROM groupe_field WHERE uti_id = ?', array($uti_id));
		foreach($groupes as $groupe)
		{
			$datas = $db->query('SELECT * FROM groupe_field WHERE groupe_id = ?', array($groupe['groupe_id']));
			$grp = new Groupe();
			$grp->setId($groupe['groupe_id']);
			$tmp = array();
			foreach($datas as $data)
			{
				$tmp[] = $data['uti_id'];
			}
			$grp->setUserList($tmp);
			$res[] = $grp; 
		}
		
		return ($res);
	}


	static function getGroupeById($id)
	{
		$db = new Database();
		$datas = $db->query('SELECT * FROM groupe WHERE groupe_id = ?', array($id));
		$grp = Groupe();
		$grp->setId($id);
		$tmp = array();
		foreach($datas as $data)
		{
			$tmp[] = $data['uti_id'];
		}
		$grp->setUserList($tmp);
		return $grp;
	}

	static function addGroupe($nom, $uti_id){
		$db = new Database();
		$groupe_id= $db->executeSql("INSERT INTO groupe (nom) values (?)", array($nom));
		$db->executeSql("INSERT INTO groupe_field (groupe_id, uti_id) values (?, ?)", array($groupe_id,$uti_id));
	}


	static function addNewUserToGroupe($groupe_id, $uti_id)
	{
		$db = new Database();
		$data = $db->query('SELECT * FROM groupe_field WHERE groupe_id = ? AND uti_id = ?', array($groupe_id, $uti_id));
		if ($data == false)
		{
			$data = $db->executeSql("INSERT INTO groupe_field (groupe_id, uti_id) values (?, ?)", array($groupe_id, $uti_id));			
		}

	}


}