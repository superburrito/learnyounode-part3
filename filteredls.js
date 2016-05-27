var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var filter = '.' + process.argv[3];

fs.readdir(dir, function (err, list) {
  for (index in list) {
    var ext = path.extname(list[index]);
    if (ext == filter) {
      console.log(list[index]);
    } 
  }
});



