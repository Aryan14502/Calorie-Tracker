

class IdealWeight():

    def __init__(self,height,weight,age,gender,baselineactivitylevel,healthProblems):
        self.height=height * 0.0254
        self.weight=weight
        self.age=age
        self.gender=gender
        self.baselineactivitylevel=baselineactivitylevel
        self.healthProblems=healthProblems


    def calculate_bmi(self):
        bmi = self.weight / (self.height ** 2)
        return bmi
    
    def calculate_ideal_bmi(self, bmi):

        if self.gender == 'M':
            if bmi < 18.5:
                ideal_bmi = 18.5
            elif bmi < 25:
                ideal_bmi = 21.5
            else:
                ideal_bmi = 24.9
        else:
            if bmi < 18.5:
                ideal_bmi = 18.5
            elif bmi < 25:
                ideal_bmi = 21.0
            else:
                ideal_bmi = 24.5
        return ideal_bmi
    


    def calculate_activity_level_factor(self):

        
        factor = 0 
        if self.baselineactivitylevel == 'edentary':
            factor = 1.2
        elif self.baselineactivitylevel == 'lightly active':
            factor = 1.375
        elif self.baselineactivitylevel == 'oderately active':
            factor = 1.55
        elif self.baselineactivitylevel == 'ery active':
            factor = 1.725
        else:
            factor = 1.9
        return factor


    def calculate_health_conditions_factor(self):
        if self.healthProblems == 'none':
            factor = 1.0
        elif self.healthProblems == 'diabetes':
            factor = 0.9
        elif self.healthProblems == 'hypertension':
            factor = 0.95
        else:
            factor = 0.8
        return factor


    def calculate_ideal_weight(self):
        bmi = self.calculate_bmi()
        ideal_bmi = self.calculate_ideal_bmi(bmi)
        activity_level_factor = self.calculate_activity_level_factor()
        health_conditions_factor =self.calculate_health_conditions_factor()
        ideal_weight = ideal_bmi * (self.height ** 2)
        ideal_weight *= activity_level_factor
        ideal_weight *= health_conditions_factor
        return ideal_weight