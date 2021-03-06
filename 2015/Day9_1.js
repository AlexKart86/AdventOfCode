/**
 * Created by alex_kart on 07.12.2016.
 */
'use strict';

class Distanse{
    constructor() {
       this.distance = [];
       this.points = [];
       this.max_dist = 10000;
    }
    parse_command(command){
      var commands = command.split(' ');
      this.distance.push(
          {
              from: commands[0],
              to: commands[2],
              distance: parseInt(commands[4])
          }
      );
       if (this.points.indexOf(commands[0]) == -1)
          this.points.push(commands[0]);
       if (this.points.indexOf(commands[2]) == -1)
          this.points.push(commands[2]);

    }
    _calc_distance(dist, passed_points, cur_point)
    {
        if (passed_points.length == this.points.length ) {
            if (this.max_dist > dist) {
                this.max_dist = dist;
                console.log(passed_points);
                console.log(dist);
            }

            return;
        }
        this.distance.forEach(function(item){
          if (item.from == cur_point &&
              passed_points.indexOf(item.to) == -1)
          {
              let new_points =  passed_points.slice();
              new_points.push(item.to);
              this._calc_distance(dist + item.distance, new_points, item.to);
          }
            if (item.to == cur_point &&
                passed_points.indexOf(item.from) == -1)
            {
                let new_points =  passed_points.slice();
                new_points.push(item.from);
                this._calc_distance(dist + item.distance, new_points, item.from);
            }

      }, this);
    }

    calc_distance(){

       this.points.forEach( function(item){

           this._calc_distance(0, [item], item);
       }, this);

       //return this.routes.reduce((prev, cur) => (Math.min(prev, cur)) );
        return this.max_dist;
    }
}


var dist = new Distanse();

const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day9.txt')
});

rl.on('line', function(command){
    dist.parse_command(command);
});

rl.on('close', function(){
    console.log(dist.calc_distance());
    //console.log(dist.points);
});