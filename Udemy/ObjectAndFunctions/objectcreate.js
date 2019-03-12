//More ways to create objects
var personProto = 
{
    calAge : function ()
    {
        console.log(2018-this.year);    
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.year = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: {value : 'Jane'},
        year:{value : 1993},
        job:{value : 'designer'}
    });