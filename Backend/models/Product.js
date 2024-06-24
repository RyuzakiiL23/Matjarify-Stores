const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    title: DataTypes.STRING(128),
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    image: DataTypes.STRING(128),
    condition: DataTypes.BOOLEAN,
    discount: DataTypes.FLOAT,
    sub_category_id: DataTypes.INTEGER,
},{
    tableName: 'products'
});


module.exports = Product;