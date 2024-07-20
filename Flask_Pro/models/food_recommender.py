from surprise import KNNWithMeans
from surprise import Dataset
from surprise.model_selection import train_test_split
from utils.data_loader import load_food_data, load_user_data
from utils.feature_extractor import create_feature_vector

class FoodRecommender:
    def __init__(self):
        self.food_data = load_food_data()
        self.user_data = load_user_data()
        self.model = KNNWithMeans(k=50, sim_options={'name': 'pearson_baseline', 'user_based': False})

    def train_model(self):
        data = []
        for user in self.user_data.find():
            for food in self.food_data.itertuples():
                feature_vector = create_feature_vector(user['_id'], user['foodPreferences'], user['foodRestrictions'])
                data.append({
                    'user_id': user['_id'],
                    'food_id': food.Index,
                    'rating': 0  # Initialize rating as 0
                })
        data = pd.DataFrame(data)
        data = Dataset.load_from_df(data, rating_scale=(1, 5))
        trainset, testset = train_test_split(data, test_size=.25)
        self.model.fit(trainset)

    def get_recommendations(self, user_id, food_preferences, food_restrictions):
        self.train_model()
        feature_vector = create_feature_vector(user_id, food_preferences, food_restrictions)
        recommendations = []
        for food in self.food_data.itertuples():
            rating = self.model.predict(user_id, food.Index, feature_vector)
            recommendations.append({'food_id': food.Index, 'rating': rating})
        return recommendations