var request = require('superagent');
var chai = require('chai');
var expect = chai.expect;

it('异步请求应该返回一个对象', function(done){
  request
    .get('https://api.github.com')
    .end(function(err, res){
      expect(res).to.be.an('object');
      done();
    });
});
