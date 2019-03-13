var fs = require('fs');
module.exports = (path,extent,callback) =>{
    fs.readdir(path,(err,files)=>{
        if(err){
            callback(err,null);
        }
        else{
            callback(null,files.filter(file => require('path').extname(file) === '.' + extent));
        }
    })
};
