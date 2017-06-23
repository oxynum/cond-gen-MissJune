<!DOCTYPE html>
<html>

	<head>
		<title>MissJune - vetements mode pour femme chic et tendance - Miss June</title>
		<meta charset="UTF-8">
		<meta name="description" content="Collection Miss-June, pret a porter tendance pour femme, glamour et fashion. Prêt-à-porter, accessoires, robes, jupes, gilets ...">
		<meta name="viewport" content="width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="css/cond_ge.css">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	</head>

	<body ng-app="condApp">

		<header>
			<a href="#" id="back-btn" class="hide">RETOUR AU PANIER</a>
			<img src="img/logo.png" id="logo">
			<button type="submit" form="form" id="valid-btn" ng-disabled="!checked" class="hide">VALIDER MA COMMANDE</button>
		</header>
		<hr>

		<div class="main">
			
			<div id="btn-container">
				<a href="#" id="back-btn">RETOUR AU PANIER</a>
				<button type="submit" form="form" id="valid-btn" ng-disabled="!checked">VALIDER MA COMMANDE</button>
			</div>

			<h1>Conditions Générales de Vente</h1>

			<div id="cond-container" class="scroll-y">
				<img src="img/conditions.jpg">
			</div>

			<form method="post" action="formAchat.php" id="form">
				<input type="checkbox" ng-model="checked" name="check" required/>
				<label>J'ai lu et j'accepte les conditions générales de vente.</label>
			</form>
			<p>En cochant cette case, vous confirmez que vous avez lu et accepté les conditions générales de vente.</p>

		</div>

	<!-- Scripts -->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>

	<!-- Modules -->
	<script src="js/condApp.js"></script>

	</body>
</html>