const fs = require('fs');

var str = fs.readFileSync('./Day12.txt', 'utf-8');

var cnt_total = str.match(/-*[0-9]+/ig).reduce((prev, next) => ( +prev + (+next)));
console.log(cnt_total);

/*var minus = 0;
var regexp = /({.*?red.*?)(-*[0-9]+)(})/ig;
while (result = regexp.exec(str))
{
    minus += +result[2];
}
console.log(minus);
console.log(cnt_total-minus);*/