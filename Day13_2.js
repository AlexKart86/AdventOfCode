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

function is_exists(p_x, p_y, cur_x, cur_y)
{
    for (var i=0; i<p_x.length; ++i)
    {
        if (p_x[i] == cur_x && p_y[i] == cur_y)
            return true;
    }
    return false;

}


function recurse(points_count, cur_x, cur_y, passed_points_x, passed_points_y)
{

    if (check_passed_points(cur_x, cur_y))
        passed_points.push([cur_x, cur_y]);

    if (points_count == 50)
        return;

    if (maze[cur_x+1][cur_y] && !(is_exists(passed_points_x, passed_points_y, cur_x+1, cur_y))  )
    {
        let new_points_x = passed_points_x.slice();
        new_points_x.push(cur_x);
        let new_points_y = passed_points_y.slice();
        new_points_y.push(cur_y);

        recurse(points_count + 1, cur_x + 1, cur_y, new_points_x, new_points_y);
    }


    if (maze[cur_x][cur_y+1] && !(is_exists(passed_points_x, passed_points_y, cur_x, cur_y+1)) )
    {
        let new_points_x = passed_points_x.slice();
        new_points_x.push(cur_x);
        let new_points_y = passed_points_y.slice();
        new_points_y.push(cur_y);

        recurse(points_count+1, cur_x, cur_y+1, new_points_x, new_points_y);
    }


    if (cur_x>0 && maze[cur_x-1][cur_y] && !(is_exists(passed_points_x, passed_points_y, cur_x-1, cur_y)) )
    {
        let new_points_x = passed_points_x.slice();
        new_points_x.push(cur_x);
        let new_points_y = passed_points_y.slice();
        new_points_y.push(cur_y);
        recurse(points_count+1, cur_x-1, cur_y, new_points_x, new_points_y);
    }


    if (cur_y>0 && maze[cur_x][cur_y-1] && !(is_exists(passed_points_x, passed_points_y, cur_x, cur_y-1)) )
    {
        let new_points_x = passed_points_x.slice();
        new_points_x.push(cur_x);
        let new_points_y = passed_points_y.slice();
        new_points_y.push(cur_y);
        recurse(points_count+1, cur_x, cur_y-1, new_points_x, new_points_y) ;
    }

}

recurse(0, 1, 1, [1], [1]);
console.log('');
print_results();
console.log('');
console.log(passed_points.length);