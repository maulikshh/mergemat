const users = require('../models/users')
const { hashpassword, comparepass } = require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test = async (req,res)=> {
  res.json("endpoint is working")
}



//signup endpoint
const registerUser = async (req,res) => {
  try {
    const {email,firstname,lastname,password} = req.body;
    const exist = await users.findOne({email});
    if(exist){
      return res.json({
        error:"unique email is required"
      })
    };
    if(!firstname){
      return res.json({
        error:"firstname is required"
      })
    };
    if(!lastname){
      return res.json({
        error:"lastname is required"
      })
    };
    if(!password || password.length <8){
      return res.json({
        error:"Password is required to be minimum 8 characters"
      })
    };
    const hashedpassword= await hashpassword(password)
    const user = await users.create({
      email,firstname,lastname,password:hashedpassword,
    })

    return res.json(user);
  } catch (error) {
    console.log("error")
  }
}

//login endpoint
const loginUser = async (req,res)=> {
  try {
    const {email,password}= req.body;

    const userexist = await users.findOne({email}) //individual existing in database
    if(!userexist){
      return res.json({error:"no email found"})
    }
    const match = await comparepass(password, userexist.password)
    if (match){
      jwt.sign({email:userexist.email, id:userexist._id, firstname: userexist.firstname, lastname: userexist.lastname },process.env.JWT_SECRET, {}, (err,token)=>{
        if (err) throw err;
        res.cookie('token',token).json(userexist)
      })
    }
    else{
      return res.json({error:"password is incorrect"})
    }
  }
   catch (error) {
    console.log(error)
  }
}

const getprofile = (req,res)=>{
const {token} = req.cookies
if(token){
  jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
    if (err) throw err;
    res.json(user);
  })
}else{
  res.json(null);
}
}

module.exports = {
  test,
  registerUser,
  loginUser,
  getprofile
}