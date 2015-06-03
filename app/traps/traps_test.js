'use strict';

describe('5eGenerator.traps module', function() {

  beforeEach(module('5eGenerator.traps'));
  beforeEach(module('5eGenerator.data'));

  describe('traps controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      //spec body
      var trapsCtrl = $controller('TrapsCtrl', {$scope: $rootScope.$new()});
      expect(trapsCtrl).toBeDefined();
    }));

  });
});