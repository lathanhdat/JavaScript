const express = require('express');
const path = require('path');
const app = express();


app.use('/'); //using middleware

app.get('/',(req,res)=>{
    res.send('Hello');
});

app.get('/example',(req,res)=>{
    res.send('Example route');
});

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + ':' + req.params.age);
});
app.listen(3000);