var passport=require("passport");
var express=require("express");
var router=express.Router();

router.get("/",passport.authenticate(
  "google",{scope:["profile","email"]})
);

router.get("/callback",passport.authenticate("google"));

module.exports=router;
