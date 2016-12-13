/**
 * Created by alex_kart on 13.12.2016.
 */


var input = 1352;

var maze = [];

for (var j=0; j<52; ++j)
{
    process.stdout.write('\n');
    var row = [];
    for (var i=0; i<52; ++i)
    {
        var dig = i*i+3*i+2*i*j+j+j*j+input;
        var str = dig.toString(2);
        var cnt = 0;
        for (var k=0; k<str.length; ++k)
            cnt += +str[k];
        if (cnt%2 == 1) {
            process.stdout.write('# ');
            row.push(0);
        }
        else {
            process.stdout.write('. ');
            row.push(1);
        }
    }
    maze.push(row);
}

var passed_points = [[1, 1]];

function check_passed_points(cur_x, cur_y)
{
    return !passed_points.some((item) => (item[0] == cur_x && item[1] == cur_y))
}

function print_results()
{
    for (var j=0; j<52; ++j)
    {
        process.stdout.write('\n');
        for (var i=0; i<52; ++i)
        {
            if (maze[j][i])
            {
                if (!check_passed_points(j, i))
                    process.stdout.write('0 ');
                else
                    process.stdout.write('. ');
            }
            else
                process.stdout.write('# ');

        }
    }
}

function recurse(points_count, cur_x, cur_y, prev_x, prev_y)
{

    if (check_passed_points(cur_x, cur_y))
    {
        passed_points.push([cur_x, cur_y]);
        console.log(passed_points.length);
        // if (passed_points.length >= 132)
        // {
        //     print_results();
        // }
    }

    if (points_count == 50)
        return;


    if (maze[cur_x+1][cur_y] && !(prev_x == cur_x+1 && prev_y == cur_y) /*&& check_passed_points(cur_x+1, cur_y)*/)
        recurse(points_count+1, cur_x+1, cur_y, cur_x, cur_y);
    if (maze[cur_x][cur_y+1] && !(prev_x == cur_x && prev_y == cur_y+1) /*&& check_passed_points(cur_x, cur_y+1)*/)
        recurse(points_count+1, cur_x, cur_y+1, cur_x, cur_y);
    if (cur_x>0 && maze[cur_x-1][cur_y] && !(prev_x == cur_x-1 && prev_y == cur_y) /*&& check_passed_points(cur_x-1, cur_y)*/)
        recurse(points_count+1, cur_x-1, cur_y, cur_x, cur_y);
    if (cur_y>0 && maze[cur_x][cur_y-1] && !(prev_x == cur_x && prev_y == cur_y-1)/*&& check_passed_points(cur_x, cur_y-1)*/)
        recurse(points_count+1, cur_x, cur_y-1);
}

recurse(0, 1, 1, 1, 1);
console.log(passed_points.length);
print_results();
