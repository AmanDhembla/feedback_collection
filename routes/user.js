const router=require("express").Router();
const keys=require("../config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin =require("../middlewares/requireLogin");

router.get("/logout",(req,res)=>{
  req.logout();
  res.redirect("/");
});

router.get("/current_user",(req,res)=>{
  res.json(req.user);
});

router.post("/stripe",requireLogin,(req,res)=>{
  stripe.charges.create({
    amount: 500,
    currency: "usd",
    source: req.body.id,
    description: "$5 for 5 credits"
  }, async function(err, charge) {
    req.user.credits +=5;
    const user=await req.user.save();
    res.send(user);
  });
});

module.exports=router;
