module.exports=(req,res,next)=>{
    //next is like done callback is to signify that our work is done pass the req to next middleware
    if(req.user.credits<1){
        return res.status(403).send({error:'you do not have enough number of credits'});
    }
    next();
}