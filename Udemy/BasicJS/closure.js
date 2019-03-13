var addto = function(passed){
    var add = function (inner){
        return inner + passed;
    };
    return add;
};

//With closure, addThree will take 3 as a property and reserved it to use later.
//"Closures are nothing but FUNCTIONS WITH PRESERVED DATA"
var addThree = new addto(3);
var addFour = new addto(4);

console.log(addThree(1));
console.log(addFour(1));

