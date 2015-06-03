'use strict';

// Declare app level module which depends on views, and components
angular.module('5eGenerator', [
  'ngRoute',
  '5eGenerator.traps',
  '5eGenerator.version',
  '5eGenerator.data',
  '5eGenerator.dice'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/traps'});
}]);
