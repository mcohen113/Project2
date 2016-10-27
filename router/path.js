const router = require('express').Router();
const dbService = require('../model/search')

router.get('/', (req, res) => {
  res.render('index');

})

router.get('/', (req, res) =>
  res.render('holidays', {
    days: res.allHebCal,

  })

)
module.exports = router;
