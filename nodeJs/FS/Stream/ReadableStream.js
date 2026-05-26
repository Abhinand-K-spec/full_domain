const fs = require('fs');


const readStream = fs.createReadStream('sample.txt','utf-8');

readStream.on('data',(chunk)=>{
    console.log(chunk);
})


readStream.on('end',()=>{
    console.log('finished')
})

readStream.on('error',(err)=>{
    console.log(err);
})