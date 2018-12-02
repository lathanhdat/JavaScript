//Function declaration
//function name_of_function (Argument)
function calAge(birthYear, now)
{
    return now - birthYear;
} 

var ageJohn ;
ageJohn = calAge(1995,2018);
console.log(ageJohn);

function yearUntilRetirement(birthYear, firstName)
{
    var age = calAge(birthYear,2018);
    var retirement = 65 - age;
    if (retirement <= 0)
    {
        console.log('Retirement now! You must retire ' + (-retirement) + ' years ago.');
    }
    else
    {
        console.log(firstName + ' still have ' + retirement + ' to work.');
    }
}
yearUntilRetirement(1880,'Dat');

//Function expression (expression return value).
var whatDoyoudo = function (job,firstName)
{
    switch(job)
    {
        case 'teacher':
            //return will return value and also quit swtich case.
            return firstName + ' is a teacher.';
        case 'driver':
            return firstName + ' is a driver.';
        default:
            return firstName + ' is jobless';
    }
}
console.log(whatDoyoudo('teacher','John'));
