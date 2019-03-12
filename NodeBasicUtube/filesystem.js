const fs = require('fs');
//Create a file
// fs.writeFile('example.txt',"Hello World!",(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("Succed");
//         fs.readFile('example.txt','utf8',(err,file)=>
//         {
//             if(err)
//             {
//                 console.log(err);
//             }
//             else
//             {
//                 console.log(file);
//             }
//         })
//     }
// })

//Rename file
// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log('Succed rename.');
//     }
// });

//Append file
// fs.appendFile('example2.txt','Some data \n',(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("Succed append file.");
//     }
// })

//Delete file
fs.unlink('example2.txt',(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Deleted file.");
    }
});