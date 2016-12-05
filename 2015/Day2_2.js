const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./2015/Day2.txt')
});

var result = 0;

rl.on('line', function(item){
    result += parse(item)
});

function parse(item)
{
    var dim = item.split('x').map((item)=>parseInt(item));
    dim.sort((a,b) => a-b);
    return 2*(dim[0]+dim[1])+ dim.reduce((prev, cur)=> prev*cur);
}

rl.on('close', function(item){
    console.log(result);
});
