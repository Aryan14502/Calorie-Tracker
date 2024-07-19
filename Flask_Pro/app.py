from flask import Flask, request, jsonify
import pandas as pd

# from model_training import personalized_recommendations
# import model_training
# import data_preprocessing
from pymongo import MongoClient


from user_data import UserData
from meal_plan import MealPlan

app = Flask(__name__)


def fetch_and_preprocess_data():
    # Connect to MongoDB
    client = MongoClient('mongodb://localhost:27017/')
    db = client["ImpactProject"]

    # Retrieve collections
    users_info = db['UserInfo']
    # food_log = db['FoodLog']

    # Convert to DataFrames
    # users_df = pd.DataFrame(list(users_info.find()))
    # food_log_df = pd.DataFrame(list(food_log.find()))

    # Preprocess food log data
    # food_log_df = preprocess_food_logs(food_log_df)
    # print(food_log_df.columns)
    # return users_df, food_log_df

    print(users_info)
    return users_info

# def preprocess_food_logs(food_log_df):
#     # Convert date field to datetime format
#     food_log_df['date'] = pd.to_datetime(food_log_df['date'])

#     # Convert macronutrients to numeric values
#     food_log_df['totalCalories'] = pd.to_numeric(food_log_df['totalCalories'])
#     food_log_df['totalMacronutrients.protein'] = pd.to_numeric(food_log_df['totalMacronutrients.protein'].str.replace('g', ''))
#     food_log_df['totalMacronutrients.carbohydrates'] = pd.to_numeric(food_log_df['totalMacronutrients.carbohydrates'].str.replace('g', ''))
#     food_log_df['totalMacronutrients.fat'] = pd.to_numeric(food_log_df['totalMacronutrients.fat'].str.replace('g', ''))

    return food_log_df

@app.route('/recommend', methods=['GET'])
def recommend():
    user_id = request.args.get('user_id')
    print(user_id)
    # if not user_id:
    #     print("no user")
    #     return jsonify({"error": "user_id is required"}), 400
    
    try:
        # users_df= fetch_and_preprocess_data()
        user_data = UserData(70, 175, 'male', 25, 'sedentary')
        daily_calorie_needs = user_data.get_daily_calorie_needs()
        macro_nutrient_goals = user_data.get_macro_nutrient_goals()

        meal_plan = MealPlan(daily_calorie_needs, macro_nutrient_goals)
        meal_plan_data = meal_plan.generate_meal_plan()


        print("User Recommendations:")
        print(f"Daily Calorie Intake: {daily_calorie_needs} calories")
        print("Macronutrient Breakdown:")
        print(f"Protein: {macro_nutrient_goals[0]}-{'{:.0f}'.format(macro_nutrient_goals[0]*1.2)} grams")
        print(f"Carbohydrates: {macro_nutrient_goals[1]}-{'{:.0f}'.format(macro_nutrient_goals[1]*1.2)} grams")
        print(f"Fat: {macro_nutrient_goals[2]}-{'{:.0f}'.format(macro_nutrient_goals[2]*1.2)} grams")
        print("Meal Plan:")
        print(f"Breakfast: {meal_plan_data['breakfast']['calories']} calories, {meal_plan_data['breakfast']['protein']}g protein, {meal_plan_data['breakfast']['carbohydrates']}g carbohydrates, {meal_plan_data['breakfast']['fat']}g fat")
        print(f"Lunch: {meal_plan_data['lunch']['calories']} calories, {meal_plan_data['lunch']['protein']}g protein, {meal_plan_data['lunch']['carbohydrates']}g carbohydrates, {meal_plan_data['lunch']['fat']}g fat")
        print(f"Dinner: {meal_plan_data['dinner']['calories']} calories, {meal_plan_data['dinner']['protein']}g protein, {meal_plan_data['dinner']['carbohydrates']}g carbohydrates, {meal_plan_data['dinner']['fat']}g fat")
        print(f"Snacks: {meal_plan_data['snacks'][0]['calories']} calories, {meal_plan_data['snacks'][0]['protein']}g protein, {meal_plan_data['snacks'][0]['carbohydrates']}g carbohydrates, {meal_plan_data['snacks'][0]['fat']}g fat")


        return jsonify({'meal_plan': meal_plan_data})
        # print(users_df)
        # food_log_df.to_csv('csvFiles/food_log_data.csv', index=False)
        # print("executed")
        # recommendations = model_training.personalized_recommendations(user_id)
        # return jsonify(recommendations.to_dict(orient='records'))
    # return jsonify({'recommendation': recommendation})
    except Exception as e:
        # return jsonify({"error": str(e)}), 500
        error_response = {"error": {"message": str(e), "code": 500}}
        return jsonify(error_response), 500
    
    # finally:
    # # Ensure the response is closed
    #     response.close()

if __name__ == '__main__':
    app.run(debug=True)