import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../SecNavComponents/Navbar/Navbar'

function User() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default User
