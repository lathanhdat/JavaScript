var fs = require('fs');
var line = 0 ;
var readfile = fs.readFileSync(process.argv[2]);
var linebuf = readfile.toString();
var splitbuf = linebuf.split("\n");

for(var i in splitbuf )
{
    line += 1;
}
line -= 1;

console.log(line);


// var fs = require('fs')
    
//     var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
