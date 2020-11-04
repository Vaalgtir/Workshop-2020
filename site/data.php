<?php
	include 'class/class.php';
	session_start();

	if (isset($_SESSION['id']))
	{
		if (isset($_POST['action']))
		{
			if ($_POST['action'] == "allData")
			{

				$allCarburant = Carburant::getAllCarburants();
				$allTypeTrajet = TypeTrajet::getAllTypeTrajets();
				$allMoyenLocomotion = MoyenLocomotion::getAllMoyenLocomotions();
				$resLocomotion = array();
				$resCarburant = array();
				$resTypeProjet = array();
				foreach ($allMoyenLocomotion as $aml)
				{
					$resLocomotion[] = get_object_vars($aml);
				}
				foreach ($allCarburant as $ac)
				{
					$resCarburant[] = get_object_vars($ac);
				}
				foreach ($allTypeTrajet as $atp)
				{
					$resTypeProjet[] = get_object_vars($atp);
				}
				$res = json_encode(array("carburant" => $resCarburant, "moyen_locomotion" => $resLocomotion, "type_trajets" => $resTypeProjet));
				echo $res;
			}
			elseif ($_POST['action'] == "allGroupe")
			{
				$datas =  Groupe::getAllGroupeByUtiId($_SESSION['id']);
				$resData = array();
				foreach($datas as $data)
				{
					$resData[] = get_object_vars($data);
				}
				echo json_encode($resData);

			}
		}
	}