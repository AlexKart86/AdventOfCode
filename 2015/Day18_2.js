/**
 * Created by alex_kart on 22.12.2016.
 */

class Lights
{
    constructor()
    {
        this.fields = [];
    }
    push(str)
    {
        var row = [];
        for (var i=0; i<str.length; ++i)
            row.push(str[i] == '#' ? 1 : 0);
        this.fields.push(row);

    }
    turn()
    {
        var tmp = [];
        this.fields.forEach((item) => (tmp.push(item.slice())));
        for (var i=0; i<tmp.length; ++i)
        {
            for (var j=0; j<tmp[i].length; ++j)
            {
                var num_on = 0;
                if (i>0 && j>0 && tmp[i-1][j-1])
                    num_on++;
                if (i>0 && tmp[i-1][j])
                    num_on++;
                if (i>0 && j<tmp[i].length-1 && tmp[i-1][j+1])
                    num_on++;
                if (j>0 && tmp[i][j-1])
                    num_on++;
                if (j<tmp[i].length-1 && tmp[i][j+1])
                    num_on++;
                if (j>0 && i<tmp.length-1 && tmp[i+1][j-1])
                    num_on++;
                if (i<tmp.length-1 && tmp[i+1][j])
                    num_on++;
                if (i<tmp.length-1 && j<tmp[i].length && tmp[i+1][j+1])
                    num_on++;
                if (tmp[i][j])
                {
                    if (num_on == 2 || num_on == 3)
                        this.fields[i][j] = 1;
                    else
                        this.fields[i][j] = 0;
                }
                else
                {
                    if (num_on == 3)
                        this.fields[i][j] = 1;
                    else
                        this.fields[i][j]=0;
                }
            }
        }
        this.fields[0][0]=1;
        this.fields[0][this.fields.length-1]=1;
        this.fields[this.fields.length-1][0]=1;
        this.fields[this.fields.length-1][this.fields.length-1]=1;

    }
    print()
    {
        this.fields.forEach(function(item){
            process.stdout.write('\n');
            item.forEach((val) => (process.stdout.write(val ? '#' : '.') ));
        });
    }
    calc()
    {
        var res = 0;
        this.fields.forEach(function(item){
            item.forEach((v)=>(res+=v));
        });
        return res;
    }
}

var lights = new Lights();
const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day18.txt')
});

rl.on('line', function(str){
    lights.push(str);
});

rl.on('close', function(){
    lights.fields[0][0]=1;
    lights.fields[0][lights.fields.length-1]=1;
    lights.fields[lights.fields.length-1][0]=1;
    lights.fields[lights.fields.length-1][lights.fields.length-1]=1;
    for (var i=0; i<100; ++i)
        lights.turn();
    lights.print();
    console.log(lights.calc());
});

