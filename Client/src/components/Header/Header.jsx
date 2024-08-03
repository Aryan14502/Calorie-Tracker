import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo2.png";
import "./header.css";
// import { useDispatch } from "react-redux";
import { signup } from "../Authentication/SignUp/SignUp.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../../contexts/userContext.js";

const NavLogo = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 6px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  //    background-color: #f8d3dc;
  color: ${({ theme }) => theme.black};
`;

const Logo = styled.img`
  background-color: #f8d3dc;
  height: 62px;
`;

function Header({ setUser, setIsSignedIn }) {
  const navigate = useNavigate();
  // const {user,setUser} = useContext(UserContext);
  const { loginWithRedirect } = useAuth0();

  const handleLoginClick = () => {
    navigate("/authentication"); // Navigate to signin page
  };

  const scrollFeatures = () => {
    // console.log(document.querySelector('div'));
    const section = document.querySelector( '#features' );
    // const section = document.querySelector(`#${id}`);
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  
  const scrollAbout = () => {
    // console.log(document.querySelector('div'));
    const section = document.querySelector( '#aboutUs' );
    // const section = document.querySelector(`#${id}`);
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
   
  const scrollTestimonials = () => {
    // console.log(document.querySelector('div'));
    const section = document.querySelector( '#testimonials' );
    // const section = document.querySelector(`#${id}`);
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <NavLogo to="/">
          <Logo src={logo} />
          {/* EatWell */}
        </NavLogo>

        <div className="navbar-links_container">
          <p>
            <NavLink to="/">Home</NavLink>
          </p>
          <p>
            <a   onClick={scrollAbout} >AboutUs</a>
          </p>
          <p>
            <a onClick={scrollFeatures} >Features</a>
          </p>
          <p>
            <a onClick={scrollTestimonials} >Testimonials</a>
          </p>
          <p>
            <a href="#blog">Something</a>
          </p>
        </div>
      </div>

      <div className="navbar-sign">
        <button
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Log In
        </button>
        ;{/* <button onClick={() => {handleLoginClick()}}>Log In</button>; */}



        {/* <button type="button" onClick={()=>{handleSignUp()}}>Sign up</button> */}
      </div>
    </div>
  );
}

export default Header;
