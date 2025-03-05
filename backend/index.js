const express =require("express");
const PORT=process.env.PORT || 8000;
const app=express();
app.get("/",(req,res)=>
{
res.send("hello ra boku")
})
app.listen(PORT,()=>console.log("server started on port"));