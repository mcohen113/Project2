const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');

// const searchYears  = require('../models/holidays');

// router.get('/', searchYears, (req, res) => {
//   console.log('this is res data : ' + res.data);
//   res.json(res.data);
// });

const { searchYears,
        getFavorites,
        saveHoliday,
        deleteHolidays } = require('../models/holidays');

router.post('/search', searchYears, (req, res) => {
  res.render('holidays/search', {
    holidays: res.holidays,
    user: { username: 'chaim' },
    favorites: [],
  });
});





router.get('/', authenticate, getFavorites, (req, res) => {
  res.render('holidays/index', {
    user: res.user,
    results: res.results || [],
    holidays: res.holidays || []
  });
});

router.post('/search', authenticate, searchYears, getFavorites, (req,res) => {
  res.render('holidays/index', {
    user: res.user,
    results: res.results || [],
    holidays: res.holidays || []
  });
});

router.delete('/holidays/:id', deleteHolidays, (req, res) => {
  res.redirect('/holiday');
});

router.post('/holidays', saveHoliday, (req, res) => {
  res.redirect('/holiday');
});

module.exports = router;

// router.get('/', authenticate, getholidays, (req, res) => {
//   res.render('music/index', {
//     user: res.user,
//     results: res.results || [],
//     favorites: res.favorites || []
//   });
// });

// router.post('/search', authenticate, searchMusic, getFavorites, (req,res) => {
//   res.render('music/index', {
//     user: res.user,
//     results: res.results || [],
//     favorites: res.favorites || []
//   });
// });

// router.delete('/favorites/:id', deleteFavorites, (req, res) => {
//   res.redirect('/music');
// });

// router.post('/favorites', saveFavorite, (req, res) => {
//   res.redirect('/music');
// });

// module.exports = router;
