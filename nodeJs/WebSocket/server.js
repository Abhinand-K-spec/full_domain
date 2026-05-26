const websocket = require('ws');
const http = require('http');
 

const server = http.createServer((req,res)=>{
    res.writeHead(200);
    res.end('server is running');
})

const webserver = new websocket.Server({
    server
})


webserver.on('connection',(socket)=>{
    console.log('connected');

    socket.send('hello from server');

    socket.on('message',(message)=>{
        console.log(message.toString());
    })
});

server.listen(3000);