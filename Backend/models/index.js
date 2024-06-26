const sequelize = require('../config/database');
const Store = require('./Store');
const Subscription = require('./Subscription');
const User = require('./User');
const Order = require('./Order');
const Category = require('./Category');
const Subcategory = require('./Subcategory');
const Address = require('./Address');
const Image = require('./Image');
const Orderdetail = require('./Orderdetail');
const Product = require('./Product');

Subscription.belongsTo(Store, {foreignKey: 'store_id', as:'store'})

Address.belongsTo(User, {foreignKey: 'user_id', as: 'user'});

Category.hasMany(Store, {foreignKey: 'category_id', as: 'stores'});

Image.belongsTo(Product, {foreignKey: 'product_id', as: 'product'});

Order.belongsTo(User, {foreignKey: 'user_id', as: 'user'});
Order.belongsTo(Store, {foreignKey: 'store_id', as: 'store'});
Order.belongsToMany(Product, {through: Orderdetail, as: 'products', foreignKey: 'order_id'});

Product.belongsToMany(Order, {through: Orderdetail, as: 'orders', foreignKey: 'product_id'});
Product.belongsTo(Subcategory, {foreignKey: 'sub_category_id', as: 'sub_category'});
Product.hasMany(Image, {foreignKey: 'product_id', as: 'images'});

Store.hasMany(Subscription, {foreignKey: 'store_id', as: 'subscriptions'});
Store.belongsTo(User, {foreignKey: 'admin', as: 'user'});
Store.belongsTo(Category, {foreignKey: 'category_id', as: 'category'});
Store.hasMany(Order, {foreignKey: 'store_id', as: 'orders'});
Store.hasMany(Subcategory, {foreignKey: 'store_id', as: 'subcategories'});

Subcategory.hasMany(Product, {foreignKey: 'sub_category_id', as: 'products'});
Subcategory.belongsTo(Store, {foreignKey: 'store_id', as: 'store'})

User.hasMany(Order, {foreignKey: 'user_id', as: 'orders', onDelete: 'CASCADE'});
User.hasMany(Store, {as: 'stores', foreignKey: 'admin', onDelete: 'CASCADE'});
User.hasMany(Address, {as: 'addresses', foreignKey: 'user_id', onDelete: 'CASCADE'});


module.exports = {
    sequelize,
    Store,
    Subscription,
    User,
    Order,
    Category,
    Subcategory,
    Address,
    Image,
    Orderdetail,
    Product
}