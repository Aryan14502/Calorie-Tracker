import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import UsersInfoContext from "../../../../contexts/usersInfoContext";
import { useAuth0 } from "@auth0/auth0-react";
import axios from '../../../../axios'
import './userdetails2.css'

// 

// import React, { useState } from 'react';
// import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  background: linear-gradient(45deg, #E6E6FA, #D8BFD8, #E0B0FF);

  overflow-y: scroll;
`;

const Wrapper = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 600px) {
    gap: 12px;
  }
    padding: 30px;
    // border: 1px solid black;
    border-radius: 14px;
    box-shadow: 1px 10px 30px #D3D3D3;
    background-color: #F0E8FC;
`;

const div = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  margin-top: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 20px;
`;

const label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const selectField = styled.select`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Note = styled.div`
  margin-top: 12px;
  font-style: italic;
`;

const UserDetails2 = () => {
    const {usersData} = useContext(UsersInfoContext)
    const [healthProblems, setHealthProblems] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [foodRestrictions, setFoodRestrictions] = useState('');
    const [foodPreferences, setFoodPreferences] = useState('');
    const [foodFrequency, setFoodFrequency] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();

//  {
//      "_id": {
//         "$oid": "6697040f6997ecaa6aeb1cf9"
//       },
//       "userId": "google-oauth2|114640275108446951951",
//       "gender": "male",
//       "height": 56,
//       "weight": 48,
//       "baselineactivityLevel": "Not Very Active",
//      "users_goal": "Loose weight",
//       "goalweight": "60",
//       "birthdate": {
//         "$date": "2024-07-27T00:00:00.000Z"
//        },
//       "country": "India",
//         "healthProblems": "Diabetes",
//         "medicalHistory": "High Blood Pressure",
//        "foodRestrictions": "Gluten Free",
//        "foodPreferences": "Vegetarian",
//         "foodFrequency": "3 meals/day",
//         "ideal_weight" : 60
//       "__v": 0
//    }
      

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!healthProblems || !medicalHistory || !foodRestrictions || !foodPreferences || !foodFrequency ){
        setError("Please fill out allthe details")
        return
    }

    usersData.healthProblems=healthProblems;
    usersData.medicalHistory = medicalHistory;
    usersData.foodRestrictions = foodRestrictions;
    usersData.foodPreferences = foodPreferences;
    usersData.foodFrequency = foodFrequency;

    // console.log({
    //   healthProblems,
    //   medicalHistory,
    //   foodRestrictions,
    //   foodPreferences,
    //   foodFrequency,
    // });

    // try {
    //     const response = await axios.post('http://localhost:3001/saveusersinfo',usersData);
  
    //     if (response.status === 200) {
    //       navigate("/diet");
    //     } else {
    //       setError("Failed to submit data. Please try again.");
    //     }
    //   } catch (error) {
    //     setError("Failed to submit data. Please try again.");
    //   }
    //   // Additional validation logic for dob format can be added here
  
    navigate("/selectgoals");
  };



  return (
    <Container>
      <Wrapper>
        <h2 style={{fontSize: 25, fontWeight: "bolder"}}>User Details</h2>
        <Form >
          <div className="details">
            <label htmlFor="healthProblems" style={{fontWeight: "bold"}}>Health Problems:</label>
            <select
                id="healthProblems"
                name="healthProblems"
                value={healthProblems}
                onChange={(e) => setHealthProblems(e.target.value)}
                // placeholder="Enter health problems"
                required
            >
                <option value="Diabetes">Diabetes</option>
                <option value="Heart Disease">Heart Disease</option>
                <option value="Mental disorder">Mental disorder</option>
                <option value="Kidney disease">Kidney disease</option>
                <option value="Pregnancy">Pregnancy</option>
                <option value="Injuries">Injuries</option>
                <option value="Cancer">Cancer</option>
                <option value="HIV/AIDS">HIV/AIDS</option>
            </select>
          </div>

          <div className="details">
            <label htmlFor="medicalHistory" style={{fontWeight: "bold"}}>Medical History:</label>
            <select
                type="text"
                id="medicalHistory"
                name="medicalHistory"
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
                // placeholder="e.x. High Blood pressure"
                required
            >
                <option value="appendectomy">Appendectomy</option>
                <option value="knee replacement">Knee Replacement</option>
                <option value="Accident">Accident</option>
                <option value="smoking habit">Smoking habit</option>
                <option value="Alcohol Use">Alcohol Use</option>
            </select>
          </div>

          <div className="details">
            <label htmlFor="foodRestrictions" style={{fontWeight: "bold"}}>Food Restrictions:</label>
            <select
                type="text"
                id="foodRestrictions"
                name="foodRestrictions"
                value={foodRestrictions}
                onChange={(e) => setFoodRestrictions(e.target.value)}
                // placeholder="e.x. Glutenfree"
                required
            >
                <option value="glutenfree">Glutenfree</option>
                <option value="Lactose">Lactose intolerance</option>
                <option value="low carb">Low-carb</option>
                <option value="Pescatarianism">Pescatarianism</option>
                <option value="veganism">Veganism</option>
            </select>
          </div>

          <div className="details">
            <label htmlFor="foodPreferences" style={{fontWeight: "bold"}}>Food Preferences:</label>
            <select
                type="text"
                id="foodPreferences"
                name="foodPreferences"
                value={foodPreferences}
                onChange={(e) => setFoodPreferences(e.target.value)}
                // placeholder="Enter food preferences"
                required
            >
                <option value="Vegetarian">Vegetarian</option>
                <option value="Oraganic">Organic</option>
                <option value="Raw food">Raw food</option>
                <option value="low-fat">low-fat</option>
                <option value="Sugar-free">Sugar-free</option>
            </select>
          </div>

          <div className="details">
            <label htmlFor="foodFrequency" style={{fontWeight: "bold"}}>No. of food per day</label>
            <input
                type="number"
                id="foodFrequency"
                name="foodFrequency"
                value={foodFrequency}
                onChange={(e) => setFoodFrequency(e.target.value)}
                // placeholder="Enter food frequency"
                required
            />
          </div>

          <ButtonGroup>
            <button type="button" onClick={() => window.history.back()} style={{backgroundColor: '#880092fa'}}>BACK</button>
            <button type="button" onClick={(e)=>{handleSubmit(e)}}>NEXT</button>
          </ButtonGroup>

          <Note style={{marginTop: 25}}>
            We use this information to track your macros and calories accurately.
          </Note>
        </Form>
      </Wrapper>
    </Container>
    );
};

export default UserDetails2;
