const express = require('express');
const { sequelize, User, Store, Category } = require('./models');

require('dotenv').config();

const app = express();

app.use(express.json());
const APP_PORT = process.env.PORT || 8000;

app.get('/', async (req, res) => {
  return res.status(200).json({say: 'hello world'});
});

// app.post('/users', async (req, res) => {
//   try{
//     const data = req.body;

//   const user = await User.create(data);

//   res.status(200).json(user);
//   }catch (error){
//     res.status(400).json(error.message);
//   }
// });

// app.post('/store', async (req, res) => {
//   const data = req.body;

//   try{
//     const store = await Store.create(data);
//     res.status(200).json(store);

//   }catch (error){
//     res.status(400).json(error.message);
//   }

// });

// app.post('/category', async (req, res) => {
//   const data = req.body;
//   const transaction = await Category.sequelize.transaction();
//   try{
//     const category = await Category.create(data);
//     res.status(200).json(category);

//   }catch (error){
//     await transaction.rollback();
//     res.status(400).json(error.message);
//   }

// });

app.get('*', async (req, res) => {
    return res.status(401).json({message: 'No URI for that!'});
  });


app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});
