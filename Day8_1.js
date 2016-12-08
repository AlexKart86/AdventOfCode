/**
 * Created by alex_kart on 08.12.2016.
 */

'use strict';

class Display
{
    constructor()
    {
        this.screen = [];
        for (var i=0; i<6; ++i)
        {
            var tmp = [];
            for (var j=0; j<50; ++j)
              tmp.push(0);
            this.screen.push(tmp);
        }
    }
    command(str)
    {
       var commands = str.split(' ');
       if (commands[0] == 'rect')
       {
           let [y, x] = commands[1].split("x").map((item)=>(parseInt(item)));
           for (var i=0; i<x; ++i)
           {
               for (var j=0; j<y; ++j)
                 this.screen[i][j] = 1;
           }
       }
        else if (commands[0] == 'rotate')
       {
           var dist = parseInt(commands[4]);
           var [, k] = commands[2].split("=");
           k = parseInt(k);
           if (commands[1] == 'row')
           {

               var tmp = [];
               /*for (var j=0; j<50; ++j)
                 tmp.push(0);*/

               for (var j=0; j<50; ++j)
               {
                   var new_idx = (j+dist)%50;
                   tmp[new_idx] = this.screen[k][j];
               }

               for (var j=0; j<50; ++j)
                   this.screen[k][j] = tmp[j];



           }
           if (commands[1] == 'column')
           {
               var tmp = [];
               /*for (var i=0; i<6; ++i)
                   tmp.push(0);*/

               for (var i=0; i<6; ++i)
               {
                   var new_idx = (i+dist)%6;
                   tmp[new_idx] = this.screen[i][k];
                   /*var tmp = this.screen[i][k];
                   this.screen[i][k] = this.screen[new_idx][k];
                   this.screen[new_idx][k] = tmp;*/
               }
               for (var i=0; i<6; ++i)
                   this.screen[i][k] = tmp[i];

           }
       }
    }
    count()
    {
        var res =0;
        for (var i=0; i<6; ++i)
        {
            process.stdout.write('\n')
            for (var j=0; j<50; ++j) {
                res += this.screen[i][j];
                if (this.screen[i][j])
                  process.stdout.write(' x');
                else
                    process.stdout.write(' .');
            }
        }
        //console.log(this.screen);
        return res;

    }
}

var display = new Display();


const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day8.txt')
});

rl.on('line', function(command){
    display.command(command);
});

rl.on('close', function(){
    console.log(display.count());
});