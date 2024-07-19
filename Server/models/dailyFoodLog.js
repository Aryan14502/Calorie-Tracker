const mongoose = require('mongoose');

const DailyFoodLogSchema = mongoose.Schema(
// DailyFoodLog Collection 
 {
    // _id: ObjectId,
    // userId: ObjectId,
    // date: {type : Date}, 
    meal: {type : String},
    protein: {type : String},
    id:{type : Number},
    title:{type : String},
    carbs: {type : String}, 
    fat: {type : String} ,
    calories: {type : Number},
    user_Id: {type : String},
    date : {type : Date}



    // other relevant metrics, such as water intake, exercise, etc.
  });

  const DailyFoodLog = mongoose.model('DailyFoodLog',DailyFoodLogSchema,'DailyFoodLog');
  module.exports = DailyFoodLog



//   {
//     "meal":"breakfast",
//     "calories": 210,
//     "carbs": "43g",
//     "fat": "3g",
//     "id": 90629,
//     "image": "https://img.spoonacular.com/recipes/90629-312x231.jpg",
//     "imageType": "jpg",
//     "protein": "1g",
//     "title": "Baked Apples in White Wine"
// }
