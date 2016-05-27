
var array = process.argv;
var accumulator = 0;

for (var i = 2; i < array.length; i++) {
   accumulator += Number(array[i]);  
};

console.log(accumulator);

return accumulator;

