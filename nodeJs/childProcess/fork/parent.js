const {fork} = require('child_process');

const child = fork('./nodeJs/childProcess/fork/child.js');
child.send('hello');

child.on('message',(msg)=>{
    console.log(msg)
});