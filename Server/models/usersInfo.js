// contains Users Health Info

const mongoose = require('mongoose');
const { ObjectId,Float } = require('mongoose').Types;

const UserInfoSchema = mongoose.Schema({
    // "_id": ObjectId,
    "userId": String, // reference to the Users collection
    "gender": String, 
    "height": Number, // in meters
    "weight": Number, // in kilograms
    "baselineactivityLevel": String, 
    "dietaryRestrictions": String, 
    "users_goal": String,
    "goalweight" : Number,
    "birthdate" : Date,
    "country":String,
    "healthProblems": String,
    "medicalHistory": String,
    "foodRestrictions": String,
    "foodPreferences": String,
    "foodFrequency": Number,
    "ideal_weight" : Number,

});
//  {
//      "_id": {
//         "$oid": "6697040f6997ecaa6aeb1cf9"
//       },
//       "userId": "google-oauth2|114640275108446951951",
//       "gender": "male",
//       "height": 56,
//       "weight": 48,
//       "baselineactivityLevel": "Not Very Active",
//      "users_goal": "Loose weight",
//       "goalweight": "60",
//       "birthdate": {
//         "$date": "2024-07-27T00:00:00.000Z"
//        },
//       "country": "India",
//         "healthProblems": "Diabetes",
//         "medicalHistory": "High Blood Pressure",
//        "foodRestrictions": "Gluten Free",
//        "foodPreferences": "Vegetarian",
//         "foodFrequency": "3 meals/day",
//         "ideal_weight" : 60
//       "__v": 0
//    }
const UserInfo = mongoose.model('UserInfo',UserInfoSchema,'UserInfo');
module.exports = UserInfo; 


// {
// "_id": ObjectId,
// "userId": ObjectId, // reference to the Users collection
// "gender": String, // male, female, other
// "age": Int,
// "height": Float, // in meters
// "weight": Float, // in kilograms
// "activityLevel": String, // sedentary, lightly active, moderately active, very active, extremely active
// "dietaryRestrictions": String, // e.g. vegetarian, gluten-free, etc.
// "healthGoals": String, // e.g. weight loss, muscle gain, etc.
// }