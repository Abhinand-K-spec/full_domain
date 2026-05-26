const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

const limit = rateLimit({
    windowMs : 60*1000,
    max :5,
    message:'Too many requests...'
})

app.use(limit);

app.get('/user',(req,res)=>{
    res.send('hi from /user');
});

app.listen(3000)