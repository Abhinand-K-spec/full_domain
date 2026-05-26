const websocket = require('ws');


const server = new websocket.Server({
    port:3000
})


server.on('connection',(socket)=>{
    console.log('connected');

    socket.send('hello from server');

    socket.on('message',(message)=>{
        console.log(message.toString());
    })
})