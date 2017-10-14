var express= require("express");
var app=express();

app.get("/",function(req,res){
  res.send({"yo":"how are you"});
});

PORT=process.env.PORT || 5000;
app.listen(PORT);
