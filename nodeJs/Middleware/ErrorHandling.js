const express = require('express');
const app = express();


app.use((err,req,res,next)=>{
    res.status(500).json({
        success:false,
        message:'Error occured!',
        error:err.message
    })
    next();
})