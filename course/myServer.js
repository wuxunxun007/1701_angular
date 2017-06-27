var http = require("http");

var MyServer = {
	connectServer:function(data){
		http.createServer(function(req,res){
			res.setHeader("Access-Control-Allow-Origin","*");
			res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
			res.write(data);
			res.end();
		}).listen(8000);
		console.log("server is running at http://localhost:8000");
	}
}

module.exports = MyServer;

