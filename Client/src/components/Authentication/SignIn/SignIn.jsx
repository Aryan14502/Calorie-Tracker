
import React, { useState } from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import styled from "styled-components";
import TextInput from "../TextInput";
import Button from "../Button";
import axios from '../../../axios'
// import { UserSignIn } from "../api";
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
// import {useContext} from 'react' 
// import { UserContext } from "../../contexts/userContext";
const SignIn = () => {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const {user ,setUser,isSignedIn,setIsSignedIn} = useContext(UserContext);


  const navigate = useNavigate();
  const location =useLocation();

  const validateInputs = () => {

    if (!email || !password) {
      alert("Please fill in all fields");
      // return false;
    }

    if(email && password)
    {
      // I will send the request to the server in server.js there in the app.get('./usersigninvalidation') i will be validating the user and sending the response either true or false with the users name.
      // if he is the valid user i will redirect him to the dashboard
      const validated  = "Pratik";
      if(validated){
          return true;
          // setUser(true);
      }



    }

    
  };

  // const handelSignIn = async () => {
  //   setLoading(true);
  //   setButtonDisabled(true);
  //   if (validateInputs()) {
  //     await UserSignIn({ email, password })
  //       .then((res) => {
  //         dispatch(loginSuccess(res.data));
  //         alert("Login Success");
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

  const handleSignIn = async(event)=>{

    // event.preventDefault();
    // setIsLoading(true);
    // setError('');
    try{

      const userData = {
        email:email,
        password: password,
      }

      const response = await axios.post('http://localhost:3001/userlogin', userData);

      if (response.status === 201) {
        alert("Logged In Successfully");
        navigate(`${location.pathname}/../dashboard`, { replace: true });

      } 
      // else if(response.status === 400)
      // {
      //   alert(response.message);
      // }
      // else {
      //   alert("Error creating account");
      // }
    }
    catch{
      // console.error(error);
      alert("Error creating account");
    }

      // Assuming your response contains a token and user info
      // const { token, user } = response.data;

      // Store the token in localStorage or cookie
      // localStorage.setItem('token', token);

      // Optionally, store user information in localStorage or context
      // localStorage.setItem('user', JSON.stringify(user));

      // Redirect or update the UI to indicate the user is logged in
      // window.location.href = '/dashboard'; // or use React Router to redirect

  };

  

  return (
    <Container>
      <div>
        <Title>Welcome to EatWell 👋</Title>
        <Span>Please login with your details here</Span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
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
          text="SignIn"
          onClick={(e)=>{handleSignIn(e)}}
          isLoading={loading}
          isDisabled={buttonDisabled}
        />
      </div>
    </Container>
  );
}

export default SignIn;




























// import React, { useEffect,useState } from "react";
// import {useNavigate} from 'react-router-dom'
// import "./signin.css";

// function SignIn() {

//   const[validUser,setIsValidUser] = useState(true);
//   const navigate = useNavigate();
//   useEffect(()=>{

//     // call the backend sever api that checks whether the user exists or not
//     setIsValidUser(true);
//   },[])

//   function handleLoginClick(){
//     if(validUser){
//       navigate('/recipes');
//     }
//     else{
//       console.log("not valid user")
//     }
//     }
  


//   return (
//     <div class="wrapper">
//       <div class="login">
//         <span id="signIn">Welcome to EatWell</span>
//         <span id="sub">Please login with your details</span>
//         <form>
//           <span>
//             <label>Email Address</label>
//             <input
//               label="Email Address"
//               type="email"
//               placeholder="Enter your email address"
//               required
//             />
//           </span>
//           <span>
//             <label>Password</label>
//             <input
//               label="Password"
//               type="password"
//               placeholder="Enter your password"
//               required
//             />
//           </span>
//           <button type="submit" onClick={()=>{handleLoginClick()}}>Sign In</button>
//         </form>
//         <p>
//           Not have an account?{" "}
//           <a href="http://127.0.0.1:5500/signUp.html">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SignIn;
