<?php

class groupe{

	use hydrate;

	private $id;
	private $userList;

	public function getId(){
		return $this->id;
	}

	public function setId($id){
		$this->id = $id;
	}

	public function setUserList($datas){
		for 
	}

	public function getUserList(){
		return $this->userList;
	}

	public function getGroupeById($id){
		$db = new Database();
		$datas = $db->query('SELECT * FROM groupe WHERE id = ?', array($id));
		$tmp = new Groupe();
		$tmp->setId($id);
		

		return $tmp;
	}


}