
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get("/files/",(req,res)=>{
  fs.readdir(path.join(__dirname, './files/'),(err,dirData)=>{
    if(err){
      res.status(500).json({error:"Failed to retrieve files"})
    }
    res.status(200).json(dirData);
  })
})
app.get("/files/:id",(req,res)=>{
  const pathName= path.join(__dirname,"./files/",req.params.filename);
  fs.readFile(pathName,"utf-8",(err,data)=>{
    if(err){
      res.status(404).json(
        {
          err:"File not found"
        }
      )
    }
    res.status(200).json(data);
  })
})