'use strict';

angular.module('5eGenerator.dice', [])
.directive('diceRoller', function() {
  return {
    templateUrl: 'components/dice-roller.html',
    restrict: 'E',
    require: '?ngModel',
    link: function(scope, iElement, iAttrs, ngModelCtrl) {
      if (!ngModelCtrl) {
        return;
      }

      var rollResults = iElement.find('.roll-results');

      ngModelCtrl.$render = function() {
        // If $modelValue isn't an object, it won't be subject to data
        // binding, so we need to reestablish it when the model changes.
        scope.diceString = ngModelCtrl.$modelValue;
        rollResults.text("");
      };

      function roll(diceString) {
          var match, i, numDice, dieSize, result;

          match = diceString.match(/^(\d+)d(\d+)$/);
          if(match === null) {
              return "";
          }

          numDice = match[1];
          dieSize = match[2];
          result = 0;

          for(i = 0; i < numDice; i++) {
              // The +1 is here because otherwise a dieSize of 6 would
              // return values from 0 to 5 instead of 1 to 6.
              result += Math.floor(Math.random() * dieSize) + 1;
          }

          return result;
      }

      iElement.find('button').on('click', function() {
          rollResults.text(roll(ngModelCtrl.$modelValue));
      })
    }
  }
});