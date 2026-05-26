const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('hello world');
    res.end('finished');
})

server.listen((3000),()=> console.log('server is runnning'))