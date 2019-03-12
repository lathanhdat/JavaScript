// var fs = require('fs');
// var path = process.argv[2];
// var extention = process.argv[3];
// console.log(path);
// console.log(extention);

// fs.readdir(path.toString(),(err,list)=>{
//     console.log(list);
//     for (var i = 0 ; i < list.length; i ++)
//     {
//         if(list[i].)
//         console.log(file.toString());
//     }
// });

require('fs').readdir(
    process.argv[2], (err, list) => {
      if (err) return console.err(err);
      list
        .filter(file => require('path').extname(file) === '.' + process.argv[3])
        .forEach(filterdFile => console.log(filterdFile))
    }
  );

// (file)=>{
//     return require('path').extname(file) === '.' + process.argv[3];
// };
