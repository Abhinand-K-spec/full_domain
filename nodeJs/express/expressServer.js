const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('hi');
})

app.get('/hi',(req,res)=>{
    console.log('hi routrr');
    
    res.send('router reached');
})

app.get('/users/:id',(req,res)=>{
    console.log('route reached');
    res.send(`id is ${req.params.id}`);
});


app.get('/id',(req,res)=>{
    console.log('query',req.query.page);
    
    const page = req.query.page;
    res.send(`page:${page}`)
})


app.listen(3010,()=>{
    console.log('server is running');
    
});