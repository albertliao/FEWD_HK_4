var http = require("http");
var mongoose = require("mongoose");

var db = mongoose.connect('mongodb://localhost/test');


var server = http.createServer(function(request, response){

    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("New Server. Hello!");
    response.end();

}).listen(8080);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("connection successful");
});