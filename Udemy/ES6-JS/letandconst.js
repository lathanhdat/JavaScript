//var have function scope
function hello(enabled){
    if(enabled === true){
        var name = 'Dat'
    }
    console.log(name)
}

//let and const have block scope
function hello6(enabled){
    if(enabled === true){
        let name6 = 'Dat'
    }
    console.log(name6)
}

hello(true)
hello6(true)