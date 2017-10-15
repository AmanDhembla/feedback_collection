var express= require("express");
require("./services/passport")
var app=express();

//routers
var authRouter=require("./routes/authRouter");



app.get("/",function(req,res){
  res.send({"yo":"how are you"});
});


//routes
app.use("/auth/google",authRouter);


PORT=process.env.PORT || 5000;
app.listen(PORT);
