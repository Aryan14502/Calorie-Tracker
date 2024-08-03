import React from "react";
import {useLocation,useNavigate} from 'react-router-dom';
import './motivating.css';
import styled from "styled-components";


const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 45px; 
  overflow-y: hidden; 
`;

const Wrapper = styled.div`
  width: 550px;
  height: 580px;
  max-width: 1400px;
  display: flex;
  flex-direction:column;
  // gap: 15px;
  @media (max-width: 600px) {
    gap: 12px;
  }
  padding: 20px;
  // border: 1px solid #fff;
  // border-radius: 14px;
  background-color: white;

  position: sticky;
  top: 80px; 
  z-index: 1;
`;


function Motivating() {

    // const {goal} = useParams();
    // const parsedGoal= JSON.parse(goal);
    const location = useLocation();
    const goal = location.state?.goal;
    const navigate = useNavigate();

    const handleNextClick = ()=>{
        navigate('/dashboard');
    }

  return (
    <div class="motivating">
      <div class="motivating__title">
        Great! You've just taken a big step on your journey.
      </div>
      <div class="motivating__body">
        Did you know that tracking your food is a scientifically proven method
        to being successful? It's called "self-monitoring" and the more
        consistent you are, the more likely you are to hit your goals.
      </div>
      <div class="motivating__footer">
        Now, let's talk about your goal to {goal}
        
      </div>
      <button class="motivating__next" onClick={handleNextClick}>
        
        NEXT
      </button>
    </div>
  );
}

export default Motivating;
