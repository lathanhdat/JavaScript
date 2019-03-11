var john =
{
    name : 'John',
    age : 26,
    job : 'teacher',
    present : function (stype,time)
    {
        if ( stype === 'formal')
        {
            console.log('Good ' + time + ' lady and gentlemen. I\'m ' + this.name + '.');
        }
        else if (stype === 'friendly')
        {
            console.log('abc');
        }
    }
}

john.present('formal','morning');

var jane = 
{
    name : 'Jane',
    age : 32,
    job : 'designer'
}

//Call method
john.present.call(jane,'formal','morning');

//Apply method
//john.present not expected to receive array as argument. This won't work but save for later
//john.present.apply(jane,['formal','afternoon']);

//Bind method : Copy function and preset an argument of it
var johnformal = john.present.bind(john,'formal');
johnformal('night');
