//BDD Test

var should = require('should');
var echo = require('./echo');

//describe 來描述每個 test case 所要測試的情境(scenario)
describe('測試標題', function(){
  before(function(){
    // 任何需要在測試前執行的程式
  });
  after(function(){
    // 任何需要在測試後刪除的資料
  });

  //describe稱為"測試套件"（test suite）
  describe('測試子標題', function(){
    //it稱為"測試用例"（test case）
    //要驗證的結果要放在 it() 函式裡
    it('測試內容', function(){
      //用來描述你所預期的測試結果，通常會用 “should xxxx” 來表示
      //接起來看的話就會是 “it should xxxx"
      echo.print('訊息').should.equal('訊息');
    });
  });
});