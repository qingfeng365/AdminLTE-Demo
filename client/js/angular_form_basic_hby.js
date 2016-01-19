'use strict';

var pageapp = angular.module('pageapp',['ngMessages','ui.bootstrap','ngLocale',
	'ui.select','ngSanitize','ui.validate']); 
//创建app,一定是2个参数， 1个参数是获取

pageapp.controller('pagectrl',['$scope',function($scope){//pagectrl:控制器名称,$scope作用域 ，此为约定写法
	// console.log('pagectrl run...');
	$scope.patternNum = /^[0-9]+$/;
	$scope.pagestatus = {
		dataopen: false,
	};
	$scope.input = {
		name:'abc'
	};
	console.log($scope);
}]);
	console.log('pageapp end.'); //先执行pageapp end 再执行pagectrl run...