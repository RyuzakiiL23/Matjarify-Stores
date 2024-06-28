require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const cors = require('cors')
const corsOptions = require('./config/corsOptions');
const authRoute = require('./routes/authRoute');
const parseCookie = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');


const app = express();
const APP_PORT = process.env.PORT || 8000;
const migrate = process.argv.slice(2)[0];


if (migrate === 'migrate'){
  sequelize.sync({ alter: true }).then(() => {
       console.log('Database & tables created!');
     });
}

require('./authService/authGoogle');
require('./authService/authFacebook');

app.use(session({
  secret: process.env.SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));

app.use(cors(corsOptions));
app.use(parseCookie());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoute);


app.get('*', async (_req, res) => {
  return res.status(401).json({message: 'No URI for that!'});
});

app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});

module.exports = app;