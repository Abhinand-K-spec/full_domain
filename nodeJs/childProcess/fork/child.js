process.on('message',(msg)=>{
    console.log('msg from parent :',msg);
    process.send('hi from child');
})
