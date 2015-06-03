'use strict';

angular.module('5eGenerator.traps', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/traps', {
    templateUrl: 'traps/traps.html',
    controller: 'TrapsCtrl'
  });
}])

.controller('TrapsCtrl', ['$scope', 'trapData',
    function($scope, trapData) {

    $scope.trapDangers = trapData.dangers;
    $scope.trapSaves = trapData.saveDC;
    $scope.trapAttack = trapData.attackBonus;
    $scope.trapDamage = trapData.damageSeverity;

    $scope.trap = {
        level: 1,
        danger: "Setback"
    };
}]);