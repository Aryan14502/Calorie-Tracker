const express = require('express');

const app=express();
// Middleware Function

const middleware=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please Provide the age");
    }
    else if(req.query.age >20){
        res.send("Please provide the age below 20");
    }
    else {
        next();
    }
    console.log("Middleware Called");
    next();

}

// app.use(middleware)





app.get("/home",middleware,(req,res)=>{
    res.send("This is the Home Page .");
})

app.get("/about",(req,res)=>{
    res.send("This is the About Page .");
})

app.listen(3001,()=>{
    console.log("The server is running on : 3001");

})

