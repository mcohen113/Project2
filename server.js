const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const session         = require('express-session');
const path            = require('path');
const cookieParser    = require('cookie-parser');
const methodOverride  = require('method-override');
const app = express();
const searchYears = require('./models/holidays');
// const { searchHolidays } = require('./model/search')();
const port = process.argv[2] || process.env.PORT || 3000;
const indexRouter     = require('./routes/index.js');
const authRouter    = require('./routes/auth');
const usersRouter     = require('./routes/users');
const holidaysRouter     = require('./routes/holidays');
// const musicRouter     = require('./routes/music');

const SECRET          = 'tacos3000';

app.use(logger('dev'));

app.set('view engine', 'ejs');
// app.set('views', './views');
// log requests to STDOUT
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }));

// middleware for method override
app.use(methodOverride('_method'));

// This is how we read the cookies sent over from the browser
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/holidays', holidaysRouter);


app.listen(port, () => console.log((app._router.stack), 'great job dude on PORT', port));
