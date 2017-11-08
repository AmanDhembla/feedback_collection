var express= require("express");
var mongoose=require("mongoose");
var keys=require("./config/keys");
var passport=require("passport");
var cookieSession=require("cookie-session");

var app=express();

mongoose.connect(keys.mongoURI);

require("./models/user");
require("./services/passport");

//routers
var authRouter=require("./routes/authRouter");
var userRouter=require("./routes/user");

app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys:[keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


app.get("/",function(req,res){
  res.send({"yo":"how are you"});
});

//routes
app.use("/auth/google",authRouter);
app.use("/api/user",userRouter);

PORT=process.env.PORT || 5000;
app.listen(PORT);
