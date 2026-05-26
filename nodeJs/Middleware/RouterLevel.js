const express = require('express');
const app = express();

userRouter = require('./userRouter')
app.use('/user',userRouter);

app.listen(3000);