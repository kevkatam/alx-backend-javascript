const chai = require('chai');
const expect = chai.expect;
const request = require('request');

const url = 'http://localhost:7865';
describe('Index page', function () {
  it('test correct status code', function (done) {
    request(url, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('test correct result', function (done) {
    request(url, function(err, res, body) {
      expect(body).to.include('Welcome to the payment system');
      done();
    });
  });
  
  it('test other', function(done) {
    request(url, function(err, res, body) {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});

describe('Cart page', function () {
  it('tests correct status code when id is a number', function (done) {
    request('http://localhost:7865/cart/12', function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('tests status code when id is not a number', function (done) {
    request('http://localhost:7865/cart/hello', function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('tests correc result', function (done) {
    request('http://localhost:7865/cart/12', function (err, res, body) {
      expect(body).to.include('Payment methods for cart 12');
      done();
    });
  });
});

describe('login', function () {
  it('tests the correct result', function (done) {
    const options = {
                      url: 'http://localhost:7865/login',
                      json: true,
                      body: {
                              userName: 'Betty'
                      }
                    };
    request.post(options, function (err, res, body) {
      expect(body).to.include('Welcome Betty');
      done();
    });
  });

  it('test the status code when result is correct', function (done) {
    const options = {
                      url: 'http://localhost:7865/login',
                      json: true,
                      body: {
                              userName: 'Betty'
                      }
                    };
    request.post(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('test the status code when result is incorrect', function (done) {
    const options = {
                      url: 'http://localhost:7865/login',
                      json: true,
                      body: {
                              userNam: 'Betty'
                      }
                    };
    request.post(options, function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('available_payments', function () {
  it('tests the correct result', function (done) {
    request('http://localhost:7865/available_payments', function (err, res, body) {
      const b = JSON.parse(body);
      expect(b).to.deep.equal({"payment_methods":{"credit_cards":true,"paypal":false}});
      done();
    });
  });

  it('tests the correct status code', function (done) {
    request('http://localhost:7865/available_payments', function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
