'use strict';

describe('5eGenerator.data module', function() {
  beforeEach(module('5eGenerator.data'));

  describe('trap-data service', function() {
    it('should provide some data', inject(function(trapData) {
      expect(trapData).toBeDefined();
    }));

    it('should have save values for each danger level',
       inject(function(trapData) {
      trapData.dangers.forEach(function(value) {
        expect(trapData.saveDC[value]).toBeDefined();
      })
    }));

    it('should have attack bonuses for each danger level',
       inject(function(trapData) {
      trapData.dangers.forEach(function(value) {
        expect(trapData.attackBonus[value]).toBeDefined();
      })
    }));

    it('should have damage severities for each danger level (at party level 1)',
       inject(function(trapData) {
      trapData.dangers.forEach(function(value) {
        expect(trapData.damageSeverity(1)[value]).toBeDefined();
      })
    }));

    it('should return damage severities for each party level from 1 to 20',
       inject(function(trapData) {
      for(var i = 1; i < 20; i++) {
        expect(trapData.damageSeverity(i)).toBeDefined();
      }
    }));

    it('should return undefined damage severities for invalid party levels',
       inject(function(trapData) {
      expect(trapData.damageSeverity(0)).toBeUndefined();
      expect(trapData.damageSeverity(21)).toBeUndefined();
      expect(trapData.damageSeverity(-1)).toBeUndefined();
      expect(trapData.damageSeverity("not valid")).toBeUndefined();
      expect(trapData.damageSeverity()).toBeUndefined();
    }));
  });
});