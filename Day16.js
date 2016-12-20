/**
 * Created by alex_kart on 16.12.2016.
 */

function inverse(str)
{
    let res = "";

    let rev = str.split('').reverse().join('');

    //console.log(rev);

    for (let char of rev)
    {
        if (char == '0')
            res += '1';
        else
            res += '0'
    }
    return res;
}

function calc_checksum(len, initial)
{
    let str = initial;
    while (str.length < len)
    {
        str = str +  '0' +  inverse(str);
        //console.log(str);
    }

    str = str.substr(0, len);

    //console.log(str);

    while (str.length % 2 == 0) {
        var tmp = "";
        var i = 0;
        while (i < str.length)
        {
            if (str[i] == str[i+1])
                tmp += "1";
            else
                tmp += "0";
            i += 2;
        }
        str = tmp;
    }

    //console.log(str);

    return str;

}

//console.log(inverse("10000"));

console.log(calc_checksum(272, "00111101111101000"));

console.log(calc_checksum(35651584, "00111101111101000"));