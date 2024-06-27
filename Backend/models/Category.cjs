const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.cjs');

const Category = sequelize.define('Category', {
    title: {
        type: DataTypes.STRING(128)
    },
    description: {
        type: DataTypes.STRING
    },
    image: {
        type:  DataTypes.STRING(128)
    }
}, {
    tableName: 'categories'
});


module.exports = Category;