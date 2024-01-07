const mongoose = require('mongoose')

const {Schema} = mongoose

const userSchema = new Schema({
  email:{type:String, unique:true}, 
 firstname:String,
 lastname:String,
 password: String
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel;