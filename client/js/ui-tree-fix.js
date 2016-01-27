'use strict';

var treeapp = angular.module('treeapp', ['ui.tree', 'china.area']);

treeapp.controller('treectrl', ['$scope', 'chinaAreaData', function ($scope, chinaAreaData) {
  $scope.area = chinaAreaData.areaArray;


  $scope.add = function(modelValue){
  	console.log(modelValue);
  }





}]);
