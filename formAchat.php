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
	</head>

	<body>
		
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