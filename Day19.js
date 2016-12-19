/**
 * Created by alex_kart on 19.12.2016.
 */
var input = 3001330;
var arr = [];

function create()
{
    for (var i=1; i<=input; ++i)
      arr.push(i);
}

function turn()
{
    var idx = 0;
    while (arr.length > 1)
    {
        arr.splice(idx+1, 1);
        idx ++;
        if (idx == arr.length-1 && arr.length > 1)
        {
            arr.splice(0, 1);
            idx = 0;
        }
        if (idx % 1000 == 0)
          console.log(arr.length);
    }
}

create();
turn();
console.log(arr);