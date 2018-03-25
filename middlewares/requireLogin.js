module.exports=(req,res,next)=>{
    //next is like done callback is to signify that our work is done pass the req to next middleware
    if(!req.user){
        return res.status(401).send({error:'you must log in'});
    }

    next();
}