const express=require("express")
const app=express();
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/dortool',{ useUnifiedTopology: true ,useNewUrlParser:true}).then(()=>{console.log("connected to MONGODB")})

app.get("/",(req,res)=>{
    res.send("Hii Bro");
})

app.listen("5000",()=>{
    console.log("Server is up and running")
})