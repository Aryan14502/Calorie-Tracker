import React from "react";
import {useNavigate} from 'react-router-dom'
import './userdetails.css'
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
function UserDetails() {

  const navigate = useNavigate();

  function handleNextClick(){
    navigate('/userdetails1');
  }
  return (
    <Container>
      <Wrapper>

{/*       
    <div class="container">
      <div class="form-container"> */}


        <div class="form-section first_form-section ">
          <h2>How tall are you?</h2>
          <div class="input-group">
            <label for="height-feet">Height (feet)</label>
            <input type="number" id="height-feet" name="height-feet" />
            <span class="unit">ft</span>
          </div>
          <div class="input-group">
            <label for="height-inches">Height (inches)</label>
            <input type="number" id="height-inches" name="height-inches" />
            <span class="unit">in</span>
          </div>
          <button class="change-units">Change units to centimeters</button>
        </div>

        <div class="form-section">
          <h2>How much do you weigh?</h2>
          <p>It's OK to estimate. You can update this later.</p>
          <div class="input-group">
            <label for="current-weight">Current weight</label>
            <input type="number" id="current-weight" name="current-weight" />
            <span class="unit">lbs</span>
          </div>
          <button class="change-units">Change units to kilograms/stone</button>
        </div>

        <div class="form-section">
          <h2>What's your goal weight?</h2>
          <p>
            Don't worry. This doesn't affect your daily calorie goal and you can
            always change it later.
          </p>
          <div class="input-group">
            <label for="goal-weight">Goal weight</label>
            <input type="number" id="goal-weight" name="goal-weight" />
            <span class="unit">lbs</span>
          </div>
        </div>

        <div class="button-group">
          <button class="back">Back</button>
          <button class="next" onClick={()=>{handleNextClick()}}>Next</button>
        </div>


      {/* </div>
    </div> */}
    </Wrapper>
    </Container>
  );
}

export default UserDetails;
