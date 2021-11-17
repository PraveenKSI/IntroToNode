//Question 2 >> Read file asynchronously and synchronously


//Reading file asynchronously
var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, contents) {
    console.log("in async")
    console.log(contents);
});
 

//Reading file synchronously
var contents = fs.readFileSync('readMe.txt', 'utf8');
console.log(contents);
