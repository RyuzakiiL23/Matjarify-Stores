const sequelize = require('../config/database.cjs');
const Store = require('./Store.cjs');
const Subscription = require('./Subscription.cjs');
const User = require('./User.cjs');
const Order = require('./Order.cjs');
const Category = require('./Category.cjs');
const Subcategory = require('./Subcategory.cjs');
const Address = require('./Address.cjs');
const Image = require('./Image.cjs');
const Orderdetail = require('./Orderdetail.cjs');
const Product = require('./Product.cjs');

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

User.hasMany(Order, {foreignKey: 'user_id', as: 'orders'});
User.hasMany(Store, {as: 'stores', foreignKey: 'admin'});
User.hasMany(Address, {as: 'addresses', foreignKey: 'user_id'});


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