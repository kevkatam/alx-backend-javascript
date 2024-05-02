const assert = require('assert');
const Utils = require('./utils.js');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function () {
  it('validates usage of utils function', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    assert(spy.calledWithExactly('SUM', 100, 20));

    spy.restore;
  });
});    
