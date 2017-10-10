const router              = require('express').Router();

const { searchHolidays }     = require('../services/hebcal');

router.post('/search', searchHolidays);

router.get('/', function(req, res){
  res.render('holidays');
});

module.exports = router;

