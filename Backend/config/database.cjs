const { Sequelize } = require('sequelize');
require('dotenv').config();

const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_PORT = process.env.DATABASE_PORT;

const sequelize = new Sequelize(`mysql://${USER_NAME}:${PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`,
     {logging: false});


module.exports = sequelize;