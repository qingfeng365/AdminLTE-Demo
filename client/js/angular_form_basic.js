'use strict';

var myapp = angular.module('myapp', ['ngMessages','ngLocale','ui.bootstrap',
  'ui.select','ngSanitize','ui.validate']);

myapp.controller('myctrl', ['$scope', function ($scope,$event) {
	$scope.patternNum = /^[0-9]*$/;
	$scope.pagestatus={
		dateopen: false,
    datebeginopen: false,
    dateendopen: false,
	};

  $scope.input = {};
  $scope.input.text1 = 'text1';
  $scope.btnsubmit = function($event){
  	console.log($event);
  	alert('ok');

    // 如果不需要提交,使用下面这行代码取消提交行为
  	// $event.preventDefault();
  };
  $scope.onselect = function($select,$item){
    console.log($select);
    console.log($item);
  }
}]);
