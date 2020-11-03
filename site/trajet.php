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
					var_dump(Trajet::startNewTrajet($_SESSION['id'], $_POST['carburant_id'], $_POST['locomotion_id'], $_POST['type_trajet_id'], $_POST['origine']));
				}
			}
			elseif ($_POST['action'] == "end")
			{
				
				
				if (isset($_POST['trajet_id']) && isset($_POST['destination']) && isset($_POST['total_co2']) && isset($_POST['total_km']))
				{
					$trajet = Trajet::endTrajet($_POST['trajet_id'], $_POST['destination'], $total_co2, $_POST['total_km']);
					var_dump(Trajet::getTrajetById($_POST['trajet_id']));
				}

			}
		}
	}