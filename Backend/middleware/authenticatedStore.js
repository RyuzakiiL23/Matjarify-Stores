const jwt = require('jsonwebtoken');
const { Store } = require('../models');

const authenticatedStore = (req, res, next) => {
    const token = req.headers['authorization'].split(" ")[1];

    if (!token) return res.status(400).json({message: 'No token'});

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (err, decode) => {
        if (err){
            return res.status(400).json({message: 'invalid token'});
        }
        const id = req.params.id;
        try{
            const store = await Store.findOne({where: {id}});
            if (store.admin !== decode.user_id) return res.status(401).json({message: 'unauthorized'});
            req.user = decode;
            next();
        }catch (error){
            return res.status(400).json({message: 'failed to get store'});
        }
    });
}

module.exports = authenticatedStore;