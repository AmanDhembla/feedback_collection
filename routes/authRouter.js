const passport=require("passport");
const express=require("express");
const router=express.Router();

router.get("/callback",passport.authenticate("google"),(req,res)=>{
  res.redirect("/surveys");
});

router.get("/",passport.authenticate(
  "google",{scope:["profile","email"]})
);

module.exports=router;
