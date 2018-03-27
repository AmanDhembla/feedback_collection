const express=require("express");
const router=express.Router();
const requireLogin=require("../middlewares/requireLogin");
const hasEnoughCredits=require("../middlewares/hasEnoughCredits");
const mongoose=require("mongoose");
const Survey=mongoose.model('surveys');

router.post("/", requireLogin, hasEnoughCredits, (req,res)=>{
    const {title,subject,body,recipients} =req.body;

    const survey=new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(',').map((recipient)=>{
            return {
                email: recipient.trim()
            }
        }),
        _user: req.user.id,
        dateSent: Date.now()
    });
});

module.exports=router;