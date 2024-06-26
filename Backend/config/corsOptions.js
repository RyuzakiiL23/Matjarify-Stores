const allowedOrigins = require('./allowedOrigins');

const corsOprions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin){ // delete it in production
            callback(null, true);
        }else{
            callback(new Error('Not allowed By Cors'));
        }
    },
    credential: true,
    optionSuccessStatus: 200
};

module.exports = corsOprions;