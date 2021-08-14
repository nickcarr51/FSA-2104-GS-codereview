const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const OrderItem = require("./models/OrderItem");

//magic methods
User.createOrder = async function () {
  const order = await Order.create({
    where: {
      userId: User.id,
    },
  });
  return order;
};

User.cartItem = async function () {
  const order = Order.findOne({
    where: {
      userId: User.id,
    },
  });
  const item = await OrderItem.create({
    where: {
      orderId: order.id,
    },
  });
  return item;
};

//associations could go here!
User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    OrderItem,
  },
};