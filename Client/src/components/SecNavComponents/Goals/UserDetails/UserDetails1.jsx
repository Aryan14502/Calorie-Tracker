import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userdetails1.css";
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
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
export default function App() {
  const [sex, setSex] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("India");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sex: ", sex);
    console.log("DOB: ", dob);
    console.log("Country: ", country);
  };

  function handleNextClick() {
    navigate("/diet");
  }

  return (
    <Container>
      <Wrapper>
        {/* <div class="container"> */}
          <h2>
            Please select which sex we should use to calculate your calorie
            needs.
          </h2>

          <div class="form-group">
            <label for="sex">Sex:</label>
            <input type="radio" id="male" name="sex" value="male" />
            <label for="male">Male</label>
            <input type="radio" id="female" name="sex" value="female" />
            <label for="female">Female</label>
          </div>

          <div class="form-group">
            <label for="dob">When were you born?</label>
            <input type="date" id="dob" name="dob" value="2003-11-19" />
          </div>

          <div class="form-group">
            <label for="country">Where do you live?</label>
            <select id="country" name="country">
              <option value="india">India</option>
            </select>
          </div>

          <div class="button-group">
            <button type="button">BACK</button>
            <button
              type="button"
              onClick={() => {
                handleNextClick();
              }}
            >
              NEXT
            </button>
          </div>

          <div class="note">
            We use this information to calculate an accurate calorie goal for
            you.
          </div>
        {/* </div> */}
      </Wrapper>
    </Container>
  );
}
