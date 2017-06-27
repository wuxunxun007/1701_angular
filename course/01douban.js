var https = require("https");
var MyServer = require("./myServer.js");
//配置options
var options = {
	hostname:"api.douban.com",//域名
	port:443,//端口号写为固定的443即可
	path:"/v2/movie/top250",//一个完整的地址出去域名，协议，端口剩下的所有的
	method:"GET"
}
//变量赋值
var req = https.request(options,function(res){
	//表示请求已经成功，数据其实已经在res里面
	var htmlStr = "";
	//接受数据并且累加
	res.on("data",function(str){
		htmlStr += str;
	})
	//接收结束，显示数据
	res.on("end",function(){
//		console.log(htmlStr);
		MyServer.connectServer(htmlStr);
	})
});
//请求出错
req.on("error",function(err){
	console.log(err)
})
//请求结束
req.end();
