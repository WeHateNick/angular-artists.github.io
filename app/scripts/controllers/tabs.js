'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
	.controller('TabsCtrl', function ($scope) {
		$scope.awesomeThings = [
		  'HTML5 Boilerplate',
		  'AngularJS',
		  'Karma'
		];
		this.tab = 1;
		this.setTab = function(newValue){
		  this.tab = newValue;
		};
		this.isSet = function(tabName){
      		return this.tab === tabName;
    	};
	});
