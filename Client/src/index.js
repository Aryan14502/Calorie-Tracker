import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import MainPage from './MainPage.jsx'
import Home from './components/navbarComponents/home/Home.jsx'
import AboutUs from './components/navbarComponents/aboutUs/AboutUs.jsx'
import Features from './components/navbarComponents/features/Features.jsx';
import SignIn from './components/Authentication/SignIn/SignIn.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(

//   <Route path='/' element={<MainPage />}>


//     <Route path='' element={<Home />} />
//     <Route path='aboutUs' element={<AboutUs />} />
//     <Route path='features' element={<Features />} />
//     <Route path='signin' element={<SignIn />} />


//   </Route>

//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-lhh2s24sw2nyrvxq.us.auth0.com"
    clientId="FRaUjE97nAyJf9xn5LfzhHHnkfz7He2k"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    {/* <RouterProvider router={router} /> */}
    <MainPage />
  </Auth0Provider>

);


