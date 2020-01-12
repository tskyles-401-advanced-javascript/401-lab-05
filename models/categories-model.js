'use strict';

const dataModel = require('../models/mongo-model');
const schema = require('../schema/categories-schema');

class Categories extends dataModel{
  constructor(){
    super();
    this.schema = schema;
  }
}

module.exports = Categories;