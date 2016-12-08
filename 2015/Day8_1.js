/**
 * Created by alex_kart on 08.12.2016.
 */
'use strict';



function parse(str)
{
    var res=0;
    var i=0;
    while (i<str.length)
    {
        switch (str[i])
        {
            case '"':
                i++;
                break;
            case '\\':
                if (str[i+1] == '\\' || str[i+1] == '"')
                {
                    i += 2;
                    res++;
                }
                if (str[i+1] == 'x')
                {
                    var tmp = str.substr(i+2, 2);
                    if (/^[0-9a-fA-F]{2}$/.test(tmp))
                    {
                        res++;
                        i += 4;
                    }
                }
                break;
            default:
                i++;
                res++;
        }
    }
    return res;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day8.txt')
});

var result = 0;
rl.on('line', function(str){
   result = result + str.length - parse(str);
});

rl.on('close', function(){
    console.log(result);
});