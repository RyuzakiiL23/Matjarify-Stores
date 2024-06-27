const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin){ // delete it in production
            callback(null, true);
        }else{
            callback(new Error('Not allowed By Cors'));
        }
    },
    credentials: true,
    optionSuccessStatus: 200
};

module.exports = corsOptions;