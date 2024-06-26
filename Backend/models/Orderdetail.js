const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Orderdetail = sequelize.define('Orderdetail', {
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'orderdetails'
});

module.exports = Orderdetail;