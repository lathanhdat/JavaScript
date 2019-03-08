//Primitive and Object

//Primitive
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


//Object
var obj1 = 
{
    name : 'John',
    age : 26
};

//Obj2 wasn't newly created we just create new reference
var obj2 = obj1;
obj1.age =30;
console.log(obj1.age);
console.log(obj2.age);


//Functions
var age = 27;
var obj =
{
    name : 'Jonas',
    city : 'Lisbon'
};

// Primitive still not change after function
// We just past reference of object to function(not object) but it still changed
function change(a,b)
{
    a = 30;
    b.city = 'San Francisco';
}

change(age,obj);
console.log(age);
console.log(obj.city);
