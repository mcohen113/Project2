const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');

const searchYears  = require('../models/holidays');

// router.get('/', searchYears, (req, res) => {
//   console.log('this is res data : ' + res.data);
//   res.json(res.data);
// });

router.post('/both', searchYears, (req, res) => {
  res.json({
    holiday: res.holidays,
  });
});


// router.get('/', authenticate, getFavorites, (req, res) => {
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

module.exports = router;
