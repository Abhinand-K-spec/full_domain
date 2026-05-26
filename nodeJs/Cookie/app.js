const express = require('express');
const cookieParser = require('cookie-parser')
const app = express()



app.use(cookieParser());

app.get('/login',(req,res)=>{
    res.cookie('token','abc123',{
        maxAge:60*1000,
        httpOnly:true
    })
    res.send('cookie created');



    //====jwt=====

    const token = jwt.sign({username:'abhi'},'mysecret',{expiresIn:'1h'})
});

app.get('/profile',(req,res)=>{
    console.log(req.cookies);
    
    res.send('cookie read')
})


app.listen(3000,()=>console.log('server is running'))