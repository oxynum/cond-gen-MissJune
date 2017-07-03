/*
*
* This angular controller detects automatically the browser language and picks the appropriate texts in the langage.json file in order to make the pages multilingual
*
*/

angular.module('condApp', [])

	.controller('mainCtrl', ['$scope', '$http', '$window', '$location', '$anchorScroll', function($scope, $http, $window, $location, $anchorScroll){

		var lang = $window.navigator.language || $window.navigator.userLanguage;

		switch(lang){
			case "en":
				$http.get('js/controllers/langues.json').then(function(response){
					$scope.text = response.data.EN;
				});
				break;
			case "es":
				$http.get('js/controllers/langues.json').then(function(response){
					$scope.text = response.data.ES;
				});
				break;
			default:
				$http.get('js/controllers/langues.json').then(function(response){
					$scope.text = response.data.FR;
				});
				break;
		}

		$scope.langue = lang;

		var now = new Date();
		$scope.societe = "__________";
		$scope.nom = "__________";
		$scope.prenom = "__________";
		$scope.lieu = "__________";
		$scope.date = now.getDate()+'/'+(now.getMonth()+1)+'/'+now.getFullYear()+' à '+now.getHours()+'h'+now.getMinutes();
		

		/* Enables the scroll to the fields when the user clicks on the check box */
		$scope.goToFields = function(){
								$location.hash('infos');
								$anchorScroll();
							};

		var count = 0;
		$scope.setToNull = function(){
								if (count%2 === 0) {
									$scope.societe = "";
									$scope.nom = "";
									$scope.prenom = "";
									$scope.lieu = "";
									count++;
								}
								else{
									$scope.societe = "__________";
									$scope.nom = "__________";
									$scope.prenom = "__________";
									$scope.lieu = "__________";
									count++;
								}
							};

	}]);