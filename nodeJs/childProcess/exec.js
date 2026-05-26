const {exec} = require('child_process');

exec('ls -l',(err,stdout,etderr)=>{
    if(err){
        console.log('error occured:',err);
        return;
    }
    console.log('std:',stdout);

});