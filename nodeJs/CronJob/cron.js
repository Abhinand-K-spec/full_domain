const cron = require('node-cron');

cron.schedule('*/10 * * * * *',()=>{
    console.log('at every 10 seconds')
})