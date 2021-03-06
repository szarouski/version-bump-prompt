'use strict';

var helper = require('../fixtures/helper');

describe('bump --preminor', function() {
  it('should not increment a non-existent version number', function() {
    helper.bump('--preminor', {}, {});
  });

  it('should increment an all-zero version number', function() {
    helper.bump('--preminor', {version: '0.0.0'}, {version: '0.1.0-beta.0'});
  });

  it('should reset the minor and patch', function() {
    helper.bump('--preminor', {version: '1.2.3'}, {version: '1.3.0-beta.0'});
  });

  it('should reset the prerelease version', function() {
    helper.bump('--preminor', {version: '1.2.3-beta.4'}, {version: '1.3.0-beta.0'});
  });

  it('should honor the --preid flag', function() {
    helper.bump('--preminor --preid alpha', {version: '1.2.3-beta.4'}, {version: '1.3.0-alpha.0'});
  });
});
