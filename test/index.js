const assert = require('chai').assert;
const idman = require('../index.js');

describe('index', function() {
  describe('#idman()', function() {
    it('should return some results for this repo', function() {
      const thisRepo = idman('.');
      assert.isDefined(thisRepo.identities);
      assert.isArray(thisRepo.identities);
      assert.isDefined(thisRepo.commits);
      assert.isObject(thisRepo.commits);
    });
  });
});
