import React, {useState,useEffect} from "react";
import styled from "styled-components";
import './diet.css';
import { IonButton, IonLoading, useIonLoading } from '@ionic/react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from '../../../axios';

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border: 1px solid black;
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px black;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

const Heading = styled.h2`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 8px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;
function Diet() {


  const [isData, setData] = useState(false);
  const [mealPlanData,setMealPlanData] = useState({});
  const {user} = useAuth0()

  useEffect(()=>{

    const fetchRecommendations = async () => {
      try {
        const userId = user?.sub;
        console.log(userId)
        const response = await axios.get(`http://localhost:5000/recommend?user_id=${userId}`);
        // const data = response;
        console.log(response.data);
        setMealPlanData(response.data);
        
        // setRecommendations(response.data.recommendations);
        // setProgress(response.data.progress);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  

    setTimeout(()=>{

      setData(!isData)
    },3000)

  },[])

  return (
    <Card>
      <div className="meal-plan">
        {/* <h1 className="title ">User Recommendations:</h1> */}
        {/* <p className="daily-calorie-needs">
          Daily Calorie Intake: {dailyCalorieNeeds} calories
        </p>
        <h2 className="macro-nutrient-title">Macronutrient Breakdown:</h2>
        <ul className="macro-nutrient-list">
          <li>
            Protein: {macroNutrientGoals[0]}-
            {Math.round(macroNutrientGoals[0] * 1.2)} grams
          </li>
          <li>
            Carbohydrates: {macroNutrientGoals[1]}-
            {Math.round(macroNutrientGoals[1] * 1.2)} grams
          </li>
          <li>
            Fat: {macroNutrientGoals[2]}-
            {Math.round(macroNutrientGoals[2] * 1.2)} grams
          </li>
        </ul> */}

        






        <h1 className="meal-plan-title">Meal Plan:</h1>

        {isData ? (
        <ul className="meal-plan-list">
          <li>
            
           
            Breakfast: {mealPlanData.breakfast?.calories} calories,{" "}
      
            {mealPlanData.breakfast?.protein}g protein,{" "}
            {mealPlanData.breakfast?.carbohydrates}g carbohydrates,{" "}
            {mealPlanData.breakfast?.fat}g fat

          </li>
          <li>
            Lunch: {mealPlanData.lunch?.calories} calories,{" "}
            {mealPlanData.lunch?.protein}g protein,{" "}
            {mealPlanData.lunch?.carbohydrates}g carbohydrates,{" "}
            {mealPlanData.lunch?.fat}g fat

          </li>
          <li>
            Dinner: {mealPlanData.dinner?.calories} calories,{" "}
            {mealPlanData.dinner?.protein}g protein,{" "}
            {mealPlanData.dinner?.carbohydrates}g carbohydrates,{" "}
            {mealPlanData.dinner?.fat}g fat

          </li>
          <li>
            Snacks: {mealPlanData.snacks?.calories} calories,{" "}
            {mealPlanData.snacks?.protein}g protein,{" "}
            {mealPlanData.snack?.carbohydrates}g carbohydrates,{" "}
            {mealPlanData.snacks?.fat}g fat

          </li>
      
        </ul>
        ):(
          <div>

          <IonButton id="open-loading">Show Loading</IonButton>
          <IonLoading trigger="open" message="Loading..." duration={3000} spinner="circles" />
          </div>
        
        )}
      </div>
    </Card>
  );
}

export default Diet;
