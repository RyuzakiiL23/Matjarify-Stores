const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    phone: DataTypes.STRING(20),
    profile_image: DataTypes.STRING(50),
    address: DataTypes.STRING(50),
    city: DataTypes.STRING(20),
    country: DataTypes.STRING(20),
    zip_code: DataTypes.STRING(10),
    role: {
        type: DataTypes.STRING,
        defaultValue: "user"
    },
    google_id: {
        type: DataTypes.STRING,
    },
    facebook_id: {
        type: DataTypes.STRING,
    }
},{
    tableName: 'users'
});


module.exports = User;