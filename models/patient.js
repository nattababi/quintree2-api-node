const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Patient = mongoose.model('Patient', new mongoose.Schema({
  patientId:{
    type: String,
    required: true,
    trim: true, 
    minlength: 0,
    maxlength: 16
  },
  phone:{
    type: String,
    required: true,
    trim: true, 
    minlength: 0,
    maxlength: 20
  },
  dob:{
    type: Date,
    required: true,
  },
  gender:{
    type: String,
    required: true,
    trim: true, 
    minlength: 0,
    maxlength: 15
  }
}));

function validatePatient(patient) {
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

exports.Patient = Patient; 
exports.validate = validatePatient;