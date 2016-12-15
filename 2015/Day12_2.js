/**
 * Created by alex_kart on 14.12.2016.
 */
const fs = require('fs');

var str = JSON.parse(fs.readFileSync('./Day12.txt', 'utf-8'));

var cnt = 0;

function recurse_test(obj)
{
    var v_is_red_exists = false;
    if (!(obj instanceof Array))
        for (var prop in obj)
        {
            if (prop == "red" || obj[prop] == "red") {
                v_is_red_exists = true;
                break;
            }
        }
    if (!v_is_red_exists){
        for (var prop in obj)
        {
            if (typeof obj[prop] == "number")
                cnt += obj[prop];
            if (typeof obj[prop] == "object")
                recurse_test(obj[prop]);
        }
    }

}

recurse_test(str);
console.log(cnt);
