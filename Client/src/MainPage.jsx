import { React, useState, useEffect } from "react";
import styled from "styled-components";

import {
  Routes,
  Route,
  BrowserRouter,
  Outlet,
  Navigate,
  useNavigate,
} from "react-router-dom";

import UserLoggedIn from "./parentPages/UserLoggedIn.jsx";
import UserEnters from "./parentPages/UserEnters.jsx";
import Authentication from "./components/Authentication/Authentication.jsx";
import MainPageWrapper from "./parentPages/MainPageWrapper.js";

import Navbar from "./components/SecNavComponents/Navbar/Navbar.jsx";
import Dashboard from "./components/SecNavComponents/Dashboard/Dashboard.jsx";
import Workouts from "./components/SecNavComponents/Workouts/Workouts.jsx";
import Recipes from "./components/SecNavComponents/Recipes/Recipes.jsx";
import LogIntake from "./components/SecNavComponents/LogIntake/LogIntake.jsx";
import Goals from "./components/SecNavComponents/Goals/Goals.jsx";
import Diet from "./components/SecNavComponents/Diet/Diet.jsx";

// // import NextAfterDiet from "./Pages/NextAfterDiet.jsx";
import SelectGoals from "./components/SecNavComponents/Goals/SelectGoals/SelectGoals.jsx";
import Motivating from "./components/SecNavComponents/Goals/Motivating/Motivating.jsx";
import SelectActivityBaseline from "./components/SecNavComponents/Goals/SelectActivityBaseline/SelectActivityBaseline.jsx";
import UserDetails from "./components/SecNavComponents/Goals/UserDetails/UserDetails.jsx";
import UserDetails1 from "./components/SecNavComponents/Goals/UserDetails/UserDetails1.jsx";
// import User from "../components/User/User.jsx";
// import { Login } from "@mui/icons-material";
// import CreatedForRouting from "../components/CreatedForRouting.jsx";
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
  // const [user, setUser] = useState(false);
  // const [isSignedIn, setIsSignedIn] = useState(false);
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
      {/* <MainPageWrapper> */}
      <Routes>
        <Route path="/" exact element={<UserEnters />} />
        {/* <Route path="" exact element={<UserLoggedIn />} /> */}

        <Route path="/authentication" exact element={<Authentication />}/>

        {/* <Route path="/userloggedin" exact element={<UserLoggedIn />}/> */}
        

        {/* path="/userloggedin" exact */}
          <Route element={<UserLoggedIn />}>                    
            {/* <Route path="user" exact element={<User />} />
                        <Route path="/workouts" exact element={<Workouts />} /> */}
            <Route path="/dashboard" exact element={<Dashboard />} />

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
          </Route>
     
      </Routes>

      {/* </MainPageWrapper> */}
      {/* <Routes>
        <Route path="/authentication" exact element={<Authentication />} />
      </Routes> */}
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

// user && !isSignedIn ? (
//   <Container>
//     <Authentication />
//   </Container>
// ) :
