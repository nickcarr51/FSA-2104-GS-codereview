const Sequelize = require("sequelize");
const db = require("../db");
const {
  DataTypes: { STRING, TEXT, DECIMAL },
} = Sequelize;

const Product = db.define("product", {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  color: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  size: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  picture: {
    type: STRING,
    defaultValue: "https://picsum.photos/seed/picsum/200/300",
    validate: {
      isUrl: true,
    },
  },
});

module.exports = Product;