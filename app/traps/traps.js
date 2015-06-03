'use strict';

angular.module('myApp.traps', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/traps', {
    templateUrl: 'traps/traps.html',
    controller: 'TrapsCtrl'
  });
}])

.controller('TrapsCtrl', ['$scope', 'trapData',
    function($scope, trapData) {

    $scope.trapDangers = trapData.dangers;

    $scope.trap = {
        level: 1,
        danger: "Setback"
    };
}]);