import React from "react";


// import Header from "./components/Header/Header.jsx";
import Header from "../components/Header/Header.jsx"

import Footer from "../components/footer/Footer.jsx";
// import Home from "./components/navbarComponents/home/Home.jsx";
import Home from "../components/navbarComponents/home/Home.jsx"
// import AboutUs from "./components/navbarComponents/aboutUs/AboutUs.jsx";
import AboutUs from "../components/navbarComponents/aboutUs/AboutUs.jsx";
import Features from "../components/navbarComponents/features/Features.jsx";


function UserEnters() {
  return (
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
  );
}

export default UserEnters;
