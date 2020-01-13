'use strict';

const dataModel = require('../models/mongo-model');
const schema = require('../schema/products-schema');
/**
 * @class Products
 * @extends {dataModel}
 */
class Products extends dataModel{
  constructor(){
    super(schema);
  }
}
/** 
 * @module Products
*/
module.exports = Products;