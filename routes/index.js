const express = require('express');

const indexRouter = express.Router();

// This is the route that serves your '/' homepage
indexRouter.get('/', (req, res) => {
  res.render('index');
});


module.exports = indexRouter;
