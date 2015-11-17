var express = require("express");
var app = express();


app.get("/", function(req, res){
	res.send("Comienza APP");
});

app.get("/createuser", function(req, res){
	console.log(req);
	res.send("Crear Usuario ");
});


app.get("/deleteuser", function(req, res){
	res.send("Borrar Usuario");
});

app.get("/updateuser", function(req, res){
	res.send("Modificar usuario");
});


var server=app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Arranco la app en Http://%s:%s", host, port);
});