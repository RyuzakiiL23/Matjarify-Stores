const { User, sequelize } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword} = req.body;
    const secretKey = process.env.TOKEN_SECRET_KEY;

    if (!secretKey) {
        return res.status(500).json({ message: "Secret key not configured" });
    }
    if(password !== confirmPassword){
        return res.status(400).json({ message: "password donst match" });
    }

    const transaction = await sequelize.transaction();

    try{
        const userExist = await User.findOne({where: {email: email}});
        if (userExist){
            await transaction.rollback();
            return res.status(400).json({message: "user Already exits"});
        }
         
        const hashPass = await bcrypt.hash(password, 10);
        const user = await User.create({
                firstName,
                lastName,
                email,
                password: hashPass,
            });

            await transaction.commit();

        const token = jwt.sign({
            user_id: user.id,
            email: user.email,
            role: user.role
        },
        secretKey,
        {expiresIn: "1h"});

        res.cookie('token', token, {
            httpOnly: true,
            ageMax: 3600000, // 1h
        });

        res.status(200).json({email: user.email});

    }catch (error){
        await transaction.rollback();
        res.status(400).json({message: "something went wrrong"});
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
}

module.exports = {
    register,
    login
}