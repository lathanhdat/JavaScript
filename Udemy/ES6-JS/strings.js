let firstName = 'Dat'
let lastName = 'La'
//ES5
console.log('This is ' +firstName +'.' +lastName)

//ES6
console.log(`This is ${firstName}.${lastName}`)
const name=firstName+lastName
console.log(name.startsWith('D'))
console.log(name.endsWith('La'))
console.log(name.includes('a'))
console.log(firstName.repeat(3))
console.log(`${firstName} `.repeat(3))