function retirement(retirementAge)
{
    var a = ' year left until retirement.';
    //Inner function
    return function(yearB)
    {
        var age = 2018 - yearB;
        console.log((retirementAge - age) + a);
    }
}
//Magic is here. 60 and a still exist 
var retirementFunction = retirement(60);
//After above call 60 and 'a' still exist
retirementFunction(1995);

//inner function có thể access được outer function variable.
//inner function có thể inherit biến của outer function, hay nói cách khác,
//inner function chứa(contain) scope của outer function. 
//Chính nhờ điều đặc biệt này mà chúng ta có cái gọi là Closure
//với nhiều ngôn ngữ thì các bạn hay được khuyên là declare biến muộn nhất có thể để tránh overhead,
//tuy nhiên với javascript là ngôn ngữ với function scope thì best practice lại là declare biến sớm nhất có thể để tránh nguy cơ xảy ra một số lỗi không mong muốn

//retirementFunction created with a closure, inside that
//retirementAge = 60 is passed and remain even retirementFunction is executed.
retirement(66)(1995);


