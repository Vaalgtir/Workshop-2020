<?php
	include "class/class.php";
	session_start();
	if (isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['password']))
	{

		$db = new Database();
		$data = $db->queryOne('SELECT id FROM utilisateurs WHERE email = ?', array($_POST['email']));
		if ($data == false)
		{
			$options = ['cost' => 12];
			$password = password_hash($_POST['password'], PASSWORD_BCRYPT, $options);
			$nom = htmlspecialchars($_POST['nom']);
			$prenom = htmlspecialchars($_POST['prenom']);
			$db->executeSql('INSERT INTO utilisateurs (nom, prenom, password, email) VALUES (?, ?, ? , ?)', array($nom, $prenom, $password, $_POST['email']));
			http_response_code(200);
		}
		else
		{
			http_response_code(403);
		}
	}