// const { MongoClient } = require('mongodb');
// // const { ObjectId } =
// const dbConnection = 'mongodb://localhost:27017/savedholidays';



// function searchHolidays (req, res, next) {
//   MongoClient.connect(dbConnection, (err, db) => {
//     if (err) return next(err);

//     db.collection('holidays')
//       .find()                 //pulls data from the mongodb
//       .toArray((arrayError, data) => { //sorts data into array
//         if (arrayError) return next(arrayError);

//         res.allHebCal = data;
//         db.close();
//         return next();

//       });
//   });
// }



// module.exports = { searchHolidays };
