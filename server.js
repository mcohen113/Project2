const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')

const app = express();
const searchHolidays = require('./model/holidays');
const holidayFunction = searchHolidays();
const port = process.argv[2] || process.env.PORT || 3000;
// const homeRoute = require('./router/path');
// const theHolidays = require('./model/search');

app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }))

// const angryBirdsId = require('./routes/angrybirds_id');
// app.use('/', (req, res) => {
//   res.render("index");
// })

app.get('/', (req, res) => {
  res.render('index');

});

app.get('/holidays', holidayFunction.getSearchTerms, holidayFunction.searchHolidays, (req, res) => {
  // res.render('holidays', {
  //   test: res.searchedHoliday
  // });
  console.log('this is res data : ' + res.data)
  res.json(res.data)

});

app.post('/holidays', holidayFunction.searchHolidays, (req, res) => {
  res.send(res.data)
})



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

