const fs = require('fs');


const read = fs.createReadStream('hashed','utf-8');
const write = fs.createWriteStream('hashed.txt');
read.pipe(write);

