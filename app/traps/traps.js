'use strict';

angular.module('myApp.traps', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/traps', {
    templateUrl: 'traps/traps.html',
    controller: 'TrapsCtrl'
  });
}])

.controller('TrapsCtrl', ['$scope', function($scope) {
    $scope.trapDangers = ["Setback", "Dangerous", "Deadly"];

    $scope.trap = {
        level: 1,
        danger: "Setback"
    };
}]);