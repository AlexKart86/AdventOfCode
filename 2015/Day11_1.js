/**
 * Created by alex_kart on 10.12.2016.
 */

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function inc_str(str){
    function inc_str(str, idx){
        if (str[idx] == 'z')
        {
            str = str.replaceAt(idx, 'a');
            if (!idx)
              return str;
            else
              return inc_str(str, idx-1);
        }
        else
        {
            //str[idx] = String.fromCharCode(str.charCodeAt(idx)+1);
            str = str.replaceAt(idx, String.fromCharCode(str.charCodeAt(idx)+1));
            return str;
        }
    }
    return inc_str(str, str.length-1);
}

function check_str(str){
    if (str.indexOf('i') > -1 ||
        str.indexOf('o') > -1 ||
        str.indexOf('l') > -1)
       return false;
    var [t2, t3] = [0, false];
    for (var i=0; i<str.length-1; ++i)
    {
        if (str[i] == str[i+1]) {
            t2++;
            i++;
        }
    }
    for (var i=0; i<str.length-2; ++i)
    {
        if (str.charCodeAt(i) == str.charCodeAt(i+1)-1 &&
            str.charCodeAt(i) == str.charCodeAt(i+2)-2)
            t3 = true;
    }
    return (t2>=2) && t3;
}

var old_pass = 'hepxxyzz';

do
{
    old_pass = inc_str(old_pass);
    //console.log(old_pass)
}
while (!check_str(old_pass));

console.log(old_pass);

//console.log(check_str('ghjaabcc'));
