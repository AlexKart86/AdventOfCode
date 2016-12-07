const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day5.txt')
});

var result = 0;

rl.on('line', function(item){
    result += check(item)
});

function check(item)
{
    //if (! /[aeiou]/.test(item))
    //    return 0;
    var matches = item.match(/[aeiou]/g);
    if (!matches || matches.length < 3)
        return 0;
    if (/(ab)|(cd)|(pq)|(xy)/.test(item))
        return 0;
    for (var i=0; i<item.length-1; ++i)
     if (item[i] == item[i+1])
         return 1;
    return 0;
}

rl.on('close', function(item){
    console.log(result);
});
