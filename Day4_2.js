const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('Day5.txt')
});

var result = 0;

rl.on('line', function(item){
    console.log(parse(item));
});

rl.on('close', function(){
    //console.log(result);
});

function parse(str){
    var arr = str.split("-");
    var suffix = arr[arr.length-1];
    //ID
    var id = parseInt(suffix.split("[")[0]);
    //Constrol sum
    var control_sum = suffix.match(/\[(.*)\]/)[1];
    arr.splice(-1, 1);
    //letters without -
    //var letters = arr.join('');
    /*var tmp = {};

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
        return 0;*/
    var res_str="";
    arr.forEach(function(item){
        for (var i=0; i<item.length; ++i)
        {
            /*if (item[i] == 'z')
                res_str += 'a';
            else
                res_str += String.fromCharCode(item.charCodeAt(i)+1);
            */
            var pos = item.charCodeAt(i) - 'a'.charCodeAt(0);
            pos += id;
            pos = pos % 26;
            pos += 'a'.charCodeAt(0);
            res_str += String.fromCharCode(pos);
        }
        res_str += " ";
    });

    res_str += id;

    return res_str;
}
