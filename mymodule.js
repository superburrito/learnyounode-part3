var fs = require('fs');
var path = require('path');

module.exports = function(dir, filter, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      var filterbyext = function (filename) {
        if (path.extname(filename) == '.' + filter) {
          return true;
        } else {
          return false;
        }
      };
      return callback(null, list.filter(filterbyext));
    }
  });
};



