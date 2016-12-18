/**
 * Created by alex_kart on 18.12.2016.
 */

var input = ['.^..^....^....^^.^^.^.^^.^.....^.^..^...^^^^^^.^^^^.^.^^^^^^^.^^^^^..^.^^^.^^..^.^^.^....^.^...^^.^.'];

function build_next()
{
    var str = "";
    var prev_str = input[input.length-1];
    for (var i=0; i<prev_str.length; ++i)
    {
        var center = prev_str[i];
        if (i == 0)
            var left = '.';
        else
            var left = prev_str[i-1];
        if (i==prev_str.length-1)
            var right = '.';
        else
            var right = prev_str[i+1];

        if ( (left == '^' && center == '^' && right == '.') ||
             (center == '^' && right == '^' && left == '.') ||
             (left == '^' && center == '.' && right == '.') ||
            (right == '^' && left == '.' && center == '.') )
          str += '^';
        else
          str += '.';
    }
    input.push(str);
}

function calc_count()
{
    var res = 0;
    input.forEach(function(item){
        for (var i=0; i<item.length; ++i)
           if (item[i] == '.')
             res++;
    });
    return res;
}

for (var i=0; i<400000-1; ++i)
    build_next();

console.log(input);
console.log(calc_count());