/**
 * Created by alex_kart on 07.12.2016.
 */
'use strict';

class Lamps{
    constructor() {
        this.lamps = [];
        for (var i = 0; i < 1000; ++i) {
            var tmp = [];
            for (var j = 0; j < 1000; ++j)
                tmp.push(0);
            this.lamps.push(tmp);
        }
        //console.log(this.lamps);
    }
    parse_command(command){
        var tmp = command.split(" ");
        var str1 = "";
        var str2 = "";

        if (tmp[0] == 'toggle')
        {
            str1 = tmp[1];
            str2 = tmp[3];
        }
        else
        {
            str1 = tmp[2];
            str2 = tmp[4];
        }

        let [x1,y1] = str1.split(",").map((item)=> (parseInt(item)));
        let [x2,y2] = str2.split(",").map((item) => (parseInt(item)));


        // console.log([x1,y1,x2,y2]);

        for (var i=x1; i<=x2; ++i)
        {
            for (var j=y1; j<=y2; ++j){
                if (tmp[0] == 'toggle')
                    this.lamps[i][j] = !this.lamps[i][j];
                else if (tmp[1] == 'on')
                    this.lamps[i][j]=1;
                else if (tmp[1]=='off')
                    this.lamps[i][j]=0;
            }
        }
    }
    lamps_count(){
        var res = 0;
        this.lamps.forEach(
            function(item){
                item.forEach(
                    function(lamp) {
                  res += lamp;
                }
                );
            }
        )
        return res;
    }
}


var lam = new Lamps();

const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day6.txt')
});

rl.on('line', function(command){
    lam.parse_command(command);
});

rl.on('close', function(){
    console.log(lam.lamps_count());
});