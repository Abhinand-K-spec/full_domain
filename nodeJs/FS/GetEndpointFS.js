const express = require('express');
const app = express();
const fs = require('fs')

app.get('/read-file',(req,res)=>{
    fs.readFile('sample.txt','utf-8',(err,data)=>{
        if(err){
            res.status(500)
        }
        res.send(data)
    })
})



app.listen(3000,()=>console.log('server is running'));