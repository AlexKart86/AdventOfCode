/**
 * Created by alex_kart on 09.12.2016.
 */
const fs = require('fs');

var str = fs.readFileSync('Day9.txt', 'utf-8');

function parse(str)
{
    let [res, i] = [0, 0];
    while (i<str.length)
    {
        if (str[i] != '(')
        {
            [res, i] = [res+1, i+1];
        }
        else
        {
            let tmp = str.match(/\((\d*)x(\d*)\)/i);
            var letters_cnt = +tmp[1];
            var repeats = +tmp[2];
            i += tmp[0].length;
            res += repeats*parse(str.substr(i, letters_cnt)) + parse(str.substr(i+letters_cnt));
            //i+=letters_cnt;
            break;
        }
    }
    return res;
}

console.log(parse(str));