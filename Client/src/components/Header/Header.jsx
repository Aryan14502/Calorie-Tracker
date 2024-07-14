import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo2.png";
import "./header.css";
// import { useDispatch } from "react-redux";
import { signup } from "../Authentication/SignUp/SignUp.jsx";
import { useAuth0 } from "@auth0/auth0-react";


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


  const handleLoginClick = () => {
    navigate('/signin'); // Navigate to signin page
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
            <a href="#aboutUs">AboutUs</a>
          </p>
          <p>
            <NavLink to="features">Features</NavLink>
          </p>
          <p>
            <a href="#features">Testimonials</a>
          </p>
          <p>
            <a href="#blog">Something</a>
          </p>
        </div>
      </div>

      <div className="navbar-sign">
   
          <button onClick={() => {handleLoginClick()}}>Log In</button>;
    
        {/* <button type="button" onClick={()=>{handleSignUp()}}>Sign up</button> */}
      </div>
    </div>
  );
}

export default Header;