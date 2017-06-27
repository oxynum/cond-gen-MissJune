angular.module('condApp', [])

	.controller('langueCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){

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
	}]);