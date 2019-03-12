/*
    LOOPS AND ITERATION
*/

for (var i = 0; i < 5; i++)
{
    console.log(i);
}

for (var i = 0; i < 5; i += 2)
{
    console.log(i);
}

for (var i = 0; i < 5; i++)
{
    if(i%2 == 0)
    {
        continue;
    }
    console.log(i);
}

var j = 0;
while (j < 5)
{
    console.log(j);
    j++;
} 

