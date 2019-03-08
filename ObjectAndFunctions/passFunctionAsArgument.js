var year = [1990,1965,1937,2005,1998];

console.log(year);
function arrayCalc(arr,fn)
{
    var arrRes = [];
    for (var i = 0; i < arr.length; i ++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calAge(el)
{
    return 2018 - el;
}

function isFullAge(el)
{
    return el >= 18;
}

var ages = arrayCalc(year,calAge);
var fullage = arrayCalc(ages,isFullAge);
console.log(ages);
console.log(fullage);