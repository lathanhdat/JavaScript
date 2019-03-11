function game()
{
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// First () to make JS know that this is not a function declaration. 
// Next () to invoke the function.
(function ()
{
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (name)
{
    var score = Math.random() * 10;
    console.log(name + ' win?');
    console.log(score >= 5);
})('John');