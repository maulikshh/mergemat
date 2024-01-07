const bcrypt = require('bcrypt');

const hashpassword = (password) =>{
  return new Promise((resolve,reject)=>{
    bcrypt.genSalt(11,(err,salt)=>{
      if(err){
        reject(err)
      }
      bcrypt.hash(password,salt,(err,hash)=>{
        if(err){
          reject(err)
        } resolve(hash);
      })
    })
  })
}

const comparepass= (password,hashed) =>{
  return bcrypt.compare(password,hashed)
}

module.exports ={
  hashpassword,
  comparepass
}