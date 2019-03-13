var module = require('./ex6-module.js');

module(process.argv[2],process.argv[3],(err,files)=>{
    if(err) console.log(err);
    else    (files.forEach(file => console.log(file)));
})