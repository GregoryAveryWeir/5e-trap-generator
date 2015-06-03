'use strict';

describe('5eGenerator.version module', function() {
  beforeEach(module('5eGenerator.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
