var chai = require('chai');
var expect = chai.expect;

it('測試應該5000毫秒後结束', function(done) {
  var x = true;
  var f = function() {
    x = false;
    expect(x).to.be.not.ok;
    done(); // 通知Mocha測試結束
  };
  setTimeout(f, 4000);
});

