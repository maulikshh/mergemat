const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const port =3000;
const cookieparser = require("cookie-parser")
const {mongoose} = require('mongoose')

const app = express();
//database connection
mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Database Connected")).catch((err)=> console.log("Connection issues :(",err))


//json body parsing, can use body parser library also

app.use(express.json())
//cookie parsing through middleware
app.use(cookieparser());
//directing all routes to authroute file
app.use('/', require('./routers/authroute'))

app.use(express.urlencoded({extended:false}))

app.listen(port, () => {
  console.log(`Server is running on port ${port}` )
})