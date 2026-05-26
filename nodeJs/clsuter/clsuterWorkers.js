const cluster = require('cluster');
const http = require('http');
const os = require('os');

if(cluster.isPrimary){
    const cpuCount = os.cpus().length;
    for(let i=0;i<cpuCount;i++){
        cluster.fork();
    }
}else{
    http.createServer((req,res)=>{
        res.end('hello from worker',process.pid);
    }).listen(3000);
}