
 const path = require("path")

 const express = require("express")

 const app = express()
 
 app.use(express.static(__dirname))
 
  
 app.get("/api/data",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.json(require("./data/data.json"))
 })


 app.get('/',(req,res)=>{
    res.json("hello guys")
 })

 app.listen(3000,(err)=>{
     console.log("data server is starting on port 3000")
 })
 