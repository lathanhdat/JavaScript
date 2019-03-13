let greet = function(){
    console.log('Hi');
}
greet();

{
    let greet = function(){
        console.log('Hello');
    }
}
greet(); //Because we declare function with let, that make function just availbe in scope of block