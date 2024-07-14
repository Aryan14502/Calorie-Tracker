import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/SecNavComponents/Navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import {
  Routes,
  Route,
  BrowserRouter,
  Outlet,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Home from "./components/navbarComponents/home/Home.jsx";
import AboutUs from "./components/navbarComponents/aboutUs/AboutUs.jsx";
import Features from "./components/navbarComponents/features/Features.jsx";
import SignIn from "./components/Authentication/SignIn/SignIn.jsx";
import SignUp from "./components/Authentication/SignUp/SignUp.jsx";

import Dashboard from "./components/SecNavComponents/Dashboard/Dashboard.jsx";
import Workouts from "./components/SecNavComponents/Workouts/Workouts.jsx";
import Recipes from "./components/SecNavComponents/Recipes/Recipes.jsx";
import LogIntake from "./components/SecNavComponents/LogIntake/LogIntake.jsx";
import Goals from "./components/SecNavComponents/Goals/Goals.jsx";
import Diet from "./components/SecNavComponents/Diet/Diet.jsx";

// import NextAfterDiet from "./Pages/NextAfterDiet.jsx";
import SelectGoals from "./components/SecNavComponents/Goals/SelectGoals/SelectGoals.jsx";
import Motivating from "./components/SecNavComponents/Goals/Motivating/Motivating.jsx";
import SelectActivityBaseline from "./components/SecNavComponents/Goals/SelectActivityBaseline/SelectActivityBaseline.jsx";
import UserDetails from "./components/SecNavComponents/Goals/UserDetails/UserDetails.jsx";
import UserDetails1 from "./components/SecNavComponents/Goals/UserDetails/UserDetails1.jsx";
import User from "./components/User/User.jsx";
import { Login } from "@mui/icons-material";
import CreatedForRouting from "./components/CreatedForRouting.jsx";
import Authentication from "./components/Authentication/Authentication.jsx";
import FoodIntake from "./components/SecNavComponents/LogIntake/FoodIntake/FoodIntake.jsx";

// import axios from 'axios';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  // overflow-x: hidden;
  // overflow-y: hidden;
  transition: all 0.2s ease;
`;

function MainPage() {
  const [user, setUser] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(true);
  // const navigate = useNavigate();

  // useEffect(() => {

  // const checkUserExists = async () => {
  //   try {
  //     const response = await axios.get('', {
  //       params: {
  //         email: 'user@example.com',
  //       },
  //     });
  //     if (response.data.exists) {
  //       setUser(true);
  //       setIsSignedIn(true);
  //     } else {
  //       setUser(false);
  //       setIsSignedIn(false);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // checkUserExists();

  //   if (user && isSignedIn) {

  //       <Navigate to='/dashboard'/>

  //   }
  // }, [user,isSignedIn ]);

  return (
    <BrowserRouter>
      {user && isSignedIn ? (
        <Container>
          <Navbar />
          <Routes>
            {/* <Route path="/user" exact element={<User />} /> */}
            {/* <Route path="/workouts" exact element={<Workouts />} /> */}
            <Route path="/" exact element={<Dashboard />} />

            <Route path="/recipes" exact element={<Recipes />} />
            <Route path="/logIntake" exact element={<LogIntake />} />
            <Route path="/goals" exact element={<Goals />} />

            <Route path="/selectgoals" exact element={<SelectGoals />} />
            <Route path="/motivating" exact element={<Motivating />} />
            <Route
              path="/selectactivitybaseline"
              exact
              element={<SelectActivityBaseline />}
            />
            <Route path="/userdetails" exact element={<UserDetails />} />
            <Route path="/userdetails1" exact element={<UserDetails1 />} />
            <Route path="/diet" exact element={<Diet />} />
            <Route path="/foodintake" exact element={<FoodIntake />} />

          </Routes>
        </Container>
      ) : user && !isSignedIn ? (
            <Container>
              <Authentication />
            </Container>
      ) : (
        <div>
          <Header />
          <Home />
          <AboutUs />
          <Features />
          {/* <SignIn /> */}
          {/* <SignUp /> */}
          {/* <Routes>
                      <Route path="/" exact element={<Home />} />
                      <Route path="/aboutUs" exact element={<AboutUs />} />
                      <Route path="/features" exact element={<Features />} />
                      <Route path="/signin" exact element={<SignIn />} />
                      <Route path="/signup" exact element={<SignUp />} />
          
          
                    </Routes> */}
          {/* <Outlet /> */}
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default MainPage;

{
  /* <Header /> 
      <Outlet />
      <Footer /> */
}
{
  /* <Navbar /> */
}
