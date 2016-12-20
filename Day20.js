/**
 * Created by alex_kart on 20.12.2016.
 */




class Intervals
{
    constructor()
    {
        this.values = [];
    }

    parse(str)
    {
        var vars = str.split('-');
        this.values.push([+vars[0], +vars[1]]);
    }

    find()
    {
        this.values.sort((a, b) => (a[0]-b[0]));
        var i=0;
        while (1)
        {
            if (this.values[i][1]+1 < this.values[i+1][0])
                return this.values[i][1]+1;
            i++;
        }
    }
    find2()
    {
        this.values.sort((a, b) => (a[0]-b[0]));
        var max = 0;
        var cnt = 0;

        for (var i=0; i<this.values.length-1; ++i)
        {
            let right = 0;
            if (this.values[i][1] < max)
                right = max;
            else {
                right = this.values[i][1];
                max = this.values[i][1];
            }


            if (right+1 < this.values[i+1][0]) {
                cnt += this.values[i + 1][0] - right - 1;
            }
        }
        if (max < 4294967295)
            cnt += 4294967295 - max;
        return cnt;
    }

}

var intervals = new Intervals();

const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day20.txt')
});

rl.on('line', function(command){
    intervals.parse(command);
});



rl.on('close', function(){
   console.log(intervals.find());
    console.log(intervals.find2());
   console.log(intervals.values);
});

