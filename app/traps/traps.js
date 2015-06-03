'use strict';

angular.module('5eGenerator.traps', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/traps/:level?/:danger?', {
    templateUrl: 'traps/traps.html',
    controller: 'TrapsCtrl'
  });
}])

.controller('TrapsCtrl', ['$scope', 'trapData', '$routeParams', '$location',
  '$route', function($scope, trapData, $routeParams, $location, $route) {

  var lastRoute = undefined;

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

  // Change our path to match the form data.
  $scope.$watch('trap', function(newVal) {
    if(parseInt(newVal.level) && trapData.dangers.indexOf(newVal.danger) > -1) {
      lastRoute = $route.current;
      $location.path('/traps/' + newVal.level + '/' + newVal.danger);
    }
  }, true);

  // If we change the path above and it actually proceeds, we lose focus on our
  // field. Prevent that.
  $scope.$on('$locationChangeSuccess', function(event) {
        if(lastRoute) {
          $route.current = lastRoute;
          lastRoute = undefined;
        }
    });
}]);