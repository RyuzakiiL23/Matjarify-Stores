const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subcategory = sequelize.define('Subcategory', {
    name: {
        type: DataTypes.STRING(128)
    },
    description: {
        type: DataTypes.STRING
    },
    image: {
        type:  DataTypes.STRING(128)
    },
    store_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'subcategories',
    indexes: [
        {
            fields: ['name']
        },
        {
            fields: ['store_id']
        }
    ]
});

module.exports = Subcategory;