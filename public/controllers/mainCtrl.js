/*
*
* This angular controller detects automatically the browser language and picks the appropriate texts in the langage.json file in order to make the pages multilingual
*
*/

angular.module('condApp', [])

	.controller('mainCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){

		var lang = $window.navigator.language || $window.navigator.userLanguage;

		switch(lang){
			case "en":
				$http.get('/controllers/langues.json').then(function(response){
					$scope.text = response.data.EN;
				});
				break;
			case "es":
				$http.get('/controllers/langues.json').then(function(response){
					$scope.text = response.data.ES;
				});
				break;
			default:
				$http.get('/controllers/langues.json').then(function(response){
					$scope.text = response.data.FR;
				});
				break;
		}

		$scope.langue = lang;
	}]);