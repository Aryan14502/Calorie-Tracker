


// import DailyFoodLog from "../../models/dailyFoodLog";
// import FoodLog from "../../models/foodLog";
const dailyFoodLogMapper = (dailyFoodLogs) => {
    // The mapping logic goes here

  
    // async function transferData() {
        // const dailyFoodLogs = await DailyFoodLog.find().exec();
        console.log("in mapper daily food logs",dailyFoodLogs)
        const foodLogs = {};
        
      
        dailyFoodLogs.forEach((dailyFoodLog) => {
          const key = `${dailyFoodLog.user_Id}`;
          if (!foodLogs[key]) 
          {
            foodLogs[key] = {
              user_Id: dailyFoodLog.user_Id,
              date: dailyFoodLog.date,
              breakfast: [],
              lunch: [],
              dinner: [],
              snacks: [],
              totalCalories: 0,
              totalMacronutrients: {
                protein: "0g",
                carbohydrates: "0g",
                fat: "0g",
              },
            };
          }

          console.log("Foodlogs key",foodLogs[key]);
      
          // const mealData = {
          //   protein: dailyFoodLog.protein,
          //   carbohydrates: dailyFoodLog.carbs,
          //   fat: dailyFoodLog.fat,
          //   calories: dailyFoodLog.calories,
          // };
      
          switch (dailyFoodLog.meal) {
            case 'breakfast':
              foodLogs[key].breakfast.push({
                foodItemId: dailyFoodLog.id,
                foodItemTitle: dailyFoodLog.title,
                quantity: 1, // assume 1 serving
                measurementUnit: 'grams', // assume no measurement unit
                protein: dailyFoodLog.protein,
                carbohydrates: dailyFoodLog.carbs,
                fat: dailyFoodLog.fat,
                calories: dailyFoodLog.calories,
              });
              break;
            case 'lunch':
              foodLogs[key].lunch.push({
                foodItemId: dailyFoodLog.id,
                foodItemTitle: dailyFoodLog.title,
                quantity: 1, // assume 1 serving
                measurementUnit: 'grams', // assume no measurement unit
                protein: dailyFoodLog.protein,
                carbohydrates: dailyFoodLog.carbs,
                fat: dailyFoodLog.fat,
                calories: dailyFoodLog.calories,
              });
              break;
            case 'dinner':
              foodLogs[key].dinner.push({
                foodItemId: dailyFoodLog.id,
                foodItemTitle: dailyFoodLog.title,
                quantity: 1, // assume 1 serving
                measurementUnit: 'grams', // assume no measurement unit
                protein: dailyFoodLog.protein,
                carbohydrates: dailyFoodLog.carbs,
                fat: dailyFoodLog.fat,
                calories: dailyFoodLog.calories,
              });
              break;
            case 'snacks':
              foodLogs[key].snacks.push({
                foodItemId: dailyFoodLog.id,
                foodItemTitle: dailyFoodLog.title,
                quantity: 1, // assume 1 serving
                measurementUnit: 'grams', // assume no measurement unit
                protein: dailyFoodLog.protein,
                carbohydrates: dailyFoodLog.carbs,
                fat: dailyFoodLog.fat,
                calories: dailyFoodLog.calories,
              });
              break;
            default:
              console.error(`Unknown meal type: ${dailyFoodLog.meal}`);
          }
      
          foodLogs[key].totalCalories += dailyFoodLog.calories;
          foodLogs[key].totalMacronutrients.protein = `${parseInt(foodLogs[key].totalMacronutrients.protein.replace("g", ""))+parseInt(dailyFoodLog.protein.replace("g", ""))}g`;
          foodLogs[key].totalMacronutrients.carbohydrates =`${parseInt(foodLogs[key].totalMacronutrients.carbohydrates.replace("g", ""))+parseInt(dailyFoodLog.carbs.replace("g", ""))}g`;
          foodLogs[key].totalMacronutrients.fat = `${parseInt(foodLogs[key].totalMacronutrients.fat.replace("g", ""))+parseInt(dailyFoodLog.fat.replace("g", ""))}g`;
        });

        
      
        // Convert the foodLogs object to an array
        const foodLogsArray = Object.values(foodLogs);
        console.log("foodlogs array",foodLogsArray)

        return foodLogsArray;
      
        // Save the foodLogs to the database
        // await FoodLog.insertMany(foodLogsArray);
      }
//   };
  
  module.exports = dailyFoodLogMapper;
  