/**
 * Created by alex_kart on 19.12.2016.
 */
var input =3001330;
var arr = [];

function create()
{
    for (var i=1; i<=input; ++i)
        arr.push(i);
}

function turn()
{
    var idx = 0;
    var tmp = [];
    while (arr.length > 1)
    {
        if (idx > arr.length-1 && arr.length > 1)
        {
            idx -= (arr.length);
            arr = tmp.slice();
            tmp = [];
            console.log(arr);
        }
        tmp.push(arr[idx]);
        idx += 2;

        //if (idx % 1000 == 0)
        //    console.log(tmp.length);
    }
}

create();
turn();
console.log(arr);