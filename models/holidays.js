const fetch = require('node-fetch');
const lev = require('levenshtein');

const searchYears = (req, res, next) => {
  // const API_URL = `http://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=off&nx=off&year=now&month=x&ss=off&mf=off&c=off&geo=geoname&geonameid=3448439&m=50&s=off${res.searchedHoliday}`;
  const API_URL = 'http://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=on&nx=on&month=x&';
  const actualURL = `${API_URL}year=${req.body.year}`;
  fetch(actualURL)
    // .then((apiResponse) => {
    //   return apiResponse.json();
    // })
    .then(res => res.json())
    .then(holidaysObject => {
      let userHoliday = req.body.maj.toUpperCase();
      console.log('this is the api holiday response! ' , holidaysObject);
      res.holidays = holidaysObject.items.filter(item => {

        var itemName = item.link.substring(item.link.lastIndexOf('/') + 1);
        itemName = itemName.replace('-', ' ');
        itemName = itemName.toUpperCase();

        console.log('comparing', itemName, 'to', userHoliday);

        var distance = new lev(itemName, userHoliday).distance;

        console.log('distance determined to be', distance);

        if (distance > 3) return false;
        else return true;
      });
      console.log(res.holidays);
      next();
    });
};

module.exports = searchYears ;

//str.lastIndexOf(searchValue[, fromIndex])
//str.substring(indexStart[, indexEnd])
