let obj = (function(){
    let _prop1 = 'Starman';   //_prop1 is private variable_
    return {                  // return will make prop2 as public variable and setter, getter of prop1 as public method
        prop2 : 1981,
        get prop1(){
            return _prop1;
        },
        set prop1(_val){
            _prop1 = _val;
        }
    }
})();

for(let prop in obj){
    console.log(prop);
}

console.log(obj.prop1);
console.log(obj.prop2);
obj.prop1 = 'The big one';
console.log(obj.prop1);
console.log(obj._prop1);