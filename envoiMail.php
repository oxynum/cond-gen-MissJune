<?php

session_start();

require 'vendor/autoload.php';
use \Mailjet\Resources;

if (isset($_POST['check'])
	&& $_POST['check']== true
	&& isset($_POST['societe'])
	&& $_POST['societe']!=''
	&& isset($_POST['nom'])
	&& $_POST['nom']!=''
	&& isset($_POST['prenom'])
	&& $_POST['prenom']!=''
	&& isset($_POST['lieu'])
	&& $_POST['lieu']!=''
	&& isset($_POST['mail'])
	&& $_POST['mail']!='') {
	
	$date = date("d/m/Y")." à ".date("H")."h".date("i");
	$condGe = "<p>Par la présente, la société <strong>".$_POST['societe']."</strong>, prise en la personne de son représentant légal, <strong>".$_POST['nom']." ".$_POST['prenom']."</strong></p>
				<p>Déclare à la société Brod’styl International, SARL, dont le siège est situé au 9 rue d’Aboukir 75002 Paris, immatriculée au RCS de Paris sous le numéro 421 258 724 00028, connue sous le nom commercial de MISS JUNE PARIS, prise en la personne de son représentant légal, Monsieur Shay Abourmad domicilié audit siège,</p>
				<p>Qu’elle reconnaît que Brod’styl International est titulaire des Droits de propriété intellectuelle exclusifs et absolus suivant :
					<ul>
						<li>Les marques « Miss June » et « Miss June Paris » (ci-après les « Marques »).</li>
						<li>Les droits d’auteurs et de dessins et modèles sur les produits distribués sous les Marques.</li>
						<li>Les droits d’auteurs portant sur les photographies reproduites dans le catalogue suite à la cession intervenue entre le photographe et Brod’styl International.</li>
					</ul>
				</p>
				<p>Et s’engage à ne pas copier, reproduire ou diffuser, sur aucun support matériel ou immatériel (en ce compris, mais non limité à, son site internet et également aux réseaux de type Instagram, Facebook et Twitter) ni les créations de Marques Miss June Paris ni les Photographies reproduites sur le catalogue, sans avoir reçu, au préalable, l’autorisation écrite et signée, de la part de Brod’styl International et ce pour la durée de protection des droits ci-dessus exposés.</p>
				<p>Et reconnaître que toute copie, reproduction ou diffusion de ces éléments l’exposent à des poursuites judiciaires par Brod’styl International.</p>
				<p>La présente déclaration est établie en deux exemplaires originaux.</p>
				<p>Fait à <strong>".$_POST['lieu']."</strong>, le <strong>".$date."</strong></p>";

	$mj = new \Mailjet\Client('84ff6bb884007b726e0233798d4d0382', '32bef8092196460441728f624dbfda4f');

	$body = [
	    'FromEmail' => "gregoire@oxynum.fr",
	    'FromName' => "Site Web MissJune",
	    'Subject' => 'Un client a validé votre Reconnaissance de droits de propriété intellectuelle exclusifs',
	    'Text-part' => "Société : ".$_POST['societe']." / Nom : ".$_POST['nom']." / Prénom : ".$_POST['prenom']." / Lieu : ".$_POST['lieu']." / Date : ".$date." / E-mail : ".$_POST['mail'],
	    'Html-part' => $condGe.'</br></br><strong>Société : </strong>'.$_POST['societe'].'</br><strong>Nom : </strong>'.$_POST['nom'].'</br><strong>Prénom : </strong>'.$_POST['prenom'].'</br><strong>Lieu : </strong>'.$_POST['lieu'].'</br><strong>Date : </strong>'.$date.'</br><strong>E-mail : </strong>'.$_POST['mail'],
	    'Recipients' => [
	        [
	            'Email' => "gregoire@oxynum.fr"
	        ]
	    ]
	];
	$response = $mj->post(Resources::$Email, ['body' => $body]);

	switch ($_POST['langue']){
	case "es":
		$subject = 'Su firma ha sido registrado';
		$text = 'Querido cliente, le agradecemos por haber firmado nuestra declaración de reconocimiento de derechos exclusivos de propiedad intelectual.';
		$html = 'Querido cliente, </br>Le agradecemos por haber firmado nuestra declaración de reconocimiento de derechos exclusivos de propiedad intelectual.</br></br>.'.$condGe;
		break;
	case "en":
		$subject = 'Your signature was successfuly registered';
		$text = 'Dear customer, thank you for signing our statement of recognition of exclusive intellectual property rights.';
		$html = 'Dear customer, </br>Thank you for signing our statement of recognition of exclusive intellectual property rights.</br></br>.'.$condGe;
		break;
	default:
		$subject = 'Votre signature a bien été prise en compte';
		$text = 'Cher client, nous vous remercions d\'avoir signé notre déclaration de reconnaissance de droits de propriété intellectuelle exclusifs.';
		$html = 'Cher client, </br>Nous vous remercions d\'avoir signé notre déclaration de reconnaissance de droits de propriété intellectuelle exclusifs.</br></br>'.$condGe;
	}


	$body = [
	    'FromEmail' => "gregoire@oxynum.fr",
	    'FromName' => "MissJune",
	    'Subject' => $subject,
	    'Text-part' => $text,
	    'Html-part' => $html,
	    'Recipients' => [
	        [
	            'Email' => $_POST['mail']
	        ]
	    ]
	];
	$response = $mj->post(Resources::$Email, ['body' => $body]);

	$_SESSION['isSent'] = 1;
	header('Location: remerciements.php');
}

else{
	header('Location: index.php');
	exit;
}

?>