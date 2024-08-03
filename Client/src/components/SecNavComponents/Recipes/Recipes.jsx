import React, { useState, useEffect } from "react";
import axios from "axios";
import "./recipes.css";
import { IonItem, IonLabel, IonSpinner } from "@ionic/react";
import {useNavigate}  from 'react-router-dom'
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
  // background-image: linear-gradient(to bottom, #c5c3c5, #7a288a); 
  // background-color:  #BCE3C5;
  
`;
const RecipeFinder = () => {
  const [userInfo, setUserInfo] = useState({
    location: "Indian",
    diet: "",
    intolerances: "",
  });
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };



  const fetchRecipes = async () => {
    
    setError(null);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?`,
        {
          params: {
            apiKey: "3ffb6fa2920e40b9b74433a1c86bf79a",
            ...userInfo,
            number: 12, // Number of recipes to fetch
          },
        }
      );
      setRecipes(response.data.results);
      console.log(recipes)
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    if(!userInfo.diet || !userInfo.intolerances)
    {
      alert("Fill the Requirements");
      setLoading(false)
    }else{
    setTimeout(() => {
      fetchRecipes();
    }, 3000);
  }
    
  };

  const handleCardClick = (recipe) => {
    console.log(`Card clicked: ${recipe.title}`);
    console.log(`Card id :${recipe.id}`)
    navigate('/ingredients',{state : {recipeid : recipe.id}})
    // Add your logic here to handle the card click
  };

  return (
    <div className="" style={{background: "linear-gradient(45deg, #E6E6FA, #D8BFD8, #E0B0FF)",height: "100%",  display: "flex", justifyContent: "center"}}>
    
    <div className="recipe-finder">
      <h1>Recipe Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          value={userInfo.location}
          onChange={handleInputChange}
          placeholder="Your location"
        />
        <input
          type="text"
          name="diet"
          value={userInfo.diet}
          onChange={handleInputChange}
          placeholder="Diet (e.g., vegetarian, vegan)"
        />
        <input
          type="text"
          name="intolerances"
          value={userInfo.intolerances}
          onChange={handleInputChange}
          placeholder="Intolerances (e.g., gluten, dairy)"
        />
        <button type="submit">Find Recipes</button>
      </form>

      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: "100vh",
          }}
        >
          <IonItem>
            <IonSpinner name="circular"></IonSpinner>
          </IonItem>
        </div>
      )}

</div>
      {error && <p className="error">{error}</p>}

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card" onClick={() => handleCardClick(recipe)}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </div >
        

    
    </div>

    
  );
};

export default RecipeFinder;

// import React from "react";
// import './recipes.css'
// import styled from "styled-components";

// const Container = styled.div`
//   flex: 1;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   padding: 22px 0px;
//   overflow-y: scroll;
// `;

// const Wrapper = styled.div`
//   flex: 1;
//   max-width: 1400px;
//   display: flex;
//   flex-direction: column;
//   gap: 22px;
//   @media (max-width: 600px) {
//     gap: 12px;
//   }
// `;

// const FlexWrap = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   gap: 22px;
//   padding: 0px 16px;
//   @media (max-width: 600px) {
//     gap: 12px;
//   }
// `;
// const Card = styled.div`
//   flex: 1;
//   min-width: 200px;
//   height: 300px;
//   padding: 24px;
//   //   border: 1px solid ${({ theme }) => theme.text_primary + 20};
//   border: 1px solid black;
//   border-radius: 14px;
//   display: flex;
//   gap: 6px;
//   //   box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
//   box-shadow: 1px 6px 20px 0px black;
// `;

// const Title = styled.div`
//   font-weight: 600;
//   font-size: 16px;
//   //   color: ${({ theme }) => theme.primary};
//   color: blue;

//   @media (max-width: 600px) {
//     font-size: 14px;
//   }
// `;

// function Recipes() {
//   return (
//     <Container>
//       <Wrapper>
//       <div class="search-bar">
//           <input type="text" placeholder="Search your recipes" />
//           <button class="search-button">Search</button>
//         </div>

//       <FlexWrap>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//       </FlexWrap>

//       <FlexWrap>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//       </FlexWrap>

//       <FlexWrap>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//         <Card>
//           <Title> Recipe</Title>
//         </Card>
//       </FlexWrap>

//       </Wrapper>
//     </Container>
//   );
// }

// export default Recipes;
