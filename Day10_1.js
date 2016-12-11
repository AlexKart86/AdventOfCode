/**
 * Created by alex_kart on 10.12.2016.
 */

class Bots{
    constructor()
    {
        this.bots = [];
        this.outputs = [];
    }
    parse_command(str)
    {
        var arr = str.split(' ');
        var bot_num = 0;
        if (arr[0] == 'value')
        {
            bot_num = +arr[5];
            var bot = {values: [], out: []};
            if (this.bots[bot_num] != undefined)
                bot = this.bots[bot_num];
            else
                this.bots[bot_num] = bot;
            if (!bot['values'])
              bot['values'] = [];
            bot['values'].push(+arr[1]);
            bot['values'].sort((a,b) => (a-b));
            bot['out'].push(+arr[1]);
            bot['out'].sort((a,b) => (a-b));
        }
        if (arr[0] == 'bot'){
            bot_num = +arr[1];
            var bot = {values:[], out: []};
            if (this.bots[bot_num] != undefined)
                bot = this.bots[bot_num];
            else
                this.bots[bot_num] = bot;
            bot['low'] = [arr[5], +arr[6]];
            bot['high'] = [arr[10], +arr[11]];
        }
    }
    check(i, j)
    {
       return this.bots.some(function(bot, index){
           // if (bot.values.length > 1)
           // {
           //     console.log(bot.values);
           // }
            if (bot.values.length > 1 &&
              bot.values[0] == i &&
              bot.values[1] == j) {
                console.log(index);
                return true;
            }
            return false;
        })
    }

    is_empty()
    {
        return this.bots.every((item) => (item.values.length == 0));
    }

    turn(i, j)
    {
        var res = false;
        this.bots.forEach(function(item, idx){
            if (item.values.length == 2){
                if (item.low[0] == 'bot')
                {
                    this.bots[item.low[1]].values.push(item.values[0]);
                    this.bots[item.low[1]].values.sort((a,b) => (a-b));
                }
                else if (item.low[1] <=2)
                   this.outputs.push(item.values[0]);

                if (item.high[0] == 'bot')
                {
                    this.bots[item.high[1]].values.push(item.values[1]);
                    this.bots[item.high[1]].values.sort((a,b) => (a-b));
                }
                else if (item.high[1] <= 2)
                    this.outputs.push(item.values[1]);
               // item.values = item.out.slice();
                 item.values = [];

                if (this.check(i, j))
                  res = true;
            }
        }, this);
        return res;
    }

}

var bots = new Bots();

const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day10.txt')
});

rl.on('line', function(command){
    bots.parse_command(command);
});

//rl.on('close', function(){
//    // console.log(display.count());
//    while (true) {
//        if (bots.check(17, 61) || bots.turn(17, 61))
//            return;
//    }
//    //console.log(bots.bots);
//});

rl.on('close', function(){
    // console.log(display.count());
    while (!bots.is_empty()) {
        bots.turn(17, 61);
    }
    console.log(bots.outputs.reduce((item, prev) => (item*prev)));
    //console.log(bots.bots);
});
