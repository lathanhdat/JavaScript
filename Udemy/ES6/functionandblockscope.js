
greet();
function greet(){
    console.log('Hi');
}
greet();

{
    function greet(){
        console.log('Hello');
    }
    greet();
}
greet(); //Function called in global scope is able to look inside block. but function called inside a block 


{
    function greet(){
        console.log('Hello');
    }
    {
        function greet(){
            console.log('Hi Hello');
        }
    }
}
greet(); //Function called in global scope take value of function have biger scope 