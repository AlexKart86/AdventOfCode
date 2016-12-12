const fs = require('fs');

var str = fs.readFileSync('./Day12.txt', 'utf-8');

console.log(str.match(/-*[0-9]+/ig).reduce((prev, next) => ( +prev + (+next))));

var minus = 0;
var regexp = /({.*?red.*?)(-*[0-9]+)(})/ig;
while (result = regexp.exec(str))
{
    minus += +result[2];
}
console.log(minus);