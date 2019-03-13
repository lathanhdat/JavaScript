const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('./example2.txt');
readStream.on('data',(chunk)=>{   //We able to write chunk by chunk by for file fully loaded -> power of stream
    writeStream.write(chunk,(err)=>{
        if(err)    console.log(err);
    });
});