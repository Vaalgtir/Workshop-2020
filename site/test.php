<?php
include "class/class.php";
session_start();
if (isset($_SESSION['id']))
{
	$test = Locomotion::getLocomotionJoin(1, 4, 1);
	$user = User::getUserById($_SESSION['id']);
	$trajets = Trajet::getAllTrajetsByUtiId($_SESSION['id']);
	$moyenLoc = MoyenLocomotion::getMoyenLocomotionById(1);
	$typeTrajet = TypeTrajet::getTypeTrajetById(1);
	$carburant = Carburant::getCarburantById(1);
	$allCarburant = Carburant::getAllCarburants();
	echo "user has actual_trajet: ".User::hasActualTrajet($_SESSION['id']);
	var_dump($allCarburant);
	$allTypeTrajet = TypeTrajet::getAllTypeTrajets();
	var_dump($allTypeTrajet);
	$allMoyenLocomotion = MoyenLocomotion::getAllMoyenLocomotions();
	var_dump($allMoyenLocomotion);


	include "test.phtml";
}
