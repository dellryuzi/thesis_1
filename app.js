var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});


app.listen(3000);
// app.listen(3000,'127.0.0.1');
console.log('yo dawgs, now listening');
