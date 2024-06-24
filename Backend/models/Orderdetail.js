const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Orderdetail = sequelize.define('Orderdetail', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
}, {
    tableName: 'orderdetails'
});

module.exports = Orderdetail;