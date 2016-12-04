const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('Day4.txt')
});

var result = 0;

rl.on('line', function(item){
    result += getId(item);
});

rl.on('close', function(){
   console.log(result);
});

function getId(str){
    var arr = str.split("-");
    var suffix = arr[arr.length-1];
    //ID
    var id = suffix.split("[")[0];
    //Constrol sum
    var control_sum = suffix.match(/\[(.*)\]/)[1];
    arr.splice(-1, 1);
    //letters without -
    var letters = arr.join('');
    var tmp = {};

    //Calc letters frequency
    for (var i=0; i<letters.length; ++i)
    {
        if (!tmp.hasOwnProperty(letters[i]))
         tmp[letters[i]] = 0;
        tmp[letters[i]]++;
    }

    //create array from object
    var tmp_arr=[];
    for (key in tmp)
        tmp_arr.push([key, tmp[key]]);
    tmp_arr.sort(function(a,b)
    {
        if (a[1] == b[1])
         return a[0].charCodeAt(0) - b[0].charCodeAt(0);
        else
          return -a[1]+b[1];
    });
    var our_control_sum = "";
    tmp_arr.slice(0, 5).forEach(function(item){
        our_control_sum += item[0];
    });
    if (our_control_sum == control_sum)
     return parseInt(id);
    else
     return 0;
}