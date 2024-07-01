const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
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