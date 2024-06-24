const express = require('express');
const { sequelize } = require('./models');


const app = express();
app.use(express.json());
const APP_PORT = process.env.PORT || 8000;

app.get('/', async (req, res) => {
  return res.status(200).json({name: 'hello world'});
});

sequelize.sync({ alter: true }).then(() => {
  app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);
  });
  console.log('Database & tables created!');
});
