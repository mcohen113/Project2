// const { MongoClient } = require('mongodb');
// // const { ObjectId } =
// const dbConnection = 'mongodb://localhost:27017/savedholidays';

// module.exports = function yearFunction() {
// // throws all the data from the API up
//   const getSearchTerms = ( (req, res, next) => {
//     res.searchedHoliday = "PURIM"//req.query.title;
//     return next();
//   });//end getSearchedTerms

//   //search any year from 0001 onward


//   const searchYears = ( (req, res, next) => {
//     // const API_URL = `http://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=off&nx=off&year=now&month=x&ss=off&mf=off&c=off&geo=geoname&geonameid=3448439&m=50&s=off${res.searchedHoliday}`;
//     const API_URL = 'http://www.hebcal.com/hebcal/?v=1&cfg=json&min=off&mod=on&nx=on&month=x&'
//     fetch(`${API_URL}maj=${req.body.maj}`)
//     .then((apiResponse)=> {
//       return apiResponse.json()
//       // console.log('this is the api holiday response! ' + apiResponse.json())
//     } )
//     .then((result)=>{
//       res.data=result;
//       next();
//     })
//   })




// module.exports = { searchYears };
