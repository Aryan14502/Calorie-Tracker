// const cron = require('node-cron');
// const cronTest = require('cron-test');

// const dailyFoodLogMapper = require('./utils/mappers/dailyFoodLogMapper');
// const FoodLog = require('./models/foodLog');
// import DailyFoodLog from "../../models/dailyFoodLog";

// async function getDailyFoodLogData() {

//     const dailyFoodLogs = await DailyFoodLog.find().exec();
//     return dailyFoodLogs;

//   }




// async function scheduleDailyFoodLog() {
    // try {
    //   const dailyFoodLogData = await getDailyFoodLogData();
    //   const transformedData = dailyFoodLogMapper(dailyFoodLogData);
    //   const foodLog = new FoodLog(transformedData);
    //   await foodLog.save();
    //   console.log('Daily food log saved successfully');
    // } catch (error) {
    //   console.error('Error saving daily food log:', error);
    // }
    // console.log("Good night")
  // }

//   cron.schedule('0 1 * * *', scheduleDailyFoodLog);
// cron.schedule('*/1 * * * *',  () => {
//     scheduleDailyFoodLog();});


// const cron = require('node-cron');

// cron.schedule('0 0 * * *', () => {
//   console.log('Running scheduling script...');
//   // Your scheduling logic here
// });
