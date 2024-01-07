const express = require('express')
const cors = require('cors'); 
const router = express.Router();
const {test, registerUser,loginUser, getprofile} = require('../controllers/controller')

//initializing global middleware cors
router.use(cors({
  credentials:true,
  origin:'http://localhost:5173'
}))

//all request handlers to be directed here from the main index.js file

router.get('/', test)

router.post('/register',registerUser)

router.post('/login',loginUser)

router.get('/profile',getprofile)
module.exports = router;