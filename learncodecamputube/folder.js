const fs = require('fs');

//Make folder
// fs.mkdir('folder-maked',(err)=>{
//     if(err) console.log(err);
//     else    console.log("Folder Created.");
// });

//Delete empty folder
// fs.rmdir('folder-maked',(err)=>{
//     if(err) console.log(err);
//     else    console.log("Folder Deleted.");
// });

//Read directory
fs.readdir('example',(err,files)=>
{
    if(err) console.log(err);
    else
    {
        for(let file of files)
        {
            fs.unlink('./example/'+file,(err)=>{
                if (err) console.log(err);
                else
                {
                    console.log('Succed deleted file');
                }
            })
        }
    }
})


//Delete folder already contain file
fs.rmdir('folder-maked',(err)=>{
    if(err) console.log(err);
    else    console.log("Folder Deleted.");
});