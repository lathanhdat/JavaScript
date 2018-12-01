var name1 = 'John';
var isMerried = false;

if (isMerried)
{
    console.log(name1 + ' is married.');
}
else
{
    console.log(name1 + ' isn\'t married.')
}

if(name1 == 'John')
{
    console.log('I am ' + name1);
}

// && And Operator : True if ALL true
// || Or Operator: True if ONE is true
/*
    falsy value : undefined, null, 0, ' ', NaN; -> Se dua condition vao` else statement
    truthy value : NOT falsy value.
    == : type don't have to match. JS will convert '23' to 23(number) then compare.
    === : type need to match.
*/