const fs = require('fs');

var str = fs.readFileSync('./2015/Day1.txt', 'utf-8');

var floor = 0;
for (var i=0; i<str.length; ++i)
{
    if (str[i] == '(')
      ++floor;
    else if (str[i] == ')')
      --floor;
}
console.log(floor);