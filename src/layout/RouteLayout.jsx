import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <>
    <Navbar />
      <Outlet />
    </>
  )
}

export default RouteLayout
