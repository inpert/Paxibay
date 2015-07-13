//'use strict';

var path = require('path');

// Filters out non .js files. Prevents
// accidental inclusion of possible hidden files
module.exports = function(name) {

    // .js = /(\.(js)$)/i
    // path.extname(p) -- Node.js v0.12.7 Manual
    // Return the extension of the path, from the last '.' to end of string in the last portion of the path. 
  return /(\.(js)$)/i.test(path.extname(name));

};