'use strict';

var myapp = angular.module('myapp', ['ngMessages', 'ngLocale', 'ui.bootstrap',
  'ui.select', 'ngSanitize', 'ui.validate', 'china.area'
]);

myapp.controller('myctrl', ['$scope', '$http', '$q','$window','chinaAreaData',
 function ($scope, $http, $q,$window,chinaAreaData) {

  // console.log(Math.uuid());
  $scope.validcodeid = Math.uuid();
  $scope.patternNum = /^[0-9]*$/;
  $scope.pagestatus = {
    dateopen: false,
    datebeginopen: false,
    dateendopen: false,
  };


  $scope.input = {
    // person:{
    // }
  };
  $scope.input.text1 = 'text1';

  $scope.btnsubmit = function ($event) {
    console.log($event);
    alert('ok');

    // 如果不需要提交,使用下面这行代码取消提交行为
    // $event.preventDefault();
  };
  $scope.onselect = function ($select, $item) {
    console.log($select);
    console.log($item);
  };
  $scope.checkBignum = function (value) {
    return (parseInt(value) > 5000);
  };
  $scope.checkDateAfterNow = function (value) {
    return validator.isAfter(value, new Date());
  };
  $scope.checkDatebegin = function (value) {
    return validator.isBefore(value, $scope.input.dateend);
  };
  $scope.checkDateend = function (value) {
    return validator.isAfter(value, $scope.input.datebegin);
  };
  $scope.changeValidCode = function () {
    $scope.validcodeid = Math.uuid();
    $scope.validcode = '';
  };
  $scope.checkValidCodeAsync = function (value) {
    if (value.length >= 4) {
      return $http.post('/validimgcode', {
          id: $scope.validcodeid,
          code: value
        })
        .success(function (data, status, headers, config) {
          console.log(data);
        })
        .error(function (data, status, headers, config) {
          console.log(data);
        });
    } else {
      return $q.reject(new Error('invalid code'));
    }
  };

  $scope.submit = function () {
    console.log('submit....');
    $http.post('/angular/basicformsubmit', {
        input: $scope.input
      })
      .success(function (data, status, headers, config) {
        console.log(data);
        // $window.location.href
        $window.location.replace("/");
      })
      .error(function (data, status, headers, config) {
        console.log(data);
      });


  };
}]);
