import React,{useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./userdetails.css";
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
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 600px) {
    gap: 12px;
  }
`;
function UserDetails() {

  const {usersData} = useContext(UsersInfoContext);

  const [heightFeet, setHeightFeet] = useState();
  const [heightInches, setHeightInches] = useState();
  const [currentWeight, setCurrentWeight] = useState();
  const [goalWeight, setGoalWeight] = useState();
  const [errorMessage, setErrorMessage] = useState('');


  const navigate = useNavigate();

  function handleNextClick() {
    if (!heightFeet || !heightInches || !currentWeight || !goalWeight) {
      alert("All Fields are required");
      setErrorMessage('All fields are required');
      return;
    }
    setErrorMessage('');
    usersData.height = heightFeet+heightInches;
    usersData.weight = currentWeight;
    usersData.goalweight = goalWeight;
    console.log(usersData);


    navigate('/userdetails1');
  }

  // function handleNextClick() {
  //   navigate("/userdetails1");
  // }
  return (
    <Container>
      <Wrapper>
        <div className="form-section first_form-section">
          <h2>How tall are you?</h2>
          <div className="input-group">
            <label htmlFor="height-feet">Height (feet)</label>
            <input 
              type="number" 
              id="height-feet" 
              name="height-feet" 
              value={heightFeet} 
              onChange={(e) => setHeightFeet(e.target.value)} 
            />
            <span className="unit">ft</span>
          </div>
          <div className="input-group">
            <label htmlFor="height-inches">Height (inches)</label>
            <input 
              type="number" 
              id="height-inches" 
              name="height-inches" 
              value={heightInches} 
              onChange={(e) => setHeightInches(e.target.value)} 
            />
            <span className="unit">in</span>
          </div>
          <button className="change-units">Change units to centimeters</button>
        </div>

        <div className="form-section">
          <h2>How much do you weigh?</h2>
          <p>It's OK to estimate. You can update this later.</p>
          <div className="input-group">
            <label htmlFor="current-weight">Current weight</label>
            <input 
              type="number" 
              id="current-weight" 
              name="current-weight" 
              value={currentWeight} 
              onChange={(e) => setCurrentWeight(e.target.value)} 
            />
            <span className="unit">lbs</span>
          </div>
          <button className="change-units">Change units to kilograms/stone</button>
        </div>

        <div className="form-section">
          <h2>What's your goal weight?</h2>
          <p>
            Don't worry. This doesn't affect your daily calorie goal and you can
            always change it later.
          </p>
          <div className="input-group">
            <label htmlFor="goal-weight">Goal weight</label>
            <input 
              type="number" 
              id="goal-weight" 
              name="goal-weight" 
              value={goalWeight} 
              onChange={(e) => setGoalWeight(e.target.value)} 
            />
            <span className="unit">lbs</span>
          </div>
        </div>

        {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}


        <div className="button-group">
          <button className="back">Back</button>
          <button className="next" onClick={handleNextClick}>Next</button>
        </div>
      </Wrapper>
    </Container>
  );
}

export default UserDetails;
