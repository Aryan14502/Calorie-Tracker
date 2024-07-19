import React from "react";
import { useState,useContext } from "react";
import {useNavigate} from 'react-router-dom';
import "./selectactivitybaseline.css";
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
function SelectActivityBaseline() {

  const {usersData}  = useContext(UsersInfoContext);
  //   const optionElements = document.querySelectorAll(
  //     ".activity-level-selector__option"
  //   );

  //   optionElements.forEach((optionElement) => {
  //     optionElement.addEventListener("click", (event) => {
  //       // Perform actions when an option is clicked
  //       console.log(
  //         `Option clicked: ${
  //           optionElement.querySelector(".activity-level-selector__option-title")
  //             .textContent
  //         }`
  //       );
  //       // Add your logic here
  //     });
  //   });

  const [baselineActivitylevel, setBaselineActivitylevel] = useState([]);
  const [isActivityLevel, setIsActivityLevel] = useState(false);
  const navigate = useNavigate();

  function handleOptionClick(option) {
    if (
      baselineActivitylevel.length < 1 ||
      (baselineActivitylevel.length == 1 &&
        !baselineActivitylevel.includes(option))
    ) {
      setBaselineActivitylevel([]);
      setBaselineActivitylevel([option]);
      setIsActivityLevel(true);
    } else if (baselineActivitylevel.includes(option)) {
      setBaselineActivitylevel([]);
      setIsActivityLevel(false);
    }
  }

  function handleNextClick(){
    usersData.baselineactivityLevel = baselineActivitylevel[0]
    console.log(usersData);
    navigate('/userdetails');
  }

  return (
    <Container>
      <Wrapper>

    {/* <div className="container"> */}
      <div className="activity-level-selector">
        <div className="activity-level-selector__title">
          What is your baseline activity level?
        </div>

        <div className="activity-level-selector__subtitle">
          Not including workouts-we count that separately
        </div>

        <div className="activity-level-selector__option-list">
          <div
            className={`activity-level-selector__option ${
              baselineActivitylevel.includes("Not Very Active") ? "elected" : ""
            }`}
            onClick={(event) => {
              handleOptionClick("Not Very Active");
            }}
          >
            <div className="activity-level-selector__option-title">
              Not Very Active
            </div>

            <div className="activity-level-selector__option-description">
              Spend most of the day sitting (e.g., bankteller, desk job)
            </div>
          </div>

          <div
            className={`activity-level-selector__option ${
              baselineActivitylevel.includes("Lightly Active") ? "elected" : ""
            }`}
            onClick={(event) => {
              handleOptionClick("Lightly Active");
            }}
          >
            <div className="activity-level-selector__option-title">
              Lightly Active
            </div>
            <div className="activity-level-selector__option-description">
              Spend a good part of the day on your feet (e.g., teacher,
              salesperson)
            </div>
          </div>
          <div
            className={`activity-level-selector__option ${
              baselineActivitylevel.includes("Active") ? "elected" : ""
            }`}
            onClick={(event) => {
              handleOptionClick("Active");
            }}
          >
            <div className="activity-level-selector__option-title">Active</div>
            <div className="activity-level-selector__option-description">
              Spend a good part of the day doing some physical activity (e.g.,
              food server, postal carrier)
            </div>
          </div>
          <div
            className={`activity-level-selector__option ${
              baselineActivitylevel.includes("Very Active") ? "elected" : ""
            }`}
            onClick={(event) => {
              handleOptionClick("Very Active");
            }}
          >
            <div className="activity-level-selector__option-title">
              Very Active
            </div>
            <div className="activity-level-selector__option-description">
              Spend a good part of the day doing heavy physical activity (e.g.,
              bike messenger, carpenter)
            </div>
          </div>
        </div>

     

        <div className="activity-level-selector__button-list">
          <button className="activity-level-selector__button activity-level-selector__button--back">
            BACK
          </button>
          <button className={`activity-level-selector__button activity-level-selector__button--next ${
            isActivityLevel ?  "next-elected" : ""
          }`}
          onClick={()=>{
            if(isActivityLevel){
                handleNextClick();
            }
            else{
                console.log("");
            }
          }}>
            NEXT
          </button>
        </div>
      </div>
    {/* // </div> */}</Wrapper>
    </Container>
  );
}

export default SelectActivityBaseline;
