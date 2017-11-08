var router=require("express").Router();

router.get("/logout",function(req,res){
  req.logout();
  res.json(req.user);
});

router.get("/current_user",function(req,res,next){
  res.json(req.user);
});

module.exports=router;
