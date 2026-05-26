const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('router level middleware here');
})

module.exports = router