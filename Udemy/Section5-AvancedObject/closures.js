function retirement(retirementAge){
  var a = ' Years left.'
  return function(yearofBirth){
    var age = 2016 - yearofBirth;
    console.log(retirementAge - age + a); //We use variable a and retirementAge even after function excuted.
  }                                       //This is closure.
}

var retireChina = retirement(60);
retireChina(1995);

/*    An inner function has always access to the variable and parameters of its
*     outer function, even after the outer funciton has returned 

*     Even after the function returned, the execution content of retirement has gone,
*     the variable still exist , scope chain always stay on stack  */

function interviewQuestion(job)
{
  return function(name){
    if (job === 'designer'){
      console.log(name + ', pls explain what UX design is?');
    }
    else if (job === 'teacher'){
      console.log(name + ', what subject do you teach?');
    }
    else{
      console.log('Hello ' + name + ' what do you do?');
    }
  }
}
