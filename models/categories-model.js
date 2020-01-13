'use strict';

const dataModel = require('../models/mongo-model');
const schema = require('../schema/categories-schema');
/**
 * @class Categories
 * @extends {dataModel}
 */
class Categories extends dataModel{
  constructor(){
    super(schema);
  }
}
/**
 * @module Categories
 */
module.exports = Categories;