var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var hcont = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  //response.send('Hello World 3!');
    response.send(hcont.toString());
});

var port = process.env.PORT || 8080; //5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

//console.log(hcont.toString());
