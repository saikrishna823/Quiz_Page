const express =require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const User=require("./models/userModel");
const app=express();
app.use(cors());
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});
app.post("/logIn",async(req,res)=>{
    const name=req.body.details.name;
    const email=req.body.details.email;
    const user=new User({
        name:name,
        email:email
    });
    await user.save();
    res.send("saved successfully")

})
app.get("/getDetails",(req,res)=>{
    User.find({},(error,users)=>{
        if(!error){
            res.send(users);
        }
    })
})
app.listen(5000,()=>{
    console.log("server is up and running");
})