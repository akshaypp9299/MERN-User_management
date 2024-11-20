const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require('cors');


app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://Akshaypp:Akshay99*@cluster0.mi17xo9.mongodb.net/MernCrud?retryWrites=true&w=majority");

app.listen(3000,()=>{
    console.log("Server is up and running!!!");
})


app.get("/getUsers",(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});

app.post("/createUser",async (req,res)=>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})

