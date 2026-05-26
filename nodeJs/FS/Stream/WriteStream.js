const fs = require('fs');

const writeStream = fs.createWriteStream('sample.txt');


writeStream.write('hello world');

writeStream.end(()=>{
    console.log('finished');
});