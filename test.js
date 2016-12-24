/**
 * Created by alex_kart on 21.12.2016.
 */

var str= "abcdefgh";

function scramble(passed_str)
{
    if (passed_str.length == 8)
      console.log(passed_str);
    else
     for (var i=0; i<8; ++i)
     {
         if (passed_str.indexOf(str[i]) == -1)
           scramble(passed_str + str[i]);
     }
}

scramble("");