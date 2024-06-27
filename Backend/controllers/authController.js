// authController.js

const User = require('../models/User.js');
const UserUtils = require('../utils/userUtils.js');

async function register(req, res) {
    const { firstName, lastName, email, password, seller, phone, profile_image, address, city, country, zip_code } = req.body;

    try {
        const hashedPassword = await UserUtils.hashPassword(password);
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            seller,
            phone,
            profile_image,
            address,
            city,
            country,
            zip_code,
        });

        const token = UserUtils.generateToken(newUser);

        res.status(201).json({ token, user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const match = await UserUtils.comparePassword(password, user.password);

        if (!match) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = UserUtils.generateToken(user);

        res.status(200).json({ token, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function get_all_users(req, res) {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    register,
    login,
    get_all_users,
};
