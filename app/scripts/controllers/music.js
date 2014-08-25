(function() {

'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the angularProjectApp
 */
var app = angular.module('angularProjectApp');
  	app.controller('MusicCtrl', function ($http, $scope) {
  	
    // var music = this;
    // music
	$scope.artistIndex = 0;

    $scope.setArtist = function(artistIndex) {
    	$scope.artistIndex = artistIndex;    	
    };
    $scope.artists = [];
    $http.get('../../data/artists.json').success(function(data){
        $scope.artists = data;
    });
	$scope.tab = 1;
	$scope.setTab = function(newValue){
	  $scope.tab = newValue;
	};
	$scope.isSet = function(tabValue){
  		return $scope.tab === tabValue;
	};
  });
})();