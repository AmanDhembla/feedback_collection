var passport=require("passport");
var GoogleStrategy=require("passport-google-oauth20").Strategy;
var keys=require("../config/keys");
var mongoose=require("mongoose");
var User=mongoose.model("users");

passport.serializeUser((user,done)=>{
  done(null,user.id);
});

passport.deserializeUser((id,done)=>{
  User.findById(id).then(user=>{
    done(null,user);
  })
})

passport.use(new GoogleStrategy({
  clientID:keys.googleClientID,
  clientSecret:keys.googleSecretKey,
  callbackURL:"http://localhost:5000/auth/google/callback"
},function(accessToken,refreshToken,profile,done){
  User.findOne({googleId:profile.id}).then(function(existingUser){
    if(existingUser){
      done(null,existingUser);
    }else{
      new User({googleId:profile.id})
      .save()
      .then(function(user){
        done(null,user);
      });
    }
  });

}
));
