const assert = require('assert');
const Utils = require('./utils.js');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function () {
  it('validates usage of utils function', function () {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    sendPaymentRequestToApi(100, 20);

    assert(stub.calledWithExactly('SUM', 100, 20));
    assert(spy.calledWithExactly('The total is: 10'));
    spy.restore();
    stub.restore();
  });
});
