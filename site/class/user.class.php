<?php

class User
{

	use Hydrate;

	private $nom;
	private $prenom;
	private $email;
	private $password;
	private $actual_trajet_id;
	private $groupe;


	public function getId(){
		return $this->id;
	}

	public function setId($id){
		$this->id = $id;
	}

	public function getActual_trajet_id(){
		return $this->actual_trajet_id;
	}

	public function setActual_trajet_id($actual_trajet_id){
		$this->actual_trajet_id = $actual_trajet_id;
	}

	public function getNom(){
		return $this->nom;
	}

	public function setNom($nom){
		$this->nom = $nom;
	}

	public function getPrenom(){
		return $this->prenom;
	}

	public function setPrenom($prenom){
		$this->prenom = $prenom;
	}

	public function getEmail(){
		return $this->email;
	}

	public function setEmail($email){
		$this->email = $email;
	}

	public function getPassword(){
		return $this->password;
	}

	public function setPassword($password){
		$this->password = $password;
	}


	public function getGroupe(){
		return $this->groupe;
	}

	public function setGroupe($uti_id){
		$this->groupe = Groupe::getAllGroupeByUtiId($uti_id);
	}


	static function getUserById($id){
		$db = new Database();
		$data = $db->queryOne('SELECT * FROM utilisateurs WHERE id = ?', array($id));
		$tmp = new User();
		$tmp->hydrate($data);
		$tmp->setGroupe($tmp->id);
		return $tmp;
	}

	static function getUserByEmail($email){
		$db = new Database();
		$data = $db->queryOne('SELECT * FROM utilisateurs WHERE email = ?', array($email));
		$tmp = new User();
		$tmp->hydrate($data);
		$tmp->setGroupe($tmp->id);
		return $tmp;
	}
}
