//ES5

//with function(){this} "this" keyword will always point to global object

var box5 = {
  color: 'green',
  position : 1,
  clickMe : function(){
    /*To fix "this" keyword, make it point to box5*/
    var self = this; //Create self and change this to self
    /*Fixed "this" keyword*/
    document.querySelector('.green').addEventListener('click',function(){
      var str = 'This box number ' + this.position + ' and color ' + this.color
      alert(str)
    })
  }
}

box5.clickMe();

//ES6
const box6 = {
  color : 'orange',
  position : 3,
  clickMe : function(){
    document.querySelector('.orange').addEventListener('click',()=>{
      const str = `This box number ${this.position} and color ${this.color}`
      alert(str)
    })
  }
}
box6.clickMe();

// const box6 = {
//   color : 'orange',
//   position : 3,
//   clickMe : ()=>{ /*if we use ()=>{this} here "this" keyword will now share
//     lexical "this" keyword from it surrounding and surrounding of it now is
//     global content */
//     document.querySelector('.orange').addEventListener('click',()=>{
//       const str = `This box number ${this.position} and color ${this.color}`
//       alert(str)
//     })
//   }
// }
// box6.clickMe();


/*Another example*/
//ES5
function Person(name){
  this.name = name
}
Person.prototype.myFriend5 = function(friends){
  var arr = friends.map(function(el){
    return this.name + ' is friend with ' + el
  }.bind(this))
  /*"this" keyword here is Person we create a copy of it and bind to function
  because "this" in function block is pointing to gobal*/
  /*Syntax : function(){}.bind()*/
  console.log(arr)
}
var friends = ['Bob','Jane','Jasmine']

var John = new Person('John')
John.myFriend5(friends)

//ES6