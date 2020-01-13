'use strict';

/**
 * @class Model
 */

class Model {
  constructor(){
    this.schema = schema;
  }

  // get record based on id
  get(_id){
    if(_id){
      return this.schema.findOne( {_id} );
    }
    else this.schema.find();
  }

  create(record){
    if(typeof record === 'object'){
      let newObject = this.schema(record);
      return newObject.save();
    }
    else {
      return Error('something went wrong.. Could not save to db..');}
  }
  

  update(_id, record){
    if(_id && record){
      return this.schema.findOneAndUpdate(record);
    }
    else {
      return undefined;
    }
  }

  delete(_id){
    if(_id){
      return this.schema.findByIdAndDelete(_id);
    }
    else {
      return 'could not find record...';
    }
  }
}

module.exports = Model;