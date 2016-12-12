/**
 * Created by alex_kart on 12.12.2016.
 */
class Calc
{
    constructor()
    {
        this.registers = [0,0,0,0];
        this.sp = 0;
        this.commands = [];
    }
    add_command(str)
    {
        this.commands.push(str)
    }

    parse_arg(str)
    {
        switch (str)
        {
            case 'a': return this.registers[0];
            case 'b': return this.registers[1];
            case 'c': return this.registers[2];
            case 'd': return this.registers[3];
            default: return parseInt(str);
        }
    }

    get_reg_idx(ch)
    {

            switch (ch)
            {
                case 'a': return 0;
                case 'b': return 1;
                case 'c': return 2;
                case 'd': return 3;
                default: return -1;
            }
    }



    run()
    {
        this.sp = 0;
        this.registers[2] = 1;
        while (this.sp < this.commands.length)
        {
            var arr = this.commands[this.sp].split(' ');
            switch (arr[0])
            {
                case 'cpy':
                    var v1 = this.parse_arg(arr[1]);
                    this.registers[this.get_reg_idx(arr[2])] = v1;
                    this.sp++;
                    break;
                case 'inc':
                    this.registers[this.get_reg_idx(arr[1])]++;
                    this.sp++;
                    break;
                case 'dec':
                    this.registers[this.get_reg_idx(arr[1])]--;
                    this.sp++;
                    break;
                case 'jnz':
                    if (this.parse_arg(arr[1]) != 0)
                      this.sp += +arr[2];
                    else
                       this.sp++;
                    break;

            }
        }
    }
}


var calc = new Calc();


const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day12.txt')
});

rl.on('line', function(command){
    calc.add_command(command);
});

rl.on('close', function(){
  calc.run();
    console.log(calc.registers[0]);
});