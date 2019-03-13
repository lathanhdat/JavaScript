const sum = (number1,number2) => number1 + number2;
const PI = 3.14;
class createdObject
{
    constructor(name,phone) 
    {
        this.name = name;
        this.phone = phone;
        console.log('object created');
    }
}
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.createdObject = createdObject;
module.exports = {sum: sum, PI : PI, creatObject : createdObject};