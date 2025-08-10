const express = require("express")
const app = express()
const cors= require("cors")
const morgan = require("morgan")
const multer = require("multer")
const mongoose = require("mongoose")
const companyRouter = require ("./src/routes/companyRoute")
const adminRouter = require ("./src/routes/adminRoutes")
const staffRouter = require ("./src/routes/staffRoute")
app.use(express.json());
app.use(cors());
app.use(morgan('dev')); 

// mongodb+srv://vishnutoanother:TJY72CMzB5zAq3ZE@cluster0.00v8gqd.mongodb.net/ems-app 
 
// mongodb://127.0.0.1:27017/mainproject2

  
mongoose
  .connect("mongodb+srv://vishnutoanother:jH6ZluWmrKOiHAf4@cluster0.g4bupwj.mongodb.net/emsapp", {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  }) 
  .then(() => console.log("DB Connection Successfull!"))  
  .catch((err) => { 
    console.log(err);
  }); 
 
  
  app.use("/",companyRouter)
  app.use("/",adminRouter)
  app.use("/",staffRouter)
 
app.listen(4444,()=>{
    console.log("server running 4444"); 
})     