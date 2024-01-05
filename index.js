require("dotenv").config();
const express=require("express");
const fs=require("fs");
const app=express();
const port=3000;
app.use(express.static("."));
app.use(express.urlencoded());

app.post("/getdata",(req,res)=>{
    fs.readFile("userdata.text","utf-8",(err,data)=>{
        let record=JSON.parse(data);
        let result=record.filter((item)=>{
            if(item.email==req.body.email && item.password==req.body.password){
                return true;
            }
        })
        if(result.length==0){
            res.send("Invaild username/password");
        }
        else{
            res.send("Welcome to  username/password");
        }
    })
    
})
app.listen(port,(err)=>{
    console.log("sever strated !");
})