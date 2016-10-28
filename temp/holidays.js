const fetch = require('node-fetch');


module.exports = function holidayFunction() {

  const getSearchTerms = ( (req, res, next) => {
    res.searchedHoliday = "PURIM"//req.query.title;
    return next();
  });//end getSearchedTerms

  // const searchAlbums = ( (req, res, next) => {
  //   const API_URL = `https://itunes.apple.com/search?term=${res.searchedArtist}&entity=album&medium=music`;
  //   fetch(API_URL).then((r)=> r.json()).then((result)=>{
  //     res.data=result;
  //     next();
  //   })
  // })//searchAlbums

  return {getSearchTerms};
};//end iTunesService
