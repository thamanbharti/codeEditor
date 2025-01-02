const express=require('express');
require('dotenv').config();
const app=express();
const PORT=process.env.POR||3001;


app.listen(()=>{
     console.log(`server listening in port ${PORT}`);
})