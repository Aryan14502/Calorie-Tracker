import React from "react";
import "./selectgoals.css";
import { useState ,useContext} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import UsersInfoContext from "../../../../contexts/usersInfoContext";


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
  width:600px;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }

    // border: 1px solid black;
  // border-radius: 14px;
  // box-shadow: 1px 6px 20px 0px black;

  /* add a border to see the container */

`;
function SelectGoals() {
  const user = "User";

  const [selectedGoals, setSelectedGoals] = useState([]);
  const [goal, setGoal] = useState("");
  const [isGoalSelected, setIsGoalSelected] = useState(false);
  const [butttonColorWhenSelected, setbutttonColorWhenSelected] = useState("");
  const navigate = useNavigate();

  const handleGoalSelect = (goal) => {
    if (
      selectedGoals.length < 1 ||
      (selectedGoals.length == 1 && !selectedGoals.includes(goal))
    ) {
      setSelectedGoals([]);
      setSelectedGoals([goal]);
      setbutttonColorWhenSelected("button-transition");
      setIsGoalSelected(true);
      setGoal(goal);
    } else if (selectedGoals.includes(goal)) {
      setSelectedGoals([]);
      setGoal("");
      setbutttonColorWhenSelected("");
      setIsGoalSelected(false);
    }
  };

  const {usersData,setUsersData} = useContext(UsersInfoContext);

  const handleNextClick = () => {
    usersData.users_goal = goal;
    console.log(usersData);

    // Navigate to the next route (/diet) when the NEXT button is clicked
    navigate("/motivating", { state: { goal } });
  };
  return (
    <Container>
      <Wrapper>
        {/* <div className="goal-container"> */}
        <h2>Goals</h2>

        <p>Select Your Goal You Want To Achieve</p>

        <div className="goal-options">
          <button
            className={`goal-button ${
              selectedGoals.includes("Loose weight") ? "elected" : ""
            }`}
            onClick={() => handleGoalSelect("Loose weight")}
          >
            Loose weight
          </button>
          <button
            className={`goal-button ${
              selectedGoals.includes("Maintain weight") ? "elected" : ""
            }`}
            onClick={() => handleGoalSelect("Maintain weight")}
          >
            Maintain weight
          </button>
          <button
            className={`goal-button ${
              selectedGoals.includes("Gain weight") ? "elected" : ""
            }`}
            onClick={() => handleGoalSelect("Gain weight")}
          >
            Gain weight
          </button>
          <button
            className={`goal-button ${
              selectedGoals.includes("Gain muscle") ? "elected" : ""
            }`}
            onClick={() => handleGoalSelect("Gain muscle")}
          >
            Gain muscle
          </button>
          <button
            className={`goal-button ${
              selectedGoals.includes("Modify my diet") ? "elected" : ""
            }`}
            onClick={() => handleGoalSelect("Modify my diet")}
          >
            Modify my diet
          </button>
          <button
            className={`goal-button ${
              selectedGoals.includes("Manage stress") ? "elected" : ""
            }`}
            onClick={() => handleGoalSelect("Manage stress")}
          >
            Manage stress
          </button>
        </div>


        <div className="nav-buttons">
          <button className="back-button">BACK</button>

          <button
            className={`next-button ${isGoalSelected ? "next-elected" : ""}`}
            onClick={() => {
              if (isGoalSelected) {
                handleNextClick();
                // code to be executed when NEXT button is clicked and isGoalSelected is true
                console.log("NEXT button clicked and goal is selected");
              } else {
                console.log("Please select a goal first");
              }
            }}
          >
            NEXT
          </button>
        </div>


        {/* </div> */}
      </Wrapper>
    </Container>
  );
}

export default SelectGoals;

// import React from "react";
// import "./goals.css";
// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// function Goals() {
//   const user = "User";

//   const [selectedGoals, setSelectedGoals] = useState([]);
//   const [isGoalSelected, setIsGoalSelected] = useState(false);
//   const [butttonColorWhenSelected, setbutttonColorWhenSelected] = useState("");
//   const navigate = useNavigate();

//   const handleGoalSelect = (goal) => {
//     if (
//       selectedGoals.length < 1 ||
//       (selectedGoals.length == 1 && !selectedGoals.includes(goal))
//     ) {
//       setSelectedGoals([]);
//       setSelectedGoals([goal]);
//       setbutttonColorWhenSelected("button-transition");
//       setIsGoalSelected(true);
//     } else if (selectedGoals.includes(goal)) {
//       setSelectedGoals([]);
//       setbutttonColorWhenSelected("");
//       setIsGoalSelected(false);
//     }
//   };

//   const handleNextClick = () => {
//     // Navigate to the next route (/diet) when the NEXT button is clicked
//     navigate('/diet');
//   };
//   return (
// <div className="goal-container">
//   <h2>Goals</h2>

//   <p>
//     Select Your Goal You Want To Achieve
//   </p>

//   <div className="goal-options">
//     <button
//       className={`goal-button ${
//         selectedGoals.includes("Lose weight") ? "elected" : ""
//       }`}
//       onClick={() => handleGoalSelect("Lose weight")}
//     >
//       Lose weight
//     </button>
//     <button
//       className={`goal-button ${
//         selectedGoals.includes("Maintain weight") ? "elected" : ""
//       }`}
//       onClick={() => handleGoalSelect("Maintain weight")}
//     >
//       Maintain weight
//     </button>
//     <button
//       className={`goal-button ${
//         selectedGoals.includes("Gain weight") ? "elected" : ""
//       }`}
//       onClick={() => handleGoalSelect("Gain weight")}
//     >
//       Gain weight
//     </button>
//     <button
//       className={`goal-button ${
//         selectedGoals.includes("Gain muscle") ? "elected" : ""
//       }`}
//       onClick={() => handleGoalSelect("Gain muscle")}
//     >
//       Gain muscle
//     </button>
//     <button
//       className={`goal-button ${
//         selectedGoals.includes("Modify my diet") ? "elected" : ""
//       }`}
//       onClick={() => handleGoalSelect("Modify my diet")}
//     >
//       Modify my diet
//     </button>
//     <button
//       className={`goal-button ${
//         selectedGoals.includes("Manage stress") ? "elected" : ""
//       }`}
//       onClick={() => handleGoalSelect("Manage stress")}
//     >
//       Manage stress
//     </button>
//   </div>
//   <div className="nav-buttons">
//     <button className="back-button">BACK</button>

//     <button
//       className={`next-button ${
//         isGoalSelected ?  "next-elected" : ""
//       }`}
//       onClick={() => {
//         if (isGoalSelected) {
//             handleNextClick();
//           // code to be executed when NEXT button is clicked and isGoalSelected is true
//           console.log("NEXT button clicked and goal is selected");
//         } else {
//           console.log("Please select a goal first");
//         }
//       }}
//     >
//       NEXT
//     </button>
//   </div>
// </div>
//   );
// }

// export default Goals;
