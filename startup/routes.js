const express = require('express');
// const genres = require('../routes/genres');
// const customers = require('../routes/customers');
// const movies = require('../routes/movies');
// const rentals = require('../routes/rentals');
// const users = require('../routes/users');
// const auth = require('../routes/auth');
const histories = require('../routes/histories');
//const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  //app.use('/api/auth', auth);
  app.use('/api/histories', histories);
//  app.use(error);
}