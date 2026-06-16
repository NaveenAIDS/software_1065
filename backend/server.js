const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/student",(req,res)=>{

res.json({
name:"Naveen",
course:"Software Engineering"
});

});

app.listen(5000,()=>{
console.log("Server Running");
});