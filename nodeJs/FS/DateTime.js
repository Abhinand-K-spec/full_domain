const fs = require('fs');


const date = new Date().toLocaleDateString()
const time = new Date().toLocaleTimeString()

const dt = `time : ${time}, date : ${date}`
fs.writeFile('sample.txt',dt,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('success');
})