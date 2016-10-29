const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const { searchYears } = require('./model/holidays')();
// const holidayFunction = searchHolidays();

const port = process.argv[2] || process.env.PORT || 3000;
// const homeRoute = require('./router/path');
// const theHolidays = require('./model/search');

app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('index');
});
// app.use(express.static(path.join(__dirname +, 'public')));

app.get('/holidays', searchYears, (req, res) => {
  console.log('this is res data : ' + res.data);
  res.json(res.data);
});

app.post('/holidays/both', searchYears, (req, res) => {
  res.json({
    holiday: res.holidays,
  });
});

app.listen(port, () => console.log('great job dude on PORT', port));

