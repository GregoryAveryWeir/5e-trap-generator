'use strict';

angular.module('5eGenerator.traps', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/traps/:level?/:danger?', {
    templateUrl: 'traps/traps.html',
    controller: 'TrapsCtrl'
  });
}])

.controller('TrapsCtrl', ['$scope', 'trapData', '$routeParams', '$location',
  function($scope, trapData, $routeParams, $location) {

  $scope.trapDangers = trapData.dangers;
  $scope.trapSaves = trapData.saveDC;
  $scope.trapAttack = trapData.attackBonus;
  $scope.trapDamage = trapData.damageSeverity;

  $scope.trap = {
    level: $routeParams.level ? parseInt($routeParams.level) : 1,
    danger: (
        $routeParams.danger &&
        trapData.dangers.indexOf($routeParams.danger) > -1)
      ? $routeParams.danger : "Setback"
  };

  $scope.$watch('trap', function(newVal) {
    if(parseInt(newVal.level) && trapData.dangers.indexOf(newVal.danger) > -1) {
      $location.path('/traps/' + newVal.level + '/' + newVal.danger)
    }
  }, true);
}]);