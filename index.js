var express = require("express");
var app = express();

var userRouter=require("./user");



app.get("/", function(req, res){
	res.send("Comienza APP");
});

app.use("/users", userRouter);


var server=app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Arranco la app en Http://%s:%s", host, port);
});