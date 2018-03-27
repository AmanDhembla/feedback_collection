const express= require("express");
const mongoose=require("mongoose");
const keys=require("./config/keys");
const passport=require("passport");
const cookieSession=require("cookie-session");
const bodyParser = require('body-parser');
const app=express();

mongoose.connect(keys.mongoURI);


app.use(bodyParser.json());
//to execute or load the userSchema
require("./models/user");
require("./models/survey");

// we are not getting anything from the file we just want the code in that file to be executed
require("./services/passport");

//routers
const authRouter=require("./routes/authRouter");
const userRouter=require("./routes/user"); 

app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys:[keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/auth/google",authRouter);
app.use("/api/user",userRouter);

if(process.env.NODE_ENV==='production'){
  //express will serve up production assets
  app.use(express.static('client/build'));

  //express will serve up index.html if no matching route is found
  const path=require('path');
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })

}


const PORT=process.env.PORT || 5000;
app.listen(PORT);
