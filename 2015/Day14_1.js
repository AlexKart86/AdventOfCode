/**
 * Created by alex_kart on 19.12.2016.
 */

class Competitions
{
    constructor()
    {
        this.part = [];
    }
    parse(str)
    {
        var tmp = str.split(' ');
        this.part.push({
            name: tmp[0],
            speed: +tmp[3],
            duration: +tmp[6],
            sleep: +tmp[13]
        });
    }
    find_winner(duration){
        var max = 0;
        this.part.forEach(function(item){
           var cycles =  Math.floor(duration / (item.sleep+item.duration));
           var len =  item.speed * item.duration *  cycles;
           var remain = duration % (item.sleep + item.duration);
           len += item.speed * Math.min(item.duration, remain);
           if (len > max)
             max = len;
        });
        return max;
    }

}

var comp = new Competitions();

const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day14.txt')
});

rl.on('line', function(str){
    comp.parse(str);
});

rl.on('close', function(){
    console.log(comp.find_winner(2503));
});