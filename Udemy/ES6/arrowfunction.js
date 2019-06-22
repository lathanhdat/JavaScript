const years = [1966,1986,1975]

//ES5
var age5 = years.map(function(el){
  return 2016-el;
})

//ES6
let age6 = years.map((el)=>2016-el)

console.log(age5)
console.log(age6)

//Don't need to use return if we don't use {}
age6 = years.map((el,index)=>`Age element ${index} is ${2019-el}`)
console.log(age6)

//IF using {} we must have return keyword
age6 = years.map((el,index)=>{
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index} is ${age}.`
})
console.log(age6)

