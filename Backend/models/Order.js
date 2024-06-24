const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    store_id: DataTypes.INTEGER
},{
    tableName: 'orders'
});


module.exports = Order;