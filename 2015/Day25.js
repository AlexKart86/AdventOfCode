/**
 * Created by alex_kart on 25.12.2016.
 */
var pos = 1;
var add = 2;
for (var i=1; i<3075; ++i)
{
    pos += add;
    add++;
}
add--;
for (var i=1; i<2981; ++i)
{
    pos += add;
    add++;
}

console.log(pos);

var start = 20151125;
for (var i=1; i<pos; ++i)
{
    start = (start*252533)%33554393;
}

console.log(start);