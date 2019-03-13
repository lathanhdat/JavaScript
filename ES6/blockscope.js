let y =2;
{
    let x = 1; //Just have scope in this block => var not a block scope
    console.log(x);
}
{
    console.log(x); //=> x not defined
    let x =2; //=> redefine will not a problem
}


let number = 50;
let pass;
if(number > 30)
{
    pass = true;
}
else
{
    pass = false;
}