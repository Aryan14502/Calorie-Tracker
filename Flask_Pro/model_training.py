import pandas as pd
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.linear_model import LinearRegression


def preprocess_food_data(food_df):
    # Convert necessary columns to numeric types
    # food_df['Food Name'] = food_df['Food Name']
    food_df['Calories'] = pd.to_numeric(food_df['Calories'])
    food_df['Protein (g)'] = pd.to_numeric(food_df['Protein (g)'])
    food_df['Fat (g)'] = pd.to_numeric(food_df['Fat (g)'])
    food_df['Carbohydrates (g)'] = pd.to_numeric(food_df['Carbohydrates (g)'])


    
  

    return food_df


def preprocess_user_data(user_data):
    # Convert categorical features to numeric
    # user_features = {
    #     'height': user_data['height'],
    #     'weight': user_data['weight'],
    #     'gender': user_data['gender'],
    #     'ideal_weight': user_data['ideal_weight'],
    # }

#         user_info =  {
#       "_id": {
#       "$oid": "6697040f6997ecaa6aeb1cf9"
#       },
#       "userId": "google-oauth2|114640275108446951951",
#       "gender": "male",
#       "height": 56,
#       "weight": 48,
#       "baselineactivityLevel": "Not Very Active",
#       "users_goal": "Loose weight",
#       "goalweight": "60",
#       "birthdate": {
#         "$date": "2024-07-27T00:00:00.000Z"
#       },
#       "country": "India",
#       "healthProblems": "Diabetes",
#       "medicalHistory": "High Blood Pressure",
#       "foodRestrictions": "Gluten Free",
#       "foodPreferences": "Vegetarian",
#       "foodFrequency": "3 meals/day",
#       "ideal_weight" : 60,
#       "__v": 0
# }
    


    # user_info = {
    #     'height': user_data['height'],
    #     'weight': user_data['weight'],
    #     'gender': user_data['gender'],
    #     'users_goal': user_data['users_goal'],
    #     'ideal_weight': user_data['ideal_weight'],
    #     "baselineactivityLevel":user_data['baselineactivityLevel'],
    #     "country": user_data['country'],
    #     "healthProblems": user_data['healthProblems'],
    #     "medicalHistory":user_data['medicalHistory'],
    #     "foodRestrictions": user_data['foodRestrictions'],
    #     "foodPreferences": user_data['foodPreferences'],
    #     "foodFrequency": user_data['foodFrequency'],
    # }

    user_features = {
        'Calories': 0,  # Placeholder values
        'Protein (g)': 0,
        'Fat (g)': 0,
        'Carbohydrates (g)': 0
    }
    return user_features
    
    return user_info

def generate_recommendations(food_df, user_data):

   
    food_df = preprocess_food_data(food_df)
    user_features = preprocess_user_data(user_data)
    
    user_features_df = pd.DataFrame([user_features])
    
    feature_columns = ['Calories', 'Protein (g)', 'Fat (g)', 'Carbohydrates (g)']
    
    scaler = StandardScaler()
    scaled_food_features = scaler.fit_transform(food_df[feature_columns])
    
    kmeans_food = KMeans(n_clusters=3, random_state=42)
    food_df['Cluster'] = kmeans_food.fit_predict(scaled_food_features)
    
    user_features_scaled = scaler.transform(user_features_df[feature_columns])
    user_cluster = kmeans_food.predict(user_features_scaled)
    user_features_df['Cluster'] = user_cluster[0]
    
    X = food_df[feature_columns]
    y = food_df['Calories']
    reg = LinearRegression().fit(X, y)
    
    cluster_food = food_df[food_df['Cluster'] == user_features_df['Cluster'].values[0]]
    
    predicted_ratings = reg.predict(cluster_food[feature_columns])
    cluster_food['Predicted Rating'] = predicted_ratings
    
    recommendations = cluster_food.sort_values(by='Predicted Rating', ascending=False)
    
    if user_data.get('foodRestrictions'):
        restrictions = user_data['foodRestrictions'].split(',')
        recommendations = recommendations[~recommendations['Food Name'].isin(restrictions)]
    if user_data.get('foodPreferences'):
        preferences = user_data['foodPreferences'].split(',')
        recommendations = recommendations[recommendations['Food Name'].str.contains('|'.join(preferences))]
    
    return recommendations[['Food Name', 'Calories', 'Protein (g)', 'Fat (g)', 'Carbohydrates (g)', 'Predicted Rating']]


# if __name__ == '__main__':
   
#     sample_food_df = pd.read_csv('csv_files/food_nutrition_dataset.csv')
#     sample_user_data = {
#         'height': 165,
#         'weight': 60,
#         'gender': 'Female',
#         'goal': 'Thyroid Support',
#         'ideal_weight': 50
#     }
#     recommendations = generate_recommendations(sample_food_df, sample_user_data)
#     print(recommendations)
