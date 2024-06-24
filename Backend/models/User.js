const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING(30),
    },
    lastName: {
        type: DataTypes.STRING(30),
    },
    email: {
        type: DataTypes.STRING(30),
        unique: true
    },
    password: {
        type: DataTypes.STRING(128)
    },
    seller: DataTypes.BOOLEAN,
    phone: DataTypes.STRING(20),
    profile_image: DataTypes.STRING(50),
    address: DataTypes.STRING(50),
    city: DataTypes.STRING(20),
    country: DataTypes.STRING(20),
    zip_code: DataTypes.STRING(10),
},{
    tableName: 'users'
});


module.exports = User;