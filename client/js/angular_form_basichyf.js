'use strict';

var pageapp = angular.module('pageapp', ['ngMessages', 'ui.bootstrap', 'ngLocale', 'ui.select', 'ngSanitize', 'ui.validate']);

pageapp.controller('pagectrl', ['$scope', '$http', '$q',

  function ($scope, $http, $q) {
    $scope.validcodeid = Math.uuid();
    console.log($scope.validcodeid);

    $scope.patternNum = /^[0-9]+$/;
    $scope.pagestatus = {
      dateopen: false,
    };
    $scope.input = {
      name: 'abc'
    };

    console.log($scope);


    $scope.checkName = function (value) {
      return (parseInt(value, 10) > 5000);
    };

    $scope.checkDate = function (value) {
      return (validator.isAfter(value, new Date()));
    };

    $scope.checkdatebegin = function (value) {
      return (validator.isBefore(value, $scope.input.dateend));
    };
    $scope.changevalidimg = function () {
      $scope.validcodeid = Math.uuid();
      $scope.input.validcode = '';
    };
    $scope.checkValidCodeAsync = function (value) {
      if (value.length === 4) {
        return $http.post('/validimgcode', {
          id: $scope.validcodeid,
          code: value
        });
      } else {
      	return $q.reject('invalid code');
      }
    };
  }
]);
