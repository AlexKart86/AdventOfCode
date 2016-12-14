/**
 * Created by alex_kart on 14.12.2016.
 */
var salt = "ngcjuoqr";

const crypto = require('crypto');

function find_key(str)
{
    var keys_found = [];
    var key_idx = [];
    var k3 = [];
    var k5 = [];
    var idx=0;
    while (keys_found.length <= 70)
    {
        var tmp = str+idx;
        var hash = crypto.createHash('md5').update(tmp).digest("hex");
        for (i=0; i<2016; ++i)
        {
            hash = crypto.createHash('md5').update(hash).digest("hex");
        }
        for (var i=0; i<hash.length-2; ++i)
          if (hash[i] == hash[i+1] && hash[i+1] == hash[i+2])
            k3.push([hash.substr(i, 3), idx, hash]);
        for (var i=0; i<hash.length-4; ++i)
          if (hash[i]==hash[i+1] && hash[i+1]==hash[i+2] &&
            hash[i+2] == hash[i+3] && hash[i+3]==hash[i+4])
          {
              k3.forEach(function(item){
                  if (item[0] == hash.substr(i, 3) &&
                      (idx - item[1] < 1000 && idx > item[1]) && keys_found.indexOf(item[2]) == -1 ) {
                      keys_found.push(item[2]);
                      key_idx.push(item[1]);
                      //if (keys_found.length == 64)
                       console.log(item[1]);
                  }
              })
          }
        idx++;
    }
    //console.log(idx);
    console.log(key_idx.sort((a,b)=>(a-b)));
}

find_key(salt);
