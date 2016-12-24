/**
 * Created by alex_kart on 24.12.2016.
 */

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

class Parser
{
    constructor()
    {
        this.map = [];
    }
    parse(str)
    {
        this.map.push(str);
    }
    lookup_idx(i)
    {
        var x =0;
        var y=0;
        this.map.forEach(function(item, idx){
           for(var j=0; j<item.length; ++j)
             if (+item[j] ==i )
             {
                 x = idx;
                 y = j;
                 return;
             }
        });
        return [x,y];
    }



    find_path_len(x1, y1, x2, y2)
    {
       var tmp_map = this.map.slice();
       var step_cnt=0;
       var cur_points = [[x1,y1]];
       var next_poins = [];
       var check = function()
       {
           return cur_points.some((item) => (item[0] == x2 && item[1]==y2));
       };
       while (!check())
       {
           cur_points.forEach(function(item)
           {
               var x = item[0];
               var y = item[1];
               if (tmp_map[x+1][y] != '#' && tmp_map[x+1][y] != '+') {
                   next_poins.push([x + 1, y]);
                   tmp_map[x+1] = tmp_map[x+1].replaceAt(y, '+');
               }

               if (tmp_map[x][y+1] != '#' && tmp_map[x][y+1] != '+') {
                   next_poins.push([x, y+1]);
                   tmp_map[x] = tmp_map[x].replaceAt(y+1, '+');
               }

               if (tmp_map[x-1][y] != '#' && tmp_map[x-1][y] != '+') {
                   next_poins.push([x - 1, y]);
                   tmp_map[x-1] = tmp_map[x-1].replaceAt(y, '+');
               }

               if (tmp_map[x][y-1] != '#' && tmp_map[x][y-1] != '+') {
                   next_poins.push([x, y-1]);
                   tmp_map[x] = tmp_map[x].replaceAt(y-1, '+');
               }

           });
           cur_points = next_poins.slice();
           ++step_cnt;
           next_poins = [];
       }
       return step_cnt;
    }

}

var parser = new Parser();

const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day24.txt')
});

rl.on('line', function(str){
    str =  parser.parse(str);
});

rl.on('close', function(){
    var p1 = parser.lookup_idx(0);
    var p2 = parser.lookup_idx(2);
    console.log(parser.find_path_len(p1[0], p1[1], p2[0], p2[1]));

    var matrix = [];
    for (var i=0; i<8; ++i)
    {
        var tmp = [];
        for (var j=0; j<8; ++j)
           tmp.push(0);
        matrix.push(tmp);
    }
    for (var i=0; i<8; ++i)
    {
        for (j=i+1; j<8; ++j)
        {
            var p1 = parser.lookup_idx(i);
            var p2 = parser.lookup_idx(j);
            matrix[i][j] = parser.find_path_len(p1[0], p1[1], p2[0], p2[1]);
            matrix[j][i] = matrix[i][j];
        }
    }

    console.log(matrix);
    var min = 99999999;
    var short_path = function find(path, cur, remain){
        if (remain.length == 0)
        {
            if (min > path)
              min = path;
        }
        else
        remain.forEach(function(item, idx){
            var tmp = remain.slice();
            tmp.splice(idx, 1);
            find(path+matrix[cur][item], item, tmp);
        })
    };
    short_path(0, 0, [1,2,3,4,5,6,7]);
    console.log(min);
});