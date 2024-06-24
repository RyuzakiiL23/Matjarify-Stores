const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Store = sequelize.define('Store', {
    title: {
        type: DataTypes.STRING(128)
    },
    description: {
        type: DataTypes.TEXT
    },
    image: {
        type:  DataTypes.STRING(128)
    },
    category_id: DataTypes.INTEGER,
    admin: DataTypes.INTEGER,

}, {
    tableName: 'stores'
});

module.exports = Store;