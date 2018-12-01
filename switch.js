var firstName = 'John';
var age = 16;
// Condition ? true statement : false statement.
age >= 18 ? console.log(firstName + ' is able to drink beer.') 
            : console.log(firstName + ' is not enough old.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);



//Switch statement:
var job = 'teacher';
switch(job)
{
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' is a teacher.');
        break;
    case 'driver':
        console.log(firstName + ' is a driver.');
        break;
    default:
        console.log(firstName + ' is jobless.');
        break;
}

//Switch statement2:
switch(true)
{
    case age <13:
        console.log('age < 13');
        break;
    case age >= 13 && age <= 30:
        console.log('Adult');
        break;
    case age >30:
        console.log('Old man.');
        break;
    default:
        console.log ('Death');s
}