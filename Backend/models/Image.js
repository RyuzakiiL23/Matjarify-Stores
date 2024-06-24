const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Image = sequelize.define('Image', {
    name: {
        type: DataTypes.STRING(128)
    },
    product_id: {
        type:  DataTypes.INTEGER
    }
}, {
    tableName: 'images'
});


module.exports = Image;