var passport=require("passport");
var GoogleStrategy=require("passport-google-oauth20").Strategy;
var keys=require("../config/keys");

passport.use(new GoogleStrategy({
  clientID:keys.googleClientID,
  clientSecret:keys.googleSecretKey,
  callbackURL:"http://localhost:5000/auth/google/callback"
},function(accessToken,refreshToken,profile,done){
  console.log(accessToken);
  console.log(profile);
}
));
