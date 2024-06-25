const { Sequelize } = require('sequelize');
require('dotenv').config();

const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_PORT = process.env.DATABASE_PORT;
const POSTGRES_URL = process.env.POSTGRES_URL;

const sequelize = new Sequelize(`mysql://${USER_NAME}:${PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`,
     {logging: false});

// const sequelize = new Sequelize(POSTGRES_URL, {
//      dialect: 'postgres',
//      dialectOptions: {
//          ssl: {
//              require: true,
//              rejectUnauthorized: false
//          }
//      }
//  });

sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = sequelize;