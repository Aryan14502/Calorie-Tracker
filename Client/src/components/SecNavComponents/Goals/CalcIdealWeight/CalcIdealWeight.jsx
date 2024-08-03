import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import UsersInfoContext from "../../../../contexts/usersInfoContext";
import "./calcidealweight.css"; 

function CalcIdealWeight() {
  const [idealWeight, setIdealWeight] = useState(60);
  const [idealWeightText, setIdealWeightText] = useState(
    `Your Ideal Weight Must be : ${idealWeight}`
  );
  const [complement, setComplement] = useState("");
  const [complement2, setComplement2] = useState("");
  const [complementLoader, setComplementLoader] = useState(false);
  const { usersData } = useContext(UsersInfoContext);

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activity: "",
    goal_weight: 50,
    users_goal: "Gain Weight",
  });

  const handleSetYourGoal = (e) => {
    usersData.goalweight = idealWeight;
    usersData.idealweight = idealWeight;
  };

  useEffect(() => {
    if (userInfo.goal_weight < idealWeight) {
      setComplement(`Your Goal Weight is less than the Ideal Weight `);
      if (userInfo.users_goal === "Loose Weight") {
        setComplementLoader(true);
        setComplement2(
          `Your Actual Weight is Less than the Ideal Weight and you have chosen to Loose Weight, its Not a Conscious Decision`
        );
      }
    } else {
      setComplement(`Your Goal Weight is greater than the Ideal Weight `);
      if (userInfo.users_goal === "Gain Weight") {
        setComplementLoader(true);
        setComplement2(
          `Your Actual Weight is greater than the Ideal Weight and you have chosen to Gain the Weight, its Not a Conscious Decision`
        );
      }
    }
  }, [userInfo]);

  const handleContinue = () => {
    navigate("/selectactivitybaseline");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>{idealWeightText}</h1>
        <p>{complement}</p>
        <button
          type="button"
          onClick={(e) => {
            handleSetYourGoal(e);
          }}
        >
          Set your Goal Weight as the Ideal Weight
        </button>
        {complementLoader && (
          <>
            <p>{complement2}</p>
            <button type="button">Do you want to change the Goal</button>
          </>
        )}
        <button
          type="button"
          onClick={(e) => {
            handleContinue(e);
          }}
        >
          Continue...
        </button>
      </div>
    </div>
  );
}

export default CalcIdealWeight;
