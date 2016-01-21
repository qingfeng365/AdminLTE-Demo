'use strict';

var pageapp = angular.module('pageapp', ['ngMessages','ui.bootstrap','ngLocale','ui.select','ngSanitize']);

pageapp.controller('pagectrl', ['$scope', 
	function($scope){
		$scope.patternNum = /^[0-9]+$/;
		$scope.pagestatus = {
			dateopen: false,
		};
		$scope.input = {
			name:'abc'
		};

		console.log($scope);
}]);

