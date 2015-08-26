// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = require('./config/express')(null);

app.listen(5660);
console.log('App listening on port 5660');
console.log(process.env.NODE_ENV);
