/**
 * Created by alex_kart on 16.12.2016.
 */

class Seats
{
    constructor()
    {
        this.seat_matrix = [];
        this.people_list = [];
    }

    parse(str)
    {
      var arr = str.split(' ');
        arr[10] = arr[10].substr(0, arr[10].length-1);
      if (!this.people_list.includes(arr[0]))
        this.people_list.push(arr[0]);
      if (!this.people_list.includes(arr[10]))
        this.people_list.push(arr[10]);
      var i = this.people_list.indexOf(arr[0]);
      var j = this.people_list.indexOf(arr[10]);
      var val = +arr[3];
      if (arr[2] == 'lose')
        val = -val;
      if (this.seat_matrix[i] == undefined)
        this.seat_matrix[i] = [];
      this.seat_matrix[i][j] = val;
    }

    add_myself()
    {
        if (!this.people_list.includes("Myself"))
        {
            var new_idx = this.people_list.push("Myself")-1;
            this.seat_matrix[new_idx] = [];
            for (var i=0; i<=new_idx; ++i)
            {
                this.seat_matrix[i][new_idx] = 0;
                this.seat_matrix[new_idx][i] = 0;
            }

        }
    }

    calc() {
        var found_solution = 0;
        var calc_recurse = function (passed_points) {
            if (passed_points.length == this.people_list.length) {
                var res = 0;
                for (var i = 0; i < passed_points.length; ++i) {
                    var n = this.people_list.indexOf(passed_points[i]);
                    if (i != passed_points.length - 1)
                        var m = this.people_list.indexOf(passed_points[i + 1]);
                    else
                        var m = this.people_list.indexOf(passed_points[0]);
                    res += this.seat_matrix[n][m] + this.seat_matrix[m][n];
                }
                if (res > found_solution)
                    found_solution = res;
            }
            else
                this.people_list.forEach(function (item) {
                    if (!passed_points.includes(item)) {
                        let tmp = passed_points.slice();
                        tmp.push(item);
                        calc_recurse.call(this, tmp);
                    }
                }, this);
        };
        calc_recurse.call(this, []);
        return found_solution;
    }

}

var seats = new Seats();

const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('./Day13.txt')
});

rl.on('line', function(command){
    seats.parse(command)
});

rl.on('close', function(){
    //console.log(display.count());
    console.log(seats.seat_matrix);
    console.log(seats.people_list);
    console.log(seats.calc());
    seats.add_myself();
    console.log(seats.seat_matrix);
    console.log(seats.people_list);
    console.log(seats.calc());

});