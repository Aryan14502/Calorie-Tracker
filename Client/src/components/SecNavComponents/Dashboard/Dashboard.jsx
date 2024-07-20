import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { counts } from "../../../utils/DashboardRelated/data";
import CountsCard from "./CountsCard";
import WeeklyStatsCard from "./WeeklyStatsCard";
import CategoryChart from "./CategoryChart";
import AiComponent from "./AIComponent";
import { useAuth0 } from "@auth0/auth0-react";
import axios from '../../../axios';

// import './dashboard.css';
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const FoodFactContainer = styled.div`
  position: relative;
  width: 300px; /* adjust the width as needed */
  height: 200px; /* adjust the height as needed */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex; /* add this to center the content vertically */
  justify-content: center; /* add this to center the content horizontally */
  align-items: center; /* add this to center the content vertically */
`;

const FoodFact = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;
  text-align: center;
  padding: 20px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s, transform 0.5s;
  ${props => props.loaded && `
    opacity: 1;
    transform: translateY(0);
  `}
`;
const data = {
  totalWeeksCaloriesBurnt: {
    weeks: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    caloriesBurned: [1000, 1500, 1200, 1800, 2000],
  },
};

function Dashboard() {
  // const [data, setData] = useState("");
  const [userData, setUserData] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const {user} = useAuth0();

// ===========================================================================================
  // UseEffect For AI Component

  const [recommendations, setRecommendations] = useState([]);
  const [progress, setProgress] = useState({});
  const [mealData,setMealData] = useState({});
  

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const userId = user?.sub;
        console.log(userId)
        const response = await axios.get(`http://localhost:5000/recommend?user_id=${userId}`);
        // const data = response;
        console.log(response.data);
        setMealData(response.data);
        
        // setRecommendations(response.data.recommendations);
        // setProgress(response.data.progress);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

// ===========================================================================================


  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const token = await getAccessTokenSilently({
  //         scope: 'read:user_data',
  //       });
  //       const response = await axios.post('http://localhost:3001/userdata', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       const data = await response.json();
  //       setUserData(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchUserData();
  //   console.log("usersfulldata : ",{userData})
  // }, [getAccessTokenSilently]);




  console.log("Current user : ",{user});
  const data = {
    pieChartData: [
      { name: "Category 1", value: 10 },
      { name: "Category 2", value: 20 },
      { name: "Category 3", value: 30 },
    ],
    totalWeeksCaloriesBurnt: {
      weeks: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
      caloriesBurned: [1000, 1500, 1200, 1800, 2000],
    },
  };

  const [foodFact, setFoodFact] = useState('hello');
  const [loaded, setLoaded] = useState(true);

  // useEffect(() => {
  //   console.log('useEffect called')
  //   const apiKey = "3ffb6fa2920e40b9b74433a1c86bf79a";
  //   const url = `https://api.spoonacular.com/food/jokes/random?apiKey=${apiKey}`;
  //   // fetch the food fact data from an API or a database
    
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.text);

  //       // setFoodFact(data.);
  //       setLoaded(true);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  

  return (



    <Container>
      <Wrapper>
        <Title>{`Hii ${user?.name}, Welcome to Dashboard`}</Title>
        <FoodFactContainer >
          <FoodFact>{foodFact}</FoodFact>
        </FoodFactContainer>
        <FlexWrap>
          <CategoryChart what={"Carbohydrates"} data={data} />
          <AiComponent mealPlanData ={mealData} />
          {/* <CategoryChart what={"Proteins"}  data={data}/>
          <CategoryChart what={"Fats"}  data={data}/> */}
        </FlexWrap>

        <FlexWrap>
          <WeeklyStatsCard data={data} what={"gained"} chartColor={"#eb9e34"} />
          {counts.map((item) =>
            item.key2 == "gained" ? <CountsCard item={item} data={data} /> : ""
          )}
        </FlexWrap>

        <FlexWrap>
          <WeeklyStatsCard data={data} what={"burned"} chartColor={"#FF9AD5"} />
          {counts.map((item) =>
            item.key2 == "burned" ? <CountsCard item={item} data={data} /> : ""
          )}
        </FlexWrap>
      </Wrapper>
    </Container>
  );
}

export default Dashboard;
