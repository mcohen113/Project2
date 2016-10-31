const fetch = require('node-fetch');
const lev = require('levenshtein');

const searchYears = (req, res, next) => {
  // const API_URL = `http://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=off&nx=off&year=now&month=x&ss=off&mf=off&c=off&geo=geoname&geonameid=3448439&m=50&s=off${res.searchedHoliday}`;
  const API_URL = 'http://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=on&nx=on&month=x&';
  const actualURL = `${API_URL}year=${req.body.year}`;
  fetch(actualURL)
    .then(res => res.json())
    .then(holidaysObject => {
      let userHoliday = req.body.maj.toUpperCase();
      console.log('this is the api holiday response! ' , holidaysObject);
      res.holidays = holidaysObject.items.filter(item => {

//grabbing last word in link for holiday
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
        var itemName = item.link.substring(item.link.lastIndexOf('/') + 1);
        itemName = itemName.replace('-', ' ');
        itemName = itemName.toUpperCase();

        console.log('comparing', itemName, 'to', userHoliday);
//https://en.wikipedia.org/wiki/Levenshtein_distance
//https://www.npmjs.com/package/levenshtein to measure edit distance between words, changing one word into another
        var distance = new lev(itemName, userHoliday).distance;
        console.log('distance determined to be', distance);
        if (distance > 3) return false;
        else return true;
      });
      console.log(res.holidays);
      next();
    });
};


function saveHoliday(req, res, next) {
  // creating an empty object for the insertObj
  const insertObj = {};

  // copying all of req.body into insertObj
  for(key in req.body) {
    insertObj[key] = req.body[key];
  }

  // Adding userId to insertObj
  insertObj.holiday.userId = req.session.userId;

  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
    db.collection('holidays')
      .insert(insertObj.holiday, (insertErr, result) => {
        if (insertErr) return next(insertErr);
        res.saved = result;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

// Delete method doesn't change because we are deleting objects from the database
// based on that object's unique _id - you do not need to specify which user as
// the _id is sufficient enough
function deleteHolidays(req, res, next) {
  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
    db.collection('holidays')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, result) => {
        if (removeErr) return next(removeErr);
        res.removed = result;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

module.exports = { searchYears, saveHoliday, deleteHolidays };

// module.exports = searchYears ;

//str.lastIndexOf(searchValue[, fromIndex])
//str.substring(indexStart[, indexEnd])
