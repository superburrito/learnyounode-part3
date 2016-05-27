var dir = process.argv[2];
var filter = process.argv[3];

var mymodule = require('./mymodule.js');

mymodule(dir, filter, function(err,data) {
  for (index in data) {
    console.log(data[index]);
  }
});
