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
        if (!user){
            user = await User.create({
                facebook_id: profile.id,
                email: `${profile.id}@gmail.com`,
                firstName: profile.displayName.split(" ")[0],
                lastName: profile.displayName.split(" ")[1],
                password: await bcrypt.hash(profile.id + `${profile.id}@gmail.com`, 10),
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