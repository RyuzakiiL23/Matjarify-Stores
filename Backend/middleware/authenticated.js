const jwt = require('jsonwebtoken');

const authenticated = (req, res, next) => {
    const token = req.headers['authorization'].split(" ")[1];

    if (!token) return res.status(400).json({message: 'No token'});

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (err, decode) => {
        if (err){
            return res.status(400).json({message: 'invalid token'});
        }
        req.user = decode;
        next();
    });
}

module.exports = authenticated;