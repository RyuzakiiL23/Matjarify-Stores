const { User, sequelize } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


const register = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

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
            }, { transaction });

            await transaction.commit();

        const token = jwt.sign({
            user_id: user.id,
            email: user.email,
            role: user.role
        }, secretKey, {expiresIn: "168h"});

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'None', // strict 
            // secure: true // only prod 'https'
            maxAge: 3600000 * 24 * 7 // 7days
        });

        return res.status(200).json({name: user.firstName ,token});

    }catch (error){
        await transaction.rollback();
        return res.status(500).json({message: "something went wrrong"});

    }
}

const login = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array());
    }

    const { email, password } = req.body;
    const secretKey = process.env.TOKEN_SECRET_KEY;

    if (!secretKey) {
        return res.status(500).json({ message: "Secret key not configured" });
    }

    try{
        const user = await User.findOne({where: {email}});

        if (!user){
            return res.status(400).json({message: 'Email incorrect'});
        }

        const matchPass = await bcrypt.compare(password, user.password);

        if (!matchPass) {
            return res.status(400).json({ message: 'password incorrect' });
        }

        const token = jwt.sign({
            user_id: user.id,
            email: user.email,
            role: user.role
        }, secretKey, {expiresIn: "168h"});

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'None',
            // secure: true // only prod 'https'
            maxAge: 3600000 * 24 * 7
        });

        return res.status(200).json({name: user.firstName ,token});
        
    }catch (error){
        return res.status(500).json({message: "something went wrrong"});
    }
}

const logout = async(req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: "Logged out successfully" });
};

const googleAuth = (req, res) => {

    const secretKey = process.env.TOKEN_SECRET_KEY;

    if (!secretKey) {
        return res.status(500).json({ message: "Secret key not configured" });
    }

    const token = jwt.sign({
        user_id: req.user.id,
        email: req.user.email,
        role: req.user.role
    }, secretKey, {expiresIn: "168h"});

    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'None', // strict 
        secure: true, // only prod 'https'
        maxAge: 3600000 * 24 * 7 // 7days
    });

    return res.status(200).json(token);
};

const facebookAuth = (req, res) => {

    const secretKey = process.env.TOKEN_SECRET_KEY;

    if (!secretKey) {
        return res.status(500).json({ message: "Secret key not configured" });
    }

    const token = jwt.sign({
        user_id: req.user.id,
        email: req.user.email,
        role: req.user.role
    }, secretKey, {expiresIn: "168h"});

    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'None', // strict 
        secure: true, // only prod 'https'
        maxAge: 3600000 * 24 * 7 // 7days
    });

    return res.status(200).json(token);
};

module.exports = {
    register,
    login,
    logout,
    googleAuth,
    facebookAuth
}