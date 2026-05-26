const {spawn} = require('child_process');

const child = spawn('echo',['hello world']);

child.stdout.on('data',(data)=>{
    console.log(data.toString())
})

child.stderr.on('data',(data)=> console.log(data));