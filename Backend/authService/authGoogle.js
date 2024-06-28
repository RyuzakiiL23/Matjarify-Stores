const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { User } = require('../models');
const bcrypt = require('bcrypt');


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID_GOOGLE,
    clientSecret: process.env.CLIENT_SECRECT_GOOGLE,
    callbackURL : process.env.CALLBACKURL_GOOGLE
},
async (accessToken, refreshToken, profile, done) => {
    try{
        let user = await User.findOne({where : {google_id: profile.id}});
        if (!user){
            user = await User.create({
                google_id: profile.id,
                email: profile.emails[0].value,
                firstName: profile.given_name,
                lastName: profile.family_name,
                password: await bcrypt.hash(profile.id + profile.email, 10),
            });
        }
        return done(null, user);
    }catch (error){
        return done(error, false);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try{
        const user = await User.findByPk(id);
        done(null, user);
    } catch (error){
        done(error, null);
    }
});