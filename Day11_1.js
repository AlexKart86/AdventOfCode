/**
 * Created by alex_kart on 11.12.2016.
 */
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
    floor.concat(elevator);
}

function check_floors(floors)
{
    return floors.every((floor) => (check_floor(floor)));
}

function is_done(floors)
{
    for (var i=0; i<3; ++i)
    {
        if (floors[i].length)
          return false;
    }
    return true;
}


function run_recurse(steps_cnt, floors, elevator, elevator_floor){
    if (is_done(floors)) {
        console.log(steps_cnt);
        return true;
    }
    for (var i=0; i<4; ++i)
      if (!check_floor(i))
         return false;
    if (!check_floor_elevator(floors[elevator_floor], elevator))
        return false;
    join(floors[elevator_floor], elevator);
    var elevator = {generators: [], chips: []};
    for (var i=0; i<floors.generators.le )

}