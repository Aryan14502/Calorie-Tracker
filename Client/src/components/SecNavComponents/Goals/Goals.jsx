import React from "react";
// import "./goals.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IfGoalSelected from "./IfGoalSelected/IfGoalSelected";
import SelectGoals from "./SelectGoals/SelectGoals";

function Goals() {
  const [userGoal, setUserGoal] = useState("loose weight");

  const navigate = useNavigate();

  // useEffect(() => {
  //   // Make API request to fetch user's goal from MongoDB database
  //   axios.get('/api/users/goal') // Replace with your API endpoint
  //     .then(response => {
  //       const userGoals = response.data.user_goals;
  //       setUserGoal(userGoals);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    // overflow-x: hidden;
    // overflow-y: hidden;
    transition: all 0.2s ease;
  `;

  const handleChangeGoalClick = () => {
    // Navigate to the goal selection page or render a goal selection component
    navigate("/selectgoals");
  };

  return (
    <Container>
      {userGoal && userGoal.length > 0 ? (
        <IfGoalSelected
          userGoal={userGoal}
          onChangeGoalClick={handleChangeGoalClick}
        />
      ) : (
        <SelectGoals />
      )}
    </Container>
  );
}

export default Goals;
