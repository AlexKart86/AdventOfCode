/**
 * Created by alex_kart on 05.12.2016.
 */
/**
 * Created by alex_kart on 05.12.2016.
 */
const crypto = require('crypto');

function decode(str)
{
    var idx = 0;
    var sln = [];
    var cnt = 0;
    while (cnt < 8)
    {
        idx++;
        if (idx == Number.MAX_SAFE_INTEGER-1)
        {
            console.log('<<<<<'+idx);
        }
        var tmp = str+idx;
        var hash = crypto.createHash('md5').update(tmp).digest("hex");
        if (hash.substr(0,5) == "00000" ) {
            var j = parseInt(hash[5]);
            if (j < 8 && (typeof sln[j] === 'undefined')) {
                sln[j] = hash[6];
                cnt ++;
                console.log(hash);
                console.log(sln.join(" "));
                console.log(idx);
            }
        }
    }
    return sln.join('');
}



console.log(decode("wtnhxymk"));



