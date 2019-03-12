//Constructor
var john =
{
    name:'John',
    year: 1996,
    job:'teacher'
};

//Function Constructor
//This point to global object
var Person = function(name,year,job)
{
    this.name = name;
    this.year = year;
    this.job = job;
    this.calculateAge=function()
        {
            console.log(2018-this.year);
        }
}

//Add Prototype to Person
Person.prototype.tellName = function()
{
    console.log(this.name);
}


//With new -> above 'this' will point to peter
//This is simple for inheritant
var peter = new Person('Peter',1993,'designer');
peter.calculateAge();
peter.tellName();

var bank = new Person('Bank',1990,'jobless');
bank.calculateAge();
bank.tellName();