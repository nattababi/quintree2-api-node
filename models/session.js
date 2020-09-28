const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Session = mongoose.model('Session', new mongoose.Schema({
  exists: {
    type: Boolean,
    required: true,
    default: true
  },
  sessionId:{
    type: Number,
    min: 0,
    required: true
  },
  started:{
    type: Date,
    required: true,
  }, 
  ended:{
    type: Date,
    required: true,
  },
  provider:{
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  expert:{
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  group:{
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient'
  },
  complaint:{
    type: String,
    required: true,
    trim: true, 
    minlength: 0,
    maxlength: 255
  },
  overread:{
    type: String,
    required: true,
    trim: true, 
    minlength: 0,
    maxlength: 4096
  }
}));

function validateSession(session) {
  // const schema = {
  //   exists: Joi.boolean().required(),
  //   sessionId: Joi.number().min(0).required(),
  //   started: Joi.date().required(),
  //   ended: Joi.date().required(),
  //   provider: Joi.string().min(5).max(50).required(),
  //   expert: Joi.string().min(5).max(50).required(),
  //   group: Joi.string().min(5).max(50).required()
  // };

  // return Joi.validate(history, schema);
  return true;
}

exports.Session = Session; 
exports.validate = validateSession;