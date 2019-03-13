//Declaration of object
var john =
{
    firtName : 'John',
    lastName : 'Smith',
    job : 'teacher',
    birthYear : 1995,
    family : ['Jane', 'Mark', 'Bob', 'Emily'],
    isMarried : false
};

console.log(john);
console.log(john.firtName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
console.log(john['job']);

//Another declaration
var jane = new Object();
jane.firtName = 'Jane';
jane.birthYear = 1990;
jane['lastName'] = 'Smith';
console.log(jane);

//Object with function:
var dat =
{
    firtName: 'Dat',
    lastName: 'La',
    birthYear: 1995,
    job : 'Driver',
    calcAge: function(birthYear)
    {
        return 2018 - this.birthYear;  // this.age = 2018 - this.birthYear;
    }
};
dat.age = dat.calcAge();
console.log(dat.age);