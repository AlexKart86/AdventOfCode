/**
 * Created by alex_kart on 09.12.2016.
 */
const fs = require('fs');

var str = fs.readFileSync('Day9.txt', 'utf-8');

var prefix = 0;

function parse(str)
{
    var res = "";
    var markers_stack = [];
    var i=0;
    var max_letters = 0;
    while (i<str.length)
    {
        if (str[i] == '(' && markers_stack.length == 0)
        {
            var j = i;
            while (str[j] != ')')
            {
                j++;
            }
            var tmp = str.substring(i+1, j).split('x').map((item) => (parseInt(item)));
            markers_stack.push({
                cnt_letters: tmp[0],
                cnt_repeats: tmp[1]
            });
            //max_letters = Math.max(max_letters, tmp[0]);
            max_letters = tmp[0];
            i = j+1;
        }
        else
        {
            if (markers_stack.length == 0) {
                var tmp = ""
                while (i < str.length && str[i] != '(') {
                    tmp += str[i];
                    i++;
                }

                if (tmp.length > max_letters)
                {
                   prefix += tmp.length - max_letters;
                   tmp = tmp.substr(0, max_letters);
                }
                res += tmp;
            }
            else
            {
                var obj = markers_stack.pop();
                var tmp = str.substr(i, obj.cnt_letters);
                for (j = 0; j < obj.cnt_repeats; ++j) {
                    res += tmp;
                }
                i += obj.cnt_letters;
            }
        }

        var p = res.indexOf('(');
        if (p == -1)
            p = res.length;
        if (p) {
            prefix += p;
            res = res.substr(p);
        }


    }
    /* while (markers_stack.length > 0)
     {

     }*/
    //console.log(res);
    return res;
}


var res = str;
while (res.indexOf('(') >= 0)
{
    res = parse(res);
    console.log(res.length);
    console.log(prefix);
}

console.log(res.length + prefix);