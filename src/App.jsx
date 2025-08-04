import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import Projects from './Components/Projects/Projects'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RouteLayout from './layout/RouteLayout'
import AllProjects from './Components/AllProjects/AllProjects'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    // Main layout with Navbar
    <Route path='' element={<RouteLayout/>}> 
      <Route index element={ // Default route
        <>
          <Hero />
          <AboutMe />
          <Projects />
        </>
      } />
      
      <Route path='projects' element={<AllProjects />} />
    </Route>
  ));

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
