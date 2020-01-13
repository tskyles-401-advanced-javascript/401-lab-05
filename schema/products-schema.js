'use strict';

const mongoose = require('mongoose');

const products = new mongoose.Schema({
  name: { type: 'string', required: true },
  quantity: { type: 'number' , required: true},
});
/**
 * @function
 * @returns console.log()
 */
products.post('findOne', record => {
  console.log('record found... returning');
});
/**
 * @function
 * @returns console.log()
 */
products.post('find', () => {
  console.log('could not find record...');
});
/**
 * @function
 * @returns console.log()
 */
products.post('save', () => {
  console.log('record saved to db');
});
/**
 * @module products products mongoose schema
 */
module.exports = mongoose.model('products', products);