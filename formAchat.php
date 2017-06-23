<?php

session_start();

if (isset($_POST['check']) && $_POST['check'] == true) {

?>

<!DOCTYPE html>
<html>

	<head>
		<title>MissJune - vetements mode pour femme chic et tendance - Miss June</title>
		<meta charset="UTF-8">
		<meta name="description" content="Collection Miss-June, pret a porter tendance pour femme, glamour et fashion. Prêt-à-porter, accessoires, robes, jupes, gilets ...">
		<meta name="viewport" content="width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="css/formAchat.css">
	</head>

	<body>
		<header>
			<img src="img/logo.png" id="logo">
		</header>
		<hr>

		<div id="btn-container">
				<a href="#" id="back-btn">RETOUR AU PANIER</a>
		</div>

		<div class="main">
			
			<h1>Veuillez renseigner votre e-mail</h1>

			<form method="post" action="#">
				<i class="fa fa-envelope-o" aria-hidden="true"></i>
				<input type="text" name="mail" autofocus required spellcheck="false">
				<button>Confirmer</button>
			</form>
		</div>
	</body>
	
</html>


<?php
}
else{
	$_SESSION['erreur'] = "Les conditions générales de vente n'ont pas été validées.";
	header('Location: cond_ge.php');
	exit;
}

?>