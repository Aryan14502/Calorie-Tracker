import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import './userdetails1.css'
import UsersInfoContext from "../../../../contexts/usersInfoContext";
import { useAuth0 } from "@auth0/auth0-react";
import axios from '../../../../axios'

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

const App = () => {
  const {user} = useAuth0();

  const {usersData} = useContext(UsersInfoContext)
  const [sex, setSex] = useState("");
  const [dob, setDob] = useState({});
  const [country, setCountry] = useState("India");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!sex || !dob) {
      setError("Please fill out all fields.");
      return;
    }
    usersData.gender=sex;
    usersData.birthdate = dob;
    usersData.country = country;
    usersData.userId = user.sub;
    console.log(usersData)

    // const formData = {
    //   sex,
    //   dob,
    //   country,
    // };

    try {
      const response = await axios.post('http://localhost:3001/saveusersinfo',usersData);

      if (response.status === 200) {
        navigate("/diet");
      } else {
        setError("Failed to submit data. Please try again.");
      }
    } catch (error) {
      setError("Failed to submit data. Please try again.");
    }
    // Additional validation logic for dob format can be added here

    navigate("/diet");
  };

  return (
    <Container>
      <Wrapper>
        <h2>Please select which sex we should use to calculate your calorie needs.</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="sex">Sex:</label>
            <input
              type="radio"
              id="male"
              name="sex"
              value="male"
              checked={sex === "male"}
              onChange={(e) => setSex(e.target.value)}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="sex"
              value="female"
              checked={sex === "female"}
              onChange={(e) => setSex(e.target.value)}
            />
            <label htmlFor="female">Female</label>
          </div>

          <div className="form-group">
            <label htmlFor="dob">When were you born?</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Where do you live?</label>
            <select
              id="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="india">India</option>
              {/* Add other country options here if needed */}
            </select>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="button-group">
            <button type="button" onClick={() => navigate(-1)}>BACK</button>
            <button type="submit">NEXT</button>
          </div>

          <div className="note">
            We use this information to calculate an accurate calorie goal for you.
          </div>
        </form>
      </Wrapper>
    </Container>
  );
};

export default App;
