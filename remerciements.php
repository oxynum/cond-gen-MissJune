<?php
session_start();
if (isset($_SESSION['isSent']) && $_SESSION['isSent']==1) {

?>

<!DOCTYPE html>
<html>

	<head>
		<title>MissJune - vetements mode pour femme chic et tendance - Miss June</title>
		<meta charset="UTF-8">
		<meta name="description" content="Collection Miss-June, pret a porter tendance pour femme, glamour et fashion. Prêt-à-porter, accessoires, robes, jupes, gilets ...">
		<meta name="viewport" content="width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="css/remerciements.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
	</head>

	<body ng-app="condApp" ng-controller="mainCtrl">

		<div id="main">
			<div id="container">

				<header>
					<img src="img/logo.png" id="logo">
				</header>
				<hr>

				<div id="remerciements">
					<h1>{{ text.TITRE_REMERCIEMENTS }}</h1>
					<p>{{ text.P1_REMERCIEMENTS }}</p>
					<p>{{ text.P2_REMERCIEMENTS }}</p>
					<p class="right">{{ text.P3_REMERCIEMENTS }}</p>
					<p class="right"><span class="main_color">{{ text.SIGN_REMERCIEMENTS }}</span></p>
					<a id="retour_site" href="https://miss-june.com" class="main_color"><i class="fa fa-arrow-left" aria-hidden="true"></i> {{ text.RETOUR_REMERCIEMENTS }}</a>
				</div>

			</div>
		</div>

	<!-- Controllers -->
	<script src="js/controllers/mainCtrl.js"></script>
	</body>
</html>

<?php
}
else{
	header('Location: index.php');
	exit;
}