const express = require('express');
const logger = require('morgan');

const app = express();
const searchHolidays = require('./temp/holidays');
const holidayFunction = searchHolidays();
const port = process.argv[2] || process.env.PORT || 3000;
// const homeRoute = require('./router/path');
// const theHolidays = require('./model/search');

app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', './views');

// const angryBirdsId = require('./routes/angrybirds_id');
// app.use('/', (req, res) => {
//   res.render("index");
// })

app.get('/', (req, res) => {
  res.render('index');

});

app.get('/holidays', holidayFunction.getSearchTerms, (req, res) => {
  res.render('holidays', {
    test: res.searchedHoliday
  });

});



// app.get('/search', iTunesService.getSearchTerms, iTunesService.searchAlbums, dbService.getFavorites, (req, res)=> {
//   res.render('albums', {
//     searchedAlbums: res.data,
//     searchParams: res.searchedArtist,
//     favData: res.favData,
//   })
// })


// app.use('/', homeRoute);
// app.use('/', theHolidays);


// app.use(express.static(path.join(__dirname +, 'public')));

app.listen(port, () => console.log('great job dude on PORT', port));

