const express=require("express");
const router=express.Router();
const requireLogin=require("../middlewares/requireLogin");
const hasEnoughCredits=require("../middlewares/hasEnoughCredits");
const mongoose=require("mongoose");
const Survey=mongoose.model('surveys');
const Mailer =require("../services/mailer");
const surveytemplate =require("../services/emailTemplates/surveyTemplate");

router.post("/", requireLogin, hasEnoughCredits,async (req,res)=>{
    const {title,subject,body,recipients} =req.body;
    console.log("hello");
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

    const mailer=new Mailer(survey,surveytemplate(survey));
    try{
    const response= await mailer.send();
    await survey.save();
    req.user.credits -=1;
    const user=await req.user.save();
    }catch(err){
        res.status(422).send(err);
    }
    res.send(user);
});

router.get("/thanks",(req,res)=>{
    res.send('thanks for voting');
});

module.exports=router;