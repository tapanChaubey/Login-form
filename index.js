const express=require("express");
const fs=require("fs");
const app=express();
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
app.listen(3000,(err)=>{
    console.log("sever strated !");
})