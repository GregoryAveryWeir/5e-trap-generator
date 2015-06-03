'use strict';

describe('5eGenerator.dice module', function() {
  beforeEach(module('5eGenerator.dice'));
  beforeEach(module('components/dice-roller.html'));

  describe('dice-roller directive', function() {
    it('should display template', function() {
      inject(function($compile, $rootScope) {
        $rootScope.diceString = '2d10';
        var element = $compile('<dice-roller ng-model="diceString"></dice-roller>')($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('Roll');
      });
    });
  });
});
