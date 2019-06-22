var names = ['John', 'Mark', 'James']; //Regular
var years = new Array(1995,1996,1993); //Not regular

console.log(names[0]);

names[5] = 'Marry';

console.log(names);
console.log(names[0],names[1],names[2]);
console.log(names.length);


var john = ['John','Smith',1995,'teacher',false];
console.log(john);

//Add element to arrays.
john.push('blue'); //To end of arrays.
console.log(john);
john.unshift('Mr .'); //To begining of arrays.
console.log(john);


//Remove element from arrays.
john.pop(); //From end of arrays.
console.log(john);
john.shift(); //From begining of arrays.
console.log(john);

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
john.push('designer'); //Added but still not a designer ? still dont' know why.
console.log(john.indexOf('designer'));
console.log(isDesigner);
