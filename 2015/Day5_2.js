const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day5.txt')
});

var result = 0;

rl.on('line', function(item){
    if (check(item))
    {
        console.log(item);
        result ++;
    }
});

function check(item)
{
    var check1 = false;
    var pairs = [];
    for (var i=0; i<item.length -1; ++i)
    {
        var substr = item[i] + item[i+1];
        var str1 = item.substring(0, i-1);
        var str2 = item.substring(i+2);
        if (str1.indexOf(substr) >= 0 || str2.indexOf(substr) >= 0)
        {
            check1 = true;
            break;
        }
    }
    var check2 = false;
    for (var i=0; i<item.length-2; ++i)
    {
        if (item[i] == item[i+2])
        {
            check2 = true;
            break;
        }
    }
    return check1 && check2;
}

rl.on('close', function(item){
    console.log(result);
});
