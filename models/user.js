const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require('@hapi/joi');
const mongoose = require("mongoose");
const { now } = require('lodash');

//const User = mongoose.model('User', new mongoose.Schema({

const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true,
    trim: true, 
    minlength: 1,
    maxlength: 256
  },
  lastName:{
    type: String,
    required: true,
    trim: true, 
    minlength: 1,
    maxlength: 256
  },
  email:{
    type: String,
    required: true,
    trim: true, 
    minlength: 1,
    maxlength: 256
  },
  password:{
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 64
  },
  status:{
    type: String,
    required: true,
    trim: true, 
    minlength: 1,
    maxlength: 64,
    default: 'noactive'
  },
  activation_key:{
    type: String,
    trim: true, 
    maxlength: 64,
    default: ""
  },
  activation_at:{
    type: Date,
    default: null
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  isExpert: {
    type: Boolean,
    required: true,
    default: false
  },
  registered_at:{
    type: Date,
    required: true,
    default: now()
  }
});
//}));

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    {
      _id: this._id,
      firstName: this.firstName,
      email: this.email,
      isAdmin: this.isAdmin
    },
    config.get("jwtPrivateKey")
  );

  console.log('TOKEN===', token);
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
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

exports.User = User; 
exports.validate = validateUser;