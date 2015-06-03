'use strict';

angular.module('5eGenerator.data', [])
.factory('trapData', function() {
    // In a larger-scale app, this would use $resource to pull data from some
    // RESTful endpoint, but there's so little data here that we don't need to
    // bother.

    // Likewise, the ranges here are strings, when in a future update it would
    // be nice for them to be numbers so that we could e.g. suggest a random
    // value for them.
    return {
        dangers: ["Setback", "Dangerous", "Deadly"],
        saveDC: {
            Setback: "10-11",
            Dangerous: "12-15",
            Deadly: "16-20"
        },
        attackBonus: {
            Setback: "+3 to +5",
            Dangerous: "+6 to +8",
            Deadly: "+9 to +12"
        },
        damageSeverity: function (level) {
            if(level >= 1 && level <= 4) {
                return {
                    Setback: "1d10",
                    Dangerous: "2d10",
                    Deadly: "4d10"
                };
            } else if (level >= 5 && level <= 10) {
                return {
                    Setback: "2d10",
                    Dangerous: "4d10",
                    Deadly: "10d10"
                };
            } else if (level >= 11 && level <= 16) {
                return {
                    Setback: "4d10",
                    Dangerous: "10d10",
                    Deadly: "18d10"
                };
            } else if (level >= 17 && level <= 20) {
                return {
                    Setback: "10d10",
                    Dangerous: "18d10",
                    Deadly: "24d10"
                };
            }

            return undefined;
        }
    }
})