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
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    admin: DataTypes.INTEGER,

}, {
    tableName: 'stores',
    indexes: [
        {
            fields: ['title']
        },
        {
            fields: ['category_id']
        }
    ]
});

module.exports = Store;