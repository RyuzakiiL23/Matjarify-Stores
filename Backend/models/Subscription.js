const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subscription = sequelize.define('Subscription', {
    amount: {
        type: DataTypes.FLOAT
    },
    ending: {
        type: DataTypes.DATE
    },
    status: {
        type:  DataTypes.STRING(20)
    },
    store_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}, {
    tableName: 'subscriptions',
    indexes: [
        {
            fields: ['store_id']
        }
    ]
});

module.exports = Subscription;