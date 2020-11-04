<?php
	include 'class/class.php';
	session_start();
	
	if (isset($_SESSION['id']))
	{
		if (isset($_POST['action']))
		{
			if ($_POST['action'] == "newUser")
			{
				if (isset($_POST['uti_id']) && isset($_POST['groupe_id']))
				{
					$groupe = Groupe::addNewUserToGroupe($_POST['groupe_id'], $_POST['uti_id']);
					http_response_code(200);
					return ;
				}
			}
			elseif ($_POST['action'] == "newGroupe")
			{
				if (isset($_POST['nom']))
				{
					$nom = htmlspecialchars($_POST['nom']);
					$groupe = Groupe::addGroupe($nom, $_SESSION['id']);
					http_response_code(200);
					return ;
					
				}

			}


		}
		http_response_code(404);
	}
	http_response_code(403);