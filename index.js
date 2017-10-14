var express= require("express");
var app=express();

app.get("/",function(req,res){
  res.send({"yo":"how are you"});
});

app.listen(5000);
