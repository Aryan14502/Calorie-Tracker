import React, { useState, useEffect,useContext } from "react";
import styled from "styled-components";
import { counts } from "../../../utils/DashboardRelated/data";
import CountsCard from "./CountsCard";
import WeeklyStatsCard from "./WeeklyStatsCard";
import CategoryChart from "./CategoryChart";
import AiComponent from "./AIComponent";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "../../../axios";
import Graph from "./Graph";
import zIndex from "@mui/material/styles/zIndex";
import UsersInfoContext from '../../../contexts/usersInfoContext';


// import './dashboard.css';
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
  backgroundColor : pink;
`;
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
  opacity: 1;
  position: relative; /* Add this */
  @media (max-width: 600px) {
    padding: 16px;
  }
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
    backgroundColor : pink;
`;

const Title = styled.div`
  min-height: 30px;
  height: 30px;
  font-size: 24px;
  font-weight: bold;
  color:  #6c5ce7; /* default color - a deep purple */
  margin-bottom: 16px;
  margin-left: 50px;
  text-shadow: 0px 0px 30px rgba(160, 32, 240, 0.7); /* purple text shadow */
  transition: all 0.3s ease-in-out;

 
  &:hover {
    // transform: scale(1.2);
    text-shadow: 0px 0px 30px rgba(160, 32, 240, 0.7); /* lighter purple hover text shadow */
    color: #6c5ce7; 
  }

  
  &:active {
    transform: scale(1.1);
    text-shadow: 0px 0px 20px rgba(128, 0, 128, 0.5); /* darker purple active text shadow */
    color: #7A288A; /* active color - same as default color */
  }

  
  animation: flash 2s infinite;
    @keyframes flash {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  contain: content;
  padding: 0px 16px;
  position: "relative",

  // overflow: visible;
  contain: content;
  @media (max-width: 600px) {
    gap: 12px;
  }
    
    backgroundColor : pink;

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
  ${(props) =>
    props.loaded &&
    `
    opacity: 1;
    transform: translateY(0);
  `}
`;
// const data = {
//   totalWeeksCaloriesBurnt: {
//     weeks: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
//     caloriesBurned: [1000, 1500, 1200, 1800, 2000],
//   },
// };

function Dashboard() {
  // const [data, setData] = useState("");
  const [userData, setUserData] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const { user } = useAuth0(); // Move useAuth0 to the top level
  const [userId, setUserId] = useState(null);
  const [isUserIdReady, setIsUserIdReady] = useState(false);
  const {remainingGoal} = useContext(UsersInfoContext)
  const [usersInfo, setUsersInfo] = useState({});


  // const { user } = useAuth0();
  // const userId = user?.sub;

  // ===========================================================================================
  // UseEffect For AI Component

  const [recommendations, setRecommendations] = useState([]);
  const [progress, setProgress] = useState({});
  const [mealData, setMealData] = useState({});
  const [foodFact, setFoodFact] = useState("");
  const [loaded, setLoaded] = useState(true);
  const [loading,setLoading ] = useState(false)

  const [printedText, setPrintedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  let tempIntro = `Hii ${user?.name}, Welcome to Dashboard`;
  const [todaysData, setTodaysData] = useState({
    carbs: 1,
    protein: 1,
    fat: 1,
    calories: 1,
  });

  const [dailyNeeds ,setDailyNeeds]= useState({
    calories:1,
    carbs:1,
    protein:1,
    fat:1
  });

  const [weeklyGainedData, setWeeklyGainedData] = useState({
    week1:1,
    week2:1,
    week3:1,
    week4:1,
    week5:1,
  });

  const [averageCalories,setAverageCalories] = useState(1);
  const {setdailyneeds} = useContext(UsersInfoContext);
  const {setRemainingGoal} = useContext(UsersInfoContext);


  useEffect(() => {
    if (user) {
      setUserId(user?.sub);
      setIsUserIdReady(true);
      setLoading(true)
    }
  }, [user]); 

  const fetchUsersInfofromDatabase = async (userId) => {
    try {
        const response = await axios.post(
            "http://localhost:3001/checkusersinfo",
            { userId }
        );
        const usersInfo = response.data;
        setUsersInfo(usersInfo);
        if(!usersInfo?.calorie_needs){
          console.log("nothing")
        }
        else{
          setDailyNeeds({
            calories:usersInfo.calorie_needs,
            carbs:usersInfo.carbs,
            protein:usersInfo.protein,
            fat:usersInfo.fat
          })
        }
        

        // Store the usersInfo in localStorage
        localStorage.setItem("usersInfo", JSON.stringify(usersInfo));

        console.log("Data fetched successfully");
    } catch (error) {
        console.error("Error fetching data:", error.message || error);
    }
};

useEffect(()=>{

  // setDailyNeeds({
  //   calories:usersInfo.calorie_needs,
  //   carbs:usersInfo.carbs,
  //   protein:usersInfo.protein,
  //   fat:usersInfo.fat
  // })
  setdailyneeds({
    calories:usersInfo.calorie_needs,
    carbs:usersInfo.carbs,
    protein:usersInfo.protein,
    fat:usersInfo.fat
  })
  const remaininggoal =  JSON.parse(localStorage.getItem("remainingnutrition"));
  if(remaininggoal){
    console.log("yes")
    setRemainingGoal(remaininggoal);
  }
  else{
    console.log("no")
    setRemainingGoal({
      calories:usersInfo.calorie_needs,
      carbs:usersInfo.carbs,
      protein:usersInfo.protein,
      fat:usersInfo.fat
    });
    

  }

},[usersInfo])

useEffect(()=>{
    console.log("dailyneeds")
  console.log(dailyNeeds);
  console.log(usersInfo)
},[dailyNeeds])

  useEffect(() => {

    if(!isUserIdReady){return}
    console.log("useEffect called")
    console.log("hello")
    // setStoredUsersInfo(JSON.parse(localStorage.getItem("usersInfo")))
    const storedUsersInfo =  localStorage.getItem("usersInfo");
    console.log("storedUsersInfo",storedUsersInfo)
          if(storedUsersInfo) {

            const parsedUsersInfo = JSON.parse(storedUsersInfo)
            console.log("parsedUsersInfo",parsedUsersInfo)
            setUsersInfo(parsedUsersInfo);
            console.log("usersInfo",usersInfo)



            // setUsersGoal(parsedUsersInfo.users_goal);
            // console.log("usersGoal",usersGoal);

    
          } 
          else{

            fetchUsersInfofromDatabase(userId);
            
          
          }
  }, [isUserIdReady]); 




  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        console.log(userId);
        const response = await axios.get(
          `http://localhost:5000/recommend?user_id=${userId}`
        );
        // const data = response;
        console.log(response.data);
        setMealData(response.data);

        // setRecommendations(response.data.recommendations);
        // setProgress(response.data.progress);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();

    const fetchTotalsNutrition = async () => {
      const totalNutrition = JSON.parse(localStorage.getItem("totalnutrition"));
      if (totalNutrition) {
        setTodaysData(JSON.parse(localStorage.getItem("totalnutrition")));
      } else {
      }
    };

    fetchTotalsNutrition();

    const fetchLastMonthData = async (userId) => {
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:3001/fetchlastmonthdata?user_id=${userId}`
          );
          const res = response;
          // Do something with the last month's data
          console.log("last months data");
          
          const lastMonthsData = res.data;
          console.log(lastMonthsData)
          setWeeklyGainedData(lastMonthsData);
          console.log(weeklyGainedData)
          

   

        } catch (error) {
          console.error("Error fetching Last Month data:", error);
        }
      } else {

      }
    };

    fetchLastMonthData(userId);
    


    const fetchFoodFact = async () => {
      const apiKey = "3ffb6fa2920e40b9b74433a1c86bf79a";
      const url = `https://api.spoonacular.com/food/jokes/random?apiKey=${apiKey}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("fact is here");
          console.log(data.text);

          setFoodFact(data.text);
          console.log(foodFact);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchFoodFact();

    // const fetchUsersTodaysData = async()=>{
    //   setTodaysData(JSON.parse(localStorage.getItem("totalNutrition")))
    // }
  }, [userId]);

  const [isUser, setIsUser] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [frequency, setFrequency] = useState(5);
  const [shouldRestart, setShouldRestart] = useState(true);

useEffect(() => {
  if (loading) {
    const timeoutId = setTimeout(() => {
      const id = setInterval(() => {
        if (currentIndex < tempIntro.length) {
          setPrintedText(printedText + tempIntro[currentIndex]);
          setCurrentIndex(currentIndex + 1);
          setFrequency(frequency + 10);
        } else {
          clearInterval(id);
          if (shouldRestart) {
            setCurrentIndex(0);
            setPrintedText("");
            setFrequency(0);
            setTimeout(() => {
              setShouldRestart(true);
            }, 1000); // wait for 1 second before restarting the interval
          } else {
            setShouldRestart(false);
          }
        }
      }, 90);

      setIntervalId(id);
    }, 150 - frequency);

    return () => clearTimeout(timeoutId);
  }
}, [loading, currentIndex, foodFact, printedText, userId, frequency, shouldRestart]);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  useEffect(() => {
    const average = Object.values(weeklyGainedData).reduce((sum, value) => sum + value, 0) / 30;
    setAverageCalories(average);
  }, [weeklyGainedData]);

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

  // console.log("Current user : ", { user });

  // Data

  const data = {
    pieChartData: [
      {
        name: "Carbohydrates",
        value: todaysData?.carbs,
        // percentage: 24,
        label: "Carbohydrates",
      },
      {
        name: "Proteins",
        value: todaysData?.protein,
        // percentage: 40,
        label: "Proteins",
      },
      { name: "Fats", value: todaysData?.fat, label: "fats" },
    ],
    totalWeeksCaloriesBurned: {
      weeks: ["Week 1", "Week 2", "Week 3", "Week 4","week5"],
      totalCaloriesBurned: [
        // week1:869,
        // week2:568,
        // week3:748,
        // week4:568,
        // week5:568,

      ],
    },
    totalWeeksCaloriesGained:{
      weeks:["Week 1", "Week 2", "Week 3", "Week 4","week5"],
      totalCaloriesGained:[
        weeklyGainedData.week1,
        weeklyGainedData.week2,
        weeklyGainedData.week3,
        weeklyGainedData.week4,
        weeklyGainedData.week5,


      ]

    },
    totalCaloriesGainedToday: todaysData?.calories,
    averageCaloriesGained: averageCalories,
    // function(weeklyGainedData){
    //   const average =(weeklyGainedData.week1+weeklyGainedData.week2+weeklyGainedData.week3+weeklyGainedData.week4+weeklyGainedData.week5)/30;
    //   return average;
    // },
    totalCaloriesBurned: 60,
    averageCaloriesBurned: 70,
  };

  // useEffect(() => {
  //   console.log('useEffect called')
  //   const apiKey = "3ffb6fa2920e40b9b74433a1c86bf79a";
  //   const url = `https://api.spoonacular.com/food/jokes/random?apiKey=${apiKey}`;
  //   // fetch the food fact data from an API or a database

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.text);

  //       setFoodFact(data.text);
  //       setLoaded(true);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  

  return (
    <Container>
      <Wrapper>
        {loading && <Title>Hii Pratik Patil, Welcome to Dashboard</Title>}

        <FlexWrap>
          <Card>
            <div style={{ position: "relative" }}>
              <Card>
                <CategoryChart what={"Carbohydrates"} data={data} />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                    opacity: 1,
                  }}
                >
                  <Graph remainingGoal={remainingGoal} dailyNeeds={dailyNeeds}/>
                </div>
              </Card>
            </div>
          </Card>
        </FlexWrap>

        <AiComponent fact={foodFact} />

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
