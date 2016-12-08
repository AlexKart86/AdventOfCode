const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('Day6.txt')
});

var result = 0;

rl.on('line', function(item){
    parse(item);
});

var res=[{}, {}, {}, {}, {}, {},  {}, {}];

function parse(str)
{
    for (var i=0; i< str.length; ++i)
    {
        var obj = res[i];
        if (!obj.hasOwnProperty(str[i]))
          obj[str[i]] = 0;
        obj[str[i]]++;
    }
}

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

function analyze(){
    var str = "00000000";
    for (var i=0; i<res.length; ++i){
        var max = 10000;
        for (key in res[i]){
            if (res[i][key] < max){
                str = str.replaceAt(i, key);
                max = res[i][key];
            }
        }
    }
    return str;
}

rl.on('close', function(){
    console.log(res);
    console.log(analyze());
});