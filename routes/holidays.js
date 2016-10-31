const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { searchHolidays }     = require('../services/hebcal');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');

const renderHolidayIndex = (req,res) => {
  res.render('holidays/index', {
    user: res.user,
    holidays: res.holidays || [],
    favorites: res.favorites || []
  });
};

router.get('/', authenticate, getFavorites, renderHolidayIndex);

router.post('/search', authenticate, searchHolidays, getFavorites, renderHolidayIndex);

router.delete('/favorites/:id', deleteFavorites, (req, res) => {
  res.redirect('/holidays');
});

router.post('/favorites', saveFavorite, (req, res) => {
  res.redirect('/holidays');
});

module.exports = router;
