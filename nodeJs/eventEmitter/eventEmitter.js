const eventEmitter = require('events');

const emitter = new eventEmitter();

emitter.on('greet',(name)=>{
    console.log('hi',name);
})


emitter.emit('greet','abhi')