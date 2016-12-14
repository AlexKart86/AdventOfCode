/**
 * Created by alex_kart on 14.12.2016.
 */
var salt = "ngcjuoqr";

const crypto = require('crypto');

function find_key(str)
{
    var keys_idx = [];
    var k3 = [];
    var k5 = [];
    var idx=0;
    while (true)
    {
        var tmp = str+idx;
        var hash = crypto.createHash('md5').update(tmp).digest("hex");
        for (i=0; i<2016; ++i)
        {
            hash = crypto.createHash('md5').update(hash).digest("hex");
        }
        for (var i=0; i<hash.length-2; ++i)
          if (hash[i] == hash[i+1] && hash[i+1] == hash[i+2]) {
              k3.push([hash.substr(i, 3), idx, hash]);
              break;
          }
        for (var i=0; i<hash.length-4; ++i)
          if (hash[i]==hash[i+1] && hash[i+1]==hash[i+2] &&
            hash[i+2] == hash[i+3] && hash[i+3]==hash[i+4])
          {

              var j =0;
              while (j<k3.length)
              {
                  if (k3[j][0] == hash.substr(i, 3) &&
                      (idx - k3[j][1] < 1000) && (idx > k3[j][1]) ) {
                      if (keys_idx.indexOf(k3[j][1]) == -1)
                      {
                          keys_idx.push(k3[j][1]);
                          keys_idx.sort((a,b) => (a-b));
                      }
                      k3.splice(j, 1);
                  }
                  else
                      j++;

              }
          }
        if (keys_idx.length >= 64) {
            if (k3.every((item) => (item[1] > keys_idx[63] || item[1] + 1000 < idx)))
                break;
        }
        idx++;
    }
    //console.log(idx);
    //console.log(key_idx.sort((a,b)=>(a-b)));
    console.log(keys_idx);
}

find_key(salt);

