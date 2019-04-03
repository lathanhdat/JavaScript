// const http = require('http');
// let rawData = '';
// http.get(process.argv[2],(res)=>{
//     res.on('data',(chunk)=> rawData += chunk)
//     res.on('end',()=>{
//         console.log(rawData.length)
//         console.log(rawData)
//     })
// })

const http = require('http');
const bl = require('bl')

http.get(process.argv[2],(res)=>{
    res.pipe(bl(function(err,data){
        console.log(data.toString().length)
        console.log(data.toString())
    }))
})