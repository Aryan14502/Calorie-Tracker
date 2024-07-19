# from sklearn.neighbors import NearestNeighbors
# import pandas as pd


# file_path = 'csvFiles/food_log_data.csv'
# # Load preprocessed data
# food_log_df = pd.read_csv(file_path)

# # Prepare data for model
# user_food_matrix = pd.pivot_table(
#     food_log_df,
#     index='user_Id',
#     columns='date',
#     values='totalCalories',
#     fill_value=0
# )

# # Train collaborative filtering model
# model = NearestNeighbors(metric='cosine', algorithm='brute')
# model.fit(user_food_matrix)

# def get_similar_users(user_id, n=5):
#     distances, indices = model.kneighbors(user_food_matrix.loc[user_id].values.reshape(1, -1), n_neighbors=n)
#     return user_food_matrix.index[indices.flatten()]

# def personalized_recommendations(user_id):
#     user = food_log_df[food_log_df['user_Id'] == user_id].iloc[0]
#     similar_users = get_similar_users(user_id)
    
#     recommended_foods = []
#     for similar_user in similar_users:
#         similar_user_foods = food_log_df[food_log_df['user_Id'] == similar_user]
#         for _, food in similar_user_foods.iterrows():
#             if user['users_goal'].lower() == 'lose weight' and food['totalCalories'] < user['totalCalories'] * 0.8:
#                 recommended_foods.append(food)

#     recommended_foods_df = pd.DataFrame(recommended_foods).drop_duplicates()
#     return recommended_foods_df
