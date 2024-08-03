from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error, r2_score

app = Flask(__name__)

class NutritionPredictor:
    def __init__(self):
        self.model = None
        self.preprocessor = None
    
    def prepare_data(self, df):
        # Separate features and targets
        X = df[['age', 'gender', 'height', 'weight', 'activity']]
        y = df[['calorie_needs', 'protein', 'fat', 'carbs']]
        return X, y
    
    def build_model(self):
        # Create preprocessor
        categorical_features = ['gender', 'activity']
        numeric_features = ['age', 'height', 'weight']
        
        categorical_transformer = OneHotEncoder(drop='first')
        
        preprocessor = ColumnTransformer(
            transformers=[
                ('num', 'passthrough', numeric_features),
                ('cat', categorical_transformer, categorical_features)
            ])
        
        # Create and return the model pipeline
        model = Pipeline([
            ('preprocessor', preprocessor),
            ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))
        ])
        
        return model
    
    def train_model(self, df):
        X, y = self.prepare_data(df)
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.1, random_state=42)
        
        self.model = self.build_model()
        self.model.fit(X_train, y_train)
        
        # Evaluate the model
        y_pred = self.model.predict(X_test)
        mse = mean_squared_error(y_test, y_pred)
        r2 = r2_score(y_test, y_pred)
        
        print(f"Mean Squared Error: {mse}")
        print(f"R-squared Score: {r2}")
    
    def predict(self, user_info):
        if self.model is None:
            raise ValueError("Model hasn't been trained yet. Call train_model first.")
        
        user_df = pd.DataFrame([user_info])
        predictions = self.model.predict(user_df)
        
        return {
            'calorie_needs': round(predictions[0][0]),
            'protein': round(predictions[0][1]),
            'fat': round(predictions[0][2]),
            'carbs': round(predictions[0][3])
        }