const router              = require('express').Router();

const { searchHolidays }     = require('../services/hebcal');

const renderHolidayIndex = (req,res) => {
  res.render('index', {
    holidays: res.holidays || [],
  });
};


// router.post('/search', searchHolidays);
router.post('/search', searchHolidays, renderHolidayIndex);

router.get('/', function(req, res){
  res.render('holidays');
});

module.exports = router;

