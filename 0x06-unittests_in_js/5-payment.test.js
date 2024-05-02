const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment.js');

let spy;
describe('sendPaymentRequestToAPI test suite', function () {
  beforeEach(function () {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    spy.restore();
  });
  it('test console log is loging The total is: 120', function () {
    sendPaymentRequestToAPI(100, 20);

    assert(spy.calledOnce);
    assert(spy.calledWithExactly('The total is: 120'));
    spy.restore();
  });

  it('test console log is loging The total is: 20', function() {
    sendPaymentRequestToAPI(10, 10);

    assert(spy.calledOnce);
    assert(spy.calledWithExactly('The total is: 20'));
  });
});
