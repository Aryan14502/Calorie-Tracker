import React from "react";
import {useLocation,useNavigate} from 'react-router-dom';
import './motivating.css'

function Motivating() {

    // const {goal} = useParams();
    // const parsedGoal= JSON.parse(goal);
    const location = useLocation();
    const goal = location.state?.goal;
    const navigate = useNavigate();

    const handleNextClick = ()=>{
        navigate('/selectactivitybaseline');
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
