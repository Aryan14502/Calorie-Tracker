# from pymongo import MongoClient
# import pandas as pd

# def fetch_and_preprocess_data():
#     # Connect to MongoDB
#     client = MongoClient('mongodb://localhost:27017/')
#     db = client["ImpactProject"]

#     # Retrieve collections
#     users_info = db['UserInfo']
#     food_log = db['FoodLog']

#     # Convert to DataFrames
#     users_df = pd.DataFrame(list(users_info.find()))
#     food_log_df = pd.DataFrame(list(food_log.find()))

#     # Preprocess food log data
#     # food_log_df = preprocess_food_logs(food_log_df)
#     print(food_log_df.columns)
#     return users_df, food_log_df

# def preprocess_food_logs(food_log_df):
#     # Convert date field to datetime format
#     food_log_df['date'] = pd.to_datetime(food_log_df['date'])

#     # Convert macronutrients to numeric values
#     food_log_df['totalCalories'] = pd.to_numeric(food_log_df['totalCalories'])
#     food_log_df['totalMacronutrients.protein'] = pd.to_numeric(food_log_df['totalMacronutrients.protein'].str.replace('g', ''))
#     food_log_df['totalMacronutrients.carbohydrates'] = pd.to_numeric(food_log_df['totalMacronutrients.carbohydrates'].str.replace('g', ''))
#     food_log_df['totalMacronutrients.fat'] = pd.to_numeric(food_log_df['totalMacronutrients.fat'].str.replace('g', ''))

#     return food_log_df

# # Fetch and preprocess data (use this as a script or import in model_training.py)
# if __name__ == "__main__":
#     users_df, food_log_df = fetch_and_preprocess_data()
#     food_log_df.to_csv('csvFiles/food_log_data.csv', index=False)
