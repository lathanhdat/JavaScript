const http = require('http');
const hostname = 'localhost';
const port = 4000;


const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.write('Hello from nodejs');
        res.end;
    }
    else
    {
        res.write('using some other url');
        res.end;
    }
});
server.listen(port,hostname,() =>
{
    console.log(`Server running at http://${hostname}:${port}`);
});
