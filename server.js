const express = require('express');
const logger = require('morgan');

const path = require('path');
// const homeRoute = require('./path/index');
// const angryBirds = require('./router/search');
// const angryBirdsId = require('./routes/angrybirds_id');

const app = express();
const port = process.env.PORT || 3000;
app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', 'views');

// app.use('/', homeRoute);
// app.use('/', search);


// app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('great job dude on PORT', port));

