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

	<body ng-app="condApp" ng-controller="mainCtrl">

		<header>
			<img src="img/logo.png" id="logo">
		</header>
		<hr>

		<div class="main">

			<div id="cover"></div>

			<h1>{{ text.TITRE_CONDITIONS_VENTE }}</h1>

			<div id="cond-container">
				<p>Par la présente, la société {{ societe }}, prise en la personne de son représentant légal, [Nom – Prénom {{ nom }} {{ prenom }} ]</p>
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
				<p>Fait à [lieu {{ lieu }} ], le {{ date }}</p>
			</div>

			<form id="form">
				<input type="checkbox" ng-model="checked" name="check" required form="form-info" ng-click="goToFields(); setToNull()"/>
				<label id="lu-accept">{{ text.LU_ET_ACCEPT }}</label>
			</form>
			<p id="text-check-box">{{ text.EN_COCHANT_CASE }}</p>

		</div>

		<div id="infos" ng-show="checked">
			
			<h2>{{ text.H2_INFOS }}</h2>

			<form method="post" action="envoiMail.php" id="form-info">
				<div>
					<Label>{{ text.SOCIETE }} :</label>
					<input type="text" name="societe" required spellcheck="false" ng-model="societe">
				</div>
				<div>
					<Label>{{ text.NOM }} :</label>
					<input type="text" name="nom" required spellcheck="false" ng-model="nom">
				</div>
				<div>
					<Label>{{ text.PRENOM }} :</label>
					<input type="text" name="prenom" required spellcheck="false" ng-model="prenom">
				</div>
				<div>
					<Label>{{ text.LIEU }} :</label>
					<input type="text" name="lieu" required spellcheck="false" ng-model="lieu">
				</div>
				<div>
					<Label>{{ text.MAIL }} :</label>
					<input type="text" name="mail" required spellcheck="false">
				</div>
				<input type="text" name="langue" value="{{ langue }}" style="display: none;">
			</form>
			<button ng-disabled="!checked" form="form-info" type="submit">{{ text.CONFIRMER }}</button>
		</div>

	<!-- Controllers -->
	<script src="js/controllers/mainCtrl.js"></script>

	</body>
</html>