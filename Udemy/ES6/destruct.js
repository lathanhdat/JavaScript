//ES5
var john = ['John',26]
var name5 = john[0]
var age5 = john[1]

//ES6
const john6 = ['John',26]
const [name6,year6] = john6;
console.log(name6,year6)

const obj = {
  firstName : 'John',
  lastName: 'Snow'
}

const {firstName,lastName} = obj
console.log(firstName,lastName)

const {firstName: a,lastName :b} = obj
console.log(a,b)

calcAgeRetirement = (year)=>{
  const age = new Date().getFullYear() - year
  return [age,65-age]
}
const [age,retirement] = calcAgeRetirement(1995)
console.log(age,retirement)