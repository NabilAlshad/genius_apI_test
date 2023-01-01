const express=require('express');
const http=require('http');
const fs=require('fs');

const app = express();


const port =4500;

fs.readFile('./read.txt',"utf-8",(err,data)=>{
    console.log(data);
})
app.get('/', (req, res) => {

res.send("hello world!");
})
app.listen(process.env.PORT||port,()=>console.log(`app is listening on ${port}`))