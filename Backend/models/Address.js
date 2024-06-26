const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Address = sequelize.define('Address', {
    street: {
        type: DataTypes.STRING(60)
    },
    city: {
        type: DataTypes.STRING(30)
    },
    country: {
        type: DataTypes.STRING(30)
    },
    zip_code: {
        type: DataTypes.STRING(30)
    },
    province: {
        type: DataTypes.STRING(30)
    },
    phone: {
        type: DataTypes.STRING(30)
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'addresses'
});

module.exports = Address;