const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const searchYears = require('./models/holidays');
// const { searchHolidays } = require('./model/search')();
const port = process.argv[2] || process.env.PORT || 3000;
const indexRouter     = require('./routes/index.js');
const authRouter    = require('./routes/auth');
const usersRouter     = require('./routes/users');
const holidaysRouter     = require('./routes/holidays');

app.use(logger('dev'));

app.set('view engine', 'ejs');
// app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('index');
});
// app.use(express.static(path.join(__dirname +, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/holidays', holidaysRouter);




app.listen(port, () => console.log((app._router.stack), 'great job dude on PORT', port));

