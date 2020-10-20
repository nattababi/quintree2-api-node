const express = require('express');
// const genres = require('../routes/genres');
// const customers = require('../routes/customers');
// const movies = require('../routes/movies');
// const rentals = require('../routes/rentals');
const auth = require('../routes/auth');
const sessions = require('../routes/sessions');
const patients = require('../routes/patients');
const users = require('../routes/users');

//const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/auth', auth);
  app.use('/api/sessions', sessions);
  app.use('/api/patients', patients);
  app.use('/api/users', users);
//  app.use(error);
}