'use strict';

require('@code-fellows/supergoose');

const Product = require('../models/products-model');
const model = new Product;

describe('Model CRUD properly functions', () => {
  it('can create() a record', async () => {
    let testObj = { name: 'test', quantity: 10 };
    let createdObj = await model.create(testObj);
    Object.keys(testObj).forEach( key => {
      expect(createdObj[key]).toEqual(testObj[key]);
    });
  });

  it('can get() a record', async () => {
    let testObj = { name: 'test', quantity: 10  };
    let createdObj = await model.create(testObj);
    let fetchedObj = await model.get(createdObj._id);
    expect(fetchedObj._id).toEqual(createdObj._id);
    Object.keys(testObj).forEach( key => {
      expect(fetchedObj[key]).toEqual(testObj[key]);
    });
  });

  it('can update() a record', async () => {
    let testObj = { name: 'test', quantity: 10 };
    let updatedObj = { name: 'newName', quantity: 20 };
    let createdObj = await model.create(testObj);
    let newObj = await model.update(createdObj._id, updatedObj);
    Object.keys(updatedObj).forEach( key => {
      expect(newObj[key]).not.toEqual(testObj[key]);
    });
  });

  it('can delete() a record', async () => {
    let testObj = { name: 'test', quantity: 10 };
    let createdObj = await model.create(testObj);
    await model.delete(createdObj._id);
    let fetchedObj = await model.get(createdObj._id);
    expect(fetchedObj).toBeNull();
  });
});