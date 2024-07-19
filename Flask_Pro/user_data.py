# user_data.py

class UserData:
    def __init__(self, weight, height, gender, age, activity_level):
        self.weight = weight
        self.height = height
        self.gender = gender
        self.age = age
        self.activity_level = activity_level

    def get_bmr(self):
        if self.gender == 'male':
            return 66 + (6.2 * self.weight) + (12.7 * self.height) - (6.8 * self.age)
        else:
            return 655 + (4.35 * self.weight) + (4.7 * self.height) - (4.7 * self.age)

    def get_daily_calorie_needs(self):
        if self.activity_level == 'sedentary':
            return self.get_bmr() * 1.2
        elif self.activity_level == 'lightly active':
            return self.get_bmr() * 1.375
        elif self.activity_level == 'moderately active':
            return self.get_bmr() * 1.55
        elif self.activity_level == 'very active':
            return self.get_bmr() * 1.725
        else:
            return self.get_bmr() * 1.9

    def get_macro_nutrient_goals(self):
        protein_goal = self.weight * 1.6
        carbohydrate_goal = self.weight * 2
        fat_goal = self.weight * 0.5
        return protein_goal, carbohydrate_goal, fat_goal