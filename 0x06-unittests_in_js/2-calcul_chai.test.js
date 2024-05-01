const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');
const expect = chai.expect;

describe('calculateNumber', function () {
  it('should return sum', function () {
    res = calculateNumber('SUM', 1.4, 4.5);
    expect(res).to.equal(6);
  });

  it('should return subtraction', function () {
    res = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(res).to.equal(-4);
  });

  it('should return division', function () {
    res = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(res).to.equal(0.2);
  });

  it('should return Error', function () {
    res = calculateNumber('DIVIDE', 1.4, 0);
    expect(res).to.equal('Error');
  });
});
