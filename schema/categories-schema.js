'use strict';

const mongoose = require('mongoose');

const categories = new mongoose.Schema({
  name: { type: 'string', required: true },
  price: { type: 'number', required: true },
  weight: { type: 'number' },
  quantity_in_stock: { type: 'number', required: true },
});
/**
 * @function
 * @returns console.log()
 */
categories.post('findOne', record => {
  console.log('record found... returning');
});
/**
 * @function
 * @returns console.log()
 */
categories.post('find', () => {
  console.log('could not find record...');
});
/**
 * @function
 * @returns console.log()
 */
categories.post('save', () => {
  console.log('record saved to db');
});
/**
 * @module categories categories mongoose schema
 */
module.exports = mongoose.model('categories', categories);