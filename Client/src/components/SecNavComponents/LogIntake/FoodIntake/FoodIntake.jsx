import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./foodintake.css";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  // flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
function FoodIntake() {
  const location = useLocation();
  const navigate = useNavigate();
  const value = location.state?.value;
  const [matchingFood, setMathchingFood] = useState("");
  const [selectedFood, setSelectedFood] = useState({});
  const [servings, setServings] = useState(1);
  // const [matchingFoodId,setMathchingFoodId] = useState();

  const handleAddFoodToDiary = () => {
    navigate("/logintake", { state: { selectedFood, servings, value } });
  };

  const searchInputRef = React.createRef();
  const [searchResults, setSearchResults] = useState([]);
  const [cuisine,setCuisine] = useState("Indian");

  const handleSearchClick = (e) => {
    let search = searchInputRef.current.value;

    // let search = searchInputRef.current.value;
    const apiKey = "3ffb6fa2920e40b9b74433a1c86bf79a";
    const url = `https://api.spoonacular.com/recipes/findByNutrients?query=${search}&apiKey=${apiKey}&cuisine=${cuisine}&maxCarbs=100`;
    // console.log(search);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update the state with the search results
        // setSearchResults(data.results);
        setSearchResults(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // API KEY : 3ffb6fa2920e40b9b74433a1c86bf79a

  const handleChangeOfFood = (e) => {
    // setMathchingFood(event.current.value);
    // console.log(event.target.value);
    setMathchingFood(e.target.value);
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const selectedFoodData = searchResults.find(
      (result, index) => index === selectedIndex
    );
    // console.log(selectedFoodData);
    setSelectedFood(selectedFoodData);
    // console.log(selectedFood);
    // console.log(servings);
  };

  const handleChangeOfServings = (e) => {
    setServings(e.target.value);
  };

  const handleRegionChange = (e)=>{
    setCuisine(e.target.value);
    // console.log(cuisine)

  }
  return (
    <Container>
      <Wrapper>
        <h1> {value}</h1>

        <div className="region-select">
          <label for="region">Select Region:</label>
          <select
            id="region"
            onChange={(e) => {
              handleRegionChange(e);
            }}
          >
            <option value="">All Regions</option>
            <option value="Indian">Indian</option>
            <option value="American">American</option>
            <option value="Chinese">Chinese</option>
            <option value="Italian">Italian</option>
            {/* Add more region options as needed */}
          </select>
        </div>

        <div class="search-bar">
          <input
            type="text"
            placeholder="Search your Food:"
            ref={searchInputRef}
          />
          <button class="search-button" onClick={handleSearchClick}>
            ~ Search
          </button>
        </div>


        <div class="matching-foods">
          <h2>Matching Foods:</h2>

          <select
            id="select-matching-foods"
            onChange={(e) => {
              handleChangeOfFood(e);
            }}
          >
            {searchResults.map((result, index) => (
              <option key={index}>{result.title}</option>
            ))}
          </select>

          {/* <ul class="food-list">


            <li class="food-item">
              <div class="food-name">
                <h3>Poha</h3>
              </div>
              <div class="food-details">
                <p>1 cup, 158 calories</p>
              </div>
              <div class="food-check">
                <img src="check.png" alt="check-icon" />
              </div>
            </li>



            <li class="food-item">
              <div class="food-name">
                <h3>Bataka Poha</h3>
              </div>
              <div class="food-details">
                <p>Potato Poha, 1 bowl, 335 calories</p>
              </div>
            </li>
            <li class="food-item">
              <div class="food-name">
                <h3>Dry Poha</h3>
              </div>
              <div class="food-details">
                <p>Poha (Flattened Rice), 28 g, 90 calories</p>
              </div>
            </li>
            <li class="food-item">
              <div class="food-name">
                <h3>Poha</h3>
              </div>
              <div class="food-details">
                <p>Red Rice Poha, 100 Grams, 350 calories</p>
              </div>
            </li>
            <li class="food-item">
              <div class="food-name">
                <h3>Poha</h3>
              </div>
              <div class="food-details">
                <p>Doba Daidhani, 100 g, 300 calories</p>
              </div>
            </li>
          </ul> */}
        </div>

        <div class="food-details">
          <div class="food-name">
            <strong>{matchingFood}</strong>
          </div>
          <div class="food-quantity">
            <label for="quantity">How much? as 1 Serving is equal to 100grams</label>
            <select
              id="quantity"
              onChange={(e) => {
                handleChangeOfServings(e);
              }}
            >
              <option value="1.0">1.0 serving</option>
              <option value="2.0">2.0 </option>
              <option value="3">3 serving</option>
              <option value="4">4 serving</option>
              <option value="5">5 serving</option>
              <option value="6">6 serving</option>
            </select>
          </div>
          {/* <div class="food-meal">
            <label for="meal">To which meal?</label>
            <select id="meal">
              <option value="Breakfast">Breakfast</option>
            </select>
          </div> */}
          <button class="add-to-diary-button" onClick={handleAddFoodToDiary}>
            Add Food To Diary
          </button>
          {/* <button class="nutrition-info-button">Nutrition Info</button> */}
        </div>

        {/* <div class="not-found">
          <p>
            Can't find what you're looking for?{" "}
            <a href="#">Add a food to the database</a>
          </p>
        </div> */}
      </Wrapper>
    </Container>
  );
}

export default FoodIntake;

// react-select so that i can even showcase the image in the select options.
// import Select from 'eact-select';

// const options = searchResults.map((result, index) => ({
//   value: result.title,
//   label: (
//     <div>
//       <span>{result.title}</span>
//       <img src={result.image} alt={result.title} width="20" height="20" />
//     </div>
//   ),
// }));

// <Select id="select-matching-foods" onChange={handleChangeOfFood} options={options} />;
