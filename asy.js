function User(name){
	var person = {}
	person.save = function (cb){
		if(name){
			console.log("開始save")
			console.log("save中...")
			setTimeout(function(){
				console.log("花費一秒...")
				cb(false)
			}, 1000)
		}
		else
			cb("no name!")
	}
	person.name = name
	return person
}

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      console.log("執行save")
      user.save(function(err) {
        if (err) throw err;
        //在 mocha 裡，測 async 程式是很簡單的事，訣竅在於多個 done() 的函式呼叫。
        done();
      	console.log("save完成")
      });
    });
  });
});