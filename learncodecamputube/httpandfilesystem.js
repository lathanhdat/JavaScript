var fs = require('fs');
var http = require('http');

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type':'text-html'});
    readStream.pipe(res);
}).listen(3000);