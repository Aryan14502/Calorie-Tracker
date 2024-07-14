const mongoose = require('mongoose');


// const foodLogSchema = new mongoose.Schema({
    
      
//         calories: { type : Number}, 
//         carbs: {type :String}, 
//         fat: {type :String}, 
//         id: {type :Number}, 
//         image: {type :String}, 
//         imageType: {type :String},
//         protein: {type :String}, 
//         title: {type :String} ,
//         secondid:{type :Number}
      
// })


const foodLogSchema = new mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date},
  breakfast: [
    {
      foodItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' },
      quantity: { type: Number, required: true },
      measurementUnit: { type: String, required: true },
      macronutrients: {
        protein: { type: Number, required: true },
        carbohydrates: { type: Number, required: true },
        fat: { type: Number, required: true }
      },
      calories: { type: Number, required: true }
    }
  ],
  lunch: [
    {
      foodItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' },
      quantity: { type: Number, required: true },
      measurementUnit: { type: String, required: true },
      macronutrients: {
        protein: { type: Number, required: true },
        carbohydrates: { type: Number, required: true },
        fat: { type: Number, required: true }
      },
      calories: { type: Number, required: true }
    }
  ],
  dinner: [
    {
      foodItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' },
      quantity: { type: Number, required: true },
      measurementUnit: { type: String, required: true },
      macronutrients: {
        protein: { type: Number, required: true },
        carbohydrates: { type: Number, required: true },
        fat: { type: Number, required: true }
      },
      calories: { type: Number, required: true }
    }
  ],
  snacks: [
    {
      foodItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' },
      quantity: { type: Number, required: true },
      measurementUnit: { type: String, required: true },
      macronutrients: {
        protein: { type: Number, required: true },
        carbohydrates: { type: Number, required: true },
        fat: { type: Number, required: true }
      },
      calories: { type: Number, required: true }
    }
  ]
});

const FoodLog = mongoose.model('FoodLog', foodLogSchema,'FoodLog');

module.exports = FoodLog;