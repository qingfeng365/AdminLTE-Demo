'use strict';

var pageapp = angular.module('pageapp', ['ngMessages','ui.bootstrap','ngLocale','ui.select','ngSanitize','ui.validate']);

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


		$scope.checkName = function(value){
			return (parseInt(value,10) > 5000);
		};

		$scope.checkDate = function(value){
			return (validator.isAfter(value,new Date()));
		};

		$scope.checkdatebegin = function(value){
			return (validator.isBefore(value, $scope.input.dateend));
		};

}]);

