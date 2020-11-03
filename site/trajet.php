<?php 
	include 'class/class.php';
	session_start();

	if (isset($_SESSION['id']))
	{
		if (isset($_POST['action']))
		{
			if ($_POST['action'] == "new")
			{
				if (isset($_POST['carburant_id']) && isset($_POST['locomotion_id']) && isset($_POST['type_trajet_id'])&& isset($_POST['origine']))
				{
					$id_trajet = Trajet::startNewTrajet($_SESSION['id'], $_POST['carburant_id'], $_POST['locomotion_id'], $_POST['type_trajet_id'], $_POST['origine']);
					$user = User::getUserById($_SESSION['id']);
					User::updateActualTrajet($_SESSION['id'], $id_trajet);
					http_response_code(200);
					return ;
				}
			}
			elseif ($_POST['action'] == "end" && User::hasActualTrajet($_SESSION['id']))
			{
				
				
				if (isset($_POST['destination'])  && isset($_POST['total_km']))
				{	$user = User::getUserById($_SESSION['id']);
					$total_co2 = 150; // a calculer
					$trajet = Trajet::endTrajet($user->getActual_trajet_id(), $_POST['destination'], $total_co2, $_POST['total_km']);
					http_response_code(200);
					return ;
				}

			}
			elseif ($_POST['action'] == "reset" && User::hasActualTrajet($_SESSION['id'])) 
			{
				User::resetTrajetByUtiId($_SESSION['id']);
				http_response_code(200);
				return ;
			}
			http_response_code(404);
		}
	}
	http_response_code(403);