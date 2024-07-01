const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Store = sequelize.define('Store', {
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type:  DataTypes.STRING(128)
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    admin: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    tableName: 'stores',
    indexes: [
        {
            fields: ['name']
        },
        {
            fields: ['category_id']
        }
    ]
});

module.exports = Store;