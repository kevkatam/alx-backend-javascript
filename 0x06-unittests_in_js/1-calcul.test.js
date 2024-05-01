const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  it('should return sum', function () {
    res = calculateNumber('SUM', 1.4, 4.5);
    assert.strictEqual(res, 6);
  });

  it('should return subtraction', function () {
    res = calculateNumber('SUBTRACT', 1.4, 4.5);
    assert.strictEqual(res, -4);
  });

  it('should return division', function () {
    res = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.strictEqual(res, 0.2);
  });

  it('should return Error', function () {
    res = calculateNumber('DIVIDE', 1.4, 0);
    assert.strictEqual(res, 'Error');
  });
});
