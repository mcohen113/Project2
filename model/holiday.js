const fetch = require('node-fetch');


module.exports = function holidayFunction() {

  const getSearchTerms = ( (req, res, next) => {
    res.searchedHoliday = "PURIM"//req.query.title;
    return next();
  });//end getSearchedTerms

  const searchHolidays = ( (req, res, next) => {
    // const API_URL = `http://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=off&nx=off&year=now&month=x&ss=off&mf=off&c=off&geo=geoname&geonameid=3448439&m=50&s=off${res.searchedHoliday}`;
    const API_URL = 'http://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=on&nx=on&year=1999&month=x'
    fetch(API_URL)
    .then((r)=> r.json())
    .then((result)=>{
      res.data=result;
      next();
    })
  })//searchAlbums

  //http://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=on&nx=on&year=1999&month=x

  return { getSearchTerms, searchHolidays };
};//end iTunesService
