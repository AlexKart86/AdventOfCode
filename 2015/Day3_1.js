/**
 * Created by alex_kart on 05.12.2016.
 */
'use strict';
const fs = require('fs');


var str = fs.readFileSync('./Day3.txt', 'utf-8');

class HomesCounter
{
    constructor()
    {
        this.visited_points = [[0, 0]];
        this.current_pos = [0, 0];
    }
    move(direction){
        switch(direction){
            case '>': this.current_pos[1]++;
                 break;
            case '<': this.current_pos[1]--;
                 break;
            case '^': this.current_pos[0]--;
                break;
            case 'v': this.current_pos[0]++;
                break;
        }
        if (!this.visited_points.some((item) => (item[0] == this.current_pos[0] && item[1] == this.current_pos[1])))
          this.visited_points.push(this.current_pos.slice());
    }
}

var homecounter = new HomesCounter();

for (var i=0; i<str.length; ++i)
{
    homecounter.move(str[i]);
}

console.log(homecounter.visited_points.length);