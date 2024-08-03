

from flask_cors import CORS
from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import MinMaxScaler

import jsonpickle
# from flask import to_json

# from model_training import personalized_recommendations
# import model_training
# import data_preprocessing
from pymongo import MongoClient


from user_data import UserData
from meal_plan import MealPlan

from ideal_weight import IdealWeight







app = Flask(__name__)
CORS(app)


# def fetch_and_preprocess_data():
    # Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client["ImpactProject"]

    # Retrieve collections
users_info = db['UserInfo']
users_collection = db['Users'] 


# ===================================================================================================================================>



# =========================================================================================================================================

# meal_plan_model = RandomForestClassifier()
# recipe_model = CollaborativeFiltering()
# nutrition_model = DecisionTreeClassifier()
# progress_model = LinearRegression()
# 
# Define API endpoints
# @app.route('/daily_meal_plan', methods=['POST'])
# def daily_meal_plan():
#     user_input = request.get_json()
#     # Preprocess user input
#     X = preprocess_user_input(user_input)
#     # Make prediction
#     meal_plan = meal_plan_model.predict(X)
#     return jsonify({'meal_plan': meal_plan})

# @app.route('/recipe_suggestions', methods=['POST'])
# def recipe_suggestions():
#     user_input = request.get_json()
#     # Preprocess user input
#     X = preprocess_user_input(user_input)
#     # Make prediction
#     recipes = recipe_model.predict(X)
#     return jsonify({'recipes': recipes})

# @app.route('/nutrition_insights', methods=['POST'])
# def nutrition_insights():
#     user_input = request.get_json()
#     # Preprocess user input
#     X = preprocess_user_input(user_input)
#     # Make prediction
#     insights = nutrition_model.predict(X)
#     return jsonify({'insights': insights})

# @app.route('/progress_tracking', methods=['POST'])
# def progress_tracking():
#     user_input = request.get_json()
#     # Preprocess user input
#     X = preprocess_user_input(user_input)
#     # Make prediction
#     progress = progress_model.predict(X)
#     return jsonify({'progress': progress})
# ===================================================================================================================================>






























# ===================================================================================================================================>






# {
#   "_id": {
#     "$oid": "6697040f6997ecaa6aeb1cf9"
#   },
#   "userId": "google-oauth2|114640275108446951951",
#   "gender": "male",
#   "height": 56,
#   "weight": 48,
#   "baselineactivityLevel": "Not Very Active",
#   "users_goal": "Loose weight",
#   "goalweight": "60",
#   "birthdate": {
#     "$date": "2024-07-27T00:00:00.000Z"
#   },
#   "country": "India",
#     "healthProblems": "Diabetes",
#     "medicalHistory": "High Blood Pressure",
#     "foodRestrictions": "Gluten Free",
#     "foodPreferences": "Vegetarian",
#     "foodFrequency": "3 meals/day",
#     "ideal_weight" : 60
#   "__v": 0
# }



# =================================================================================================================================



import model_training


FOOD_CSV_PATH = 'csvFiles/food_nutrition_dataset.csv'
food_df = pd.read_csv(FOOD_CSV_PATH)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['ImpactProject']
users_info = db['UserInfo']

def get_user_info(user_id):
    user = users_info.find_one({"userId": user_id})
    if user:
        return user
    else:
        return {}

def recommend_foods(user_id):
    # Get user info from MongoDB
    # user_info = get_user_info(user_id)
    user_info =  {
      "_id": {
      "$oid": "6697040f6997ecaa6aeb1cf9"
      },
      "userId": "google-oauth2|114640275108446951951",
      "gender": "male",
      "height": 56,
      "weight": 48,
      "baselineactivityLevel": "Not Very Active",
      "users_goal": "Loose weight",
      "goalweight": "60",
      "birthdate": {
        "$date": "2024-07-27T00:00:00.000Z"
      },
      "country": "India",
      "healthProblems": "Diabetes",
      "medicalHistory": "High Blood Pressure",
      "foodRestrictions": "Gluten Free",
      "foodPreferences": "Vegetarian",
      "foodFrequency": "3 meals/day",
      "ideal_weight" : 60,
      "__v": 0
}
    
  


    # Generate recommendations using the model
    recommendations = model_training.generate_recommendations(food_df, user_info)
    
    return recommendations

@app.route('/mealrecommendation', methods=['GET'])
def mealrecommendation():
    
  userData =  {
    "_id": {
    "$oid": "6697040f6997ecaa6aeb1cf9"
    },
    "userId": "google-oauth2|114640275108446951951",
    "gender": "male",
    "height": 56,
    "weight": 48,
    "baselineactivityLevel": "Not Very Active",
    "users_goal": "Loose weight",
    "goalweight": "60",
    "birthdate": {
      "$date": "2024-07-27T00:00:00.000Z"
    },
    "country": "India",
    "healthProblems": "Diabetes",
    "medicalHistory": "High Blood Pressure",
    "foodRestrictions": "Gluten Free",
    "foodPreferences": "Vegetarian",
    "foodFrequency": "3 meals/day",
    "ideal_weight" : 60,
    "__v": 0
}
  # user_id = request.form['user_id'] 
  user_id = userData["userId"]
  recommendations = recommend_foods(user_id)
  return jsonify(recommendations.to_dict(orient='records'))


# ========================================================================================================================================================================================================


# =========================================================================
cursor = [
     
  {
    "location": "New York",

    "healthProblems": "Diabetes",
    "medicalHistory": "High Blood Pressure",
    "foodRestrictions": "Gluten Free",
    "foodPreferences": "Vegetarian",
    "foodFrequency": "3 meals/day",
    "height": 170,
    "weight": 65,
    "gender": "Male",
    "goals": "Weight Loss",
    "ideal_weight" : 60

    
  },
  {
    "location": "Los Angeles",
    "healthProblems": "Hypothyroidism",
    "medicalHistory": "None",
    "foodRestrictions": "None",
    "foodPreferences": "Omnivore",
    "foodFrequency": "4 meals/day",
    "height": 180,
    "weight": 70,
    "gender": "Female",
    "goals": "Muscle Gain",
    "ideal_weight" : 60

  },
  {
    "location": "Chicago",
    "healthProblems": "High Cholesterol",
    "medicalHistory": "Heart Disease",
    "foodRestrictions": "Low Fat",
    "foodPreferences": "Vegan",
    "foodFrequency": "2 meals/day",
    "height": 165,
    "weight": 60,
    "gender": "Male",
    "goals": "Lower Cholesterol",
    "ideal_weight" : 70

  },
  {
    "location": "Houston",
    "healthProblems": "None",
    "medicalHistory": "None",
    "foodRestrictions": "None",
    "foodPreferences": "Omnivore",
    "foodFrequency": "3 meals/day",
    "height": 175,
    "weight": 65,
    "gender": "Female",
    "goals": "Healthy Eating",
    "ideal_weight" : 60

  },
  {
    "location": "Phoenix",
    "healthProblems": "Diabetes",
    "medicalHistory": "High Blood Pressure",
    "foodRestrictions": "Low Carb",
    "foodPreferences": "Vegetarian",
    "foodFrequency": "4 meals/day",
    "height": 170,
    "weight": 65,
    "gender": "Male",
    "goals": "Blood Sugar Control",
    "ideal_weight" : 60

  },
  {
    "goals": "Blood Pressure Control",
    "location": "Philadelphia",
    "healthProblems": "Hypertension",
    "medicalHistory": "Kidney Disease",
    "foodRestrictions": "Low Sodium",
    "foodPreferences": "Omnivore",
    "foodFrequency": "3 meals/day",
    "height": 165,
    "weight": 60,
    "gender": "Female",
    
    "ideal_weight" : 60

  },
  {
    "location": "San Antonio",
    "healthProblems": "None",
    "medicalHistory": "None",
    "foodRestrictions": "None",
    "foodPreferences": "Vegan",
    "foodFrequency": "2 meals/day",
    "height": 180,
    "weight": 70,
    "gender": "Male",
    "goals": "Weight Gain",
    "ideal_weight" : 60

  },
  {
    "location": "San Diego",
    "healthProblems": "High Cholesterol",
    "medicalHistory": "Heart Disease",
    "foodRestrictions": "Low Fat",
    "foodPreferences": "Omnivore",
    "foodFrequency": "3 meals/day",
    "height": 170,
    "weight": 65,
    "gender": "Female",
    "goals": "Lower Cholesterol",
    "ideal_weight" :60

  },
  {
    "location": "Dallas",
    "healthProblems": "Diabetes",
    "medicalHistory": "High Blood Pressure",
    "foodRestrictions": "Low Carb",
    "foodPreferences": "Vegetarian",
    "foodFrequency": "4 meals/day",
    "height": 175,
    "weight": 65,
    "gender": "Male",
    "goals": "Blood Sugar Control",
    "ideal_weight" : 50

  },
  {
    "location": "San Jose",
    "healthProblems": "Hypothyroidism",
    "medicalHistory": "None",
    "foodRestrictions": "None",
    "foodPreferences": "Omnivore",
    "foodFrequency": "3 meals/day",
    "height": 165,
    "weight": 60,
    "gender": "Female",
    "goals": "Thyroid Support",
    "ideal_weight" : 50
  }
  
]
data = pd.DataFrame(list(cursor))




# Ideal Weight(What should be the users Goal Weight)

@app.route('/predictIdealWeight', methods=['POST'])
def predict():
    #     user_data = {
    #     'height': float(request.form['height']),
    #     'weight': float(request.form['weight']),
    #     'gender': request.form['gender'],
    #     'healthProblems': request.form['healthProblems'],
    #     'foodPreferences': request.form['foodPreferences'],
    #     'foodRestrictions': request.form['foodRestrictions'],
    #     'goals': request.form['goals']
    # }
        
        user_data =  {
        "_id": {
        "$oid": "6697040f6997ecaa6aeb1cf9"
        },
        "userId": "google-oauth2|114640275108446951951",
        "gender": "male",
        "height": 66,
        "weight": 50,
        "age":30,
        "baselineactivityLevel": "lightly active",
        "users_goal": "Loose weight",
        "goalweight": "60",
        "birthdate": {
          "$date": "2024-07-27T00:00:00.000Z"
        },
        "country": "India",
        "healthProblems": "Diabetes",
        "medicalHistory": "High Blood Pressure",
        "foodRestrictions": "Gluten Free",
        "foodPreferences": "Vegetarian",
        "foodFrequency": "3 meals/day",
        "ideal_weight" : 60,
        "__v": 0
    }
        
        

        ideal_weight = IdealWeight(user_data["height"],user_data["weight"],user_data["age"],user_data["gender"],user_data["baselineactivityLevel"],user_data["healthProblems"])
        calculatedIdealWeight = ideal_weight.calculate_ideal_weight()

        

       
        print(calculatedIdealWeight)
        # print(jsonify(round(predicted_weight, 2)))
        return jsonify({
        'goalWeight': round(calculatedIdealWeight, 2),
       
    })



# ========================================================================================================================================================================================================

from nutrition_predictor import NutritionPredictor
@app.route('/predictCalorieAndMacroNutrients',methods=['POST'])
def predictCalorieAndMacroNutrients():
    
      user_info =  {
        "_id": {
        "$oid": "6697040f6997ecaa6aeb1cf9"
        },
        "userId": "google-oauth2|114640275108446951951",
        "gender": "M",
        "height": 66,
        "weight": 50,
        "age":30,
        "activity": "Light",
        "users_goal": "Loose weight",
        "goalweight": "60",
        "birthdate": {
          "$date": "2024-07-27T00:00:00.000Z"
        },
        "country": "India",
        "healthProblems": "Diabetes",
        "medicalHistory": "High Blood Pressure",
        "foodRestrictions": "Gluten Free",
        "foodPreferences": "Vegetarian",
        "foodFrequency": "3 meals/day",
        "ideal_weight" : 60,
        "__v": 0
    }

      # user_info = request.get_json()
      dataset = pd.read_csv('csvFiles/user_nutrition_dataset (2).csv')
      predictor = NutritionPredictor()
      predictor.train_model(dataset)
      prediction = predictor.predict(user_info)
      return jsonify(prediction)
    

# ========================================================================================================================================================================================================




@app.route('/recommend', methods=['GET'])
def recommend():


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
    print(f"Dinner: {meal_plan_data['dinner']['calories']} calories, {round(meal_plan_data['dinner']['protein'],2)}g protein, {meal_plan_data['dinner']['carbohydrates']}g carbohydrates, {meal_plan_data['dinner']['fat']}g fat")
    print(f"Snacks: {meal_plan_data['snacks']['calories']} calories, {round(meal_plan_data['snacks']['protein'],2)}g protein, {meal_plan_data['snacks']['carbohydrates']}g carbohydrates, {meal_plan_data['snacks']['fat']}g fat")

   
    return jsonify(meal_plan_data)
    # return jsonify({"helloworld" : "helo"})
if __name__ == '__main__':
    app.run(debug=True)




















    # before exception
            # print(users_df)
            # food_log_df.to_csv('csvFiles/food_log_data.csv', index=False)
            # print("executed")
            # recommendations = model_training.personalized_recommendations(user_id)
            # return jsonify(recommendations.to_dict(orient='records'))
            # return jsonify({'recommendation': recommendation})