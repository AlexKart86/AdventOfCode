/**
 * Created by alex_kart on 09.12.2016.
 */


function parse(str)
{
    var res = "";
    var i=0;
    while (i<str.length)
    {
        var j=i+1;
        while (str[j] == str[i] && j<str.length)
         ++j;
        res += (j-i).toString() + str[i];
        i = j;
    }
    return res;
}

var res = "1321131112";
for (var i=0; i<50; ++i)
{
    res = parse(res);
    //console.log(res);
    console.log(i);
    console.log(res.length);

}
