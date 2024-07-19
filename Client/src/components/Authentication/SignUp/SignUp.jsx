import React, { useState } from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import styled from "styled-components";
import TextInput from "../TextInput";
import Button from "../Button";
import axios from '../../../axios';
// import { UserSignUp } from "../api";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/reducers/userSlice";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const SignUp = () => {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  

  const validateInputs = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  // const handelSignUp = async () => {
  //   setLoading(true);
  //   setButtonDisabled(true);
  //   if (validateInputs()) {
  //     await UserSignUp({ name, email, password })
  //       .then((res) => {
  //         dispatch(loginSuccess(res.data));
  //         alert("Account Created Success");
  //         setLoading(false);
  //         setButtonDisabled(false);
  //       })
  //       .catch((err) => {
  //         alert(err.response.data.message);
  //         setLoading(false);
  //         setButtonDisabled(false);
  //       });
  //   }
  // };

  const handleSignUp = async () => {
    if (validateInputs()) {
      try {
        const userData = {
          name: name,
          email:email,
          password: password,
          createdAt: new Date().toISOString(), // Add createdAt property with timestamp
          // Add other user data as needed
        };

        const response = await axios.post("http://localhost:3001/newuseraccount", userData);

        if (response.status === 201) {
          alert("Account Created Successfully");
          navigate(`${location.pathname}/../dashboard`, { replace: true });

        } else {
          alert("Error creating account");
        }
      } catch (error) {
        console.error(error);
        alert("Error creating account");
      }
    }
  };


  return (
    <Container>
      <div>
        <Title>Create New Account 👋</Title>
        <Span>Please enter details to create a new account</Span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <TextInput
          label="Full name"
          placeholder="Enter your full name"
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          password
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text="SignUp"
          onClick={handleSignUp}
          isLoading={loading}
          isDisabled={buttonDisabled}
        />
      </div>
    </Container>
  );
};

export default SignUp;

// import React from 'react';
// import './signup.css';

// const SignUp = () => {
//   return (
//     <div class="wrapper">
//     <div class="container">
//       <div class="signup">
//         <h1>Sign Up</h1>
//         <form>
//           <label>Full Name</label>
//           <input type="text" name="" placeholder="Enter your Full name" required/>
//           <label>Email</label>
//           <input type="email" name="" placeholder="Enter your Email id" required/>
//           <label>Password</label>
//           <input type="password" name="" placeholder="Enter your password" required/>
//           <button type="submit">Sign Up</button>
//         </form>
//         <p>By clicking submit button you agree to our<br/>
//         <a href="">Terms and Condition</a> and <a href="#">Policy privacy</a></p>
//         <p>Already have an account? <a href="http://127.0.0.1:5500/index.html">Login here</a></p>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default SignUp
