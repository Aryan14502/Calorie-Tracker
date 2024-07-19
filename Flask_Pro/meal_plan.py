# meal_plan.py

class MealPlan:
    def __init__(self, daily_calorie_needs, macro_nutrient_goals):
        self.daily_calorie_needs = daily_calorie_needs
        self.macro_nutrient_goals = macro_nutrient_goals

    def generate_meal_plan(self):
        breakfast_calories = self.daily_calorie_needs * 0.3
        lunch_calories = self.daily_calorie_needs * 0.4
        dinner_calories = self.daily_calorie_needs * 0.3
        snack_calories = self.daily_calorie_needs * 0.1

        breakfast_protein = self.macro_nutrient_goals[0] * 0.3
        lunch_protein = self.macro_nutrient_goals[0] * 0.4
        dinner_protein = self.macro_nutrient_goals[0] * 0.3
        snack_protein = self.macro_nutrient_goals[0] * 0.1

        breakfast_carbohydrates = self.macro_nutrient_goals[1] * 0.3
        lunch_carbohydrates = self.macro_nutrient_goals[1] * 0.4
        dinner_carbohydrates = self.macro_nutrient_goals[1] * 0.3
        snack_carbohydrates = self.macro_nutrient_goals[1] * 0.1

        breakfast_fat = self.macro_nutrient_goals[2] * 0.3
        lunch_fat = self.macro_nutrient_goals[2] * 0.4
        dinner_fat = self.macro_nutrient_goals[2] * 0.3
        snack_fat = self.macro_nutrient_goals[2] * 0.1

        meal_plan = {
            'breakfast': {
                'calories': breakfast_calories,
                'protein': breakfast_protein,
                'carbohydrates': breakfast_carbohydrates,
                'fat': breakfast_fat
            },
            'lunch': {
                'calories': lunch_calories,
                'protein': lunch_protein,
                'carbohydrates': lunch_carbohydrates,
                'fat': lunch_fat
            },
            'dinner': {
                'calories': dinner_calories,
                'protein': dinner_protein,
                'carbohydrates': dinner_carbohydrates,
                'fat': dinner_fat
            },
            'snacks': [
                {
                    'calories': snack_calories,
                    'protein': snack_protein,
                    'carbohydrates': snack_carbohydrates,
                    'fat': snack_fat
                }
            ]
        }
        return meal_plan