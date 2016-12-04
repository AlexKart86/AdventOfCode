/**
 * Created by alex_kart on 02.12.2016.
 */
'use strict';

var instr = "L4, R2, R4, L5, L3, L1, R4, R5, R1, R3, L3, L2, L2, R5, R1, L1, L2, R2, R2, L5, R5, R5, L2, R1, R2, L2, L4, L1, R5, R2, R1, R1, L2, L3, R2, L5, L186, L5, L3, R3, L5, R4, R2, L5, R1, R4, L1, L3, R3, R1, L1, R4, R2, L1, L4, R5, L1, R50, L4, R3, R78, R4, R2, L4, R3, L4, R4, L1, R5, L4, R1, L2, R3, L2, R5, R5, L4, L1, L2, R185, L5, R2, R1, L3, R4, L5, R2, R4, L3, R4, L2, L5, R1, R2, L2, L1, L2, R2, L2, R1, L5, L3, L4, L3, L4, L2, L5, L5, R2, L3, L4, R4, R4, R5, L4, L2, R4, L5, R3, R1, L1, R3, L2, R2, R1, R5, L4, R5, L3, R2, R3, R1, R4, L4, R1, R3, L5, L1, L3, R2, R1, R4, L4, R3, L3, R3, R2, L3, L3, R4, L2, R4, L3, L4, R5, R1, L1, R5, R3, R1, R3, R4, L1, R4, R3, R1, L5, L5, L4, R4, R3, L2, R1, R5, L3, R4, R5, L4, L5, R2";

//var    instr = "R8, R4, R4, R8";
var in_arr = instr.split(", ");

class Direction
{
    constructor()
    {
        this.y = 1;
        this.x = 0;
    };
    left() {
        if (this.x == 0 && this.y == 1) {
            this.x = -1;
            this.y = 0;
        } else if (this.x == 0 && this.y == -1) {
            this.x = 1;
            this.y = 0;
        } else if (this.x == 1 && this.y == 0) {
            this.x = 0;
            this.y = 1;
        } else if (this.x == -1 && this.y == 0) {
            this.x = 0;
            this.y = -1;
        }
    };
    right()
    {
        if (this.x == 0 && this.y == 1) {
            this.x = 1;
            this.y = 0;
        } else if (this.x == 0 && this.y == -1) {
            this.x = -1;
            this.y = 0;
        } else if (this.x == 1 && this.y == 0) {
            this.x = 0;
            this.y = -1;
        } else if (this.x == -1 && this.y == 0) {
            this.x = 0;
            this.y = 1;
        }
    }
};

class Position
{
    constructor()
    {
        this.direction = new Direction();
        this.x =0;
        this.y = 0;
        this.passed_points = [{x: 0, y:0}];
        this.found_cross = null;
    }

    makeStep(len)
    {
        for (var i=0; i<len; ++i)
        {
            this.x += this.direction.x;
            this.y += this.direction.y;
            var is_passed_point_exists = (this.found_cross != null) || this.passed_points.some(function(item){
                return (item.x == this.x && item.y == this.y);
            }, this);
            this.passed_points.push({x: this.x, y: this.y});
            if (is_passed_point_exists && this.found_cross == null)
            {
                this.found_cross = {x: this.x, y: this.y};
            }
        }
        return is_passed_point_exists;
    }
    parseStep(str)
    {
        var dir = str.substr(0, 1);
        var len = parseInt(str.substr(1));
        switch (dir){
            case 'L':   this.direction.left();
                break;
            case 'R':   this.direction.right();
                break;
        }
        return this.makeStep(len);
       /* this.x += this.direction.x*len;
        this.y += this.direction.y*len;*/
    }
    calcLen()
    {
        return Math.abs(this.x)+Math.abs(this.y);
    }
    static calcLen(x,y)
    {
        return Math.abs(x)+Math.abs(y);
    }
}

var position = new Position();
for (var i=0; i<in_arr.length; ++i)
{
    if (position.parseStep(in_arr[i]))
    {
       //ff
        console.log(Position.calcLen(position.found_cross.x, position.found_cross.y));
    }
}
//console.log(position.calcLen());