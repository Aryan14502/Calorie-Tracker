import pandas as pd
from pymongo import MongoClient

def load_food_data():
    food_data = pd.read_csv('csvFiles/food_nutrition_dataset.csv')
    return food_data

def load_user_data():
    client = MongoClient('mongodb://localhost:27017/')
    db = client['ImpactProject']
    users_info = db['UserInfo']
    return users_info