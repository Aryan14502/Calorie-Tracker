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
    "goalweight" : String,
    "birthdate" : Date,
    "country":String,

});

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