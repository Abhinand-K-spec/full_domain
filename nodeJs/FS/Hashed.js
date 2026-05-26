const fs = require('fs');
const bcrypt = require('bcrypt');

const password = 'hi@123'
bcrypt.hash(password,10,(err,hash)=>{
    if(err) console.log(err)
    fs.writeFile('hashed',hash,(err)=>{
        if(err){
            console.log(err);
        }
        console.log('success')
    })
});


