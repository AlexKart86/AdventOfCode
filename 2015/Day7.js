/**
 * Created by alex_kart on 25.12.2016.
 */
class Comp
{
    constructor()
    {
        this.regs = {};
        this.commands = [];
    }
    not(i)
    {
        var str = "0000000000000000" + i.toString(2);
        str = str.substr(-16, 16);
        str = str.split("");
        for (var i=0; i<str.length; ++i)
          str[i] = 1-(+str[i]);
        str = str.join("");
        return parseInt(str, 2);
    }

    get_arg(str)
    {
        if (str in this.regs)
          return this.regs[str];
        else
          return +str;
    }

    defined(str)
    {
        return (str in this.regs) || isFinite(str);
    }


    execute(str)
    {
        var comm = str.split(" ");
        if (comm[1] == 'AND' && this.defined(comm[0]) && this.defined(comm[2]))
            this.regs[comm[4]] = this.get_arg(comm[0]) & this.get_arg(comm[2]);
        if (comm[1] == 'OR' && this.defined(comm[0]) && this.defined(comm[2]))
            this.regs[comm[4]] = this.get_arg(comm[0]) | this.get_arg(comm[2]);
        else if (comm[0] == 'NOT' && this.defined(comm[1]))
            this.regs[comm[3]] = this.not(this.get_arg(comm[1]));
        else if (comm[1] == '->' && this.defined(comm[0]))
            this.regs[comm[2]] = this.get_arg(comm[0]);
        else if (comm[1] == 'LSHIFT' && this.defined(comm[0]) && this.defined(comm[2]))
            this.regs[comm[4]] = this.get_arg(comm[0]) << this.get_arg(comm[2]);
        else if (comm[1] == 'RSHIFT' && this.defined(comm[0]) && this.defined(comm[2]))
            this.regs[comm[4]] = this.get_arg(comm[0]) >>> this.get_arg(comm[2]);

    }

    run()
    {
        this.commands.forEach((item)=>(this.execute(item)), this);

    }

    parse(str)
    {
        this.commands.push(str);
    }
}


var dist = new Comp();


const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day7.txt')
});

rl.on('line', function(command){
    dist.parse(command);
});

rl.on('close', function(){
    //for 2 task
    dist.regs["b"] = 46065;
    while (!dist.defined("a"))
      dist.run();

   console.log(dist.regs);
});
