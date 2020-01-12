'use strict';

const mongoose = require('mongoose');

const categories = new mongoose.Schema({
  category_id: { type: 'string', required: true },
  name: { type: 'string', required: true },
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