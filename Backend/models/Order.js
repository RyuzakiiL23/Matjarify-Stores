const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    store_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    tableName: 'orders'
});


module.exports = Order;