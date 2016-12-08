/**
 * Created by alex_kart on 08.12.2016.
 */
'use strict';



function parse(str)
{
    var res=0;
    var i=1;
    while (i<str.length-1)
    {
        switch (str[i])
        {
            case '"':
            case '\\':
                res++;
                break
        }
        i++;
    }
    res += 4;
    return res;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day8.txt')
});

var result = 0;
rl.on('line', function(str){
    result = result + parse(str);
});

rl.on('close', function(){
    console.log(result);
});