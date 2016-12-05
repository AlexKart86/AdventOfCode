/**
 * Created by alex_kart on 05.12.2016.
 */
const crypto = require('crypto');

function decode(str)
{
    var idx = 0;
    var sln = "";
    while (sln.length < 8)
    {
        idx++;
        var tmp = str+idx;
        var hash = crypto.createHash('md5').update(tmp).digest("hex");
        if (hash.substr(0,5) == "00000") {
            sln += hash[5];
            console.log(hash);
        }
    }
    return sln;
}



console.log(decode("wtnhxymk"));