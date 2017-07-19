var expect = require('chai').expect;

describe('beforeEach示例', function() {
  var foo = false;

  //beforeEach一定会在it之前执行
  beforeEach(function() {
    foo = true;
  });

  it('修改全局变量应该成功', function() {
    expect(foo).to.be.equal(true);
  });
});