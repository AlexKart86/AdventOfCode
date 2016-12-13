/**
 * Created by alex_kart on 13.12.2016.
 */


var input = 1352;
for (var j=0; j<60; ++j)
{
    process.stdout.write('\n');
    for (var i=0; i<40; ++i)
    {
        var dig = i*i+3*i+2*i*j+j+j*j+input;
        var str = dig.toString(2);
        var cnt = 0;
        for (var k=0; k<str.length; ++k)
          cnt += +str[k];
        if (cnt%2 == 1)
          process.stdout.write('# ');
        else
          process.stdout.write('. ');
    }
}
