//ES5
var x = 1; //Global scoped
function add1(y)
{
    var x =2 ; //function scoped
    return y +x ;
}
function add2(y)
{
    return y + x;
}
console.log(add1(3));
console.log(add2(3));
//Hoisting:
console.log(z); //undefined
var z = 1; 
console.log(z);


//ES6
let x = 1;
let x = 3; => //We can't redeclare varialbe

//Scope
let x =1;
function add1(y)
{
    return y +x ;  //Can be access inside function just like var
}
console.log(add1(3));
function add1(y)
{
    let x = 2;
    return y +x ;  //Just like var
}
console.log(add1(3));

//Hoisting
console.log(nothoisted);
//Temporal dead zone
let nothoisted; => //Can't hoisting