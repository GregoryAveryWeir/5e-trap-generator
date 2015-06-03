'use strict';

angular.module('myApp.traps', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/traps', {
    templateUrl: 'traps/traps.html',
    controller: 'TrapsCtrl'
  });
}])

.controller('TrapsCtrl', [function() {

}]);