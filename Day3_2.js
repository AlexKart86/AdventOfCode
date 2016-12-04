const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('day3_task.txt')
});

function is_triangle(x1,x2,x3)
{
    return (x1+x2>x3) && (x1+x3>x2) && (x2+x3>x1);
}
var result = 0;
var x1 = [];
var x2 = [];
var x3 = [];
rl.on('line', function(line){
    var arr = line.split(" ").filter((item) => item.length > 0).map((item)=> parseInt(item));
    x1.push(arr[0]);
    x2.push(arr[1]);
    x3.push(arr[2]);
});

rl.on('close', function()
{
    x1 = x1.concat(x2);
    x1 = x1.concat(x3);
    var i=0;
    while (i<= x1.length){
        if (is_triangle(x1[i], x1[i+1], x1[i+2]))
          result ++;
        i += 3;
    }
    console.log(result);

});