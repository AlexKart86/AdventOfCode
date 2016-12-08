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
    var find_triples = [];
    var tmp = [];
    for (var i=0; i<str.length-2; ++i)
    {
        if (str[i] == '[')
            inside_bracket = true;
        if (str[i] == ']')
            inside_bracket = false;
        if (str[i] == str[i+2] && str[i]!=str[i+1] && str[i] != '[' && str[i+1] != '[' && str[i+2] != '[' && str[i+1] != ']' && str[i+2] != ']' && str[i] != ']') {

            if (!inside_bracket)
              find_triples.push(str.substr(i, 3));
            else
                tmp.push(str.substr(i, 3));
        }
    }


    //var tmp = find_triples.slice();
    if (find_triples.some(function(item){
           var reverse = item[1] + item[0] + item[1];
           return tmp.indexOf(reverse) >= 0;
        })) {
        console.log(str);
        console.log(find_triples);
        console.log(tmp);
        console.log('---');
        return 1;
    }
    else
      return 0;


}

rl.on('close', function()
{
    console.log(result);
});