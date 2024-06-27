const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING(128)
    },
    description: {
        type: DataTypes.STRING
    },
    image: {
        type:  DataTypes.STRING(128)
    }
}, {
    tableName: 'categories',
    indexes: [
        {
            unique: true,
            fields: ['name']
        }
    ]
});


module.exports = Category;