//TDD Test

var assert = require('assert');
var echo = require('./echo');
 
suite('測試標題', function(){
  setup(function(){
    // 任何需要在測試前執行的程式
  });
  teardown(function(){
    // 任何需要在測試後刪除的資料
  });
  suite('測試子標題', function(){
    test('測試內容', function(){
      assert.equal('訊息', echo.print('訊息'));
    });
  });
});