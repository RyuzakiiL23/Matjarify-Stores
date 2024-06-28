const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const { User } = require('../models');
const bcrypt = require('bcrypt');


passport.use(new facebookStrategy({
    clientID: process.env.CLIENT_ID_FACEBOOK,
    clientSecret: process.env.CLIENT_SECRECT_FACEBOOK,
    callbackURL : process.env.CALLBACKURL_FACEBOOK
},
async (accessToken, refreshToken, profile, done) => {
    try{
        let user = await User.findOne({where : {facebook_id: profile.id}});
        console.log(profile);
        if (!user){
            user = await User.create({
                facebook_id: profile.id,
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