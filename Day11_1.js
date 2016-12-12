/**
 * Created by alex_kart on 11.12.2016.
 */
'use strict';
var floors =[
    ['S', 'P', 'SG', 'PG'],
    ['TG', 'RG', 'CG', 'R', 'C'],
    ['T'],
    []
];


function check_floor(floor){
    if (floor.some((item) => (item.length == 2)))
    {
        for (var i=0; i<floor.length; ++i)
          if (floor[i].length == 1 && floor.indexOf(floor[i]+'G') < 0)
            return false;
    }
    return true;
}

function join(floor, elevator){
    elevator.forEach((item) => floor.push(item));
}

function check_floors(floors)
{
    return floors.every((floor) => (check_floor(floor)));
}

function is_done(floors)
{
    if (floors[3].length ==10)
          return true;
    return false;
}

function deep_slice(floors)
{
    var res = [];
    for (var i=0; i<floors.length; ++i)
    {
        res.push(floors[i].slice());
    }
    return res;
}

function range_floors(floors)
{
    var range_tbl = [];
    for (var i=0; i<floors.length; ++i)
    {
        for (var j=0; j<floors[i].length; ++j)
        {
            if (floors[i][j].length == 1 && range_tbl.indexOf(floors[i][j]) == -1)
               range_tbl.push(floors[i][j]);
        }
    }
    for (var i=0; i<floors.length; ++i)
    {
        for (var j=0; j<floors[i].length; ++j)
        {
            var idx =  range_tbl.indexOf(floors[i][j][0]).toString();
            if (floors[i][j].length >1)
               floors[i][j] = idx  + floors[i][j][1];
            else
                floors[i][j] = idx;

        }
    }

}



function is_loop(passed_points,  floors)
{
    return passed_points.some(
        function (item)
        {
            for (var i=0; i<3; ++i)
            {
                if (floors[i].sort().join() != item[i].sort().join())
                    return false;
            }
            return true;
        }
    )
}

function num_empty_floors(floors)
{
    var res = 0;
    for (var i=0; i<floors.length; ++i) {
        if (floors[i].length > 0)
           return res;
        else
          res++;
    }


}

function run_recurse(steps_cnt, floors, elevator, elevator_floor, passed_points){
    if (is_done(floors)) {
        console.log(floors);
        console.log(steps_cnt);
        return true;
    }



    join(floors[elevator_floor], elevator);
    if (!check_floors(floors))
         return false;

    range_floors(floors);

    if (is_loop(passed_points, floors)) {
       // console.log(floors);
        return false;
    }

    passed_points.push(floors);
     console.log(floors);
     console.log(steps_cnt);
     console.log(passed_points.length);
     console.log('-----------');
    steps_cnt++;

    for (var i=0; i<floors[elevator_floor].length; ++i){
        let elevator = [floors[elevator_floor][i]];
        let tmp_floors = deep_slice(floors);
        tmp_floors[elevator_floor].splice(i, 1);

        if (elevator_floor < 3)
            run_recurse(steps_cnt, deep_slice(tmp_floors), elevator, elevator_floor+1, JSON.parse(JSON.stringify(passed_points)));
        if (elevator_floor > 0 && num_empty_floors(floors)<elevator_floor)
            run_recurse(steps_cnt, deep_slice(tmp_floors), elevator, elevator_floor-1, JSON.parse(JSON.stringify(passed_points)));

        for (var j=i+1; j<floors[elevator_floor].length; ++j)
        {
            let new_elevator = [floors[elevator_floor][i], floors[elevator_floor][j]];
            if (check_floors([new_elevator]))
            {
                let tmp_floors = deep_slice(floors);
                tmp_floors[elevator_floor].splice(j, 1);
                tmp_floors[elevator_floor].splice(i, 1);
                if (elevator_floor < 3)
                    run_recurse(steps_cnt, deep_slice(tmp_floors), new_elevator, elevator_floor+1, JSON.parse(JSON.stringify(passed_points)));
                if (elevator_floor > 0  && num_empty_floors(floors)<elevator_floor)
                    run_recurse(steps_cnt, deep_slice(tmp_floors), new_elevator, elevator_floor-1, JSON.parse(JSON.stringify(passed_points)));

            }


        }
    }
}

var step_cnt = 0;
run_recurse(step_cnt, floors, [], 0, []);
//range_floors(floors);
//console.log(floors);