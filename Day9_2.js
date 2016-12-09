/**
 * Created by alex_kart on 09.12.2016.
 */
const fs = require('fs');

var str = fs.readFileSync('Day9.txt', 'utf-8');

function parse(str)
{
    var res = "";
    var markers_stack = [];
    var i=0;
    while (i<str.length)
    {
        if (str[i] == '(')
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
            i = j+1;
        }
        else
        {
            if (markers_stack.length == 0) {
                res += str[i];
                i++;
            }
            else
            {
                while (markers_stack.length > 0) {
                    var obj = markers_stack.pop();
                    var tmp = str.substr(i, obj.cnt_letters);
                    for (j = 0; j < obj.cnt_repeats; ++j) {
                        res += tmp;
                        str += tmp;
                    }
                    i += obj.cnt_letters;
                }

            }
        }
    }
   /* while (markers_stack.length > 0)
    {

    }*/
    console.log(res);
    return res.length;
}


console.log(parse(str));