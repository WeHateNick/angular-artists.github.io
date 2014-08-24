'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('MusicCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });