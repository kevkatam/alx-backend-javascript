const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function () {
  it('test result of getPaymentTokenFromAPI(true)', function (done) {
    getPaymentTokenFromAPI(true).then(function(res) {
      assert.deepStrictEqual(res, { data: 'Successful response from the API' });
      done();
    }).catch(function(err) {
      done(err);
    });
  });
});
