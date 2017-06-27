<!DOCTYPE html>
<html>

	<head>
		<title>MissJune - vetements mode pour femme chic et tendance - Miss June</title>
		<meta charset="UTF-8">
		<meta name="description" content="Collection Miss-June, pret a porter tendance pour femme, glamour et fashion. Prêt-à-porter, accessoires, robes, jupes, gilets ...">
		<meta name="viewport" content="width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="css/cond_ge.css">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
	</head>

	<body ng-app="condApp" ng-controller="langueCtrl">

		<header>
			<a href="#" id="back-btn" class="hide">{{ text.BOUTON_RETOUR }}</a>
			<img src="img/logo.png" id="logo">
			<button type="submit" form="form" id="valid-btn" ng-disabled="!checked" class="hide">{{ text.BOUTON_VALIDER_COMMANDE }}</button>
		</header>
		<hr>

		<div class="main">
			
			<div id="btn-container">
				<a href="#" id="back-btn">{{ text.BOUTON_RETOUR }}</a>
				<button type="submit" form="form" id="valid-btn" ng-disabled="!checked">{{ text.BOUTON_VALIDER_COMMANDE }}</button>
			</div>

			<h1>{{ text.TITRE_CONDITIONS_VENTE }}</h1>

			<div id="cond-container" class="scroll-y">
				<img src="img/conditions.jpg">
			</div>

			<form method="post" action="formAchat.php" id="form">
				<input type="checkbox" ng-model="checked" name="check" required/>
				<label>{{ text.LU_ET_ACCEPT }}</label>
			</form>
			<p>{{ text.EN_COCHANT_CASE }}</p>

		</div>

	<!-- Controllers -->
	<script src="js/controllers/langueCtrl.js"></script>

	</body>
</html>