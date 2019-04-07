var john = {
  name : 'John',
  age : 26,
  job: 'teacher',
  presentation : function(style,timeOfDay){
    if(style === 'formal') console.log(`Good ${timeOfDay} lady and gentleman! I\'m ${this.name}.`);
    else if(style === 'friendly') console.log(`Hey! I\'m ${this.name}. Have a nice ${timeOfDay}.`);
  }
}
john.presentation('formal','morning');

var emily = {
  name : 'Emily',
  age : 34,
  job : 'designer'
};
john.presentation.call(emily,'formal','morning'); //Method borrowing
john.presentation.apply(emily,['friendly','afternoon']) // This will not work because fuction don't accept array

//Copy function with chosed argument to make a new function
var johnFriendly = john.presentation.bind(john,'friendly');
johnFriendly('noon');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');