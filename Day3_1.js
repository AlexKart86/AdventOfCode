const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('day3_task.txt')
});

function is_triangle(x1,x2,x3)
{
    return (x1+x2>x3) && (x1+x3>x2) && (x2+x3>x1);
}
var result = 0;
rl.on('line', function(line){
   var arr = line.split(" ").filter((item) => item.length > 0).map((item)=> parseInt(item));
   if (is_triangle(arr[0], arr[1], arr[2]))
     result ++;
});

rl.on('close', ()=>console.log(result));