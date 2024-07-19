import React from "react";
import {
    Routes,
    Route,
    BrowserRouter,
    Outlet,
    Navigate,
    useNavigate,
  } from "react-router-dom";
  import styled from "styled-components";

// import Navbar from "./components/SecNavComponents/Navbar/Navbar.jsx";
import Navbar from "../components/SecNavComponents/Navbar/Navbar.jsx"
import Dashboard from "../components/SecNavComponents/Dashboard/Dashboard.jsx";
import Workouts from "../components/SecNavComponents/Workouts/Workouts.jsx";
import Recipes from "../components/SecNavComponents/Recipes/Recipes.jsx";
import LogIntake from "../components/SecNavComponents/LogIntake/LogIntake.jsx";
import Goals from "../components/SecNavComponents/Goals/Goals.jsx";
import Diet from "../components/SecNavComponents/Diet/Diet.jsx";

// // import NextAfterDiet from "./Pages/NextAfterDiet.jsx";
import SelectGoals from "../components/SecNavComponents/Goals/SelectGoals/SelectGoals.jsx";
import Motivating from "../components/SecNavComponents/Goals/Motivating/Motivating.jsx";
import SelectActivityBaseline from "../components/SecNavComponents/Goals/SelectActivityBaseline/SelectActivityBaseline.jsx";
import UserDetails from "../components/SecNavComponents/Goals/UserDetails/UserDetails.jsx";
import UserDetails1 from "../components/SecNavComponents/Goals/UserDetails/UserDetails1.jsx";
// import User from "../components/User/User.jsx";
// import { Login } from "@mui/icons-material";
// import CreatedForRouting from "../components/CreatedForRouting.jsx";
import FoodIntake from "../components/SecNavComponents/LogIntake/FoodIntake/FoodIntake.jsx";
import { useAuth0,loginWithPopup  } from "@auth0/auth0-react";
// import { loginWithRedirect } from '@auth0/auth0-react';

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
function UserLoggedIn() {

    const isAuthenticated =true;
    // const {isAuthenticated ,loginWithRedirect} = useAuth0();
    // const { loginWithRedirect } = useAuth0();
    const {loginWithPopup } = useAuth0();

    // <BrowserRouter>
    //   <Container>
        //  const isAuthenticated =
      
        return isAuthenticated ? (
            <Container>
              <Navbar/>
              <Outlet /> 
            </Container>)
            :
            
            (
              // loginWithRedirect()
              loginWithPopup({
                returnTo: window.location.origin,
              })

     
            
            // <Navigate to='/' />
          );
        <Outlet/>
    //   </Container>
    // </BrowserRouter>
 
}

export default UserLoggedIn;
