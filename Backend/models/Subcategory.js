const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subcategory = sequelize.define('Subcategory', {
    title: {
        type: DataTypes.STRING(128)
    },
    description: {
        type: DataTypes.STRING
    },
    image: {
        type:  DataTypes.STRING(128)
    },
    store_id: DataTypes.INTEGER
}, {
    tableName: 'subcategories'
});

module.exports = Subcategory;