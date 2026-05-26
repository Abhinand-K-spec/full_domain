const {execFile} = require('child_process');

execFile('node',['exec.js'],(err,stdout,stderr)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('std:',stdout);
})