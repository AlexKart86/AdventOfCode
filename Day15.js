/**
 * Created by alex_kart on 15.12.2016.
 */

class Disks
{
    constructor()
    {
        this.init();
    }

    init()
    {
        this.disks = [[5, 2], [13, 7],
            [17, 10],  [3, 2],   [19, 9], [7, 0], [11, 0]];
       // this.disks = [[5, 4], [2, 1]];
    }

    turn()
    {
        this.disks.forEach(function(item)
        {
            item[1] = (item[1]+1)%item[0];
        })
    }

    check()
    {
       return this.disks.every(function(item, idx){
            return ((item[1]+idx+1)%item[0])==0;
        })
    }
}

var disk = new Disks();

disk.turn();

var wait_time = 1;

while (1)
{
    if (disk.check())
        break;
    disk.turn();
    wait_time ++;
}
console.log(wait_time);