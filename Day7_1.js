/**
 * Created by alex_kart on 07.12.2016.
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('Day7.txt')
});

var result = 0;

rl.on('line', function(item){
    result += check(item);
});

function check(str){
    var inside_bracket = false;
    var res = 0;
    for (var i=0; i<str.length-3; ++i)
    {
        if (str[i] == '[')
          inside_bracket = true;
        if (str[i] == ']')
          inside_bracket = false;
        if (str[i] == str[i+3] && str[i+1] == str[i+2] && str[i]!=str[i+1])
           if (inside_bracket)
             return 0;
           else
             res = 1;
    }
    return res;
}

rl.on('close', function()
{
    console.log(result);
});