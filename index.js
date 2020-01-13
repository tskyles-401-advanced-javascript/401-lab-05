'use strict';

const mongoose = require('mongoose');
const Categories = require('./models/categories-model');
const Products = require('./models/products-model');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

let categoriesTest = {
  name: 'test category',
  price: 20,
  weight: 10,
  quantity_in_stock: 100,
};

let productTest = {
  name: 'test product',
  quantity: 10,
};

let categories = new Categories;
let products = new Products;

products
  .create(productTest)
  .then(res => console.log(res))
  .catch(err => console.log(err));

categories
  .create(categoriesTest)
  .then(res => console.log(res))
  .catch(err => console.log(err));


