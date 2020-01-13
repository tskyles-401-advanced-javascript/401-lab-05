'use strict';

require('@code-fellows/supergoose');

const Model = require('../models/mongo-model');
const model = new Model;

describe('Model CRUD properly functions', () => {
  it('can create() a record', async () => {
    let testObj = { name: test };
    let createdObj = await model.create(testObj);
    Object.keys(testObj).forEach( key => {
      expect(createdObj[key]).toEqual(testObj[key]);
    });
  });

  it('can get() a record', async () => {
    let testObj = { name: test };
    let createdObj = await model.create(testObj);
    let fetchedObj = await model.get(testObj._id);
    expect(fetchedObj._id).toEqual(createdObj._id);
    Object.keys(testObj).forEach( key => {
      expect(fetchedObj[key]).toEqual(testObj[key]);
    });
  });

  it('can update() a record', () => {

  });

  it('can delete() a record', () => {

  });
});