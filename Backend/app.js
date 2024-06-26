const express = require('express');
const { sequelize, User, Store, Category } = require('./models');
const authRoute = require('./routes/authRoute');


require('dotenv').config();
const app = express();
const APP_PORT = process.env.PORT || 8000;
const migrate = process.argv.slice(2)[0];

app.use(express.json());

app.use('/auth', authRoute);

app.get('*', async (_req, res) => {
  return res.status(401).json({message: 'No URI for that!'});
});

if (migrate === 'migrate'){
  sequelize.sync({ alter: true }).then(() => {
       console.log('Database & tables created!');
     });
}

app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});

module.exports = app;