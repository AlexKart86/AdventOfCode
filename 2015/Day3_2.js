'use strict';
const fs = require('fs');


var str = fs.readFileSync('./Day3.txt', 'utf-8');

class HomesCounter
{
    constructor()
    {
        this.visited_points = [[0, 0]];
        this.santa_position = [0, 0];
        this.robot_position = [0, 0];
        this.cur_position = this.santa_position;
    }
    move(direction){
        switch(direction){
            case '>': this.cur_position[1]++;
                break;
            case '<': this.cur_position[1]--;
                break;
            case '^': this.cur_position[0]--;
                break;
            case 'v': this.cur_position[0]++;
                break;
        }
        if (!this.visited_points.some((item) => (item[0] == this.cur_position[0] && item[1] == this.cur_position[1])))
        this.visited_points.push(this.cur_position.slice());
        if (this.cur_position == this.santa_position)
            this.cur_position = this.robot_position;
        else
            this.cur_position = this.santa_position;
    }
    calcVisitedHomes(){
        return this.visited_points.length;
    }
}

var homecounter = new HomesCounter();

for (var i=0; i<str.length; ++i)
{
    homecounter.move(str[i]);
}

console.log(homecounter.calcVisitedHomes());