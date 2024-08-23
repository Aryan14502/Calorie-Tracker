import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./diet.css";
import { IonButton, IonLoading, useIonLoading } from "@ionic/react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "../../../axios";

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
  // const apiKey = "3ffb6fa2920e40b9b74433a1c86bf79a";
  const apiKey = "e74fd2b34e6146f495621c78751aec4d";

  // : e74fd2b34e6146f495621c78751aec4d
  

  // const breakfast = {
  //   calories: 551.1,
  //   protein: 41.4,
  //   carbohydrates: 62.1,
  //   fat: 15.3,
  //   recipes: [
  //     'Scrambled Eggs with Whole Wheat Toast',
  //     'Greek Yogurt with Berries and Granola',
  //     'Avocado Toast with Poached Eggs',
  //   ],
  // };
  const [breakfast, setBreakfast] = useState({});
  const [lunch, setLunch] = useState({});
  const [dinner, setDinner] = useState({});

  // const lunch = {
  //   calories: 734.8,
  //   protein: 55.2,
  //   carbohydrates: 82.8,
  //   fat: 20.4,
  //   recipes: [
  //     'Grilled Chicken Breast with Quinoa and Vegetables',
  //     'Lentil Soup with Whole Grain Bread',
  //     'Turkey and Avocado Wrap with Carrot Sticks',
  //   ],
  // };

  // const dinner = {
  //   calories: 551.1,
  //   protein: 41.4,
  //   carbohydrates: 62.1,
  //   fat: 15.3,
  //   recipes: [
  //     'Baked Salmon with Roasted Vegetables and Quinoa',
  //     'Grilled Turkey Burger with Sweet Potato Fries',
  //     'Vegetable Stir-Fry with Tofu and Brown Rice',
  //   ],
  // };

  const [isData, setData] = useState(false);
  const [mealPlanData, setMealPlanData] = useState({});
  const { user } = useAuth0();
  const [usersInfo, setUsersInfo] = useState({});
  const [needsData, setNeedsdata] = useState({});
  const [tru, setTru] = useState(false);

  const [breakfastRecipes, setBreakfastRecipes] = useState([]);
  const [lunchRecipes, setLunchRecipes] = useState([]);
  const [dinnerRecipes, setDinnerRecipes] = useState([]);

  useEffect(() => {
    const storedUsersInfo = localStorage.getItem("usersInfo");

    if (storedUsersInfo) {
      const parsedUsersInfo = JSON.parse(storedUsersInfo);

      setUsersInfo(parsedUsersInfo);
      setNeedsdata({
        calorieneeds: parsedUsersInfo.calorie_needs,
        macronutrientsgoals: [
          parsedUsersInfo.protein,
          parsedUsersInfo.carbs,
          parsedUsersInfo.fat,
        ],
      });
      setTru(true);
    } else {
    }
  }, []);

  useEffect(() => {
    console.log("needsData");
    console.log(needsData);

    const fetchRecommendations = async () => {
      try {
        const userId = user?.sub;
        console.log(userId);
        const response = await axios.post(
          `http://localhost:5000/recommend`,
          needsData
        );
        // const data = response;
        console.log(response.data);
        setMealPlanData(response.data);
        localStorage.setItem(
          "breakfast_needs",
          JSON.stringify(response.data.breakfast)
        );
        localStorage.setItem(
          "lunch_needs",
          JSON.stringify(response.data.lunch)
        );
        localStorage.setItem(
          "dinner_needs",
          JSON.stringify(response.data.dinner)
        );

        // setRecommendations(response.data.recommendations);
        // setProgress(response.data.progress);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();

    function fetchBreakFastRecipes(bfrecipes) {
      setBreakfast(bfrecipes);

      const url = `https://api.spoonacular.com/recipes/findByNutrients?&apiKey=${apiKey}&cuisine="Indian"&maxCalories=${bfrecipes?.calories}&maxCarbs=${bfrecipes?.carbohydrates}&maxProtein=${bfrecipes?.protein}&maxFat=${bfrecipes?.fat}&number=5`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setBreakfastRecipes(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    function fetchLunchRecipes(lrecipes) {
      setLunch(lrecipes);

      const url = `https://api.spoonacular.com/recipes/findByNutrients?&apiKey=${apiKey}&cuisine="Indian"&maxCalories=${lrecipes?.calories}&maxCarbs=${lrecipes?.carbohydrates}&maxProtein=${lrecipes?.protein}&maxFat=${lrecipes?.fat}&number=5`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLunchRecipes(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function fetchDinnerRecipes(drecipes) {
      setDinner(drecipes);

      const url = `https://api.spoonacular.com/recipes/findByNutrients?&apiKey=${apiKey}&cuisine="Indian"&maxCalories=${drecipes?.calories}&maxCarbs=${drecipes?.carbohydrates}&maxProtein=${drecipes?.protein}&maxFat=${drecipes?.fat}&number=5`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDinnerRecipes(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    fetchBreakFastRecipes(JSON.parse(localStorage.getItem("breakfast_needs")));
    fetchLunchRecipes(JSON.parse(localStorage.getItem("lunch_needs")));
    fetchDinnerRecipes(JSON.parse(localStorage.getItem("dinner_needs")));

    // const handleSearchClick = (e) => {
    //   let search = searchInputRef.current.value;

    //   // let search = searchInputRef.current.value;
    // const apiKey = "3ffb6fa2920e40b9b74433a1c86bf79a";
    // const url = `https://api.spoonacular.com/recipes/findByNutrients?query=${search}&apiKey=${apiKey}&cuisine=${cuisine}`;
    //   // console.log(search);

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setSearchResults(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // };

    setTimeout(() => {
      setData(!isData);
    }, 3000);
  }, [needsData]);

  return (
    <Card>
      {/* <div className="meal-plan"> */}
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

      {/* <h1 className="meal-plan-title">Meal Plan:</h1>

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
      </div> */}

      <div>
        <h2>Meal Plan</h2>
        <section>
          <h3>Breakfast</h3>
          <ul>
            <li>Calories: {breakfast?.calories}</li>
            <li>Protein: {breakfast?.protein}g</li>
            <li>Carbohydrates: {breakfast?.carbohydrates}g</li>
            <li>Fat: {breakfast?.fat}g</li>
          </ul>
          <h4>Recipes:</h4>
          <ul>
            {breakfastRecipes.map((recipe, index) => (
              <li key={index}>
                {recipe.title}
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  width="40"
                  height="40"
                />
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Lunch</h3>
          <ul>
            <li>Calories: {lunch?.calories}</li>
            <li>Protein: {lunch?.protein}g</li>
            <li>Carbohydrates: {lunch?.carbohydrates}g</li>
            <li>Fat: {lunch?.fat}g</li>
          </ul>
          <h4>Recipes:</h4>
          <ul>
            {lunchRecipes.map((recipe, index) => (
              <li key={index}>
                {recipe.title}
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  width="40"
                  height="40"
                />
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Dinner</h3>
          <ul>
            <li>Calories: {dinner?.calories}</li>
            <li>Protein: {dinner?.protein}g</li>
            <li>Carbohydrates: {dinner?.carbohydrates}g</li>
            <li>Fat: {dinner?.fat}g</li>
          </ul>
          <h4>Recipes:</h4>
          <ul>
            {dinnerRecipes.map((recipe, index) => (
              <li key={index}>
                {recipe.title}
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  width="40"
                  height="40"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Card>
  );
}

export default Diet;
