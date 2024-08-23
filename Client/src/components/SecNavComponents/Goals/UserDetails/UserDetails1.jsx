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
  background: linear-gradient(45deg, #E6E6FA, #D8BFD8, #E0B0FF);

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
  padding: 30px;
  // border: 1px solid black;
  border-radius: 14px;
  box-shadow: 1px 6px 20px #D3D3D3;
  background-color: #F0E8FC;
`;

const App = () => {
  const {user} = useAuth0();

  const {usersData} = useContext(UsersInfoContext);

  const [sex, setSex] = useState("");
  const [dob, setDob] = useState({});
  const [country, setCountry] = useState("India");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function calculateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!sex || !dob || !country) {
      setError("Please fill out all fields.");
      return;
    }
    usersData.gender=sex;
    usersData.age = calculateAge(dob);
    usersData.country = country;
    
    console.log(usersData)

    // const formData = {
    //   sex,
    //   dob,
    //   country,
    // };

    // try {
    //   const response = await axios.post('http://localhost:3001/saveusersinfo',usersData);

    //   if (response.status === 200) {
    //     navigate("/diet");
    //   } else {
    //     setError("Failed to submit data. Please try again.");
    //   }
    // } catch (error) {
    //   setError("Failed to submit data. Please try again.");
    // }
    // Additional validation logic for dob format can be added here

    navigate("/userdetails2");
  };


  return (
    <Container>
      <Wrapper>
        <h2>Please select which sex we should use to calculate your calorie needs.</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="sex">Sex:</label>
            {/* <input
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
            />*/}
            <div className="radio-group">
              <input
                type="radio"
                id="male"
                name="sex"
                value="M"
                checked={sex === "M"}
                onChange={(e) => setSex(e.target.value)}
              />
              <label htmlFor="male" style={{textAlign: "center", paddingRight: 150}}>Male</label>
            </div>

            <div className="radio-group">
              <input
                type="radio"
                id="female"
                name="sex"
                value="F"
                checked={sex === "F"}
                onChange={(e) => setSex(e.target.value)}
              />
              <label htmlFor="female" style={{textAlign: "center", paddingRight: 135}}>Female</label>
            </div>
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
            <label htmlFor="country" style={{fontSize: 20, fontWeight: "normal"}}>Where do you live?</label>
            <select
              id="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              style={{width: 20, marginLeft: 20}}
            >
              <option value="india">India</option>
              <option value="Newseland">Newseland</option>
              <option value="Australia">Australia</option>
              <option value="England">England</option>
              <option value="Africa">Africa</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
              {/* Add other country options here if needed */}
            </select>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="button-group">
            <button type="button" onClick={() => navigate(-1)}>BACK</button>
            <button type="submit" onCICK={(e)=>{handleSubmit(e)}}>NEXT</button>
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
