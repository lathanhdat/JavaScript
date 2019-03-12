const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(number1,number2)=>{
    console.log('tutorial envet has occured');
    console.log(number1 + number2);
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name)
    {
        super(); //Take properties of EventEmitter
        this._name = name; 
    }
    get name()
    {
        return this._name;
    }
}

let pedro = new Person("Pedro");
let christina = new Person("Christina");
christina.on('name',()=>{
    console.log('my name is ' + christina.name);
});
pedro.on('name',()=>{
    console.log('my name is ' + pedro.name);
});

pedro.emit('name');
christina.emit('name'); //Event occured synchronously