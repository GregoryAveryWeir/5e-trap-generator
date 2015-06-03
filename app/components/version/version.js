'use strict';

angular.module('5eGenerator.version', [
  '5eGenerator.version.interpolate-filter',
  '5eGenerator.version.version-directive'
])

.value('version', '0.1');
