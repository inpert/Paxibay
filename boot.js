var express = require('express');
var app = require('./config/express')(null);

// listen (start app with node server.js) =================
//app.use(express.static(__dirname + '/www/public'));                
var www = express.static(__dirname + '/www/public');
app.use('/', www);
app.listen(5660);
console.log('App listening on port 5660');

//app.listen(app.get('port'), function () {
//    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
//});
