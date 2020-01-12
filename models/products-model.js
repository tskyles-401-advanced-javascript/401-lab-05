'use strict';

const dataModel = require('../models/mongo-model');
const schema = require('../schema/products-schema');

class Product extends dataModel{
  constructor(){
    super();
    this.schema = schema;
  }
}