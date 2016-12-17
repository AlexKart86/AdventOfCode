/**
 * Created by alex_kart on 17.12.2016.
 */
const crypto = require('crypto');
var input = "ioramepc";

var min_path = "";

function check_char(ch)
{
    return (ch=="b" || ch == "c" || ch=="d" || ch=="e" || ch=="f");

}

function lookup(current_path, pos_x, pos_y)
{
    var hash = crypto.createHash('md5').update(current_path).digest("hex");
    hash = hash.substr(0, 4);
    if (pos_x == 3 && pos_y == 3)
    {
        if (min_path.length == 0 || min_path.length < current_path.length)
            min_path = current_path;
        //console.log(min_path);
        return;
    }

    //if (min_path.length > 0 && current_path.length > min_path.length)
    //    return;

    //down
    if (pos_y<3 && check_char(hash[1]))
        lookup(current_path+"D", pos_x, pos_y+1);
    //right
    if (pos_x<3 && check_char(hash[3]))
        lookup(current_path+"R", pos_x+1, pos_y);
    //left
    if (pos_x>0&& check_char(hash[2]))
        lookup(current_path+"L", pos_x-1, pos_y);
    //up
    if (pos_y>0&& check_char(hash[0]))
        lookup(current_path+"U", pos_x, pos_y-1);
}

lookup(input, 0,0);
console.log(min_path);