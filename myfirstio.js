var fs = require('fs');
var ctr = 0;

var contentBuffer = fs.readFileSync(process.argv[2]);
var contentStr = contentBuffer.toString();
var contentArray = contentStr.split();
var newlineCounter = contentArray.length - 1;

console.log(newlineCounter);

return newlineCounter;

