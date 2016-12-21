/**
 * Created by alex_kart on 20.12.2016.
 */
class Parser
{
    constructor()
    {

    }
    rotate_left(str)
    {
        return str.substr(1) + str.substr(0, 1);
    }

    rotate_right(str)
    {
        return str.substr(str.length-1, 1) + str.substr(0, str.length-1) ;
    }

    parse(command, str)
    {
        var res = "";
        var comm = command.split(" ");
        if (comm[0] == 'swap' && comm[1] == 'position')
        {
            var tmp = str[+comm[2]];
            res = Array.from(str);
            res[+comm[2]] = res[+comm[5]];
            res[+comm[5]] = tmp;
            res = res.join('');
        }
        if (comm[0] == 'swap' && comm[1]== 'letter')
        {
            var s1 = comm[2];
            var s2 = comm[5];
            for (var i=0; i<str.length; ++i)
            {
                if (str[i] == s1)
                  res += s2;
                else if (str[i] == s2)
                  res += s1;
                else
                  res += str[i];
            }
        }
        if (comm[0] == 'rotate' && comm[1] == 'left')
        {
            res = str;
            for (var i=0; i<+comm[2]; ++i)
               res = this.rotate_left(res);
        }
        if (comm[0] == 'rotate' && comm[1] == 'right')
        {
            res = str;
            for (var i=0; i<+comm[2]; ++i)
                res = this.rotate_right(res);
        }
        if (comm[0] == 'rotate' && comm[1] == 'based')
        {
            res = str;
            var idx = str.indexOf(comm[6]);
            if (idx > -1)
            {
              if (idx >= 4)
                idx += 2;
              else
                idx++;
            }
            for (var i=0; i<idx; ++i)
                res = this.rotate_right(res);

        }
        if (comm[0] == 'reverse')
        {
            var s1 = +comm[2];
            var s2 = +comm[4];
            var res = str.substr(0, s1);
            var tmp = str.substr(s1, s2-s1+1);
            tmp = Array.from(tmp).reverse().join('');
            res += tmp;
            res += str.substr(s2+1);
        }
        if (comm[0] == 'move')
        {
            var s1 = +comm[2];
            var s2 = +comm[5];
            var tmp = Array.from(str);
            var ch = tmp[s1];
            tmp.splice(s1, 1);
            tmp.splice(s2, 0, ch);
            res = tmp.join('');
        }
        return res;
    }
}

var parser = new Parser();
var str = "abcdefgh";

const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day21.txt')
});

rl.on('line', function(command){
    str =  parser.parse(command, str);
});

rl.on('close', function(){
    console.log(str);
});

//console.log(parser.rotate_right("abcd"));