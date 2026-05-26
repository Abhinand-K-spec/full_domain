
const express = require('express');
const app = express();
let useRouter = require('express')

app.use((req,res,next)=>{
    if(req.method==='POST'){
        return res.send('request is not allowed');
        
    }

    console.log(`method: ${req.method} , at time : ${new Date().toLocaleString()}`)
    next();

});

app.get('/',(req,res)=>{
    console.log(req.headers['user-agent']);
    res.send('done')
})

app.use('/user',)

app.listen('3000',()=>console.log('server is running'));