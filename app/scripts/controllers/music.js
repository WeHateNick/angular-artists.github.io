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
    $scope.artists = [];
    $http.get('../../data/artists.json').success(function(data){
        $scope.artists = data;
    });
    // $scope.message = 'hello';
    // var message = 'hello';
    // var setArtist(index) = function() {

    // };

  });
})();