const fs = require('fs');

fs.readFile('sample.txt','utf-8',(err,data)=>{
    if(err){
        fs.writeFile('sample.txt','data from new file',(err)=>{
            if(err){
                console.log('error occured',err);
                return;
            }
            console.log('file created');
            
            return;
        })
    }
    if(data){
        console.log(data)
    }
})