/**
 * Created by alex_kart on 20.12.2016.
 */
class Aunts
{
    constructor()
    {
        this.aunts = [];
    }
    parse(str)
    {
        var arr = '{'+ str.split(' ').slice(2).join('') + '}';
        var obj = JSON.parse(arr);
 
        console.log(obj);
    }
}

var aunts = new Aunts();
const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day16.txt')
});

rl.on('line', function(str){
    aunts.parse(str);
});

rl.on('close', function(){
    //console.log(comp.find_winner(2503));
});
