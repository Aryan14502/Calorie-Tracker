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
  user_Id: { type: String },
  date: { type: Date},
  breakfast: [
    {
      foodItemId: { type: String },
      foodItemTitle : {type : String},
      quantity: { type: Number, required: true },
      measurementUnit: { type: String, required: true },
      
        protein: { type: String, required: true },
        carbohydrates: { type: String, required: true },
        fat: { type: String, required: true },
    
      calories: { type: Number, required: true }
    }
  ],
  lunch: [
    {
      foodItemId: { type:String},
      foodItemTitle : {type : String},
      quantity: { type: Number, required: true },
      measurementUnit: { type: String, required: true },
    
        protein: { type: String, required: true },
        carbohydrates: { type: String, required: true },
        fat: { type: String, required: true }
      ,
      calories: { type: Number, required: true }
    }
  ],
  dinner: [
    {
      foodItemId: { type: String },
      foodItemTitle : {type : String},
      quantity: { type: Number, required: true },
      measurementUnit: { type: String, required: true },
     
        protein: { type: String, required: true },
        carbohydrates: { type: String, required: true },
        fat: { type: String, required: true }
      ,
      calories: { type: Number, required: true }
    }
  ],
  snacks: [
    {
      foodItemId: { type: Number },
      foodItemTitle : {type : String},
      quantity: { type: Number, required: true },
      measurementUnit: { type: String, required: true },
    
        protein: { type: String, required: true },
        carbohydrates: { type: String, required: true },
        fat: { type: String, required: true }
      ,
      calories: { type: Number, required: true }
    }
  ],
  totalCalories: {
    type: Number
  },
  totalMacronutrients: {
    protein: {
      type: String
    },
    carbohydrates: {
      type: String
    },
    fat: {
      type: String
    }
  }

});

const FoodLog = mongoose.model('FoodLog', foodLogSchema,'FoodLog');

module.exports = FoodLog;