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
			$db->executeSql('INSERT INTO utilisateurs (nom, prenom, password, email) VALUES (?, ?, ? , ?)', array($_POST['nom'], $_POST['prenom'], $password, $_POST['email']));
			echo "OK";
		}
		else
		{
			echo "email already used";
		}
	}