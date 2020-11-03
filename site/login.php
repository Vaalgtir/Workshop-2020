<?php
session_start();
include 'class/class.php';

if (isset($_POST['email']) && isset($_POST['password']))
{
	$user = User::getUserByEmail($_POST['email']);
	if (password_verify($_POST['password'], $user->getPassword()))
	{
		$_SESSION['id'] = $user->getId();
		$_SESSION['nom'] = $user->getNom();
		$_SESSION['prenom'] = $user->getPrenom();
		$_SESSION['email'] = $user->getEmail();
		http_response_code(200);
	}
	else
	{
		http_response_code(403);
	}
}
